package defaultMethod;

public class Television implements RemoteControl {
	private int volume;
	
	@Override
	public void turnOn() {
		System.out.println("TV를 켭니다.");
	}
	@Override
	public void turnOff() {
		System.out.println("TV를 끕니다");
	}
	@Override
	public void setVolume(int voulume) {
		if (volume > RemoteControl.MAX_VOLUME) {
			this.volume = RemoteControl.MAX_VOLUME;
		}
		else if (volume < RemoteControl.MIN_VOLUME) {
			this.volume = RemoteControl.MIN_VOLUME;
		}
		else {
			this.volume = voulume;
		}
		System.out.println("현재 볼륨" + this.volume);
	}
	@Override
	public void setMute(boolean mute) { //public이 있어야하고 default는 없애야 함.
		
	}
}
