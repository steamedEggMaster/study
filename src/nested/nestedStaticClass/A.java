package nested.nestedStaticClass;

public class A {
	//field
	//contructor
	//method
	public void methodA() {
		System.out.println("methodA() 실행");
	}
	public static void sMethodA() {
		// methodA(); 객체가 있어야지만 사용이 가능하므로 static 메서드 안에서 사용 불가.
	}
	
	
	
	
	
	//인스턴스 멤버 클래스
	public class B{
		//field
		//contructor
		//method
		public void methodB() {
			System.out.println("methodB() 실행");
		}
	}
	//static B field2 = new B(); B클래스는 A가 있어야지만 생성이 가능하기 때문에 static필드를 생성할 수 없음.
	
	
	
	
	
	//정적 멤버 클래스
	public static class C{
		public void methodC() { //A.C.methodC()로 사용이 가능하다는 거지.
			System.out.println("methodC() 실행");
		}
	}
	//정적 클래스 필드
	static C field1 = new C(); //A의 객체와 상관 없는 클래스를 넣어야하니깐 C만 되는 것.
	//정적 클래스
	public static void sMethod() {
		C c = new C();
		c.methodC();
	}
	
	
	
	//로컬 클래스
}
