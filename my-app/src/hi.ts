

interface User {
  id : number;
  name : string;
}

const users : User[] = [
  {id :1, name: "공욱재"},
  {id : 2, name : "공자"}
];


function jsonConvertObject(obj:User):User {
  return JSON.parse(JSON.stringify(obj));
}


// * 얕은 복사
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