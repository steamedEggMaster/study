package enumulate;

import java.util.Calendar;

public class WeekExample {

	public static void main(String[] args) {
		//열거 타입 변수 선언
		Week today = null;
		//열거 값 대입
		today = Week.THURSDAY;
		//컴퓨터에 요일 정보 얻기
		Calendar now = Calendar.getInstance();
		int day = now.get(Calendar.DAY_OF_WEEK);
		switch(day) {
		case 1:today = Week.MONDAY; break;
		case 2:today = Week.TUESDAY; break;
		case 3:today = Week.WEDNESDAY; break;
		case 4:today = Week.THURSDAY; break;
		case 5:today = Week.FRIDAY; break;
		case 6:today = Week.SATURDAY; break;
		case 7:today = Week.SUNDAY; break;
		}
		//열거 값 비교
		if(today == Week.FRIDAY)
			System.out.println("Today is a fire Friday");
		else
			System.out.println("Today is not a fire Friday");
	}
}
