인터페이스 - 다형성 구현에 핵심, 모든 인터페이스의 추상메서드들을 구현해야함. / 사용자 - 리모콘(interface) - TV(interface의 메서드들을 구현한 객체) 생각하기
[접근제어자] interface 인터명 {
1.  [public static final] 필드 - 값 대입 필수 / 인터명.필드명으로 접근
2.  [public abstract] 메서드
3.  [public] default 메서드
4.  [public] static 메서드
5.  private 메서드
6.  private static 메서드 }
[접근제어자] class 구현클명 implements 인터명1, .. { 인터명들의 메서드 구현 }
구현클명 객체명 = new 구현클명();

default 메서드 - 인터페이스에서 실행코드를 가진 메소드, 구현 객체가 있어야지만 사용이 가능함(객체 소속 메서드).
    사용 이유 : 인터페이스를 구현하는 모든 객체에서 동일한 역할을 하는 메서드 작성을 줄이기 위해
               구현클래스에서 Overriding도 가능함. - public returntype 메서드명() 으로 구현클래스에서 override //defualt 예약어 사용안함.

static 메서드 - 인터페이스에서 실행코드를 가진 메소드, 구현 객체 없이도 사용 가능한 (인터페이스 소속 메서드)
               인터명.static메서드명() 으로 접근

private 메서드 - default 메서드, static 메서드의 중복된 코드 작성을 줄이기 위해 사용.
--------------------------------------------------------------------------------
다중 인터페이스 구현
인터명1 객체명 = new 구현클명(); 
인터명2 객체명 = new 구현클명();
--------------------------------------------------------------------------------
인터페이스 간 상속 - [접근제어자] interface 자식인터명 extends 부모인터명1, 부모인터명2, ... {...} - "다중상속 가능"
ex) interface 자식인터명 extends 부모인터명1, 부모인터명2 이고 각각 1개의 추상메서드를 가질때, 구현클래스에서 총 3개의 메서드를 override해야 하고, 각각의 인터페이스에 upcasting 가능.
--------------------------------------------------------------------------------
인터페이스 타입변환
인터명 객체명 = new 구현클명(); "upcasting"
public void 함수명(인터명 객체명) <- "매개변수 upcasting"
구현클명 객체명 = (구현클명) upcasting객체명; "downcasting"
--------------------------------------------------------------------------------
다형성 = overriding + upcasting
upcasting객체 instanceof 구현클명 - 구현클명으로부터 upcasting된건지 true/false 반환하는 연산자
--------------------------------------------------------------------------------
봉인된(sealed) 인터페이스
[접근제어자] sealed interface 인터명 permits 자식인터명1, ... {}
[접근제어자] sealed / non-sealed interface 자식인터명1 extends 인터명 {}
