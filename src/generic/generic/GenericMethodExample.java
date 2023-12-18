package generic.generic;

public class GenericMethodExample {
	public static <T> BoxGM<T> boxing(T t){
		BoxGM<T> box = new BoxGM<>();
		box.setT(t);
		return box;
	}
	public static void main(String[] args) {
		BoxGM<Integer> box1 = boxing(100); //AutoBoxing
		int intValue = box1.getT(); //AutoUnboxing
		System.out.println(intValue);
		
		BoxGM<String> box2 = boxing("박찬영");
		String strValue = box2.getT();
		System.out.println(strValue);
	}

}
