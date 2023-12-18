package generic.genericWildCard;

public class Course {
	//모든 사람이면 등록 가능
	public static void registerCourse1(Applicant<?> applicant) {
		System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) Course1을 등록함.");
	}
	
	//학생만 등록 가능 // extends 를 통해 해당 클래스와 자식 클래스들을 넣을 수 있음.
	public static void registerCourse2(Applicant<? extends Student> applicant) {
		System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) Course1을 등록함.");
	}
	
	//직장인 및 일반인만 등록 가능 // super 을 통해서 자신 클래스와 부모클래스 넣는 것이 가능함.
	public static void registerCourse3(Applicant<? super Worker> applicant) { 
		System.out.println(applicant.kind.getClass().getSimpleName() + "이(가) Course1을 등록함.");
	}
}
