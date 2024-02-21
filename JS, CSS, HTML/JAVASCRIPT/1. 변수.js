세미콜론 붙여야함

----- console.log()
      - console.log(String(3), String(null)) 처럼 , 로 구분하여 
                                             "3" "null" 로 콘솔에 출력 가능

----- 정의한 변수를 재정의하지 못하게 하는 방법
1. let 변수명 = ~;
   - 위처럼 정의 후 동일한 변수명으로 
     let 변수명 = ~!; 을 후에 재정의한다면 syntaxError 발생
     - 변수명 = ~!; 로 재정의 가능
2. const 변수명 = ~;
   - 후에 재정의 아예 불가

----- 문자열 정의
1. "~".
2. '~'.
3. `~` - `my name is ${변수명}` 처럼 포매팅 시킬때 사용

----- 숫자
/ : 몫
  - N/0 : infinity
  - "문자열"/N : NaN
    - "숫자문자열" 은 숫자로 자동 형변환 됨
% : 나머지

typeof 연산자
사용법 ex) console.log(typeof 3); -> "number" 출력
           console.log(typeof null); -> "object" 출력 , but null 은 object 아님.

----- 대화상자
1. alert() : 알려줌 - 확인 버튼만 존재
           - ex) alert("안녕하세요");
2. prompt() : 입력받음
            - ex) const name = prompt("이름 입력");
            - ex) alert(`안녕하세요. ${name}님`); - 입력된 값이 $(name)으로 들어감
            - 2개의 인자를 줄 수 있음
              ex) const name = prompt("예약일 입력", "2020-10-"); -> 입력칸에 2변째 인자값이 미리 들어가 있음
3. confirm() : 확인받기 - 취소 확인 버튼 존재 
                         -> 확인(true return)/ 취소(false return)
             - ex) const isAdult = confirm("당신은 성인입니까?"); 

! 단점 1. 대화상자 열려있는 동안 창 일시정지
       2. 스타일링 불가

----- 명시적 형변환
1. String() : 문자형으로 변환
2. Number() : 숫자형으로 변환
            - Number(true) -> 1 / Number(false) -> 0
            - Number("숫자qwer") -> NaN
            - Number(null) -> 0
            - Number(undefined) -> Nan
3. Boolean() : 불린형으로 변환
             - 0/빈문자열/null/undefined/NaN -> false return
