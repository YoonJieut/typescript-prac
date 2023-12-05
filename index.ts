//? 인터페이스라는 처음보는 세팅의 발견, 객체를 활용할 때 사용하면 유용할 것 같은데?
interface Props {
  id? : string;
  style? : Partial<CSSStyleDeclaration>;
  [key:string]:any
}

// 인터페이스의 사전적 정의는 "약속이다."
// ts의 interface는 약속이다.

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

  if(children){
    tagParts.push(`</${element}>`);

    const result = tagParts.join('');
    return result;
  }




}

