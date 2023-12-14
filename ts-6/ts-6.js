var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchExample(tagName, props, children, url) {
    return __awaiter(this, void 0, void 0, function () {
        var element, key, response, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    element = document.createElement(tagName);
                    // Props 설정
                    for (key in props) {
                        element.setAttribute(key, props[key]);
                    }
                    // 초기 내용 설정
                    element.innerHTML = children;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("\uD1B5\uC2E0 \uC0C1\uD0DC \uBD88\uB7C9 : ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    //가져온 데이터로 컴포넌트 업데이트
                    element.innerHTML = JSON.stringify(data, null, 2);
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error('Fetch error:', e_1);
                    element.innerHTML = '아직 데이터가 수신되지 않았습니다.';
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, element];
            }
        });
    });
}
// 사용 예시
// 문서 에서 위 코드가 불러와 지거나 작성되었다고 가정합니다.
var root = document.getElementById('root');
fetchExample('div', { class: 'exmaple' }, '로딩중', 'http://my.server.localhost/directory')
    .then(function (div) { root === null || root === void 0 ? void 0 : root.appendChild(div); })
    .catch(function (e) { console.error('catchrnans e 매개변수 인자가 전달됨 : ', e); });
