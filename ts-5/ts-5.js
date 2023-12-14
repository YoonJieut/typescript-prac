function MemberDataWithClosure(id, password, address, cart) {
    return function () {
        return { id: id, password: password, address: address, cart: cart };
    };
}
// 클로저를 사용하지 않는 객체
var MemberDataWithoutClosure = {
    id: 'user2',
    password: 'pass2',
    address: 'address2',
    cart: ['item3', 'item4']
};
// 클로저를 사용하는 예제
var memberWithClosure = MemberDataWithClosure('user', 'pass1', 'address1', ['item1', 'item2']);
console.log(memberWithClosure()); // 클로저를 통한 데이터 접근
console.log(MemberDataWithoutClosure);
