let input = document.querySelector('input');
let search = document.querySelector('.span');
const wind = document.querySelector('#wind');
const temp = document.querySelector('#temp');
const city= document.querySelector('#city');
const display = document.querySelector('.display');

const getWeatherData = async (api,method) => {
    try{
        const promiseObj = await fetch(api,{
        method: method,
        });
        const jsonData = await promiseObj.json();
        return jsonData;
    }catch(err){
        console.log(err);
    }
}
search.addEventListener('click', () => {
    if(input.value.trim().length !== 0){
        city.textContent = input.value;
        display.style.display = 'flex'
        const apiUID = 'dbdeec088c60eb79df73b0d031491e99';
        const apiKey = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='+input.value+'&appid='+apiUID;
        getWeatherData(apiKey, 'GET')
        .then((response) => {
            // console.log(response);
            temp.textContent = Math.round(response.main.temp)+' Cel';
            wind.textContent = Math.round(response.wind.speed)+' Km/hr';
        })
    }
})