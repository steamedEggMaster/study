package thread.multiThread;

import java.awt.Toolkit;

public class BeepPrintExample3 {

	public static void main(String[] args) {
		//작업 1
		//방법 2. Thread의 자식클래스를 생성하여 작업 스레드 생성 - 익명객체
		Thread thread = new Thread() {
			@Override
			public void run() {
				Toolkit toolkit = Toolkit.getDefaultToolkit();
				for(int i = 0; i < 5; i ++) {
					toolkit.beep(); //소리냄
					try {
						Thread.sleep(500);
					} catch (InterruptedException e) {}
				}
			}
		}; //익명 객체
		
		thread.start();
		
		//작업 2
		for(int i = 0; i < 5; i ++) {
			System.out.println("띵");
			try {
				Thread.sleep(500); //휴식시간
			} catch (InterruptedException e) {}
					
		}
		
	}

}
