package polymorphism;

class Tire{
	public void roll() {
		System.out.println("타이어 장착");
	}
}
class HTire extends Tire{
	@Override
	public void roll() {
		System.out.println("한국타이어로 교체");
	}
}
class KTire extends Tire{
	@Override
	public void roll() {
		System.out.println("금호타이어로 교체");
	}
}
class Car{
	Tire tire;
	public void run() {
		tire.roll();
	}
}
public class CarTest {

	public static void main(String[] args) {
		Car mycar = new Car();
		
		mycar.tire = new Tire();
		mycar.run();
		
		mycar.tire = new HTire();
		mycar.run();
		
		mycar.tire = new KTire();
		mycar.run();
	}

}
