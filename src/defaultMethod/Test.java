package defaultMethod;

public class Test {

	public static void main(String[] args) {
		RemoteControl s = new Television();
		s.turnOn();
		s = new Audio();
		s.turnOn();
		System.out.println(RemoteControl.MAX_VOLUME);
		
		s.setMute(true);
	}

}
