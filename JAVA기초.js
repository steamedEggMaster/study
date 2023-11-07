변수들은 모두 스택이라는 메모리 영역에 생성. 참조 타입 변수는 힙 메모리 영역에 주솟값 저장.

정확한 계산을 위해선 실수보다는 정수 연산으로 수행할 것.

0으로 나누는 것은 ArithmaticException 예외발생
x / 0.0 -> Infinity
x % 0.0 -> NaN
두 상태에서 연산 수행 시 계속 Infinity and NaN 나옴. -> Double.isInfinite(변수) / Double.isNaN(변수)를 통해 t or f 반환.
--------------------------------------------------------------------------------
논리 연산자 - &&, ||, ^, !
비트 연산자 - &, |, ^, ~
비트 이동 연산자 - <<, >>, >>>
삼항(조건) 연산자 - 조건식 ? 값(연산식) : 값(연산자)
--------------------------------------------------------------------------------
조건문 - if, switch
* switch
switch(변수){ //정수, 문자열 타입만 가능.
    case 값1: ~~ break; //break없으면 break가 있는 case까지의 모든 명령어 실행.
    case 값2: ~~ break;
    default: ~~ }
switch(변수){ //break을 없애고 ->을 이용한 Expression 사용.
    case 값1, 값2 ... -> { ~~ }
**변수에 대입도 가능해짐.**
타입 변수 
--------------------------------------------------------------------------------
반복문 - for, while, do-while
* for
for(초기화식; 조건식; 증강식){~} //2개 이상의 식을 사용 가능. //초기화식에선 float(부동 소수점) 사용 XXXX.
* do-while
do{~}while(조건식); //세미클론 필수
레이블명: for 등으로 반복문에 이름을 정해줄 수 있고, break 레이블명;으로 해당 레이블명을 빠져나간다.
--------------------------------------------------------------------------------
