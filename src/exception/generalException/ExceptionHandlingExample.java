package exception.generalException;

public class ExceptionHandlingExample {

	public static void main(String[] args) {
		
		try {
			Class.forName("java.lang.String");
			System.out.println("주어진 클래스는 있습니다.");
		} catch (ClassNotFoundException e) {
			System.out.println("주어진 클래스는 없습니다.");
		}
		
		System.out.println();
		
		try {
			Class.forName("java.lang.String2");
			System.out.println("주어진 클래스는 있습니다.");
		} catch (ClassNotFoundException e) {
			System.out.println("주어진 클래스는 없습니다.");
		}
	}

}
