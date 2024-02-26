-- 클래스
: ES6 에 추가된 스펙

- 사용법 ex
class User {
  constructor(name, age) { this.name = name; this.age = age; } // new 사용시 자동으로 실행됨
  showName() { console.log(this.name); } }

const tom = new User('Tom', 19);

-- 생성자 함수와의 차이점
1. constructor
2. 클래스 내부의 메서드는 클래스의 prototype에 저장됨
3. 클래스의 인스턴스 생성시 new 를 붙이지 않으면 error 발생 <-> 생성자 함수는 undefined 로 나옴
4. 클래스의 메서드는 for-in 으로도 prototype 에 있는 메서드를 볼 수 없음. <-> 생성자 함수는 보임

----- 상속(extends)
- 사용법 : class 자식클명 extends 부모클명
- 메서드 overriding 가능
  - super.메서드명() 으로 부모메서드 내용에 추가하여 overriding 가능
- constructor overriding
  - 자식클래스의 constructor() 에는 반드시 super() 을 먼저 해줘야함.
    ex) constructor(color) { super(color); this.navigation = 1; }
  - 만약 자식클래스에 constructor 가 없다면
    constructor(...args){ super(...args); } 가 default 로 존재

---------------------------------------------------------------------------------------------------------------------
프로미스(Promise)
: 작업의 완료/실패 여부를 요청 후 비동기적으로 처리하는 방식

- 사용법 ex      
const pr = new Promise((resolve, reject) => { /* Code */ });
  - callback 함수
    - resolve : 성공한 경우 실행되는 함수 / reject : 실패한 경우 실행되는 함수

- new Promise가 return 하는 객체에는
  state, result 프로퍼티 존재
  1. 생성 시                2-1. 성공 시 resolve(value) 실행
     state : pending,      ->    state : fulfilled
     result : undefined    ->    result : value
                           2-2. 실패 시 reject(new Error('에러메세지')) 실행
                           ->    state : rejected
                           ->    result : new Error('에러메세지')

- 프라미스 실행 후
  pr.then(
      function(result){}, // 이행되었을 때 실행 - result 에는 value 가 들어감
      function(err){} );// 거부되었을 때 실행 - err 에는 Error: '에러메세지' 가 들어감

- catch : reject 되었을 때만 실행
  ex) pr.then(
          function(result){},
      ).catch( //function(result) 에서 reject 되었을 때도 catch 실행 가능하기 때문에 catch 를 통해 구분해주는 것이 좋음
          function(err){} );
- finally : 이행 or 거절 둘다 실행
  pr.then().catch().finally( function(){ /*코드*/ }
