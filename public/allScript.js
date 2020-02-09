const resultButton = document.getElementById("button");

const getData = async () => {
    const response = await fetch('api');
    const data = await response.json();

    data.forEach(item =>{

        const mood = document.getElementById("mood");
        const geo = document.getElementById("geo");
        const date = document.getElementById("date");

        const root = document.createElement("div");
        const moods = document.createElement("div");
        const geos = document.createElement("div");
        const dates = document.createElement("div");
        

        moods.textContent = `Your mood is: ${item.mood}`;
        geos.textContent = `Your longitude is: ${item.long} and your latitude is ${item.lat}`;
        const dateString = new Date(item.timestamp).toLocaleString();
        dates.textContent = `Your local time was: ${dateString}`;

       //root.append(mood, geo, date);
        //document.body.append(root); 

        /*moods.textContent = `Your mood is: ${item.mood}`;
        getComputedStyle.textContent = `Your longitude is: ${item.long} and your latitude is ${item.lat}`;
        const dateString = new Date(item.timestamp).toLocaleString();
        dates.textContent = `Your local time was: ${dateString}`;
        console.log(item); */

        mood.append(moods);
        geo.append(geos);
        date.append(dates);
    });

  
};

resultButton.addEventListener("click", getData);
