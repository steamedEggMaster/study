자바스크립트에서 함수에 넘겨주는 매개변수의 갯수는 제한 X.
  -> 매개변수가 1개인 메서드에 여러개의 인수를 넘겨도 Error 발생 X
      -> 매개변수가 1개 이상인 메서드에 0개의 인수를 넘기면 undefined 발생

----- arguments (예전방식)
: 함수로 넘어온 모든 인수에 접근 가능
- 함수내에서 이용가능한 지역변수
- Array 형태의 객체, not 배열 -> 배열 내장 메서드 사용 불가
- length, index 만 사용가능

1. arguments.length
2. arguments[0부터 n까지의 숫자] - n : 받은 인수의 갯수-1

----- 나머지 매개변수 (권장)
: ...을 매개변수에 붙여 넘어오는 인수들을 배열에 담음
- 배열 내장 메서드 사용 가능
ex) function showName(...names) { }
    showName('Mike', 'Tom') -> ['Mike', 'Tom']

----- 전개구문
1. 배열
ex) let arr1 = [1,2,3];
    let arr2 = [4,5,6];
 1. let result = [...arr1, ...arr2];
 2. let result = [0, ...arr1, ...arr2, 7, 8, 9];

장점 : push pop splice concat 등을 사용해서 배열을 변환하는 것은 비효율적. 전개 구문을 이용하면 쉽게 가능

2. 객체
ex) let user = { name: 'Mike' };
 1. let mike = { ...user, age: 30 };

3. 복제 - 별개의 객체를 return
ex) let arr1 = [1,2,3];
 1. let arr2 = [...arr1];
 2. let user2 = {...user};
------------------------------------------------------------------------------------------------------------------------
클로저(Closure)
: 함수와 Lexical 환경의 조합
- 함수가 생성될 당시의 외부변수 기억
- 생성 이후에도 계속 접근 가능
- **은닉화 가능**
                                           1. 전역 Lexical 환경
ex) function makeAdder(x) {                   makeAdder : function / add3 : 초기화 X -> 2번이 실행되며 add3 : function
        return function(y) {                          ↑
            return x + y; } }                         ↑ 참조
    const add3 = makeAdder(3);             2. makeAdder Lexical 환경
    console.log(add3(2));                     x : 3   ↑ 참조
                                           3. 익명함수 Lexical 환경
                                              y : 2   
                                           -> add3 함수가 생성된 이후에도(makeAdder함수가 실행이 끝났음에도) 상위함수인 makeAdder의 x에 접근 가능
                                              == 클로저(Closure)
                                              
