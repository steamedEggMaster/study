node 파일명.js
ctrl + c

----- npm(node package manager)
"npm install 모듈이름" 으로 쉽게 모듈 설치 가능
"npm uninstall 모듈명" 으로 쉽게 모듈 삭제 가능
  - 사용법 in terminal
  1. npm init 명령어 입력 - npm 모듈들을 관리 하겠다
  2. enter 계속 누르기
  3. package.json 파일이 생성됨 - 해당 파일에서 버전, 모듈들이 관리됨
  4. npm install 모듈이름 [-g 등의 옵션]
     - -g : 이 경로 뿐만 아니라 모든 경로에서 해당 모듈 사용 가능 -> 충돌 발생될 수 있음
  5. 4번 실행 후 package-lock.json 파일이 생성됨 - 다운받은 모듈의 세부사항 알려줌


- 모듈 종류
  1. figlet : 아스키 아트
  2. express : 웹 프레임워크

----- express 웹 프레임 워크
- 간단 사용법
const express = require('express')
const app = express()
const port = 3000
    
app.get('/', (req, res) => { // get : Http 요청 방식
  res.send('Hello World!') })// '/' : 라우팅경로
                             // 화살표 함수 : 콜백함수
app.listen(port, () => { // port : 포트번호
  console.log(`Example app listening on port ${port}`) }) // 화살표 함수 : 콜백함수

----- res
res.send("~") - "<태그>content</태그>" 로 html 내용 보내기 가능 -> 자동으로 태그 적용됨
              - { 키:value } 로 json 보내기 가능 -> " " 안씀
                - res.json({}) 으로도 가능

----- req
1. get
   1. param 방식
      ex) app.get('/user/:id', (req, res) => {
            const q = req.params;
            console.log(q); })
      -> { id : 'chan' } 이 출력됨
      -> 즉, q에 객체가 들어감
      -> q.id 로 값만 접근 가능
   2. query 방식 - 라우팅경로?키=밸류&키=밸류
       ex) app.get('/user/:id', (req, res) => { // :id 는 동일
            const q = req.query;
            console.log(q); })
       -> 여러 키-밸류 쌍을 한번에 받을 수 있음
       -> 객체가 들어감 
       -> q.키 로 값 접근 가능

2. post
   1. param 방식
      - app.post 빼고 get과 동일
   2. body 방식
      ex) app.get('/user/:id', (req, res) => {
            const q = req.body; //Axios 나 Fetch 로만 Post 요청 가능
            console.log(q); })  //해당 요청의 body 값을 가져오는 것

---- cors 
cors에 대한 내용 : evan-moon.github.io/2020/05/21/about-cors/
cors : Html 파일로 서버 요청 시 보안을 위해 기본적으로 요청을 막아 놓음

1. npm install cors
2. 사용법 : https://www.npmjs.com/package/cors
