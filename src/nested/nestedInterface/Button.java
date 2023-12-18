package nested.nestedInterface;

public class Button {
	//feild
	private ClickListener clickListener; //static을 이용해 내부에서 upcasting을 처리하게끔 생성.
	
	//method
	public void setClickListener(ClickListener clickListener) {
		this.clickListener = clickListener;
	}
	public void click() {
		clickListener.onClick();
	}
	
	//nested interface
	public static interface ClickListener{ //static이어야 사용이 쉽네.
		void onClick();
	}
}
