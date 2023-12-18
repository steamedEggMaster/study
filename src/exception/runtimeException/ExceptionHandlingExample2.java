package exception.runtimeException;

public class ExceptionHandlingExample2 {
	public static void printLength(String data) {
		try {
			int result = data.length(); //null 이면 NullPointerException 예외 발생.
			System.out.println("문자 수 : " + result);
		} catch(NullPointerException e) {
			//System.out.println(e.getMessage());
			e.printStackTrace();
		} finally {
			System.out.println("[마무리 실행]\n");
		}
	}
	
	public static void main(String[] args) {
		System.out.println("[포르그램 시작]\n");
		
		printLength("ThisisJava");
		printLength(null);
		
		System.out.println("[프로그램 종료]");
	}
}
