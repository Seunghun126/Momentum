const API_KEY = "d3697efb5bb8734404e5112a84fb1da5";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `/ ${data.weather[0].main} / ${data.main.temp}°C`;

    });
}

function onGeoError(){
    alert("Can`t find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);