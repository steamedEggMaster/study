(매개변수1, ...) -> { 처리 내용 } : 자바는 람다식을 "익명 구현 객체"로 변환.
==
new 인터페이스명() {
  @Override
  구현 함수(매개변수1, ...) { 처리 내용 } }

"인터페이스의 익명 구현 객체를 람다식으로 표현하려면, 인터페이스의 추상 메서드가 단 하나여야함.(함수형 인터페이스)" -> 상수, 디폴트, 정적 메서드들은 여러 개 있어도 됨.
@FunctionalInterface 어노테이션이 있음.
-------------------------------------------------------------------------------------------
매개변수가 없는 람다식
() -> { 처리 내용 }
-------------------------------------------------------------------------------------------
매개변수가 있는 람다식
(매개변수1, ...) -> { 처리 내용 }
매개변수 1, 처리내용 1 일 경우
매개변수 -> 처리내용
-------------------------------------------------------------------------------------------
리턴값이 있는 람다식
1. (매개변수1, ...) -> { 계산 처리 내용 } 
2. 
(매개변수1, ...) -> {
  처리 내용;
  return 리턴값;
}
-------------------------------------------------------------------------------------------
메서드 참조 - 목적 : 메소드를 참조하여 매개변수의 정보 및 리턴 타임을 알아내 람다식에서 불필요한 매개변수를 제거하는 것
정적메서드 참조 - "클래스명 :: 정적메소드명" == (x, y) -> 클래스명.정적메소드명(x, y)
인스턴스메서드 참조 - "객체명 :: 인스턴스메소드명" == (x, y) -> 객체명.인스턴스메소드명(x, y)

methodReference 예제 잘보기
-------------------------------------------------------------------------------------------
매개변수의 메서드 참조
(a, b) -> { a.인스턴스메서드(b); } == a의클래스명::인스턴스메서드 //정적메서드 참조 작성방법과 동일하지만, a의 인스턴스 메서드가 사용되는것이 다름.
//매개변수의 개수는 각각 다름, 예시일뿐
a -> a.인스턴스메서드() == a의클래스명::인스턴스메서드
aReference 예제 잘보기
-------------------------------------------------------------------------------------------
생성자 참조 - 객체를 생성하는 것
"람다식을 단순히 객체를 생성 후 리턴하도록 구성 시 생성자 참조로 대체 가능"
(a, b) -> { return new 클래스명(a, b); } == 클래스명::new
