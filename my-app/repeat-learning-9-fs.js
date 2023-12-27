// Minam의 기능을 함수로 구현
function Minam() {
      return " hello i am minam";
}

// Chunam의 기능을 팩토리 함수로 구현
function createChunam() {
  // 리턴이 객체일 경우 팩토리 함수라고 한다.
  return {
    sayHello: function() {
      return " bye JunHyeon";
    }
  };
}

// Minam 함수 사용 예시
console.log(Minam()); // hello i am minam

// * Chunam 팩토리 함수를 사용하여 객체 생성 및 메서드 사용 예시
const chunamInstance = createChunam();

// class 가 아니므로 new 라는 키워드를 사용하진 않았지만
// 사실상 함수를 호출하자마자 객체가 생성되는 것이므로
// class와 비슷한 방식이라고 할 수 있다.
console.log(chunamInstance.sayHello()); // bye JunHyeon