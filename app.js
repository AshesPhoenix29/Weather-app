const input = document.getElementById('cityInput');
        const button = document.getElementById('searchButton');
        const place = document.getElementById('location');
        const temp = document.getElementById('temp');
        const t = document.getElementById('time');
        const weatherInfo = document.getElementById('weatherInfo');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const weatherBg = document.querySelector('.weather-bg');

        // Create stars
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            weatherBg.appendChild(star);
        }

        // Create rain effect
        function createRain() {
            const existingRain = document.querySelectorAll('.rain');
            existingRain.forEach(drop => drop.remove());

            for (let i = 0; i < 30; i++) {
                const rain = document.createElement('div');
                rain.className = 'rain';
                rain.style.left = Math.random() * 100 + '%';
                rain.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                rain.style.animationDelay = Math.random() * 2 + 's';
                weatherBg.appendChild(rain);
            }
        }

        async function getdata(cityName) {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6b9c747b135f41b4b5e195122252812&q=${cityName}&aqi=yes`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            return await response.json();
        }

        async function searchWeather() {
            const value = input.value.trim();
            
            if (!value) {
                showError('Please enter a city name');
                return;
            }

            loading.classList.add('show');
            weatherInfo.classList.remove('show');
            error.classList.remove('show');

            try {
                const ans = await getdata(value);
                console.log(ans);
                
                place.innerHTML = `${ans.location.name}, ${ans.location.country}`;
                temp.innerHTML = `${ans.current.temp_c}`;
                t.innerHTML = `${ans.location.localtime}`;
                
                // Add rain effect for rainy weather
                const condition = ans.current.condition.text.toLowerCase();
                if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('shower')) {
                    createRain();
                }
                
                loading.classList.remove('show');
                weatherInfo.classList.add('show');
            } catch (err) {
                loading.classList.remove('show');
                showError('City not found. Please try again!');
            }
        }

        function showError(message) {
            error.textContent = message;
            error.classList.add('show');
            setTimeout(() => {
                error.classList.remove('show');
            }, 3000);
        }

        button.addEventListener('click', searchWeather);

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchWeather();
            }
        });