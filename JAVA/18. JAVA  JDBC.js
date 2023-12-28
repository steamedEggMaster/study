JDBC(Java Database Connectivity) 인터페이스 (java.sql 패키지)
- DB와 연결하여 데이터 입출력 작업 클래스를 제공.
- DBMS의 종류 상관 X 동일하게 사용 가능

JDBC Driver - JDBC 인터페이스를 통해 DB와 작업하는 JDBC 인터페이스를 구현한 것.
            - DBMS마다 "별도로" 다운로드 해야함

DriverManager 클래스 - JDBC Driver 관리 및 DB와 연결하여 Connection 구현 객체 생성.
  /    Connection 인터페이스 - Statement, PreparedStatement, CallableStatement 구현 객체 생성 및, 트랜젝션 처리 및 DB 연결 끊을 때 사용
    /    Statement 인터페이스 - SQL의 DDL, DML 실행 시 사용, 주로 정적SQL문 실행 시 사용.
    /    PreparedStatement 인터페이스 - SQL의 DDL, DML 실행 시 사용, 매개변수화된 SQL문 사용 가능. -> 편리성, 보안성 good
    /    CallableStatement 인터페이스 - DB에 저장된 프로시져 및 함수 호출 시 사용.
      /    ResultSet - DB에서 가져온 데이터 읽을 때 사용.

sqlplus / as sysdba -> alter profile default limit password_life_time unlimited; 하면 관리자 비밀번호 만료기간 180 -> 무한.

원격 연결
1. Oracle-OraDB19Home1 -> Net Configuration Assistant 클릭 -> 재구성 및 다음 -> 다음 및 예 -> 다음 -> 다음 -> 아니오 및 다음 -> 완료
해당 포트번호 1521 방화벽 해제 - 16번 참고
------------------------------------------------------------------------------------------
DB 연결
JDBC Driver 및 
1. DBMS가 설치된 컴퓨터의 IP주소
2. DBMS가 허용하는 포트 번호
3. 사용자(DB계정) 및 비밀번호
4. 사용하고자 하는 DB 이름

Oracle은 다운 시 jdbc\lib\ojdbc8.jar 이라는 JDBC Driver 파일이 이미 있음.
1. java에서 Build Path 시켜주기

2. 클라이언트 프로그램을 DB와 연결하기 위해 가장 먼저 해야 할 일 : JDBC Driver를 메모리로 로딩!
: Class.forName("JDBC Driver클래스") - oracle은 "oracle.jdbc.OracleDriver"
-> DriverManager에 JDBC Driver 객체를 등록하게 됨. JDBC Driver 클래스를 찾지 못하면 "ClassNotFoundException" 발생

3. Connection conn = DriverManager.getConnection("연결 문자열", "사용자", "비밀번호"
