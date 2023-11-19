일반 예외(Exception) - 컴파일러가 예외 처리 코드 여부를 검사하는 예외
실행 예외(Runtime Exception) - 컴파일러가 예외 처리 코드 여부를 검사하지 않는 예외
예외 클래스는 java.lang.Exception 클래스를 상속. - 실행 예외도 자식 클래스지만 컴파일러가 확인하지 못함.
--------------------------------------------------------------------------------------------------------------
예외 처리 코드
try{
  //예외 발생 가능 코드
} catch(예외클래스 e){
  예외처리
} [finally] { //필수 X
  //항상 실행 코드
}
System.out.print(e.getMessage()); - 예외 사유 출력.
System.out.print(e.toString()); - 예외 이름과 예외 사유 출력.
e.printStackTrace(); - 예외 이름, 예외 사유, 발생 코드 라인 출력.
일반 예외는 에러가 뜨며 try-catch를 만들라고 함.
--------------------------------------------------------------------------------------------------------------
예외 종류에 따른 처리
try{
} catch(예외클래스1 e){ //catch가 여러개일지라도 예외클래스에 맞는 1개만 실행함. //Exception클래스가 아닌 세부적인 예외클래스를 설정할 것.
} catch(예외클래스2 e){ //상위 예외클래스일수록 아래쪽에 배치할 것.
} catch(예외클래스3 | 예외클래스4 e){ //or연산으로 구분 가능
}
--------------------------------------------------------------------------------------------------------------
리소스 자동 닫기
리소스 = 데이터를 제공하는 객체 / 파일 open-close 필수.
1. finally에서 리소스객체명.close();
2. AutoCloseable 인터페이스의 close()함수를 구현한 클래스로 finally- 리소스객체명.close()없이 자동 종료.
resourceClose예제 잘보기
--------------------------------------------------------------------------------------------------------------
