상속
- 먼저 자신의객체에서 프로퍼티를 찾고, 없으면 프로토타입(상속객체)에서 찾는다
  -> 동일한 프로퍼티가 존재할때, 자식객체의 프로퍼티값을 적용
자식객체명.__proto__ = 부모객체명;

for(p in 자식객체명)
  -> 자신 + 상속 프로퍼티 모두 가져옴
  -> 자식객체에 있는 프로퍼티만 가져오고 싶다 -> if(자식객체명.hasOwnProperty('프로퍼티명')) 사용

Object.keys(자식객체명)
Object.values(자식객체명)
  -> 둘다 상속된 프로퍼티 가져오지 X.

----- in 생성자 함수
ex) const Bmw = function (color) { this.color = color; } 일때
    Bmw.prototype.wheels = 4;
    Bmw.prototype.drive = function() { console.log("drive..."); }
    // Bmw.prototype = { wheels : 4, ~ } 이런방식으로 사용하면 constructor 값이 사라짐 -> 하나씩 추가해서 써줄것
    const x5 = new Bmw("red");
    로 사용하면
    const x5 = new Bmw("red");
    x5.__proto__ = car;
    x4.__proto__ = car; 
    처럼 부모 객체를 따로 만들지 않아도 되고, 일일히 __proto__ 를 하지 않아도 상속이 적용됨

-- 객체명 instanceof 객체명 : 해당 객체의 생성자를 토대로 해당 객체의 인스턴스 여부 검사

-- 객체명.constructor : 해당 객체의 생성자 객체를 가리키는 프로퍼티 값을 가져옴
 ex) x5.constructor === Bmw; -> true

----- 객체 내 프로퍼티 값을 변경하지 못하게 하기위할때
ex) const Bmw = function (color) {
        const c = color;
        this.getColor = function() { console.log(c); }; };
    일때, c를 통해 color 값을 얻을 수 만있고, 변경은 불가함
          why? Closure에 의해 생성될 당시의 c 값을 기억하기 때문에
