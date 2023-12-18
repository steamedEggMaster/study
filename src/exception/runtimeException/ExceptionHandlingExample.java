package exception.runtimeException;

public class ExceptionHandlingExample {
	public static void printLength(String data) {
		int result = data.length(); //null 이면 NullPointerException 예외 발생.
		System.out.println("문자 수 : " + result);
	}
	
	public static void main(String[] args) {
		System.out.println("[포르그램 시작]\n");
		
		printLength("ThisisJava");
		printLength(null);
		
		System.out.println("[프로그램 종료]");
	}
}
