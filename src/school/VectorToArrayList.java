package school;

import java.util.ArrayList;
import java.util.Vector;

public class VectorToArrayList{
	public static void main(String[] args) {
		Vector<String> vector = new Vector<>();
		vector.add("Apple");
		vector.add("Banana");
		vector.add("Orange");
		System.out.println("Vector의 데이터:");
		for (String value : vector) {
			System.out.println(value);
		}
		ArrayList<String> arrayList = new ArrayList<>();
		int size = vector.size();
		for(int i = 0; i < size; i++) {
			arrayList.add(vector.get(0));
			vector.remove(0);
		}
		if(vector.isEmpty())
			System.out.println("Vector의 데이터는 비었음.");
		System.out.println("ArrayList의 데이터:");
		for (String value : arrayList) {
			System.out.println(value);
		}
		
	}
}
