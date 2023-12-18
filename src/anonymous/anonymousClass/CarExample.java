package anonymous.anonymousClass;

public class CarExample {

	public static void main(String[] args) {
		Car car = new Car();
		
		car.run1();
		
		car.run2();
		
		car.run3(new Tire() { //Tire을 상속한 자식익명클래스를 매개변수로 넘김
			@Override
			public void roll() {
				System.out.println("익명 자식 Tire 객체3이 굴러갑니다.");
			}
		});
	}

}
