
// MakeReact() 함수는 useState() 훅의 모의 함수입니다.
const makeReact = function(){
  // 전역 상태 저장소
  // 실제  react에서는 각 컴포넌트가 자신의 상태를 관리
  const global = {};
  let index = 0;

  function useState(initialValue){
    // 상태 배열이 아직 초기화되지 않았으면 초기화
    // 이 배열은 모든 상태 값을 저장합니다.
    if(global.states === undefined){
      global.states = [];
    }

    // 현재 상태를 가져오거나 초기 상태를 설정
    // 여기서는 상태가 배열에 저장되며, 순서에 따라 관리된다.
    // global.states[index] 값이 없으면 initialState를 사용하는 취지의 or 연산자 사용
    const currentState = global.states[index] || initialValue;
    global.states[index] = currentState;

    // setState 함수는 클로저를 사용하여 현재 상태의 인덱스를 기억합니다.
    // 상태를 업데이트하려면 이 함수를 호출합니다.
    const setState = ( function (){ 
      let currentIndex = index; // currentIndex도 클러저이다.
      return function(value){
        global.states[currentIndex] = value;
      }
    })();
    // (function(){})()는 즉시 실행 함수 IIFE(Immediately Invoked Function Expression)이다.
    // 선언과 동시에 실행되는 함수로, 한번만 실행되고 사라진다.
    // 매번 메모리에 남아있는 함수 선언과 다르다.
    // 특수한 경우에만 사용하는 것이 좋다.

    // ! 메모리 관리 : 한번만 사용하니까 임시 작업은 사용하면 유리
    // ! 정보 은닉 : 선언된 변수들이 외부에서 접근할 수 없게 한다. 캡슐화.
    // ! 변수 충돌 방지 : 외부에서 접근 금지 
      // ? 왜 외부에선 접근이 불가능할끼? 
      // * 평가 단계와 실행 단계가 분리되어 있기 때문에
      // * 평가 단계에서는 함수 선언문을 만나면 함수 객체를 생성하고, 실행 단계에서는 함수를 실행한다.
      // * 함수 선언문으로 만든 함수는 런타임 이전에 함수 객체가 생성된다.
      // * 함수 선언문으로 만든 함수는 코드의 어디에서든지 호출할 수 있다.
        // ? 소괄호를 쓰는 이유는 뭘까?
        // * 소괄호를 쓰지 않으면 함수 선언문으로 인식하고, 함수 선언문은 이름을 생략할 수 없다.
          // ? 소괄호를 쓴다고 함수 선언문으로 인식하는 이유가 뭘까?
          // * 소괄호를 쓰면 함수 선언문이 아닌 함수 리터럴로 인식한다. = 값으로 인식한다는 것이다.
          // * 함수 리터럴은 이름을 생략할 수 있다.
            // ? 함수 리터럴로 인식하면 어떤 장점이 있을까?
            // * 함수 리터럴로 인식하면 함수를 호출하기 전까지는 함수 객체를 생성하지 않는다.
            // * 함수 객체를 생성하지 않으면 메모리를 절약할 수 있다.
              // ? 함수 리터럴은 무엇일까?
              // * 함수 리터럴은 함수를 값으로 표현하는 방법이다.
              // * 함수 리터럴은 함수 이름을 생략할 수 있다.
              // * 함수 리터럴은 함수 객체를 생성한다.
              // * 함수 리터럴은 함수 객체를 생성한 후 호출할 수 있다.
              // * 함수 리터럴은 함수 객체를 생성한 후 함수 이름으로 호출할 수 있다.
                // ? 함수 객체는 무엇일까?
                // * 함수 객체는 함수와 관련된 여러가지 정보를 담고 있는 객체이다.
                // * 함수 객체는 함수 코드를 포함하고 있다.
                // * 함수 객체는 함수 이름을 포함하고 있다.
                // * 함수 객체는 함수를 호출할 때 사용할 매개변수의 정보를 담고 있다.
                // * 함수 객체는 함수를 정의한 환경 정보를 담고 있다.
                // * 함수 객체는 함수의 반환값에 대한 정보를 담고 있다.
                // * 함수 객체는 함수 객체의 생성자 함수에 대한 정보를 담고 있다.
                  // ? 함수 리터럴을 코드로 표현하면?
                  // * function add(x, y) { return x + y; }
                  // * var add = function (x, y) { return x + y; };
                  // * var add = (x, y) => x + y;
                  // * var add = new Function('x', 'y', 'return x + y;');
                    // JavaScript에서 소괄호는 표현식을 그룹화하는 역할을 합니다. 이는 소괄호 내부의 코드를 하나의 단위로 취급하고 그 결과를 반환하는 것을 의미합니다.

    // 상태 인덱스를 증가시킵니다. 다음 상태를 위해서.
    index++;
    // 현재 상태와 그 상태를 업데이트하는 함수를 반환합니다.
    // 이는 react의 useState() 훅과 유사한 패턴입니다.
    return [currentState, setState]; // [true, ƒ] [상태, 상태를 업데이트하는 함수]
  };
  return useState; // ! useState() 함수는 결국 배열을 반환한다.
}


// MakeComponent() 함수는 간략화된 React 컴포넌트입니다.
function MakeComponent(){
  // useState() 훅을 사용하여 상태를 관리합니다. 
  // 상태와 상태 설정 함수 가져오기
  // 초기 상태는 true입니다.
  const useState = makeReact(); // * useState()를 구현하기 위한 안티패턴
  const [state, setState] = useState(true);

  // 결과적으로 아래와 같은 간단한 click 이벤트 핸들일 뿐이지만,
  // 내부적으로는 '지정된 상태'를 업데이트 하는 로직을 풀고 있습니다.
  return (
    <>
      <div>{state.toString()}</div>
      <button onClick={() => setState(!state)}>click 토글 방식!</button>
    </>
  )
}

console.log(MakeComponent()); // [true, ƒ];