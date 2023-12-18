package thread.multiThread;

import java.awt.Toolkit;

public class BeepPrintExample {

	public static void main(String[] args) {
		//작업 1
		Toolkit toolkit = Toolkit.getDefaultToolkit();
		for(int i = 0; i < 5; i ++) {
			toolkit.beep(); //소리냄
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {}
			
		}
		
		//작업 2
		for(int i = 0; i < 5; i ++) {
			System.out.println("띵");
			try {
				Thread.sleep(500); //휴식시간
			} catch (InterruptedException e) {}
					
		}
		
	}

}
