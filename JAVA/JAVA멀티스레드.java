멀티스레드 : 하나의 프로세스에서 두가지 이상의 작업을 동시에 처리하는 것. / 하나의 스레드 문제 발생 -> 전체 스레드에 영향을 미침.
ex) 게임, 클라이언트-서버
스레드 : 코드의 실행 흐름.
---------------------------------------------------------------------------------------------
모든 자바 프로그램은 메인스레드가 main()메소드를 실행하면서 시작. -> main()메소드의 마지막코드 or return 만나면 실행 종료.
자바는 작업 스레드를 객체로 관리 - Thread 객체명 = Thread.currentThread(); System.out.println(currThread.getName());
멀티스레드에서는 실행중인 스레드가 존재 시 프로세스 종료 X.
---------------------------------------------------------------------------------------------
1. Thread클래스로 작업 스레드 객체 직접 생성 - Thread 스레드객체명 = new Thread(Runnable 객체명); //Runnable upcasting
2. Thread의 자식클래스를 정의하여 작업 스레드 생성 - Thread 스객명 = new Thread() { run() 오버라이딩 };
3. Runnable 인터페이스 구현 후 사용 - 
class 구현클명 implements Runnable {
  @Override
  public void run() {
    //스레드가 실행할 코드
  }}
Runnable 객체명A =  new 구현클명(); //upcasting
Thread thread = new Thread(객체명A);

스레드객체명.start(); - run() 함수 실행. - 메인스레드와 동시 실행됨. //Runnable의 run과 Thread의 run은 다른것임.
Thread.sleep(숫자); - 스레드의 쉬는시간을 설정.
예제 - multiThread - BeepPrintExample1,2,3
