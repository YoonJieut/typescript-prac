class Minam {
  static sayHello() {
    return " hello i am minam"
  }
}

class Chunam {
  sayHello() {
    return " bye JunHyeon"
  }
}

// Minam 클래스의 static 메서드 사용 예시
console.log(Minam.sayHello()); // hello i am minam

// * Chunam 클래스의 static 메서드 사용 예시
// new라는 키워드를 통해 Chunam 클래스의 인스턴스를 생성한 후
// 생선된 인스턴스에 sayHello라는 메서드가 있으므로, 사용이 가능하다.
// 하지만 위 Minam 클래스의 sayHello 메서드는 static 메서드이므로
// new 키워드 (인스턴스 없이) 클래스 자체에서 바로 사용이 가능하다.
// 일반적인 인스턴스 생성은 다분히 동적인 방식이라고 할 수 있다.

const chunamInstance = new Chunam();
console.log(chunamInstance.sayHello()); // bye JunHyeon