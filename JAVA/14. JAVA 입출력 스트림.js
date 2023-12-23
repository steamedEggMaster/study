1. 바이트 스트림 : 그림, 멀티미디어, 문자 등 모든 종류 데이터 입출력 시 사용.
2. 문자 스트림 : 문자만 입출력 시 사용.
- java.io 패키지에서 제공.

바이트 입출력 스트림의 최상위 추상 클래스 : InputStream, OutputStream -> 상속 클래스들은 이 이름을 접미사로 가짐.
문자 입출력 스트림의 최상위 클래스 : Reader, Writer -> 상속 클래스들은 이 이름을 접미사로 가짐.
------------------------------------------------------------------------------------------------------------------------
바이트 출력 스트림 - OutputStream
상속 클래스 - FileOutputStream, PrintStream, BufferedOutputStream, DataOutputStream
메서드
1. void write(int b) - 매개값 int(4byte)중 끝 1byte만 출력 버퍼로 보냄. - -128~127 사이 숫자만 출력이 알맞게 됨.
2. void write(byte[] b) - 
3. void write(byte[] b, int offm int len)
4. void flush() - 출력 버퍼의 내용을 출력 후 버퍼 비움
5. void close() - 출력 스트림을 닫아 사용한 메모리를 해제 / 자동 flush() 기능이 들어가 있음.
