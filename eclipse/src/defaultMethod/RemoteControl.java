package defaultMethod;

public interface RemoteControl {
	//추상 메서드
	public abstract void turnOn(); //public을 안붙여도 public이 자동으로 붙음.
	void turnOff();
	void setVolume(int volume);
	
	//상수 필드
	public static final int MAX_VOLUME = 10;
	int MIN_VOLUME = 0;
	
	public default void setMute(boolean mute) {
		if(mute) {
			System.out.println("무음 처리합니다.");
			setVolume(MIN_VOLUME); //구현 객체가 있어야 실행이 가능함.
		}
		else
			System.out.println("무음 처리합니다.");
	}
}
