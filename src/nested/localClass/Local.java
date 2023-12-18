package nested.localClass;

public class Local {
	
	public void method(/*final*/ int arg) {
	  /*final*/	int var = 1;
		System.out.println("method(3) 실행");
		class B{
			public void method2() {
				System.out.println("method2() 실행");
				System.out.println(var);
				//로컬 클래스 안에서 로컬 변수가 사용될 경우 로컬 변수 값을 변경하는 코드로 인해 오류 발생.
				//오류를 잡기 힘듬 -> 주의할 것.
				System.out.println(arg);
				//Local variable var, arg defined in an enclosing scope must be final or effectively final
			}
		}
		B b = new B();
		b.method2();
		//var = 2;
		//arg = 2;
		
		//System.out.println(var); 이렇게 하면 var=2, arg=2코드가 오류 발생 X
		//System.out.println(arg);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Local local = new Local();
		local.method(3);
	}

}
