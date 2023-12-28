console.log('Hello, TypeScript!');

function createElement(tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var propEntries = Object.entries(props);
    var propString = '';
    for (var _a = 0, propEntries_1 = propEntries; _a < propEntries_1.length; _a++) {
        var _b = propEntries_1[_a], key = _b[0], value = _b[1];
        propString += "".concat(key, "=\"").concat(value, "\" ");
    }
    return "<".concat(tag, " ").concat(propString, ">").concat(children.join(''), "</").concat(tag, ">");
}
;
var PokemonList = [
    { name: '피카츄', id: 1 },
    { name: '라이츄', id: 2 },
    { name: '파이리', id: 3 },
    { name: '꼬부기', id: 4 },
    { name: '버터플', id: 5 },
];
var battles = 0;
function renderPokemons(pokemons) {
    var pokemonButtonsHtml = '';
    for (var _i = 0, pokemons_1 = pokemons; _i < pokemons_1.length; _i++) {
        var pokemon = pokemons_1[_i];
        pokemonButtonsHtml += createElement('button', { id: "pokemon-".concat(pokemon.id), 'data-pokemon': pokemon.name }, "".concat(pokemon.name, "\uC640 \uC804\uD22C\uD558\uAE30"));
    }
    return createElement('div', {}, "\uBC30\uD2C0 \uD69F\uC218 : ".concat(battles), pokemonButtonsHtml);
}
function setupEventListeners(rootId, pokemons) {
    var rootElement = document.getElementById(rootId);
    if (rootElement === null) {
        return;
    }
    var _loop_1 = function (pokemon) {
        var button = document.getElementById("pokemon-".concat(pokemon.id));
        if (button === null) {
            return "continue";
        }
        button.addEventListener('click', function () {
            handleBattle(pokemon.name);
        });
    };
    for (var _i = 0, pokemons_2 = pokemons; _i < pokemons_2.length; _i++) {
        var pokemon = pokemons_2[_i];
        _loop_1(pokemon);
    }
}
function handleBattle(pokemonName) {
    console.log("".concat(pokemonName, "\uC640 \uC804\uD22C\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4."));
    battles++;
    updateUI("root");
}
function updateUI(rootId) {
    var root = document.getElementById(rootId);
    if (root === null) {
        return;
    }
    root.innerHTML = renderPokemons(PokemonList);
    setupEventListeners(rootId, PokemonList);
}
// 초기 렌더링 및 이벤트 리스터 설정
updateUI('root');
