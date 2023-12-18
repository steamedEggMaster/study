package thread.multiThread;

import java.awt.Toolkit;

public class BeepPrintExample2 {

	public static void main(String[] args) {
		//작업 1
		//방법 1. Thread클래스를 이용하여 작업 스레드 생성
		Thread thread = new Thread(new Runnable() { //Runnable 인터페이스의 추상메서드 run을 정의한것.
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
		});
		thread.start(); //run() 실행
		
		//작업 2
		for(int i = 0; i < 5; i ++) {
			System.out.println("띵");
			try {
				Thread.sleep(500); //휴식시간
			} catch (InterruptedException e) {}
					
		}
		
	}

}
