package aReference;

public class aReferenceExample {

	public static void main(String[] args) {
		Person person = new Person();
		
		person.ordering((a, b) -> {
			return a.compareToIgnoreCase(b);
		});
		
		person.ordering(String::compareToIgnoreCase); //레전드;;
	}

}
