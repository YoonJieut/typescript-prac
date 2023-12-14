
interface MemberData {
  id : string;
  password : string;
  address : string;
  cart : string[];
}

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


// 클로저를 사용하는 예제
let memberWithClosure = MemberDataWithClosure('user','pass1','address1',['item1','item2']);
console.log(memberWithClosure()); // 클로저를 통한 데이터 접근


console.log(MemberDataWithoutClosure);

