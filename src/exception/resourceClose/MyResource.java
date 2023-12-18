package exception.resourceClose;

public class MyResource implements AutoCloseable{
	private String name;
	
	
	public String getName() {
		return name;
	}


	public MyResource (String name) {
		this.name = name;
		System.out.println("[MyResource(" + name + ") 읽기]");
	}
	
	public String read1() {
		System.out.println("[MyResource(" + name + ") 읽기]");
		return "100";
	}
	
	public String read2() {
		System.out.println("[MyResource(" + name + ") 읽기]");
		return "abc";
	}

	@Override
	public void close() throws Exception {
		System.out.println("[MyResource(" + name + ") 닫기]");
		
	}
	

}
