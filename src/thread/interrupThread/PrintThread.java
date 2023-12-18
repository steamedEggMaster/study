package thread.interrupThread;

public class PrintThread extends Thread {
	@Override
	public void run() {
	/*	try {
			while(true) { // 1번 방법 - 일시정지 만들어서 하는 방법
				System.out.println("실행중...");
				Thread.sleep(1);
			}
		} catch(InterruptedException e) {
			System.out.println(e.getMessage());
		} */
		
	/*	while(true) { // 2번 방법 - 일시 정지 없이 interrupt() 함수의 호출 여부로 반복문 빠져나가기
			System.out.println("실행중...");
			if(Thread.interrupted()) { //static 함수
				break;
			}
		} */
		
		
		while(true) { // 3번 방법 - 일시 정지 없이 interrupt() 함수의 호출 여부로 반복문 빠져나가기
			System.out.println("실행중...");
			if(this.isInterrupted()) { //이 코드 이전에 interrupt() 함수가
									   //한번이라도 호출되었다면 true
				break;
			}
		}
		System.out.println("리소스 정리");
		System.out.println("실행 종료");
	}
}
