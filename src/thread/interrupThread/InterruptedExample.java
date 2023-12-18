package thread.interrupThread;

public class InterruptedExample {

	public static void main(String[] args) {
		Thread thread = new PrintThread();
		
		thread.start();
		
		thread.interrupt();
	}

}
