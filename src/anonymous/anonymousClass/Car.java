package anonymous.anonymousClass;

public class Car {
	private Tire tire1 = new Tire();
	private Tire tire2 = new Tire() { //1. 필드값으로 들어가는 익명 객체
		@Override
		public void roll() {
			System.out.println("익명 자식 Tire 객체1이 굴러갑니다.");
		}
	};
	
	public void run1() {
		tire1.roll();
		tire2.roll();
	}
	
	public void run2() {
		Tire tire = new Tire() { //2. 로컬 변수로 들어가는 익명 객체
			@Override
			public void roll() {
				System.out.println("익명 자식 Tire 객체2가 굴러갑니다.");
			}
		};
		tire.roll();
	}
	
	public void run3(Tire tire) { //3. 매개 변수로 들어가는 익명 객체 CarExample에 있음.
		tire.roll();
	}
}
