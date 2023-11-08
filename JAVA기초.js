변수들은 모두 스택이라는 메모리 영역에 생성. 참조 타입 변수는 힙 메모리 영역에 주솟값 저장.
참조 변수 간의 비교는 주솟값을 비교함.

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
참조타입 참조변수 = null; //아무것도 참조하지 않고있다는 뜻. 이 상태에서 값 참조 시 NullPointerException 발생.
--------------------------------------------------------------------------------
문자열 - 불변
String a = '홍길동'의 ad == string b = '홍길동'의 ad
String a = new String("홍길동")의 ad != String b = new String("홍길동")의 ad
String객체명.length() - 길이 반환(int)
String객체명.charAt(int inedx) - 문자반환(char)
String객체명.indexOf(String str) - 문자열이 첫번째로 나타나는 index값 반환
String객체명.substring(int beginIndex) - 지정된 인덱스부터 끝까지의 문자열 반환(new)
String객체명.substring(int bI, int eI(n+1)) - 지정범위(n)까지의 문자열 반환(new)
String객체명.replace(원래문자열, 변경문자열) - 변경된 새 문자열 반환(동일 주소 참조 X) - new 사용 느낌
String객체명.toUpperCase() - 모든 문자 대문자 변환 후 반환(new)
String객체명.toLowerCase() - 모든 문자 소문자 변환 후 반환(new)
String객체명.equals(obj) - true/false 반환
String객체명.equalsIgnoreCase(String str) - 대소문자 상관 X true/false 반환
String객체명.startsWith(String str) - 해당 접두사 시작 여부 true/false 반환
String객체명.endsWith(String str) - 해당 접미사 끝 여부 true/false 반환
String객체명.contains(CharSequence s) - 특정 문자(열) 포함 여부 true/false 반환
String객체명.replace(기존문자(열), 변경문자(열)) - 변경문자로 바꾼 새 문자열 반환(new)
String객체명.split(정규표현식) - 정규표현식으로 문자열을 나눈 문자열 배열 반환(String[])
String객체명.trim() - 앞뒤 공백 제거 문자열 반환(new)
String객체명.valueOf(int, double, boolean, char, str) - 문자열 형태로 변환 후 반환(new)
String객체명.isEmpty() - 빈 문자열 여부 true/false
String객체명.concat(String str) - str을 뒤에 연결하여 반환(new)
