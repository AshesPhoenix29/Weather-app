# Weather Application

A professional weather application built with modern web technologies. This project demonstrates best practices in front-end development, including responsive design, asynchronous programming, and API integration.

## Overview

This application enables users to retrieve real-time weather information for any location by leveraging the WeatherAPI service. The interface provides current temperature, location details, and local time information through an intuitive user interface.

## Technology Stack

### HTML5 (index.html)
- **Purpose**: Defines the semantic structure and content hierarchy of the application interface.
- **Implementation**: Organizes the DOM with semantic elements including search input controls, weather data containers, loading states, and error messaging components.
- **Rationale**: HTML provides the foundational markup necessary for accessible and semantic web content, ensuring proper content structure and search engine optimization.

### CSS3 (style.css)
- **Purpose**: Implements advanced styling and visual effects using modern CSS techniques.
- **Implementation**: Employs glassmorphism design patterns with CSS gradients, keyframe animations, flexbox layout system, and CSS media queries for responsive design across multiple screen sizes.
- **Rationale**: Delivers a polished, contemporary user interface while maintaining optimal performance through hardware-accelerated CSS animations. The responsive approach ensures compatibility with mobile and desktop devices.

### JavaScript (Vanilla) (app.js)
- **Purpose**: Provides application logic and interactivity without external frameworks.
- **Implementation**: Manages user event handling (click and keyboard inputs), executes asynchronous API requests using the Fetch API, and implements DOM manipulation for dynamic content updates. Includes error handling and loading state management.
- **Rationale**: Enables real-time data synchronization with external services while maintaining separation of concerns. Vanilla JavaScript approach minimizes dependencies and improves code transparency.

## Functional Workflow

1. User inputs a city name into the search interface
2. Search activation occurs via button click or Enter key submission
3. Asynchronous HTTP request is dispatched to WeatherAPI
4. API response containing weather data is parsed from JSON format
5. DOM elements are dynamically updated with location, temperature, and time information
6. User feedback is provided through loading indicators and error notifications

## External API Integration

**WeatherAPI** (api.weatherapi.com)
- Delivers real-time meteorological data and environmental quality metrics
- Endpoint: Current weather with air quality index information
- Response Format: Structured JSON with nested location and weather objects

## Files
- `index.html`: The main HTML file
- `style.css`: Stylesheet for the app
- `app.js`: JavaScript functionality
