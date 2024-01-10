
// MakeReact() 함수는 useState() 훅의 모의 함수입니다.
const makeReact = function(){
  // 전역 상태 저장소
  // 실제  react에서는 각 컴포넌트가 자신의 상태를 관리
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


// MakeComponent() 함수는 간략화된 React 컴포넌트입니다.
function MakeComponent(){
  const useState = makeReact();
  const [state, setState] = useState(true);

  return (
    <>
      <div>{state.toString()}</div>
      <button onClick={() => setState(!state)}>click 토글 방식!</button>
    </>
  )
}

console.log(MakeComponent()); // [true, ƒ];