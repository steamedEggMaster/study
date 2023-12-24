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

멤버 정보 얻기 - 정의된 순서가 인덱스 순서는 아님.
1. Constructor[] constructors = clazz.getDeclaredConstructors();
2. Field[] fields = clazz.getDeclaredFields();
3. Method[] methods = clazz.getDeclaredMethods(); 
생성자 및 메서드의 매개변수 정보 얻기
1. Class[] parameters = constructor.getParameterTypes(); - constructors 배열의 원소를 for-each 구문으로 constructor에게 넘겨준 상태.
2. Class[] parameters = method.getParameterTypes(); - methods 배열의 원소를 for-each 구문으로 method에게 넘겨준 상태.

리소스 경로 얻기 - 이미지를 불러오기 위해선, 프로젝트 파일 아래에 이미지를 위치 해야, "이미지파일명.확장자" 만으로 불러올 수 있음.
                  패키지 안에 넣을 경우 "src/패키지명/이미지파일명.확장자" 해주어야 함.
                  자바 프로젝트 기본 경로 = 프로젝트 폴더.
                  배포를 하기 위해선 보통 src/resource 같은 파일에 모아서 저장하고, 컴파일 시 bin파일에 같이 생성되며, 
1. String path = clazz.getResource("파일명.확장자").getPath(); - getResource는 URL객체를 리턴함.
               = public클래스명.class.getResource("파일명.확장자").getPath();
2. ("디렉명/파일명.확장자").getPath(); 이런 식으로 해주어야함.
  1,2 -> 절대 경로를 리턴. 이 파일 안의 데이터를 읽어들일때 사용함.
---------------------------------------------------------------------------------------------------------------------------------------
"어노테이션 - 클래스, 인터페이스를 컴파일 or 실행할 때 어떻게 처리할 지 알려주는 설정 정보."
사용되는 용도
    1. 컴파일 시 사용하는 정보 전달.
    2. 빌드 툴이 코드를 자동으로 생성할 때 사용하는 정보 전달.
    3. 실행 시 확정 기능을 처리할 때 사용하는 정보 전달.
선언문 앞에서 사용 가능.

"어노테이션 정의 방법"
public @interface 어노테이션명 { }
사용방법
@어노테이션명

"어노테이션은 속성을 가질 수 있음 - 타입, 이름으로 구성되며 이름 뒤에 괄호를 사용."
ex)
public @interface AnnotationName {
  String prop1(); - 추상 메서드 X, 속성 O.
  int prop2() default 1; - default로 속성의 기본값 지정 가능.
}
코드에서 사용 시
1. @AnnotationName(prop1 = "값"); - prop1은 기본값 X이기 때문에 "값 설정 필수"
2. @AnnotationName(prop1 = "값", prop2 + 3);

"속성 중엔 기본 속성이라는 것이 존재. = value"
ex)
 public @interface AnnotationName {
  String value(); - value라는 이름은 고정 이름. default 적용 가능.
  int prop2() default 1;
}
코드에서 사용 시
@AnnotationName("값"); 만으로 value에 자동으로 값이 들어감.
@AnnotationName(value = "값", prop2 + 3); - 다른 속성의 값을 줄땐 생략 불가.
---------------------------------------------------------------------------------------------------------------------------------------
"어노테이션 적용 대상" - ElementType열거 상수를 통해 어노테이션을 어떤 대상에 적용할 지 설정.
종류
1. TYPE  : 클래스, 인터페이스, 열거 타입    2. ANNOTATION_TYPE : 어노테이션
3. FIELD : 필드                           4. CONSTRUCTOR : 생성자
5. METHOD : 메소드                        6. LOCAL_VARIABLE : 로컬 변수
7. PACKAGE : 패키지
사용방법
"@Target( { ElementType.TYPE, ElementType.FIELD, ... } )" - Target어노테이션의 value속성은 ElementType 배열을 가짐.
public @interface AnnotationName {}

"어노테이션 유지 정책" - RetentionPolicy열거 상수를 통해 유지 시점을 설정.
종류
1. SOURCE : 컴파일 할 때까지만 적용.
2. CLASS : 메모리로 로딩할 때까지만 적용.
3. RUNTIME : 실행할 때도 적용.
사용방법
@Target( { ElementType.TYPE, ElementType.FIELD, ... } )
"@Retention( RetentionPolicy.Runtime )"
public @interface AnnotationName {}
---------------------------------------------------------------------------------------------------------------------------------------
"어노테이션 정보 얻기" - 리플렉션을 이용하여 어노테이션 적용 대상으로부터 어노테이션 정보를 얻음.
메서드 종류
1. isAnnotationPresent(어노테이션명.class); - 해당 어노테이션명이 작용되었는지 true/false 반환
2. getAnnotation(어노테이션명.class); - 해당 어노테이션 적용됨-> 해당 어노테이션 return, 그렇지 않으면 null return.
3. getDeclaredAnnotation(); - 적용된 모든 어노테이션 return. Annotation[] return.

"어노테이션객체명.속성명();으로 속성값을 가져올 수 있음."
reflectionAnnotation 예제 잘보기
