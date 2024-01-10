
const makeReact = function(){
  const global = {};
  let index = 0;

  function useState(initialValue){
    if(global.states === undefined){
      global.states = [];
    }

    const currentState = global.states[index] || initialValue;
    global.states[index] = currentState;

    const setState = (
      function (){
        return function(value){
          global.states[currentIndex] = value;
        }
      })();
    
    index++;
    return [currentState, setState];
  };
  return useState;
}