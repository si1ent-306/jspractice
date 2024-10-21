//https://www.youtube.com/watch?v=37vxWr0WgQk
//Bro Code: How to FETCH data from an API using JavaScript ↩️

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
        console.log(data);

        //fetch the elements
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonImage");
        const displayName = document.getElementById("pokemonDisplayName");
        const typesList  = document.getElementById("pokemonTypes");
        const height = document.getElementById("pokemonHeight");
        const weight = document.getElementById("pokemonWeight");
        const id = document.getElementById('pokemonID');

        //assign the pokemons info
        displayName.textContent = data.name.toUpperCase();
        imgElement.src = pokemonSprite;
        id.innerText = 'Pokemon ID: ' + data.id;
        //Clears the list
        typesList.innerHTML = '';
        //fetches all of the types of the pokemon
        data.types.forEach(function (type){
            let typeli = document.createElement('li');
            typeli.innerText = type['type']['name'];
            typeli.classList.add(type['type']['name'].toLowerCase()); // Add the type name as a class
            typesList.append(typeli);
        })

        height.innerText = data.height * 10 + 'cm';
        weight.innerText = data.weight + 'kg';

        //displaying the info
        imgElement.style.display = "block";
        displayName.style.display = "block";
        typesList.style.display = "block";
        height.style.display = "block";
        weight.style.display = "block";
        id.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

