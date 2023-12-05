//? 인터페이스라는 처음보는 세팅의 발견, 객체를 활용할 때 사용하면 유용할 것 같은데?
interface Props {
  id? : string;
  style? : Partial<CSSStyleDeclaration>;
  [key:string]:any
}

// 인터페이스의 사전적 정의는 "약속이다."
// ts의 interface는 약속이다.
//? 
//? 여기서 children의 타입선언이 이상하다, 2개 이상이 가능한가? ("string[]"이부분)
function createComponent(element : string, props:Props, children?: string[]):string {
  // ? 이건 뭘까? 배열안에 굳이 넣은 이유는 뭐지?
  let tagParts = [`<${element}`];

  //? Partial은 또 무슨 뜻일까? 뒤는 css스타일을 참고하는 거 같은데..?
  const styleToString = (style: Partial<CSSStyleDeclaration>):string => {
    //? entries()메서드는 뭐였지? 맞다, [키,value] 배열을 반환하는 메서드였다.
    const entries = Object.entries(style);
    const objectValue = entries.map(([key, value])=> `${key} : ${value}`);
    const result = objectValue.join(' ');
    return result
  }
  // 
  for (const [key, value] of Object.entries(props)) {
    let attributeString;
    // ? 여기서 value의 타입이 왜 "object이지?"
    if(key === "style" && typeof(value) === "object"){
      attributeString = `style = "${styleToString(value)}"`;
    } else {
      attributeString = `${key} : "${value}"`;
    }
    tagParts.push(attributeString);
  }
  // 태그를 닫는다.
  tagParts.push('>');

  // ? 드디어 등장한 children 이렇게 작성함으로써 뒤에 어떤 것이 와도 추가될 것 같다. (확장성의 가능성)
  // ? 스프레드 문법을 활요했는데, 
  if(children){
    tagParts.push(...children);
  }
  tagParts.push(`</${element}>`);
    const result = tagParts.join('');
    return result;
}


const myComponent = createComponent('div', {id: "example", style:{color : "red"}}, ['안녕하세요']);
const root = document.getElementById('root');
root.innerHTML = myComponent;
