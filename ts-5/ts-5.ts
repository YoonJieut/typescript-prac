
interface MemberData {
  id : string;
  password : string;
  address : string;
  cart : string[];
}


// 클로저를 사용하는 함수
/**
 * 
 * @param id 
 * @param password 
 * @param address 
 * @param cart 
 * @returns 멤버 데이터를 반환하는 함수
 */
function MemberDataWithClosure( id: string, password : string, address : string, cart : string[] ): () =>MemberData {
  return function (){
    return { id, password, address, cart };
  };
}


// 클로저를 사용하지 않는 객체
let MemberDataWithoutClosure: MemberData = {
  id : 'user2',
  password : 'pass2',
  address : 'address2',
  cart : ['item3','item4']
}
/**
 * 클로저를 사용하지 않았기 때문에,
 * MemberDataWithoutClosure.id 등과 같이 직접 접근이 가능
 * 
 * 개발할 때 접근이 편리하지만
 * 유지보수를 할 때는 위험함
 * 객체지향 프로그래밍에서는 은닉화 작업을 통한 직접 접근을 막는다.
 * 
 * 하지만 함수형에서는 일반적으로는 은닉화할 수 없기 때문
 * 클로져 패턴, 위의 클로저 함수를 통해 은닉화 구현가능
 */


// 클로저를 사용하는 예제
let memberWithClosure = MemberDataWithClosure('user','pass1','address1',['item1','item2']);
console.log(memberWithClosure()); // 클로저를 통한 데이터 접근
memberWithClosure = MemberDataWithClosure('user4', 'pass4', 'address6',['item1','item2','item6','item7']);
console.log(memberWithClosure()); // 클로저를 통한 데이터 접근

console.log(MemberDataWithoutClosure);

