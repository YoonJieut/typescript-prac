// 이 컴포넌트는 react 10내용 중 useContext를 바닐라 자바스크립트로 구현해본 것입니다.
// useContext 살펴보기

let globalState = { value: "initial value" };
const listeners = new Set();

function useContext() {
  return [globalState, setState];
}

function setState(newValue) {
  globalState.value = newValue;
  listeners.forEach((listener) => listener());
}



function ParentComponent() {
  const render = () => {
    document.body.innerHTML = `
      <div>
        ${ChildComponent()}
      </div>
    `;
  };

  listeners.add(render);
  render();
}

function ChildComponent() {
  const [state, setState] = useContext();

  return `
    <div>
      ${state.value}
      <button onclick="setState({ value: 'new value' })">Change Value</button>
    </div>
  `;
}

ParentComponent();