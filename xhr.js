
//fetch country details

var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(xhr.readyState==4&& xhr.status==200){
        //data is available->Business Logic
        var data=JSON.parse(xhr.responseText);
        console.log(data);//displayed data in console
        //Apply a looping logic
        //loop in response to above data and print it using template literal
        for(var i=0;i<data.length;i++){
            console.log(
                    `
                    Country Name: ${data[i].name.common}
                    Capital: ${data[i].capital}
                    Region: ${data[i].region}
                    Language: ${data[i].languages}
                    Population: ${data[i].population}           
                    Country Flag: ${data[i].flag}`
                    
            );
        }
    }
}

//Open a method 
xhr.open("GET","https://restcountries.com/v3.1/name/india");
xhr.send();

var xhr=new XMLHttpRequest();


xhr.open("GET","https://restcountries.com/v3.1/name/india");

xhr.onload=function(){
    if(xhr.status===200){
        const all=JSON.parse(xhr.responseText);
        // console.log(all);
       
        all.forEach(country=>{
             console.log(`Country Name:${country.name.common} 
             Capita:${country.capital} 
             Region:${country.region} 
             Population:${country.population} 
             Flag:${country.flag}`);

             const lang = country.languages;
             console.log("languages:");
             for (let [key, value] of Object.entries(lang)) {
                console.log(value);
             }
        })

    }else{
        console.error('Error: ', xhr.status);
    }
}

//Open a method 
xhr.send();

