----- 변수
1. let
2. const
3. var - 한번 선언된 변수 다시 선언 가능
       - var 변수명을 선언하기 전 해당 변수명을 사용할 수 있음.
         -> ex) console.log(name);
                var name = 'mike';
         -> name은 error 가 아닌 undefined 를 표시.
                                why undefined? var name; 만 호이스팅되어 최상위로 올라감
- 사실 let, const 또한 호이스팅 됨.
  but ReferenceError 발생.
  why? Temporal Dead Zone(TDZ) 때문.

-- 변수의 생성과정
1. 선언 단계
2. 초기화 단계 : undefined를 할당해주는 단계
3. 할당 단계

-- var, let, const 생성과정
1. var
   1. 선언 및 초기화 단계 동시 수행
   2. 할당 단계
2. let
   1. 선언단계
   2. 초기화 단계
   3. 할당 단계
3. const
   1. 선언 + 초기화 + 할당 한번에 해야함
      - ex) const gender; -> SyntaxError 발생

-- 스코프
var : 함수 스코프( 블록 안에서 선언된 var 변수는 블록 바깥에서도 사용 가능 )
                ( 함수 안에서 선언된 var 변수는 함수 바깥에서 사용 불가 )
let, const : 블록 스코프 ( 블록 안에서 선언된 var 변수는 블록 바깥에서 사용 불가  )
----------------------------------------------------------------------------------------------------------------
----- 생성자 함수
function 첫글자대문자(매개변수1, ...) {
    //this = {};
    this.~ = 매개변수1;
    this.~ = ...;
    this.함수명 = function() { ~; }
    //return this;
}

사용법
ex) let user1 = new User('Mike', 30);
                new 를 안붙이면 그냥 함수가 실행되는 것 -> user1 은 undefined.
