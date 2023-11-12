package singleTon;

public class Singleton {
	private static Singleton s;
	
	private Singleton() {}
	public static Singleton getSingletonInstance() {
		if(s == null) {
			s = new Singleton();
			return s;
		}
		else {
			return s;
		}
	}
}
