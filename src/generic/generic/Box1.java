package generic.generic;

public class Box1<T> {
	public T content;
	
	public boolean compare(Box1<T> other) {
		boolean result = content.equals(other.content);
		return result;
	}
}
