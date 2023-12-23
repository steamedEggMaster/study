1. 바이트 스트림 : 그림, 멀티미디어, 문자 등 모든 종류 데이터 입출력 시 사용.
2. 문자 스트림 : 문자만 입출력 시 사용.
- java.io 패키지에서 제공.

바이트 입출력 스트림의 최상위 추상 클래스 : InputStream, OutputStream -> 상속 클래스들은 이 이름을 접미사로 가짐.
문자 입출력 스트림의 최상위 추상 클래스 : Reader, Writer -> 상속 클래스들은 이 이름을 접미사로 가짐.
------------------------------------------------------------------------------------------------------------------------
바이트 출력 스트림 - OutputStream
상속 클래스 - FileOutputStream, PrintStream, BufferedOutputStream, DataOutputStream
    -- "IOException 예외 처리" 필수.
    -- 모든 상속 클래스가 AutoCloseable을 구현함 -> try-with-resources로 사용 시 자동 close()됨. 
        or finally 에서 close() 사용 -> try-catch-finally 의 블록 밖에서 객체를 생성해야만함.
메서드
1. void 출력스트림객체명.write(int b) - 매개값 int(4byte)중 끝 1byte만 출력 버퍼로 보냄. - (-128~127) 사이 숫자만 출력이 알맞게 됨.
2. void 출력스트림객체명.write(byte[] b) - 배열의 모든 바이트 출력 버퍼로 보냄.
3. void 출력스트림객체명.write(byte[] b, int off, int len) - (b[off] ~ b[off + len - 1])까지의 byte만 출력 버퍼로 보냄.
4. void 출력스트림객체명.flush() - 출력 버퍼의 내용을 출력 후 버퍼 비움.
5. void 출력스트림객체명.close() - 출력 스트림을 닫아 사용한 메모리를 해제 / 자동 flush() 기능이 들어가 있음.
-- 모든 메서드 "IOException 예외 처리" 필수.

FileOutputStream 생성자
1. FileOutputStream(File file)
2. FileOutputStream(File file, boolean append)
3. FileOutputStream(String 경로)
4. FileOutputStream(String 경로, boolean append)
-- FileOutputStream(String 경로) 사용시 경로 마지막 파일명은 "없으면 생성하며 열고", 디렉토리는 존재해야 IOException-FileNotFoundException이 발생하지 않음.
-- boolean append : 기존 내용 뒤에 추가, 없는 생성자는 파일을 덮어씀.
------------------------------------------------------------------------------------------------------------------------
바이트 입력 스트림 - InputStream
상속 클래스 - FileInputStream, BufferedInputStream, DataInputStream
   -- "IOException 예외 처리" 필수.
    -- 모든 상속 클래스가 AutoCloseable을 구현함 -> try-with-resources로 사용 시 자동 close()됨. 
        or finally 에서 close() 사용 -> try-catch-finally 의 블록 밖에서 객체를 생성해야만함.
메서드
1. int 입력스트림객체명.read() - 1byte를 읽고 int로 return, **입력 스트림 객체에서 더이상 읽을 것이 없다 -> -1 return** -> while-if-break 문으로 사용함.
2. int 입력스트림객체명.read(byte[] b) - 읽은 byte를 b배열에 저장 후, 읽은 byte 갯수 return, **입력 스트림 객체에서 더이상 읽을 것이 없다 -> -1 return**
3. void 입력스트림객체명.close() - 입력 스트림을 닫고, 사용 메모리 해제
-- 모든 메서드 "IOException 예외 처리" 필수.

read(byte[] b) - b배열의 크기보다 읽어야하는 게 클 경우 여러번 다시 읽어야하는데, 2번째 읽을때부턴 b[0]부터 덮어쓰며 저장
                -> return 값을 통해 저장된 index 마지막 값을 알아냄.

FileInputStream 생성자
1. FileInputStream(File file)
2. FileInputStream(String 경로)
해당 파일 없으면 IOException-FileNotFoundException 발생
------------------------------------------------------------------------------------------------------------------------
문자 입출력 스트림
문자 출력 - Writer 추상 클래스
상속 클래스 - FileWriter, BufferedWriter, PrintWriter, OutputStreamWriter
메서드
1. void 문자출력스트림객체.write(int c) - 하나의 문자를 출력 버퍼로 보냄
2. void 문자출력스트림객체.write(char[] cbuf) - 배열의 모든 문자를 출력 버퍼로 보냄
3. void 문자출력스트림객체.write(char[] cbuf, int off, int len) - (cbuf[off] ~ cbuf[off + len - 1])
4. void 문자출력스트림객체.write(String str) - 문자열을 출력 버퍼로 보냄
5. void 문자출력스트림객체.write(String str, int off, int len) - str[off] ~ str[off + len - 1]
6. void 문자출력스트림객체.flush()
7. void 문자출력스트림객체.close()
