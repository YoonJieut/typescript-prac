// * 객체 배열 예시
/**
 * interface 문법을 통해 '어떤 객체"의 속성(property)과 타입(type)을 정의 할 수 있다.
 * User라는 인터페이스를 따르는 객체는 id와 name 속성을 가져야 하고
 * id는 number타입, name은 string 타입이어야"만"하게끔
 * 타입 안정성 (type safety)를 보장한다.
 */

interface User {
  id : number;
  name : string;
}

/**
 * users라는 배열은 인터페이스(특정 형식)인 User를 따르는 객체만을 원소로 가질 수 있게끔 제한됩니다.
 * 실제적인 코드로서는 위 interface만 확인하면 어떤 객체든 무슨 내용이 어떤 구조로 되어있는지 추론 할 수 있게 된다.
 */

const users : User[] = [
  {id :1, name: "공욱재"},
  {id : 2, name : "공자"}
];

/**
 * 
 * @param obj User 객체
 * @returns Object를 JSON 문자열로 변환한 후 다시 JSON객체로 변환한 User 객체
 */
function jsonConvertObject(obj:User):User {
  return JSON.parse(JSON.stringify(obj));
}


// * 얕은 복사
/**
 * 얕은 복사의 개념은 배열의 원소가 객체일 경우, 원소의 객체를 복사하지 않고 참조만 복사하는 것을 의미한다.
 * 아래의 전개 연산자(spread operator)를 통해 객체를 복사하고 있지만, 객체의 속성이 객체일 경우 참조만 복사하게 됩니다.
 */
const shallowCopiedUsers:User[] = users.map((user)=>{
  return user;
});
// * 깊은 복사
/**
 * JSON으로 저장한 후, 다시 불러오는 방식을 통해, 깊은 복사를 구현할 수 있다.
 * users 배열과 deepCopiedUsers 배열은 서로 완전히 다른 객체를 참조하고 있다.
 */
const deepCopiedUsers:User[] = users.map((user)=> jsonConvertObject(user));

// 복사된 배열에서 객체 수정
shallowCopiedUsers[0].name = "윤준현 미남"; 
// ! 옅은 복사로 인해 원본 배열도 수정된다.
deepCopiedUsers[1].name = "윤준현 미남";

// 결과 출력

console.groupCollapsed("객체 배열 예시");
  console.log('원본 배열 :' , users); // 원본 배열
  console.log('옅은 복사 배열 :' , shallowCopiedUsers); // 옅은 복사 배열
  console.log('깊은 복사 배열 :' , deepCopiedUsers); // 깊은 복사 배열
console.groupEnd();

//! 여기서 모듈임을 명시하기 위해 ts에선 export {}를 작성해야 한다.
export {};

/**
 * 옅은 복사와 깊은 복사의 차이점
 * 옅은 복사는 객체 속성이 객체일 경우, 참조만 복사하게 된다.
 * 깊은 복사는 객체의 속성이 객체일 경우, 객체를 복사하게 된다.
 * 
 * 메모리 관점에서 얕은 복사는 원본 객체와 복사된 객체가 깊은 객체 참조하고 있기 때문에, 복사된 객체를 수정하면 원본 객체도 수정되게 된다.
 * 깊은 복사는 원본 객체와 복사된 객체가 다른 객체를 참조하고 있기 때문에, 복사된 객체를 수정해도 원본 객체는 수정되지 않는다.
 * 
 * 
 * C언어에서 악명이 높은 포인터와 개념이 비슷한데,
 * 눈에 안보이는 메모리 공간에 객체가 저장되어 있고, 변수는 그 메모리 공간을 참고하고 있다는 개념이다.
 * 사람의 눈으로는 변수에 객체가 저장되어 있다고 보이지만,
 * 실제로는 변수는 객체를 참조하고 있을 뿐
 * ! 따라서 실험을 통해 눈으로 확인하는 것이 중요하다.
 */