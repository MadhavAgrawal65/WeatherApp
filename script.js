const fetchData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '70aa2b8498msha9dba139d28d50fp1094d6jsnca468183acee',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = async (city) => {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

        const cityName = document.getElementById("cityName");
        const cloud_pct = document.getElementById("cloud_pct");
        const temp = document.getElementById("temp");
        const feels_like = document.getElementById("feels_like");
        const humidity = document.getElementById("humidity");
        const min_temp = document.getElementById("min_temp");
        const max_temp = document.getElementById("max_temp");
        const wind_speed = document.getElementById("wind_speed");
        const wind_degrees = document.getElementById("wind_degrees");
        const sunrise = document.getElementById("sunrise");
        const sunset = document.getElementById("sunset");

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            cityName.innerHTML = city;
            // cloud_pct.innerHTML = result.cloud_pct;
            temp.innerHTML = result.temp;
            feels_like.innerHTML = result.feels_like;
            humidity.innerHTML = result.humidity;
            min_temp.innerHTML = result.min_temp;
            max_temp.innerHTML = result.max_temp;
            wind_speed.innerHTML = result.wind_speed;
            wind_degrees.innerHTML = result.wind_degrees;
            sunrise.innerHTML = result.sunrise;
            sunset.innerHTML = result.sunset;
        } catch (error) {
            console.error(error);
        }
    };

    const weatherForm = document.getElementById("weatherForm");
    weatherForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const cityInput = document.getElementById("cityInput").value;
        await getWeather(cityInput);
    });

    // Call getWeather function with a default city
    getWeather("Delhi"); // or any default city you want
};

// Call the asynchronous function
fetchData();
