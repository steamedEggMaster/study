package thread.stopThread;

public class SafeStopExample {

	public static void main(String[] args) {
		PrintThread printThread = new PrintThread();
		printThread.setStop(true);
		printThread.start();
		try {
			Thread.sleep(3000);
		} catch(InterruptedException e) {}
		printThread.setStop(false);
	}
}
