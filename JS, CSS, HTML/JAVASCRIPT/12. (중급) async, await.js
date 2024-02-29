----- async, await 를 사용하면 .then(프라미스 참조)체이닝을 사용하는 것보다 가독성을 높힐 수 있음.

----- async 사용법
async function 함수명1() { return ~; } -> Promise 객체를 return함.
  - 따라서, 후에 함수명1().then(매개변수 => ~; ); 로 간단하게 사용 가능.
  - 매개변수에는 return 값이 들어감.
  - 함수가 예외가 발생하는 경우 reject 를 return 

----- await 사용법
async function 함수명2() {
  const result = await 함수명1();
}
- await 은 async 함수 내부에서만 사용가능
- 함수명1() 은 Promise를 return 하는 함수여야함. -> Promise를 return 할때까지 대기
- result 에는 함수명1의 return 값이 들어감

-- Promise.all 사용하고 싶을때
   const result = await Promise.all([]); 로 사용

----- 여러개의 요청에서 reject 될 시
try-catch 문을 이용하여 .catch(프라미스 참조) 대신 예외처리 가능. 
---------------------------------------------------------------------------------------------------------
----- Generator
: 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
- iterable
- 값을 미리 만들어두지 않음 -> 메모리 관리 좋음
  -> while(true) 안의 내용을 yield 로 설정 시 원할때마다 next() 로 값을 얻어낼 수 있음

- 사용법
ex) function* 함수명3(){
      yield 1;
      yield 2;
      yield 3;
      return "finish"; }
    const result = 함수명3();
  1. function 에 *을 붙여 사용
  2. 내부에서 yield 키워드 사용 - yield 에서 함수를 멈출 수 있음
  3. Generator 함수 실행시 Generator 객체를 return - 함수가 실행되지 않은 중지상태로 시작
                                                  - 시작하기 위해선 a.next() 해야함
  4. result[Symbole.iterator]() === a; -> true
     - 즉 iterable 이기에 for-of 사용가능
       ex) for(let num of result) -> num에는 value 값이 들어감 / done: true 될때까지 반복

  5. function* 함수명4(){ 
       yield* 함수명3(); } 를 통해 다른 Generator 함수를 불러올 수 있음

--- Generator 객체
1. a.next() : 가장가까운 yield 문을 만날때까지 실행 후 Data 객체 return / iterator의 메서드임. -> iterable 객체들은 next() 사용 가능
                                                                     / 사용하기 위해선 const result = iterable객체명[Symbol.iterator](); 후 result.next() 사용가능
                                                                     / 동일하게 Data 객체를 return 함
1-2. const result = yield "안녕"; 에서 
     a.next(value값); 사용시(매개변수 전달 시)
     : result에 value 값이 들어감
     
2. a.return('END') : 즉시 함수 종료, { value: "END", done: true } 됨
3. a.throw() : 즉시 catch 로 던지고, { value: undefined, done: true } 됨

--- Data 객체
{ value: yield옆데이터, done: true/false }
  - value 프로퍼티 : yield 에 설정한 데이터로 설정 X 시 undefined.
                  - **a.next() 로 함수 전체 실행이 끝나면, return 값이 value 에 들어감**
  - done 프로퍼티 : true -> 함수 전체 실행완료 / false -> 함수 전체 실행 완료 X

