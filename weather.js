let weather={
   apiKey:"ae9df646fc407af455da98e072f73dc4",
   fetchWeather: function(city){
       fetch("http://api.openweathermap.org/data/2.5/weather?q="  
       +city 
       + "&units=metric&appid="
       + this.apiKey
       ).then((response)=>response.json()
       ).then((data)=>this.displayWeather(data)
       ).catch(error => {
        
       var message = 'not found';
       alert(message); 
       /*const errors = document.getElementById('error');
       errors.style.display = '';
       errors.innerHTML = `<p>${error.message}</p>`;*/
    })
   },
   displayWeather: function(data){
       const {name} = data;
       const {icon, description} = data.weather[0];
       const {temp, humidity} = data.main;
       const {speed} = data.wind;
       console.log(name,icon,description,temp,humidity,speed);
       document.querySelector('.city').innerHTML ="Weather in"+ name;
       document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+icon +".png";
       document.querySelector('.description').innerHTML = description;
       document.querySelector('.temp').innerHTML = temp + '°';
       document.querySelector('.huminity').innerHTML = 'humidity: '+humidity + '%';
       document.querySelector('.wind').innerHTML = 'wind speed :' + speed + 'Km';
       document.querySelector('.weather').classList.remove('loading');

       
  
       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')";
   },search: function(){
     this.fetchWeather(document.querySelector('.search-box').value);
     
       
   }


}
//weather.fetchWeather('Tokyo');
document.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        console.log('hi')
       
        weather.search();
    }
});
document.querySelector('.search-button').addEventListener('click',function(){
    weather.search();
    console.log('hi')
});

    
    

