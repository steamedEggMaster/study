package generic.generic;

public class GenericExample {
	public static void main(String[] args) {
		Box1 box1 = new Box1(); 
		box1.content = "100";
		
		Box1 box2 = new Box1();
		box2.content = "100";
		
		Box1 box3 = new Box1();
		box3.content = 100;
		
		boolean result1 = box1.compare(box2);
		System.out.println(result1);
		boolean result2 = box1.compare(box3); 
		//다른 타입의 객체와도 비교하기 위해 타입파라미터를 설정하지 않음.
		//Object 타입으로 upcasting하는 reference
		System.out.println(result2);
	}
}
