"어노테이션 - 클래스, 인터페이스를 컴파일 or 실행할 때 어떻게 처리할 지 알려주는 설정 정보."
사용되는 용도
    1. 컴파일 시 사용하는 정보 전달.
    2. 빌드 툴이 코드를 자동으로 생성할 때 사용하는 정보 전달.
    3. 실행 시 확정 기능을 처리할 때 사용하는 정보 전달.
선언문 앞에서 사용 간으

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
  String value(); - value라는 이름은 고정 이름.
  int prop2() default 1;
}
코드에서 사용 시
@AnnotationName("값"); 만으로 value에 자동으로 값이 들어감.
@AnnotationName(value = "값", prop2 + 3); - 다른 속성의 값을 줄땐 생략 불가.
------------------------------------------------------------------------------------------------------
"어노테이션 적용 대상" - ElementType열거 상수를 통해 어노테이션을 어떤 대상에 적용할 지 설정.
종류
1. TYPE  : 클래스, 인터페이스, 열거 타입    2. ANNOTATION_TYPE : 어노테이션
3. FIELD : 필드                           4. CONSTRUCTOR : 생성자
5. METHOD : 메소드                        6. LOCAL_VARIABLE : 로컬 변수
7. PACKAGE : 패키지
사용방법
"@Target( [ ElementType.TYPE, ElementType.FIELD, ... ] )" - Target어노테이션의 value속성은 ElementType 배열을 가짐.
public @interface AnnotationName {}

"어노테이션 유지 정책" - RetentionPolicy열거 상수를 통해 유지 시점을 설정.
종류
1. SOURCE : 컴파일 할 때까지만 적용.
2. CLASS : 메모리로 로딩할 때까지만 적용.
3. RUNTIME : 실행할 때도 적용.
사용방법
@Target( [ ElementType.TYPE, ElementType.FIELD, ... ] )
"@Retention( RetentionPolicy.Runtime )"
public @interface AnnotationName {}
