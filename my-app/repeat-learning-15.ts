interface Counter {
  increment(): void;
  decrement(): void;
  getCount(): number;
}
// ? 여기서 counter return의 함수들에게 타입선언을 생략을 하는 것이 좋습니까?
// 함수들에게 타입 선언을 생략하는 것은 일반적으로 좋은 방법입니다. TypeScript는 타입 추론을 통해 함수의 반환 타입을 유추할 수 있기 때문에, 타입 선언을 생략함으로써 코드를 더 간결하게 유지할 수 있습니다. 그러나 경우에 따라 명시적인 타입 선언이 필요한 경우도 있을 수 있으므로, 상황에 맞게 판단하시면 됩니다.

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

const clouserCounter = counter();
console.log(clouserCounter.getCount()); // 0
clouserCounter.increment();
clouserCounter.increment();
clouserCounter.increment();
clouserCounter.increment();
console.log(clouserCounter.getCount()); // 4
clouserCounter.increment();
console.log(clouserCounter.getCount()); // 5