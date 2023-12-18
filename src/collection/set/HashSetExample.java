package collection.set;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class HashSetExample {

	public static void main(String[] args) {
		Set<String> set = new HashSet<String>();
		
		
		//객체 저장
		set.add("Java");
		set.add("JDBC");
		set.add("JSP");
		set.add("Java");
		set.add("Spring");
		
		//저장된 객체 수 출력
		int size = set.size();
		System.out.println("총 객체 수 : " + size);
		
		//객체를 하나씩 가져와서 처리
		Iterator<String> iterator = set.iterator();
		while(iterator.hasNext()) {
			//객체 하나 가져오기
			String element = iterator.next();
			System.out.println(element);
			if(element.equals("JSP")) {
				//가져온 객체를 Set에서 제거
				iterator.remove();
			}
		}
		System.out.println();
		
		//객체 제거
		set.remove("JDBC");
		
		//객체를 하나씩 가져와서 처리
		for(String element : set) {
			System.out.println(element);
		}
	}

}
