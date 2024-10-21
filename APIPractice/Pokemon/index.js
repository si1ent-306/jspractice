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


async function fetchData() {
    try {
        // Get the user input and convert to lowercase
        const pokemonName = $("#pokemonName").val().toLowerCase();

        // Fetch Pokemon data from the API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Check if the response is valid
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

        // Extract elements using jQuery
        const $pokemonCard = $('#pokemonCard');
        const $imgElement = $("#pokemonImage");
        const $displayName = $("#pokemonDisplayName");
        const $typesList = $("#pokemonTypes");
        const $height = $("#pokemonHeight");
        const $weight = $("#pokemonWeight");
        const $id = $("#pokemonID");
        const $abilities = $("#pokemonAbilities");

        // Assign the Pokemon's info
        $displayName.text(data.name.toUpperCase());
        $imgElement.attr("src", data.sprites.front_default); // Set the image source
        $id.text('Pokemon ID: ' + data.id);

        // Clear existing list items
        $typesList.empty().text('Types\n');
        $abilities.empty().text('Abilities\n');

        // Append types to the list
        $.each(data.types, function (index, type) {
            $("<li>")
                .text(type.type.name)
                .addClass(type.type.name.toLowerCase()) // Add the type name as a class
                .appendTo($typesList);
        });

        // Set height and weight
        $height.text('Height: ' +data.height * 10 + 'cm');
        $weight.text('Weight: ' + data.weight + 'kg');

        // Append abilities to the list
        $.each(data.abilities, function (index, ability) {
            $("<li>").text(ability.ability.name).appendTo($abilities);
        });

        // Display the fetched information
        $imgElement.show();
        $displayName.show();
        $typesList.show();
        $height.show();
        $weight.show();
        $id.show();
        $abilities.show();
        $pokemonCard.show();

    } catch (error) {
        console.error(error);
    }
}

// Example: Call the function when a button is clicked
$("#fetchPokemon").click(fetchData);