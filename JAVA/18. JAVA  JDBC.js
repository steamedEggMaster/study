JDBC(Java Database Connectivity) 인터페이스 (java.sql 패키지)
- DB와 연결하여 데이터 입출력 작업 클래스를 제공.
- DBMS의 종류 상관 X 동일하게 사용 가능

JDBC Driver - JDBC 인터페이스를 통해 DB와 작업하는 JDBC 인터페이스를 구현한 것.
            - DBMS마다 별도로 다운로드 해야함.

DriverManager
Connection - DB도 하나의 서버, TCP이기에 연결을 해야함
  /    Statement - sql 실행 가능한 객체
  /    PreparedStatement
  /    CallableStatement - 프로시져, 함수를 실행가능한 객체
