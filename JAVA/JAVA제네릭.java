Object 타입 - 모든 클래스의 최상위 부모 클래스. 어떤 객체든 대입 가능해짐. - downcasting할때 모든 클래스 타입을 검사할 수 없어 값을 얻어올 때 매우 좋지 않음.
**AutoBoxing(오토박싱) : 기본 자료형(100, "Hello" 등)을 저장하면 자동으로 "WrapperClass"의 객체로 변환.**
return new 클명();   

1. 제네릭 - 결정되지 않은 타입을 파라미터로 처리하고 실제 사용시 파라미터를 구체적인 타입으로 대체시킴.
[접근제어자] class 클명A <T> {
  [접근제어자] T 변수명;
}
클명A<타입> 객체명 = new 클명A<타입>(); == 클명A<타입> 객체명 = new 클명A<>();
------------------------------------------------------------------------------------------
2. 제네릭 타입 - 결정되지 않은 타입을 파라미터로 가지는 "클래스"와 "인터페이스".
[접근제어자] class 클명<A,B,C...> {...}
[접근제어자] interface 클명<A,B,C...> {...}
외부에서 객체 생성 시 "구체적인 타입을 전부 지정"해줘야함. 안 그럴시 "Object 타입이 자동으로" 사용됨. - 파라미터에 대입되는 타입들은 Object의 자식클래스이기에 Object의 메서드 사용가능.
------------------------------------------------------------------------------------------
3. 제네릭 메소드 - 타입 파라미터를 가지고 있는 메서드
ex) 
public static <T> BoxGM<T> boxing(T t){
	BoxGM<T> box = new BoxGM<>();
	box.setT(t);
	return box;
}
------------------------------------------------------------------------------------------
제한된 타입 파라미터 - 타입 파라미터에 구체적인 타입을 제한.
[접근제한자] <T extends 상위타입> 리턴타입 메소드(매개변수1, ...) { ... } - Object 클래스, 상위타입 클래스의 메소드 다 사용가능해짐.
------------------------------------------------------------------------------------------
와일드카드 타입 파라미터 - 제네릭 타입을 "매개값" 이나 "리턴값"으로 사용 시 타입 파라미터로 ?(와일드카드)를 사용
genericWildCard 예제 잘 확인하기.
Person - applicant - Course - WildCardExample 순
