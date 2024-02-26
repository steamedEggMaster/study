-- 클래스
: ES6 에 추가된 스펙

- 사용법 ex
class User {
  constructor(name, age) { this.name = name; this.age = age; }
  showName() { console.log(this.name); } }

const tom = new User('Tom', 19);
