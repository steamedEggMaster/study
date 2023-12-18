package exception.throwsException;

public class ThrowsExample {

	public static void main(String[] args) {
		//findClass(); //throws 에 대한 예외처리를 안하여 오류 발생
		try {
			findClass();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static void findClass() throws ClassNotFoundException {
		Class.forName("java.lang.String2");
	}
}
