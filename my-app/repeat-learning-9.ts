class Minam {
  static sayHello(): string {
    return 'Hello, Minam!';
  } 
}

class Chuman {
  sayHello(): string {
    return 'bye, Chuman!';
  }
}

// Minam클래스의 static 메서드 사용 예시
console.log(Minam.sayHello());  // Hello, Minam!

// Chuman클래스의 인스턴스 생성 및 static 메서드 사용 예시
const newChunam = new Chuman();
console.log(newChunam.sayHello());  // bye, Chuman!