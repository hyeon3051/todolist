const weather = document.querySelector(".weather")

const CORDS = 'coords';
const API_KEY = '735943499f10c5adaa2bdcceeb2a7a04';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(
        function (response) {
            return response.json();
        }
    ).then(function (json) {
        console.log(json);
        const temperature = json.main.temp;
        const placeName = json.name;
        weather.innerText = `${temperature} @${placeName}`;
    })
}

function saveCords(coordsObj) {
    localStorage.setItem(CORDS, JSON.stringify(coordsObj));
}

function handleGeoSucess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    }
    saveCords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("can`t access geo location");
}

function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function LoadCoords() {
    const loadedCords = localStorage.getItem(CORDS);
    if (loadedCords === null) {
        askForCords();
    } else {
        const ParseCoords = JSON.parse(loadedCords);
        const longitude = ParseCoords.longitude;
        const latitude = ParseCoords.latitude;
        getWeather(latitude, longitude);
    }
}


function init() {
    LoadCoords();
}
init();