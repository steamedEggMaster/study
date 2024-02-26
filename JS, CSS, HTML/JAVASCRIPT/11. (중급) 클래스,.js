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

