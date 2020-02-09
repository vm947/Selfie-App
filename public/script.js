
const geoLocateButton = document.getElementById("geolocate");
const moodButton = document.getElementById("moodButton");

const geoLocateFire = () =>{ 
    if('geolocation' in navigator){
        console.log("Geolocation is available");
        navigator.geolocation.getCurrentPosition(async position =>{
            console.log(position);
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            document.getElementById("latitude").textContent = lat;
            document.getElementById("longitude").textContent = long;
            const mood = document.getElementById("moods").value;
            data = {lat, long, mood};
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };

        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
        });
        
    } else {
        console.log("Geolocation is not available");
    };
};

/*const veggieFire = async(event) =>{
    const vegetable = document.getElementById("vegetable").value;
    const data = {vegetable};
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      const response = await fetch('/vegetables', options);
      const json = await response.json();
      console.log(json); 

}; */

//geoLocateButton.addEventListener("click", geoLocateFire);
//veggieButton.addEventListener("click", veggieFire);
moodButton.addEventListener("click", geoLocateFire);


