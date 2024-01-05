

type Props = { [key: string]: string };


function styleValueMaker(...styles: string[]):string {
  return styles.join(';');
}

function createElement(tag : string , props? : Props, ...children : string[]):string {
  // init
  let elementStrings: string[] = [];


// 태그 시작
// 태그 시작 부분을 조립하는 아래의 기능도 필요하다면 함수로 분리가능하다.
let startTag = `<${tag}`;
if(props) {
  for(let prop in props) {
    startTag += ` ${prop}="${props[prop]}"`;
  }
}
startTag += '>';  
elementStrings.push(startTag);

// 자식 요소 조립
elementStrings.push(...children);

//  태그 종료
elementStrings.push(`</${tag}>`);

const result  = elementStrings.join('');  // Join 메서드 덕분에 배열을 문자열로 변환할 수 있다.
return result;
} 

// 사용 예제
let styleString = styleValueMaker('font-size: 18px', 'color: #333333');
let divString = createElement('div', {style: styleString}, '이것은 스타일이 적용되 div입니다.');
console.log(divString); // <div style="font-size: 18px;color: #333333;">이것은 스타일이 적용되 div입니다.</div>