const rxjs = require('rxjs');

function getApi(){
    fetch('https://pokeapi.co/api/v2/pokemon/4')
        .then((response) => response.json())
        .then((data) => console.log(data.name));
};

function main(){
    console.log('Start');

    let fetchPokemonData$ = new rxjs.Observable(subscriber => {
        setTimeout(() => {
            getApi();
        }, 1000);        
    })
    
    fetchPokemonData$.subscribe(
        (datos)=>{
            console.log(datos)
        }
    );

    console.log('Finish');
}

main();