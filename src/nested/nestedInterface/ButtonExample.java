package nested.nestedInterface;

public class ButtonExample {

	public static void main(String[] args) {
		//Button 객체 생성
		Button btnOK = new Button();
		Button btnCancle = new Button();
		
		//Button click Event 처리 클래스(Listener 클래스) 선언
		class OkListener implements Button.ClickListener {
			@Override
			public void onClick() {
				System.out.println("OK 버튼을 눌렀습니다.");				
			}
		}
		class CancleListener implements Button.ClickListener{
			@Override
			public void onClick() {
				System.out.println("Cancle 버튼을 눌렀습니다.");				
			}
		}
		
		//setter
		btnOK.setClickListener(new OkListener());
		btnCancle.setClickListener(new CancleListener());
		
		//Button이 클릭되었을 때
		btnOK.click();
		btnCancle.click();
	}

}
