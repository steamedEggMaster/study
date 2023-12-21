 API(Application Programming Interface) 도큐먼트 : 클래스 및 인터페이스들을 사용하기 위한 방법을 기술해 놓은 것.
public과 protected 접근 제한자 메서드, 멤버, 생성자만 적혀있음.

검색방법
1. 검색
2. F1 키 -> Javadoc for '~~~~~~' 클릭

since : - 자바 몇 버전부터 사용될 수 있는지
modifier : 접근 제한자 - protected : 동일 패키지 및 자식 클래스에서 사용 가능.
concrete method <-> abstract method
---------------------------------------------------------------------------------------------------
java.base 모듈 : 모든 모듈이 의존하는 모듈.
java.lang 패키지 : import없이 사용할 수 있는 언어의 기본적인 클래스가 담긴 패키지
Object 클래스 : 모든 클래스의 최상위 클래스.
---------------------------------------------------------------------------------------------------
Object 클래스
1. boolean euqals(obj); - 객체의 번지 비교 후 true/false return. / object의 equals는 ==와 동일. 재정의하여 사용할 것.
2. getClass();
3. int hashCode(); - 객체의 메모리 번지를 이용하여 생성한 객체 해시코드 return.
4. String toString(); - 객체 문자 정보 리턴.(print) / 클래스명@16진수해시코드 return.

자바에선 두 객의 동등함 판단 시 hashCode()값 -> equals()값이 같으면 동등.

레코드 선언 - 데이터 전달을 위한 "DTO(Data Transfer Object)" 작성 시 반복적으로 사용되는 코드를 줄이는 기능
사용법
public "record" 클래스명(타입 필드명1, 타입 필드명2, ...) {}
 - 컴파일러는 위의 클래스 정의에 대해 [private final 필드, 생성자, getter/setter(필드이름 = 메서드이름), hashCode()/equals()/toString()] 재정의 자동 추가.

롬복(Lombok) - JDK에 포함된 표준 라이브러리 X, but 개발자들이 즐겨사용.
 - 레코드와의 차이점 : private 필드, 생성자, get필드명/set필드명
lombok 다운로드 -> cmd -> lombok있는 파일로 -> java -jar lombok.jar -> eclipse.exe 선택 후 설치 -> eclipse 실행 -> 사용할 프로젝트에 새파일 생성 -> lombok 파일 붙여넣기 -> build path.
어노테이션 종류
1. @Data - 4~8번을 합친 효과.
2. @NoArgsConstructor - 매개변수X 생성자 포함.
3. @AllArgsConstructor - 모든 필드 매개변수 생성자 포함.
4. @RequiredArgsConstructor - 기본적 = 매개변수X 생성자 포함, if final or @NonNull이 붙은 필드 -> 이 필드만 매개변수인 생성자 포함.
5. @Getter - Getter메서드 포함.                                           = null이 아닌 값으로 Setter을 통해 변경 가능.
6. @Setter - Setter메서드 포함.
7. @EqualsAndHashCode - equals()와 hashCode()메서드 포함.
8. @ToString - toString()메서드 포함.
---------------------------------------------------------------------------------------------------
문자열 클래스
1. String - 불변
  String -> byte배열 (인코딩) : "byte[] 배열명 = String객체명.getBytes([문자셋]);" - 기본 문자셋 : UTF-8
  byte배열 -> String (디코딩) : "String 객체명 = new String(byte배열명 [, 문자셋]);"
   인코딩/디코딩 시 문자셋이 동일해야 한글 복원 가능.
   알파벳은 무조건 한바이트로 구성되어있음.
 
2. StringBuilder - 변경가능 : 내부 버퍼에 문자열을 저장해두고 그 안에서 추가, 수정, 삭제 가능. -> "객체 생성 안해도 됨."
버퍼 조작 메서드
-1. StringBuilder append(기본값 | 문자열);
-2. StringBuilder insert(index, 기본값 | 문자열);
-3. StringBuilder delete(Sindex, Eindex);
-4. StringBuilder replace(Sindex, Eindex, 문자열);
-5. String toString();
3. StringTokenizer - 구분자로 문자열 분리 시 사용
--------------------------------------------------------------------------------------------------- 
System 클래스 - JAVA는 OS상이 아닌 JVM위에서 실행됨. -> OS의 일부 기능을 사용하기위한 클래스. / 정적 Field, 정적 Method로 구성.
정적 Field 종류
1. static final InputStream in - System.in.read() 메서드로 enter을 누르면, enter이전 누른 키들 + enter키의 값을 하나씩 읽음.
2. static final OutputStream out
3. static final PrintStream err - 보통 에러메시지 출력 시 사용. 빨간색으로 출력됨.
정적 Method 종류
1. void exit(int status); - JVM 자체를 종료 / 정상종료 0, 비정상종료 -1 or 1
2. long currentTimeMillis(); 
3. long nanoTime();
   2,3번 - 처리시간의 측정을 위해 주로 사용.
