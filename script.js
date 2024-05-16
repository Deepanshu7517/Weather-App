// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=463805fb11f8906e41e68af42c04d0b1
// Clouds , Clear , Rain , Drizzle , Mist
async function getINFO() {    
    const UserInput = document.getElementById("UserInput").value.toLowerCase()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${UserInput}&appid=463805fb11f8906e41e68af42c04d0b1`);
    const JSONresponse = await response.json()
    var imageSrc = "svg/weather/Clear.svg"
    if (JSONresponse.weather[0].main == "Clear") {    
        imageSrc = "svg/weather/Clear.svg"
    }else if(JSONresponse.weather[0].main == "Clouds"){
        imageSrc = "svg/weather/Clouds.svg"
    }else if(JSONresponse.weather[0].main == "Rain"){
        imageSrc = "svg/weather/Rain.svg"
    }else if(JSONresponse.weather[0].main == "Drizzle"){
        imageSrc = "svg/weather/Drizzle.svg"
    }else if(JSONresponse.weather[0].main == "Mist"){
        imageSrc = "svg/weather/Mist.svg"
    }
    const celcius = Math.floor(JSONresponse.main.temp - 273.15)
    const Name = JSONresponse.name
    const humidity = Math.floor(JSONresponse.main.humidity)
    const windSpeed = Math.floor(JSONresponse.wind.speed)
    let weatherImage = document.getElementById("weather");
    weatherImage.src = imageSrc;
    let temperature = document.getElementById("Temperature");
    temperature.innerHTML = celcius;
    let CityName = document.getElementById("CityName"); 
    CityName.innerHTML = Name
    let cityHumidity = document.getElementById("humidity");
    cityHumidity.innerHTML = humidity
    let speed = document.getElementById("speed");
    speed.innerHTML =  windSpeed
}
getINFO()