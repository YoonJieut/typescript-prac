
type Props = {
  [key: string] : string ;
}

async function fetchExample(tagName:string, props : Props, children : string, url:string):Promise<HTMLElement> {
  // HTML 요소 생성
  const element = document.createElement(tagName);

  // Props 설정
  for (const key in props){
    element.setAttribute(key, props[key]);
  }

  // 초기 내용 설정
  element.innerHTML = children;

  try {
    // fetch api
    const response = await fetch(url);

    if(!response.ok) {
      throw new Error(`통신 상태 불량 : ${response.status}`);
    }
    const data = await response.json();
    //가져온 데이터로 컴포넌트 업데이트
    element.innerHTML = JSON.stringify(data, null, 2);

  } catch(e){
    console.error('Fetch error:', e);
    element.innerHTML = '아직 데이터가 수신되지 않았습니다.'
  }
  return element;
}



// 사용 예시
// 문서 에서 위 코드가 불러와 지거나 작성되었다고 가정합니다.

const root = document.getElementById('root');
fetchExample('div', {class : 'exmaple'}, '로딩중', 'http://my.server.localhost/directory')
  .then((div)=> {root?.appendChild(div)})
  .catch((e)=>{console.error('catchrnans e 매개변수 인자가 전달됨 : ',e)});