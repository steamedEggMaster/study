package all;

import java.util.HashMap;
import java.util.Map;

public class D {
	public static void main(String[] args) {
        // HashMap 생성
        Map<String, Integer> myMap = new HashMap<>();

        // 데이터 추가
        myMap.put("One", 1);
        myMap.put("Two", 2);
        myMap.put("Three", 3);

        System.out.println("삭제 전 맵: " + myMap);

        // 특정 키 제거
        Integer removedValue = myMap.remove("Two");

        System.out.println("삭제된 값: " + removedValue);
        System.out.println("삭제 후 맵: " + myMap);
    }
}
