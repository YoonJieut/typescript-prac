import { useEffect } from "react";


const Subscription:React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    const subscriptionStatus = sessionStorage.getItem("isSubscribed") === "true";
    setIsSubscribed(subscriptionStatus);
  }, []);
  // ? 왜 빈배열로 두었을까?


  const handleSubscribe = async () => {
    try {
      const response = await fetch('/subscribe');
      if(!response.ok) {
        throw new Error(`네트워크가 동작하지 않을 때 뜨는 에러 ${response.statusText}` );
      }
      const data = await response.json();

      if(data.isSubscribed) {
        sessionStorage.setItem("isSubscribed", "true");
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
       * 
       */}
    </div>
  );
};

export default Subscription;
