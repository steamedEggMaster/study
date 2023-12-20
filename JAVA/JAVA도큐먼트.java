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
---------------------------------------------------------------------------------------------------
리플렉션
자바는 클래스, 인터페이스의 "메타 정보(패키지 정보, 타입 정보, 멤버(생성자, 필드, 메서드) 정보 등)"을 Class객체로 관리.
  이 메타 정보를 "프로그램에서 읽고, 수정"하는 행위 = 리플렉션

프로그램에서 Class객체를 얻는 방법
1. Class clazz = 클래스이름.class;
2. Class clazz = Class.forName("패키지...클래스이름(클래스 전체 이름)");
3. Class clazz = 객체참조변수.getClass();

패키지 및 클래스 이름 정보 얻기
1. clazz.getPackage().getName() - 패키지 이름
2. clazz.getSimpleName() - 클래스 이름
3. clazz.getName() - 패키지~클래스 이름

멤버 정보 얻기
1. Constructor[] constructors = clazz.getDeclaredConstructors();
2. Field[] fields = clazz.getDeclaredFields();
3. Method[] methods = clazz.getDeclaredMethods();
생성자 및 메서드의 매개변수 정보 얻기
1. Class[] parameters = constructor.getParameterTypes(); - constructors 배열의 원소를 for-each 구문으로 constructor에게 넘겨준 상태.
2. Class[] parameters = method.getParameterTypes(); - methods 배열의 원소를 for-each 구문으로 method에게 넘겨준 상태.

리소스 경로 얻기 - 이미지를 불러오기 위해선, 프로젝트 파일 아래에 이미지를 위치 해야, "이미지파일명.확장자" 만으로 불러올 수 있음.
                  패키지 안에 넣을 경우 "src/패키지명/이미지파일명.확장자" 해주어야 함.
                  자바 프로젝트 기본 경로 = 프로젝트 폴더.
1. String path = clazz.getResource("파일명.확장자").getPath(); - getResource는 URL객체를 리턴함.
2. ("디렉명/파일명.확장자").getPath(); 이런 식으로 해주어야함.
  1,2 -> 절대 경로를 리턴.
