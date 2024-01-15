// 변수 globalCountNumber는 전역 변수 이면서도
// 서비스 전체에 공유되기 때문에 민감한 정보를 다루는 측면과
// 메모리 누수(memory leak)가 발생할 수 있는 측면 (대규모로 만들어지기 때문에)
// 가장 중요한 "어디에서든, 의도치 않은 곳에서 변경될 수 있는 문제"가 크기 때문에
// ! 현재 훈련생분들의 수준에서는 전역변수를 무분별하게 사용하면 문제가 될 수 있다.
// 눈에 보이지 않는 상태값을 어거지로 꺼낸 예제이므로 안티 패턴입니다.
let globalCountNumber = 0;

function createCounter() {
  let localCountNumber = 0;
  return function () {
    localCountNumber++;
    console.log('localCountNumber :', localCountNumber);

    if(localCountNumber % 10 ===0 ){
      globalCountNumber++;
      console.log('globalCountNumber :', globalCountNumber);
    }
  };
}

const count = createCounter();

for (let i = 0; i < 100; i++) {
  count();
}
console.log(globalCountNumber); // 10