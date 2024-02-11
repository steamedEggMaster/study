Annotation
: Java 5 버전부터 추가된 기능으로, 소스코드에 추가적인 정보를 제공하는 "메타 데이터"의 기능 수행
- Annotation은 클래스, 메서드, 변수, 인자 등에 추가 가능
- 메타 데이터이기 때문에 비지니스 로직에 직접적 영향을 주지 않지만, 이 메타데이터 정보에 따라 실행 흐름 변경 가능

----- Annotation의 종류
1. Built-in 어노테이션 - Java 코드에 적용되는 어노테이션
                      - @Override, @Deprecated, @SuppressWarnings 등
2. Meta 어노테이션 - 다른 어노테이션에 적용되기 위한 어노테이션
                  - @Retention, @Documented, @Target, @Inherited, @Repeatable 등

----- Meta 어노테이션
@Retention : 해당 어노테이션의 정보를 어느 범위까지 유지할 것인지 설정
- RetentionPolicy.SOURCE : 컴파일 전까지만 유효하며 컴파일 이후 사라짐
- RetentionPolicy.CLASS : 컴파일러가 클래스를 참조할 때까지 유효 (default)
- RetentionPolicy.RUNTIME : Reflection을 사용하여 컴파일 이후에도 JVM에 의해 계속 참조됨

@Target : 해당 어노테이션이 사용될 수 있는 위치를 선정
- ElementType.PACKAGE          패키지 선언시
- ElementType.TYPE             타입 선언시(class, interface, enum)
- ElementType.CONSTRUCTOR      생성자 선언시
- ElementType.FIELD            멤버 변수 선언시
- ElementType.METHOD           메서드 선언시
- ElementType.ANNOTATION_TYPE  어노테이션 타입 선언시
- ElementType.LOCAL_VARIABLE   지역 변수 선언시
- ElementType.TYPE_PARAMETER   매개변수 타입 선언시 (Generic)

@Documented : Java Doc 생성 시 Document에 포함되도록 하는 설정
@Inherited : 해당 어노테이션을 하위 클래스에 적용
@Repeatable : Java 8 버전부터 지원하며, 연속적으로 어노테이션을 선언하는 것을 허용

- 어노테이션의 필드에는 default값을 설정 가능하다
ex) String value() default "I'm Method";
- 어노테이션의 모든 필드뒤에 ()를 붙인다
