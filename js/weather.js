const API_KEY="6217549ff5259121d15f9fda381549f4";
const COORDS='coords';

const weatherInfo=document.querySelector("#weatherInfo");
const weatherIconImg=document.querySelector("#weatherIcon");

function init(){
    askForCoords();
}

function  askForCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function handleSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;

    const coordsObj={
        latitude,
        longitude
    };

    getWeather(latitude,longitude);
}

function handleError(){
    weatherInfo.innerText("날씨 정보를 불러오는데 실패했습니다.");
}

function getWeather(lat, lon){
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${API_KEY}`;
    fetch(url).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        const weatherDescription=json.weather[0].description;
        const weatherIcon=json.weather[0].icon;
        const weatherIconAdrs=`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        weatherInfo.innerText=`${temperature.toFixed(1)} °C / @${place} / ${weatherDescription}`;
        weatherIconImg.setAttribute('src', weatherIconAdrs);
    })

    .catch((error)=>console.log("error:",error));
}

init();