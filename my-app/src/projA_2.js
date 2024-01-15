// 변수 globalCountNumber는 전역 변수 이면서도
// 서비스 전체에 공유되기 때문에 민감한 정보를 다루는 측면과
// 메모리 누수(memory leak)가 발생할 수 있는 측면 (대규모로 만들어지기 때문에)
// 가장 중요한 "어디에서든, 의도치 않은 곳에서 변경될 수 있는 문제"가 크기 때문에
// ! 현재 훈련생분들의 수준에서는 전역변수를 무분별하게 사용하면 문제가 될 수 있다.
// 눈에 보이지 않는 상태값을 어거지로 꺼낸 예제이므로 안티 패턴입니다.
let globalCountNumber = 0;


// 아래는 클로저 패턴을 사용, 전역변수를 사용하지 않고도
// 전역 변수를 다루는 코드입니다.
function createCounter() {
  let localCountNumber = 0; // 클로저 내부의 지역변수

  // return이 함수이기 때문에 클로저가 됩니다.
  // createCounter()를 호출하면, increase() 함수를 반환합니다.
  // 결과적으로 지역 변수 localCountNumber는 값이 남아 증가합니다.
  return function () {
    localCountNumber++;
    console.log('localCountNumber :', localCountNumber);


    // 아래 조건식은 10을 나우어 떨어지는 경우에만 실행됩니다.
    if(localCountNumber % 10 ===0 ){
      globalCountNumber++;
      console.log('globalCountNumber :', globalCountNumber);
    }
  };
}

const count = createCounter();

// count() 함수를 100번 호출합니다.
for (let i = 0; i < 100; i++) {
  count();
  // 호출할 때마다 localCountNumber가 1씩 증가합니다.
  // 덩달아 10의 배수에서는 globalCountNumber도 1씩 증가합니다.
}
console.log(globalCountNumber); // 10