
const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=41.716667&longitude=44.783333&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m";


fetch(weatherURL, {method: "GET"})
    .then((data) => {
        return data.json();
    })
    .then((info) => {
        console.log(info);
        latAndLong(info.latitude, info.longitude);
        dayOrNight(info.current.is_day);
        tempImage(info.current.temperature_2m);
        temperature(info.current.temperature_2m);
        windSpeed(info.current.wind_speed_10m, info.current_units.wind_speed_10m);
    })


function latAndLong (lat, long) {
    const latitude = document.getElementById("latitude")
    latitude.textContent = `Latitude : ${lat}`;

    const longitude = document.getElementById("longitude");
    longitude.textContent = `Longitude : ${long}`;
}


function dayOrNight (day) {
    const dayNightImg = document.getElementById("day-night");

    if(day === 1) {
        dayNightImg.src = "icons/dayIcon.svg";
    }else{
        dayNightImg.src = "icons/nightIcon.svg"
    }
}


function tempImage (temp) {
    const tempImage = document.getElementById("weather-image");

    if(temp < 0) {
        tempImage.src = "icons/snowIcon.svg";
    }else if(temp > 0 && temp <= 10) {
        tempImage.src = "icons/rainIcon.svg";
    }else if(temp > 10 && temp <= 30){
        tempImage.src = "icons/cloudyIcon.svg";
    }else{
        tempImage.src = "icons/hotIcon.svg";
    }   
}


function temperature (temp) {
    const celsius = document.getElementById("temperature");
    celsius.textContent = `${temp}º`;

    const farenheit = document.getElementById("fahrenheit")
    farenheit.textContent = `°F ${Math.round(temp * 1.8 +32)}`;
}

function windSpeed (wind, measure) {
    const windText = document.getElementById("wind-speed");
    windText.textContent = `${wind} ${measure}`;
}