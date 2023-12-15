import { useState, useEffect } from "react";

type Props = {
  [key: string]:string;
}

type FetchExampleProps = {
  tagName : keyof React.ReactHTML;
  props : Props;
  url: string;
}


const FetchExample: React.FC<FetchExampleProps> = ({ tagName, props, url })=>{
  // ? tsx에서 타입 선언을 할당하는 것은 알겠는데 ('') 이 부분은 무엇일까?
  // ? 기본 값을 설정하는 것 같은데?
  const [data, setData] = useState<string>('로딩중');
  const [error, setError] = useState<string>('');


  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`통신상태 불랑 : ${response.status}`);
        }
        const jsonData = await response.json();
        setData(JSON.stringify(jsonData, null, 2));
      }catch(e) {
        console.error('Fetch error :',e);
        setError('아직 데이터가 수신되지 않았습니다.')
      }
    };
    fetchData();
  },[url]);

  const Tag = tagName;
  return <Tag {...props}>{error ? error : data }</Tag>;
}
export default FetchExample;

// 사용 예시
// <FetchExample tagname = "div" props = {{className : 'example}} url = "http://my.server.localhost/directory" />