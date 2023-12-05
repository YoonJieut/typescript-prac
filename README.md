# 1. npm init
typescript를 사용하기 위해서 패키지 초기화한다.
1. 전역설치
`npm install -g --save typescript ts-node`로 설치하면 프로젝트 가릴 것 없이 시스템에서 동작하기 때문에 매우 편리하지만, 처음 사용하는 설치작업이므로, -g를 사용하지 않는
로컬(프로젝트)설치를 권장한다.
2. 로컬설치
`npm install --save typescript ts-node`로 설치하면 프로젝트 내부에 설치되어 프로젝트 내부에서만 동작한다.

# 2. 실행하려면 npx 명령어를 사용해야 한다.
`npx tsc --init`
## npx는 
npx npm 패키지를 실행시켜주는 도구이다. npx를 사용하면 로컬에 설치된 패키지를 실행시킬 수 있다.
## tsc는
tsc는 typescript를 컴파일하는 명령어이다. --init 옵션은 tsconfig.json 파일을 생성해준다.
typescript compiler의 약자로 ts-node 패키지가 이를 가능하게 한다.

# 3. npm 초기화 후, typescript 초기화 두가지가 완료되어야 정상작동한다.
tsconfig.json 파일이 생성되었는지 확인한다.

# 4. typescript 파일은 *.js 확장자가 아닌 .ts 파일이다.
예시를 위해 index.ts 파일을 생성한 후, 간단한 덧셈코드를 작성했다.

# 5. typescript를 javascript로 컴파일한다.
`npx tsc index.ts`를 실행하면 index.js 파일이 생성된다.