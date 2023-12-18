package exception.resourceClose;

public class TryWithResourceExample {

	public static void main(String[] args) throws Exception {
		//1번 finally 로 리소스 닫기
		MyResource res1 = null;
		try {
			//리소스 열기
			res1 = new MyResource("res1");
			
			//리소스 읽기
			System.out.println(Integer.parseInt(res1.read1()));
			System.out.println(Integer.parseInt(res1.read2()));
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			//리소스 닫기
			res1.close();
		}
		
		//2번 AutoCloseable을 이용하여 닫기 // 예외가 발생하지 않아도 close()를 실행함.
		try(MyResource res2 = new MyResource("res2")) {
			//리소스 읽기
			System.out.println(Integer.parseInt(res2.read1()));
			System.out.println(Integer.parseInt(res2.read2()));
		} catch(Exception e) {
			e.printStackTrace();
		}
		//2-1번.
		MyResource res3 = new MyResource("res3");
		try(res3) {
			//리소스 읽기
			System.out.println(Integer.parseInt(res3.read1()));
			System.out.println(Integer.parseInt(res3.read2()));
		} catch(Exception e) {
			e.printStackTrace();
		}
		// 사용하지 않은 res5 도 close()를 실행.
		MyResource res4 = new MyResource("res4");
		MyResource res5 = new MyResource("res5");
		try(res4; res5) {
			//리소스 읽기
			System.out.println(Integer.parseInt(res4.read1()));
			System.out.println(Integer.parseInt(res4.read2()));
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
