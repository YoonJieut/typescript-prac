// 인터페이스의 사전적 정의는 "약속이다."
// ts의 interface는 약속이다.
//? 
//? 여기서 children의 타입선언이 이상하다, 2개 이상이 가능한가? ("string[]"이부분)
function createComponent(element, props, children) {
    // ? 이건 뭘까? 배열안에 굳이 넣은 이유는 뭐지?
    var tagParts = ["<".concat(element)];
    //? Partial은 또 무슨 뜻일까? 뒤는 css스타일을 참고하는 거 같은데..?
    var styleToString = function (style) {
        //? entries()메서드는 뭐였지? 맞다, [키,value] 배열을 반환하는 메서드였다.
        var entries = Object.entries(style);
        var objectValue = entries.map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, " : ").concat(value);
        });
        var result = objectValue.join(' ');
        return result;
    };
    // 
    for (var _i = 0, _a = Object.entries(props); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var attributeString = void 0;
        // ? 여기서 value의 타입이 왜 "object이지?"
        if (key === "style" && typeof (value) === "object") {
            attributeString = "style = \"".concat(styleToString(value), "\"");
        }
        else {
            attributeString = "".concat(key, " : \"").concat(value, "\"");
        }
        tagParts.push(attributeString);
    }
    // 태그를 닫는다.
    tagParts.push('>');
    // ? 드디어 등장한 children 이렇게 작성함으로써 뒤에 어떤 것이 와도 추가될 것 같다. (확장성의 가능성)
    // ? 스프레드 문법을 활요했는데, 
    if (children) {
        tagParts.push.apply(tagParts, children);
    }
    tagParts.push("</".concat(element, ">"));
    var result = tagParts.join('');
    return result;
}
var myComponent = createComponent('div', { id: "example", style: { color: "red" } }, ['안녕하세요']);
var root = document.getElementById('root');
root.innerHTML = myComponent;
