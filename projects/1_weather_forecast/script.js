const searchButton = document.querySelector('.search_button');
const searchBarText = document.querySelector('.search_bar_text')
const input = document.querySelector('.input_search_box');
const box = document.querySelector('.box');
const box_err = document.querySelector('.box_err');
let a = false;

searchButton.addEventListener('click',function(event){
    searchBarText.classList.toggle('active');
    setTimeout(()=>{
       // a = true;
    }, 0);
});
// }, {once:true});

 let apiKey = "fd1cdbcd855978406b13dd2441b706a8";

 let city = "Moscow";
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

const temp = document.getElementById('temp_span');
const humidity = document.getElementById('humidity_span');
const wind = document.getElementById('wind_span');
const pic = document.getElementById('pic_span');
const feel = document.querySelector('.feel_span');
const pic_text = document.getElementById('description_span');
const city_name = document.getElementById('city_name');

let city_;

    searchBarText.addEventListener('keyup', (event)=>{
        if (event.code === 'Enter'){
            input.innerHTML= searchBarText.value;
            city = input.value;
            url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
           fetch(url)
            .then(data => data.json())
            .then(data2 => {
                box_err.classList.remove('err');
                box.classList.toggle('active');
                city_name.innerHTML = `Погода в городе ${data2.name}`;
                city_= input.value;
                feel.innerHTML = `${data2.main.feels_like}°`
                wind.innerHTML = `${data2.wind.speed} m/sec`;
                 temp.innerHTML = ` ${data2.main.temp}°`;
                 humidity.innerHTML = ` ${data2.main.humidity}%`;
                pic_text.innerHTML = `${data2.weather[0].description}`;
                let iconcode  = data2.weather[0].icon;
                pic.src = "http://openweathermap.org/img/w/" + iconcode + ".png";
                }).catch(err=>{
                    box.classList.remove('active');
                    box_err.classList.toggle('err');
                  box_err.innerHTML=`Упс...не удалось найти город "${city_}". Попробуйте еще раз`;
                })
            
           
        }
    })




//fd1cdbcd855978406b13dd2441b706a8

//адаптация. скорость. ошибки. (цвета и шрифты). *анимация
//+++ ожидается дождь или нет!!!!
//добавить блок: погода в + город