package interfaceTest;

public interface RemoteControl {
	//추상 메서드
	public abstract void turnOn(); //public을 안붙여도 public이 자동으로 붙음.
	void turnOff();
	void setVolume(int volume);
	
	//상수 필드
	public static final int MAX_VOLUME = 10;
	int MIN_VOLUME = 0;
}
