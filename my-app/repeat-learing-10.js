function pokemon(name, type){
  let privateName = name;
  let privateType = type;

  return {
    getName: () => {return privateName;},
    getType: () => {return privateType;},
    setType: (newType) => {privateType = newType;}
  };
}

const pikachu = pokemon('Pikachu', 'Electric');
console.log(pikachu.getName()); // Pikachu
console.log(pikachu.getType()); // Electric
pikachu.setType('Fire');
console.log(pikachu.getType()); // Fire
