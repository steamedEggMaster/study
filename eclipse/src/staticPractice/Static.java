package staticPractice;

class StaticSub {
	public static void heart() {
		System.out.println("heart 메서드");
	}
}


public class Static {
	public void happy() {}
	public static void love() {
		System.out.println("love 메서드");
	}
	public static void main(String[] args) {
		love();
		// this. 사용불가
		Static s = new Static();
		s.happy();
		//happy() 불가
		StaticSub.heart();
	}

}
