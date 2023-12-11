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
const deepCopiedUsers:User[] = users.map((user)=> jsonConvertObject(user));

// 복사된 배열에서 객체 수정
shallowCopiedUsers[0].name = "윤준현 미남";
deepCopiedUsers[1].name = "윤준현 미남";

// 결과 출력

console.groupCollapsed("객체 배열 예시");
  console.log('원본 배열 :' , users); // 원본 배열
  console.log('옅은 복사 배열 :' , shallowCopiedUsers); // 옅은 복사 배열
  console.log('깊은 복사 배열 :' , deepCopiedUsers); // 깊은 복사 배열
console.groupEnd();

//! 여기서 모듈임을 명시하기 위해 ts에선 export {}를 작성해야 한다.
export {};