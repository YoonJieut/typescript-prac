/**
 * ! interface
 * closure 패턴을 원활하게 사용하기 위해
 * ts의 강력한 기능인 '인터페이스' 기능을 통해
 * 주요 구성과 사용방법을 정의하였다.
 */

interface Counter {
  increment(): void;
  decrement(): void;
  getCount(): number;
}
// ? 여기서 counter return의 함수들에게 타입선언을 생략을 하는 것이 좋습니까?
// 함수들에게 타입 선언을 생략하는 것은 일반적으로 좋은 방법입니다. TypeScript는 타입 추론을 통해 함수의 반환 타입을 유추할 수 있기 때문에, 타입 선언을 생략함으로써 코드를 더 간결하게 유지할 수 있습니다. 그러나 경우에 따라 명시적인 타입 선언이 필요한 경우도 있을 수 있으므로, 상황에 맞게 판단하시면 됩니다.

/**
 * 
 * 타입설정에 따라 다르지만, 일반적인 형태
 * 함수 counter()는 위 인터페이스를 "따른다"라고 명시 된다.
 * 제작자는 Counter 인터페이스가 뭔지 몰라도,
 * 작성하면서 에러를 통해 인터페이스를 따르지 않았다는 것을 알 수 있다.
 */


function counter(): Counter {
  let count = 0;

  return {
    increment() :void{
      count++;
    },
    decrement() :void{
      count--;
    },
    getCount() :number{
      return count;
    }
  };
}
/**
 * counter() 함수의 반환값은
 * Counter 인터페이스를 따르는 객체이다.
 * getCount() 함수는 객체지향의 '캡슐화' 개념을 따르고 있다.
 * Class문법의 static 키워드와 유사하다.
 */

const clouserCounter = counter();

/**
 * 함수를 호출했을 뿐인데 미래의 getCount() 함수는 숫자를 리턴한다.
 * 전역변수를 사용하지 않고도, 함수를 호출했을 때의 상태를 기억하고 있다.
 * 전역 변수는 그 자체로 메모리 누수(memory leak)의 원인이 된다.
 * 함수를 호출했을 때의 상태를 기억하는 것은 함수형 프로그래밍의 핵심이다. 
 */
// ! 클로져, 호출했을 때 상태, 선언된 환경, 렉시컬 스코프 
// ? 왜 전역변수가 메모리 누수의 원인이 될까?
// 메모리 누수는 사용하지 않는 메모리가 계속해서 쌓이는 현상을 의미, 전역변수로 선언하는 순간 계속 메모리에 상주한다.
// 코드가 얽혀 있게 된다. 전역변수는 어디서든 접근이 가능하기 때문에, 코드가 얽혀있는 상태에서 전역변수를 수정하게 되면, 코드의 다른 부분에서도 영향을 받게 된다. 이러한 현상을 '부수효과'라고 한다.

console.log(clouserCounter.getCount()); // 0
clouserCounter.increment();
clouserCounter.increment();
clouserCounter.increment();
clouserCounter.increment();
console.log(clouserCounter.getCount()); // 4
clouserCounter.increment();
console.log(clouserCounter.getCount()); // 5