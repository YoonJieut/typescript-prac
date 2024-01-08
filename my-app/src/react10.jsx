// 대충 이런식으로 쓰일 것이다.
import React, { useState } from 'react';

export default function ExampleComponent() {
	// 구조분해 할당 + useState(초기상태)
  const [state, setState] = useState(initialState);

  // 상태 변경 : 함수로 setState(새로운 상태)로 바꾸는 메서드 작성하기
  const updateState = () => {
    setState(newState);
  };

  return (
    // JSX 코드
    <>
      <div>{state}</div>
      <button onClick={updateState}>Click</button>
    </>
  );
}