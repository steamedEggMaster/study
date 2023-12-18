API(Application Programming Interface) 도큐먼트 : 클래스 및 인터페이스들을 사용하기 위한 방법을 기술해 놓은 것.
public과 protected 접근 제한자 메서드, 멤버, 생성자만 적혀있음.

검색방법
1. 검색
2. F1 키 -> Javadoc for 'java.lang.String' 클릭

since : - 자바 몇 버전부터 사용될 수 있는지
modifier : 접근 제한자 - protected : 동일 패키지 및 자식 클래스에서 사용 가능.
concrete method <-> abstract method
---------------------------------------------------------------------------------------------------
java.base 모듈 : 모든 모듈이 의존하는 모듈.
java.lang 패키지 : import없이 사용할 수 있는 언어의 기본적인 클래스가 담긴 패키지
Object 클래스 : 모든 클래스의 최상위 클래스.
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

2. SimpleDateFormat 클래스 - 날짜 -> 형식화된 문자열로 변환
기호
  y : 년        M : 월        d : 일              D : 월 구분이 없는 일(1~365)
  E : 요일      a : 오전/오후  w : 년의 몇 번째 주  W : 월의 몇 번째 주
  H : 시(0~23)  h : 시(1~12)  K : 시(0~11)        k : 시(1~24)
  m : 분        s : 초        S : 밀리 세컨드(1/1000초)
사용방법
SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일");
String strDate = sdf.format(new Date());
---------------------------------------------------------------------------------------------------
정규 표현식 클래스
