a**n : 거듭제곱

----- 비교
1. == : 값만 비교 - "1"은 1로 자동 형변환되어 비교됨.
2. === : type 까지 비교

----- 조건문
if(조건문){}
else if(조건문){}
else{}

----- 논리 연산자
1. || : or
2. && : and
3. ! : not

----- 반복문
1. for(let i = 0; i < n; i++) {}
2. while(조건문) { i++; }
3. do{} while(조건문)

break, continue

----- switch
switch(변수){
  case 1 :
    ~;
    break;
  ...
  default:
    ~;
}

----- 함수
- 함수는 자바스크립트가 실행되며 선언된 함수들을 미리 모아둠 -> 함수는 어디서든 호출이 가능해짐 == 호이스팅(hoisting)
- 작성법
function 함수명(매개변수명){
  let 변수명 = 매개변수명 || 'friend'; //매개변수가 비어있다면 undefined -> 'friend'를 선택하게됨
  ~~~;
  [return ~;] // return; or return 없는 함수는 undefined 를 return함.
}

function 함수명(매개변수명 = 'jane') -> 매개변수 default 값 설정

----- 함수 표현식(익명함수)
- 호이스팅 적용 X
- 사용법
ex) let 변수명 = function(){
      ~~;
    }

----- 화살표 함수(arrow function)
- 사용법 ex
let add = (num1, num2) => { return ~; }
      return문 한줄일때  ( ~~; ) 가능
                          ~~;   () 생략 가능
      매개변수 하나일 때 () 생략 가능 ex) num1 => { ~; }
