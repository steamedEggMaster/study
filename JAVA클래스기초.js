 //기본 생성자를 꼭꼭 만들어 주자
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
static{변수 초기화(복잡한 연산을 통한) / 정적 메서드 호출 / 예외처리 / 상수 초기화} - 정적 불록
static 메서드, static 블록 내부에는 (인스턴스 필드 / 인스턴스 메서드 / this) 사용 불가
        why? 객체가 없어도 실행이 가능해야 하기 때문에.
        but static메,블 내부에서 객체 생성 or 매개변수로 받은 후에는 해당 내부에서 인스턴스 필드,메서드 사용 가능.(ex main함수)
--------------------------------------------------------------------------------
final 필드 - 아래 두 방법 사용안하고 선언만 해놓으면 Compile Error
1. 필드 선언 시 초기값 대입
2. 생성자에서 초기값 대입
상수 - static final 타입 상수명
--------------------------------------------------------------------------------
패키지 - 여러 같은 이름의 클래스들을 구별하기 위해 사용
패키지.* - 패키지 안의 모든 "클래스" 만 import 하겠다는 뜻. Not 패키지.
자동 import 단축키 - Ctrl + Shift + O
if import 한 2개 이상의 패키지에 동일한 클래스 이름 존재 시, 패키지이름.클래스명 으로 사용!
--------------------------------------------------------------------------------
접근 제한자 - public / protected / private / default
사용범위 기억할 것!
--------------------------------------------------------------------------------
get필명&set필명 / is필명(boolean값 반환시)
-SingleTon Pattern 알아두기!-
--------------------------------------------------------------------------------
상속(다중상속 허용 X) - class 클명 extends 부모클명
상속받는->상속하는 형태의 그림으로 표현됨.
자식클명 객체명 = new 자식클명() - 부모 객체 생성 후 자식 객체 생성됨. / heap 메모리 상에 부모, 자식 둘다 생성되고 변수는 자식객체 주소를 참조
super() - 부모객체의 생성자 호출명령어 / this()와 동일하게 생성자의 첫 줄에 사용되어야 함!
super.메소드명() - 부모클래스의 메소드 호출
        사용 이유 : 부모메서드 코드에 몇줄만 추가하여 overriding하고 싶을때 똑같은 코드를 작성하는 비효율적인 작업을 줄이기 위해.

메소드 오버라이딩 - 부모클래스의 메소드 -> 자식클래스에서 재정의
1. 부모메소드와 선언부(리턴 타입, 메소드이름, 매개변수) 동일
2. 접근제한 부모메소드보다 강하게 불가(약하게는 가능)
3. 새로운 예외를 throw 불가.
@Override - 어노테이션(Annotation) = 컴파일러가 재정의를 한 것인지 확인하게 함
        ****부모클래스에 어떤 메서드를 Override 하고싶을 때 Ctrl + Space / Source가서 선택하면 Override할 함수를 쉽게 선택 가능함.****

final 클래스 - 자식클래스가 생성될 수 없는 클래스(extends 불가) / 접근제어자 final 클명{}
final 메서드 - Overriding 불가 메서드 / 접근제어자 final 반환타입 메명()
--------------------------------------------------------------------------------
protected - "다른 패키지의 상속받은" 클래스에서 부모필드,메서드를 사용가능하게 해주는 접근제어자
this.부모필드 / this.부모메서드 로 접근은 가능! "부모 객체를 생성해서 접근하는 것은 불가능!!" - 자식의 도리가 아니기 때문.
--------------------------------------------------------------------------------
클래스 타입변환
1. 자동 타입 변환(upcasting) - 부모클래스 객체명 = new 자식클래스();
    해당 객체는 only 부모클래스의 필드, 메서드만 접근가능
    if 메서드가 오버라이딩 되었다면, "자식클래스에서 오버라이딩한 함수"가 호출됨.
2. 강제 타입 변환(downcasting) - 자식클래스 객체명 = (자식타입) 부모클래스객체;
    upcasting된 객체를 다시 본래 자식클래스로 변환이 가능(다른 자식 no, upcasting한 해당 자식으로만 가능)

다형성(polymorpism) = 오버라이딩(Overriding) + 자동타입변환(upcasting)
    why 사용? 여러 객체를 처리하기 편하게 하려고(배열, call by reference 등에 사용)
    
객체명 instanceof 클래스명 - 해당 클래스의 instance 여부 true/false 반환.
    보통 자동타입변환된 객체의 강제타입변환을 위해 사용하는데 Java 12부터 
    if(부모객체명 instanceof 자식클래스명 자식객체명)
    을 제공하여 강제타입변환을 위한 추가작업을 하지 않아도 바로 강제타입변환된 자식객체를 사용할 수 있음.
--------------------------------------------------------------------------------
추상(abstract) 클래스 - 공통적인 필드,메서드를 선언 및 구현(필수 X)하여 "객체 생성 불가(upcasting은 가능)" 및 "상속전용으로 사용"
    필드, 메소드, 추상메소드, static, 상수 등 가질 수 있음
추상(abstract) 메서드 - abstract 반환타입 메소드명(); / 추상클래스 안에서만 가질 수 있음 / 자식클래스에서 구현 필수!(하고싶지 않다면 자식클래스에도 abstract 붙이기)