4. System.getProperty(String 속성키); - 속성키에 해당되는 현재 OS의 정보들을 얻기위해 사용.
5. Properties System.getProperties(); - OS의 모든 정보가 담긴 Properties 객체 반환.
 
--------------------------------------------------------------------------------------------------- 
날짜와 시간 클래스
1. java.util.Date - 현재 컴퓨터 시간을 읽어와 저장하기 위한 클래스
사용방법
Date now = new Date(); - SimpleDateFormat
  
2. java.util.Calendar - 현재 컴퓨터 시간을 읽어와 년월일시간 등을 얻어올 수 있는 추상 클래스
사용방법
Calendar now = Calendar.getInstance(); //추상클래스라 객체 생성 불가능. //getIntance메서드 안에 로컬자식클래스를 만들어서 자식클래스를 반환
                        getInstance(Locale/Timezone/Timezone, Locale) 으로 특정 나라, 나라 안의 지역 별 다른 시간의 정보를 얻을 수 있음
                                                            Timezone은 ID 정보를 알고 있어야 하는데, Calendar.getAvailableIDs() 메서드로 지역별 ID배열을 얻을 수 있음
int year = now.get(Calendar.YEAR);              int month = now.get(Calendar.MONTH) + 1;
int day = now.get(Calendar.DAY_OF_MONTH);       int week = now.get(Calendar.DAY_OF_WEEk);
int amPm = now.get(Calendar.AM_PM);             int hour = now.get(Calendar.HOUR);
int minute = now.get(Calendar.MINUTE);          int second = now.get(Calendar.SECOMD);

3. java.time.LocalDateTime
-1. 날짜와 시간 "조작" 사용방법
LocalDateTime now = LocalDateTime.now();
LocalDateTime result = now.plusYears(1); //많은 직관적인 함수들이 있기에 API 참조할 것.
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("날짜 기호들을 사용한 정규표현식");
println(now.format(dtf));

-2. 날짜와 시간 "비교" 사용방법
LocalDateTime date1 = LocalDateTime.of(year, month, dayOfMonth, hour, minute, second);
LocalDateTime date2 = LocalDateTime.of(year, month, dayOfMonth, hour, minute, second);
비교 메서드
--1. date1.isAfter(date2);
--2. date1.isBefore(date2);
--3. date1.isEqual(date2);
--4. date1.until(date2, ChronoUnit.YEARS/MONTHS 등의 상수 필드); - 해당 필드의 차이를 long으로 리턴.
---------------------------------------------------------------------------------------------------
java.text.Format(형식) 클래스 - 숫자, 날짜를 원하는 형태의 문자열로 변환해주는 기능

자주 사용하는 클래스
1. DecimalFormat 클래스 - 숫자 -> 형식화된 문자열로 변환
기호
  0 : 빈자리를 0으로 채움.     , : 단위 구분         \u00A4 : 통화기호
  # : 빈자리를 안채움.         E : 지수문자
  . : 소수점                  ; : 패턴 구분자
  +- : 양음 기호              % : %문자
사용방법
DecimalFormat df = new DecimalFormat("표현식");
String result = df.format(숫자);

2. SimpleDateFormat 클래스 - 날짜 -> 형식화된 문자열로 변환 / not synchronized
기호
  y : 년        M : 월        d : 일              D : 월 구분이 없는 일(1~365)
  E : 요일      a : 오전/오후  w : 년의 몇 번째 주  W : 월의 몇 번째 주
  H : 시(0~23)  h : 시(1~12)  K : 시(0~11)        k : 시(1~24)
  m : 분        s : 초        S : 밀리 세컨드(1/1000초)
사용방법
SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일");
String strDate = sdf.format(new Date());

3. DateTimeFormatter 클래스 - 날짜 -> 형식화된 문자열로 변환 / synchronized
사용방법
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("2번 기호들을 사용한 정규표현식");
println(now.format(dtf));
---------------------------------------------------------------------------------------------------
정규 표현식 클래스 - 문자열이 정해진 형식대로 구성되어 있는지 검증
기호
  [] : 괄호 안 문자들 중 한개의 문자
        1. [abc] : a,b,c 중 한 개의 문자
        2. [^abc] : a,b,c 이외의 하나의 문자
        3. [a-zA-Z] : 모든 알파벳 중 하나의 문자
  \d : 한개의 숫자(=[0-9])
  \s : 공백
  \w : 한 개의 알파벡 or 한 개의 숫자 (=[a-zA-Z_0-9])
  \. : .                           
  .  : 모든 문자 중 한 개의 문자
  ?  : 없음 or 한 개
  *  : 없음 or 한 개 이상
  +  : 한 개 이상
{n}  : 정확히 n개
{n,} : 최소한 n개
{n,m): n개~m개 까지
 a|b : a or b
  () : 그룹핑

Pattern 클래스
boolean result = Pattern.matches("정규식", "검증할 문자열"); - true, false 반환
