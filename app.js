const input = document.getElementById('cityInput');
        const button = document.getElementById('searchButton');
        const place = document.getElementById('location');
        const temp = document.getElementById('temp');
        const t = document.getElementById('time');
        const weatherInfo = document.getElementById('weatherInfo');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');

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