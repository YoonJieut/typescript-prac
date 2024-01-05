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

const appendString = createStringAppender();

function splitString(stringParams){
  return stringParams.split(" ");
}

// appendString 사용 예시
appendString(splitString(stringExample), (body) => { 
  console.log("body : " ,body);
  console.log("body.length : ",body.length);
 });
// * createStingAppender 함수는 클로저를 반환합니다. 호출 시, 인자를 작성하면, 리턴 함수에 인자를 그대로 전달해주는 것이다. 이것은 고차함수라고 볼 수 있다.

