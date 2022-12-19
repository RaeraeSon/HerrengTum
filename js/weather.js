const API_KEY="6217549ff5259121d15f9fda381549f4";
const COORDS='coords';
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(url)
    .then((respone)=>respone.json())
    .then((json) =>
        {   
            const description=json.weather[0].description;
            const icon=json.weather[0].icon;
            const temperature=json.main.temp;
            const currentLocation=json.name;
            const humidity=json.main.humidity;
            
            const weatherLocation=document.querySelector("#weather span:first-child");
            weatherLocation.innerText=`${currentLocation}`;
            const weatherTemperature=document.querySelector("#weather span:nth-child(2)");
            weatherTemperature.innerText=`${temperature.toFixed(1)}℃`;
            const weatherDescription=document.querySelector("#weather span:last-child");
            weatherDescription.innerText=`${description}`;
            console.log(icon);
    

            /*const weather=document.querySelector("#weather span:first-child");
            const city=document.querySelector("#weather span:last-child");
            city.innerText=data.name;
            weather.innerText=`${data.weather[0].main} / ${data.main.temp.toFixed(1)}`;*/
            
            
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);