package methodReference;

public class LambdaExample {

	public static void main(String[] args) {
		Person person = new Person();
		
		//정적 메서드 참조
		person.action((x, y) -> { return Computer.staticMethod(x, y); });
		person.action(Computer::staticMethod);
		
		//인스턴스 메서드 참조
		Computer com = new Computer();
		
		person.action((x, y) -> com.instanceMethod(x, y));
		person.action(com::instanceMethod);
	}

}
