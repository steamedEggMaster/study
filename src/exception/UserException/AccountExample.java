package exception.UserException;

public class AccountExample {

	public static void main(String[] args) {
		Account account = new Account();
		
		account.deposit(10000);
		System.out.println("예금액: " + account.getBalance());
		
		//account.withdraw(100);
		//withdraw 메서드에는 throws 예외클래스가 있고, 그 예외클래스의 부모클래스가 일반 예외이기때문에
		//컴파일러가 try-catch 즉, 오류처리를 하지 않으면 오류를 발생시킴.
		
		try {
			account.withdraw(30000);
		} catch (InSufficientException e) {
			System.out.println(e.getMessage());
		}
		
		System.out.println("예금액: " + account.getBalance());
	}

}
