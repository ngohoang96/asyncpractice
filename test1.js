const request = require('request');


function getTempByCityName(cityName,callbackf){

    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    request(URL +cityName, (error,response,body)=>{
        if(error) return callbackf(error,null);
        const obj = JSON.parse(body);
        if(!obj.main) return callbackf(new Error('cannot find city'),null);      
        callbackf(null,obj.main.temp);
    })
    
}

// getTempByCityName('HaNoi');

getTempByCityName('Tokyo',(error,result)=>{
    if(error) return console.log(error);
    console.log(result);
})