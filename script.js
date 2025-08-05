const apiKey ="b9324f174e48826912dc1a6afa8f7f07";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//select elements
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const card=document.querySelector(".card");

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
        let data =await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".description").innerHTML=data.weather[0].description;
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

        // update weather conditions acc to main data(weather type)
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
            card.style.background="linear-gradient(135deg, #d7d2cc, #304352)";
            
        }
        else if(data.weather[0].main=="Clear"){w
            weatherIcon.src="images/clear.png";
            card.style.background="linear-gradient(135deg, #89f7fe, #66a6ff)";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
            card.style.background="linear-gradient(135deg, #667db6, #0082c8, #0082c8, #667db6)";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
            card.style.background="linear-gradient(135deg, #89f7fe, #66a6ff)";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
            card.style.background="linear-gradient(135deg, #3e5151, #decba4)"
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }


}

searchBox.addEventListener("keydown", (event)=>{
    if(event.key==="Enter"){
        checkWeather(searchBox.value);
    }
})

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
