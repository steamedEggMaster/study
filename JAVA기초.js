.java(소스 파일) complie -> .class(바이트 코드 파일)
클래스를 클래스 로더를 이용해 메소드영억에 클래스(정적 필드, 정적 메서드)를 로딩함.
변수들은 모두 스택이라는 메모리 영역에 생성. 참조 타입 변수는 힙 메모리 영역에 주솟값 저장.
참조 변수 간의 비교는 주솟값을 비교함.

Scanner 스캐너명 = new Scanner(System.in);
스캐너명.next() - 공백으로 문자열 구분 후 한 단어씩 반환
스캐너명.nextInt() - 문자열을 int로 변환 후 반환
스캐너명.nextDouble() - 문자열을 double로 변환 후 반환
스캐너명.nextBoolean() - 불린 값 반환
스캐너명.nextLine() - 문자열 한줄 전체 반환
--------------------------------------------------------------------------------
정수 타입 연산 결과 -> int 타입! -> 부호 변경(-)도 연산 -> int타입 변수에 대입해야함.

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
for(타입 변수 : 배열명){~}
* do-while
do{~}while(조건식); //세미클론 필수
**레이블명: for 등으로 반복문에 이름을 정해줄 수 있고, break 레이블명;으로 해당 레이블명을 빠져나간다.**\
--------------------------------------------------------------------------------
참조타입 참조변수 = null; //아무것도 참조하지 않고있다는 뜻. 이 상태에서 값 참조 시 NullPointerException 발생.
--------------------------------------------------------------------------------
문자열 - 불변
String a = '홍길동'의 ad == string b = '홍길동'의 ad
String a = new String("홍길동")의 ad != String b = new String("홍길동")의 ad
*String객체명.length() - 길이 반환(int)
*String객체명.charAt(int inedx) - 문자반환(char)
*String객체명.indexOf(String str) - 문자열이 첫번째로 나타나는 index값 반환 / 없으면 -1 반환
String객체명.substring(int beginIndex) - 지정된 인덱스부터 끝까지의 문자열 반환(new)
String객체명.substring(int bI, int eI(n+1)) - 지정범위(n)까지의 문자열 반환(new)
String객체명.toUpperCase() - 모든 문자 대문자 변환 후 반환(new)
String객체명.toLowerCase() - 모든 문자 소문자 변환 후 반환(new)
*String객체명.equals(obj) - 문자열을 비교하여 true/false 반환
String객체명.equalsIgnoreCase(String str) - 대소문자 상관 X true/false 반환
String객체명.startsWith(String str) - 해당 접두사 시작 여부 true/false 반환
String객체명.endsWith(String str) - 해당 접미사 끝 여부 true/false 반환
*String객체명.contains(CharSequence s) - 특정 문자(열) 포함 여부 true/false 반환
*String객체명.replace(기존문자(열), 변경문자(열)) - 변경문자로 바꾼 새 문자열 반환(new)
*String객체명.split(정규표현식) - 정규표현식으로 문자열을 나눈 문자열 배열 반환(String[])
String객체명.trim() - 앞뒤 공백 제거 문자열 반환(new)
String객체명.isEmpty() - 빈 문자열 여부 true/false
String객체명.concat(String str) - str을 뒤에 연결하여 반환(new)

문자열 -> 여러 타입으로 변환
byte 바이트명 = Byte.parseByte(str);
short 쇼트명 = Short.parseShort(str);
int 인트명 = integer.parseInt(str);
long 롱명 = Long.parseLong(str);
float 플롯명 = Float.parseFloat(str);
double 더블명 = Double.parseDouble(str);
boolean 불린명 = Boolean.parseBoolean(str);
여러 타입 -> 문자열 변환
String객체명.valueOf(int, double, boolean, char, str)
--------------------------------------------------------------------------------
배열(Array) - 생성 후 길이 변경 불가.
1. 타입[] 변수 = new 타입[n]; //타입별 기본 값으로 초기화 //참조 타입 배열 -> null로 초기화
2. 타입[] 변수; 변수 = new 타입[] {~,~,~}; //그냥 {~,~,~}시 컴파일 에러
3. 타입[] 변수 = {~,~,~};
** 배열을 함수에 call by reference 시 함수명(new 타입[] {~,~,~}) 이렇게 해줘야함
배열명.length - 길이 반환
배열 복사 - System.arraycopy(원본배열, 복사시작index, 새배열, 새배열 붙여넣을시작 index, 복사항목수(배열명.length))
         - address를 복사하기 때문에 동일한 address를 참조.
--------------------------------------------------------------------------------
enum - 열거 타입. - 상수 값을 이용해 가독성을 높임. - eclipse에 실습 있음.
--------------------------------------------------------------------------------
객체(클래스의 인스턴스) - 필드 + 메서드 / 클래스(객체를 만드는 설계도) - 필드 + 생성자 + 메서드
필드 = 객체의 데이터가 저장되는 곳
생성자 = 객체 생성 시 초기화 역할 담당
메서드 = 객체의 동작으로써 호출 시 실행하는 블록
변수는 stack 영역, 객체는 Heap 영역에 생성
하나의 파일에는 하나의 public 클래스만 존재해야함.
class명 객체명 = new 클래스명() // 클래스명() = 생성자 호출
this.필드명 / 
this() - 생성자의 첫 줄에 사용되어야 한다!!
** 생성자 오버로딩(overloading) - 매개변수의 타입, 갯수, 순서가 다른 생성자 **//필드의 다양한 초기화
--------------------------------------------------------------------------------
메서드 - 객체 내부에서는 메서드명()으로 호출가능 / 외부에서는 객체명.메서드명()
* int add(int ... 매개변수명)
- 가변길이 매개변수(, , ,)로 call 가능 
- 배열 변수라고 생각하면 됨(배열의 call by reference 방법으로도 사용 가능) -> 해당 메서드 내에서 배열 취급.
메서드 내 반복문안에서 return 호출 시 그 뒤의 문장들 실행하지 못함 -> Error 발생
** 메서드 오버로딩(overloading) - 매개변수의 타입, 갯수, 순서가 다른 메서드 **//매개값의 다양한 처리 ex)print메서드
--------------------------------------------------------------------------------
인스턴스 멤버 - 객체를 생성해야만 사용 가능한 멤버
메서드는 객체에 소속됨. Not 객체에 포함됨.

정적 멤버 - 클래스에 고정된 멤버(정적 필드, 정적 메서드)
static 필드명 / static 반환타입 메서드명()
클래스명.static필드명 / 클래스명.static메서드명()으로 사용가능!! Not 객체명!!
static{변수 초기화(복잡한 연산을 통한) / 정적 메서드 호출 / 예외처리} - 정적 불록
static 메서드, static 블록 내부에는 (인스턴스 필드 / 인스턴스 메서드 / this) 사용 불가
        why? 객체가 없어도 실행이 가능해야 하기 때문에.
        but static메,블 내부에서 객체 생성 후에는 해당 내부에서 인스턴스 필,메,this 사용 가능.(ex main함수)

    
