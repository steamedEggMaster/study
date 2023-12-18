package exception.throwsException;

public class ThrowsInMain {

	public static void main(String[] args) throws ClassNotFoundException  { //JVM 으로 연속 떠넘기기
			findClass();
	}
	
	public static void findClass() throws ClassNotFoundException { //main 에 떠넘기기
		Class.forName("java.lang.String2");
	}
}
