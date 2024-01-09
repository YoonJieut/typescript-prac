import { useState } from "react";

export function ReactTenDashOne() {

  const stateWork = [];
  stateWork.legth = 10;
  stateWork.fill(false);
  console.log(stateWork); // [false, false, false, false, false, false, false, false, false, false]
  const [packs, setPacks] = useState(stateWork); // 각 팩의 열림 상태를 관리한다.

  const togglePack = (index) => {
    const newPacks = [...packs]; // packs를 복사한다.
    console.log(newPacks); // [false, false, false, false, false, false, false, false, false, false];

    if (newPacks[index]){
      newPacks[index] = false; // false로 바꾼다.
    } else {
      newPacks[index] = true; // false가 아니면 true로 바꾼다.
    }
    setPacks(newPacks); // setPacks는 useState() 메서드의 1번째이다.
    // 구조분해할당으로 "할당"받았으며, 1번째(두번째)는 React에 의해 이미 만들어진 함수(메서드)이다.
  };

    return (
        <div>
            <h1>React 10-2</h1>
            <p>React 10-2</p>
        </div>
    )
}