Object 타입 - 모든 클래스의 최상위 부모 클래스. 어떤 객체든 대입 가능해짐. - downcasting할때 모든 클래스 타입을 검사할 수 없어 값을 얻어올 때 매우 좋지 않음.
제네릭 - 결정되지 않은 타입을 파라미터로 처리하고 실제 사용시 파라미터를 구체적인 타입으로 대체시킴.
[접근제어자] class 클명A <T> {
  [접근제어자] T 변수명;
}
클명A<타입> 객체명 = new 클명A<타입>(); == 클명A<타입> 객체명 = new 클명A<>();
