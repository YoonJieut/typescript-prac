// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  mode: "development",
  entry: "./typescript-3/use.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // 번들 파일 이름
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // html 템플릿 파일 경로
    }),
  ],
  module: {
    rules: [
      // TypeScript 파일 처리
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      /**
             * * babel-loader 세팅
             *  ! npm install --save-dev @babel/core @babel/cli @babel/preset-env
             * 
             * *.babelrc 라는 파일을 생성 후 밑의내용을 적는다
             * {
                    "presets": ["@babel/preset-env"]
                }
             */
      {
        test: /\.js$/, // .js 확장자로 끝나는 모든 파일
        exclude: /node_modules/, // node_modules 폴더 제외
        use: {
          loader: "babel-loader", // babel-loader를 사용하여 변환
        },
      },
      // * css 로더 세팅
      // ! npm install --save-dev style-loader css-loader
      {
        test: /\.css$/,
        use: [
          "style-loader", // 스타일 태그로 CSS를 삽입
          "css-loader", // CSS 파일을 JavaScript로 변환
        ],
      },
      // 커스텀 모듈 자리
    ],
  },
  /**
     * ! 


     * "scripts": {
            "start": "webpack serve --mode development",
            "build": "webpack --mode production"
        }
        npm start로 dist 환경 개발을 시작할 수 있다.
     */
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // 서버가 제공할 내용의 경로
    hot: true, // 핫 모듈 교체(HMR) 활성화
    open: true, // 서버 시작 시 브라우저 열기
    port: 3000, // 서버 포트 설정 (기본값: 8080)
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
    config.devtool = "inline-source-map"; // 소스 맵 활성화
    // * 압축된 번들을 원본 소스코드에 매핑
    // * 디버깅에 압축된 것 대신 원본 소스를 보여준다.
    // * 런타임 오류시 정확한 위치를 파악할 수 있다.
  }
  return config;
};
