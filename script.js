// JavaScript code
function carregarPokemon(urlId, nameId, idId, expId, imgId) {
    var valorPK = document.getElementById(urlId).value;
    var url = "https://pokeapi.co/api/v2/pokemon/" + valorPK + "/";
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            document.getElementById(nameId).innerHTML = data['name'];
            document.getElementById(idId).innerHTML = data['id'];
            document.getElementById(expId).innerHTML = data['base_experience'];
            let imgFont = data['sprites']['front_default'];
            document.getElementById(imgId).setAttribute('src', imgFont);
        })
        .catch((error) => {
            console.error(error);
        });
}

function carregarPokemon1() {
    carregarPokemon('campoPK', 'nomePK', 'idPK', 'experienciaPK', 'imgPK');
}

function carregarPokemon2() {
    carregarPokemon('campoPK2', 'nomePK2', 'idPK2', 'experienciaPK2', 'imgPK2');
}

function compararExperiencias() {
    var expPK1 = parseInt(document.getElementById('experienciaPK').innerHTML);
    var expPK2 = parseInt(document.getElementById('experienciaPK2').innerHTML);

    if (expPK1 > expPK2) {
        document.getElementById('resultadoComparacao').innerHTML = "O Pokémon 1 ganho esta batalha.";
    } else if (expPK1 < expPK2) {
        document.getElementById('resultadoComparacao').innerHTML = "O Pokémon 2 ganho esta batalha.";
    } else {
        document.getElementById('resultadoComparacao').innerHTML = "Empataram.";
    }
}

