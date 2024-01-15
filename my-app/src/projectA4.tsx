import { useEffect, useState } from "react";


const Subscription:React.FC = () => {
  // 상태값은 boolean 타입으로 초기화, 구독 상태를 마치 스위치처럼 토글할 수 있도록 설정
  const [isSubscribed, setIsSubscribed] = useState(false);

  /**
   * sessionStorage는 
   * ! window.sessionStorage 객체를 줄여 사용한 것
   * 사실상 window.sessionStorage와 같다.
   * 세션은 브라우저가 실행되는 동안에만 유지되는 저장소로 서버에서 작동하는 것과 다르게
   * 브라우저가 종료되면 세션은 사라진다. (간단하게, 상태를 저장할 때 사용한다.)
   * 
   * * 단순 객체 방식으로 사용할 수 없고, 
   * * setItem, getItem, removeItem, 메서드를 사용해야 한다.
   * ! 키워드 " window.sessionStorage " 
   * 
   * useEffect() 메서드가 동작되면, 상태가 true로 바뀌고,
   * sessionStorage에 'isSubscribed'라는 키로 true가 저장된다.
   */
  useEffect(() => {
    const subscriptionStatus = sessionStorage.getItem("isSubscribed") === "true";
    setIsSubscribed(subscriptionStatus);
  }, []);
  // ? 왜 빈배열로 두었을까?

  /**
   * handleSubscribe() 메서드는 fetch() 메서드를 사용해 서버에 구독 요청을 보낸다.
   * '/subscribe'로 작성된 경로는, 임의의 GET 요청을 받아 처리하는 라우터를 의미
   * 다른 REST API처럼 주소의 형태, 경로의 형태 등 여러가지가 될 수 있다.
   */


  const handleSubscribe = async () => {
    try {
      const response = await fetch('/subscribe');
      if(!response.ok) {

        /**
         * ! response.ok는 fetch() 메서드가 정상적으로 동작했는지 확인하는 속성
         */

        throw new Error(`네트워크가 동작하지 않을 때 뜨는 에러 ${response.statusText}` );
      }
      const data = await response.json();

      /**
       * ! response.json()은 서버에서 보낸 데이터를 JSON 형태로 변환하는 메서드
       * 
       * if(data.isSubscribed) 라는 조건식은 서버에서 받아온 데이터가 구독 상태인지 확인하는 조건식
       * 여기서 인자로 받은 data는 세션 스토리지에 저장된 데이터이다.
       * 
       * 참(true)으로 판단되는, 패턴 truthy하다고 하는 패턴으로
       * "존재한다면 참"이라는 의미로, data.isSubscribed가 존재한다면 참이다.
       * 비교 연산자를 사용하지 않는 이유는, data.isSubscribed가 true인지 확인하기 위함이다.
       */

      if(data.isSubscribed) {
        // sessionStorage에 'isSubscribed'라는 키로 true를 저장한다.
        sessionStorage.setItem("isSubscribed", "true");
        // 맨 위에서 설정한 상태도 true로 바꾼다.
        setIsSubscribed(true);
        console.log("구독이 완료되었습니다.");
      }else {
        console.log("구독이 실패했습니다.");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return(
    <div>
      <h1>Session Storage Example</h1>
      <button onClick={handleSubscribe}>subscribe</button>
      {isSubscribed && <p>구독이 완료되었습니다.</p>}
      {/**
       * isSubscribed가 true라면, <p>구독이 완료되었습니다.</p>를 렌더링한다.
       * 이때, isSubscribed가 false라면, <p>구독이 완료되었습니다.</p>를 렌더링하지 않는다.
       * 
       * 단락 평가 방식으로 && 연산자를 사용하면, isSubscribed가 true일 때만 렌더링한다.
       * 이렇게 렌더링되는 것을 조건부 렌더링이라고 한다.
       */}
    </div>
  );
};

export default Subscription;
