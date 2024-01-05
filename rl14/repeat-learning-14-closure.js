const stringExample = "참깨방 위에 순쇠고기 패티 두장 특별한 소스 양상추 치즈 피클 양파 까지!";

function createStringAppender(){
  let body = ""; // 클로저에 의해 "기억"될 변수
  // 리턴이 함수로 처리되어, body를 업데이트 할 수 있습니다.
  // react에서 상당히 많이 사용되는 패턴입니다.

  return function (stringArray, callback){
    stringArray.forEach((element) => {
      body += element;
    });
    callback(body);
  }
}

