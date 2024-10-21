/*   fetch = Function used for making HTTP requests to fetch resources.*/
/*   (JSON style data, images, files)*/
/*    Simplifies asynchronous data fetching in JavaScript and*/
/*    used for interacting with APIs to retrieve and send*/
/*    data asynchronously over the web.*/
/*    fetch(url, {options})*/


// fetch("https://pokeapi.co/api/v2/pokemon/tepig")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not find pokemon");
//         }
//         return response.json();
//     })
//     .then(data => {console.log(data.name)})
//     .catch(error => console.log(error));


async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonImage");
        const displayName = document.getElementById("pokemonDisplayName");

        displayName.textContent = data.name.toUpperCase();
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        displayName.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

