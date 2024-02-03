Value의 의미
- 데이터 객체의 설계가 복잡해질수록, 컬럼이 길어져 각 컬럼이 의미하는 것을 파악하기 어려워짐.
  -> 이때, 동일한 의미를 가진 컬럼들을 구분하여 하나의 객체로 표현한 것.

----- 밸류 클래스 구현
아래의 특징을 살려 구현해야함
1. 밸류 클래스는 개념적으로 하나의 의미를 가질 수 있는 변수들을 포함
2. 별도의 식별자를 갖지 않음.

- 밸류 타입으로 설정되는 클래스는 @Embeddable 어노테이션을 통해 정의
- 밸류 클래스를 가져다 쓰는 클래스는 필드에 정의된 필드 클래스에 @Embedded 어노테이션을 적용

----- @Embeddable / @Embedded
@Embeddable 어노테이션은 해당 클래스가 다른 엔티티의 일부로 사용될 수 있게 설정
@Embeddable 어노테이션은 기본적으로 @Embedded 어노테이션에 따른 접근 타입을 사용
 - 필드 접근 타입
 - 프로퍼티 접근 타입

* 필드 접근 방식 - 이 방식으로 사용하기
 - JPA 에서 Reflection을 사용하여 엔티티 속성을 직접 접근
 - ex) @Embedded
       private Address address;

* 프로퍼티 접근 방식 - 사용 거의 X
 - 엔티티 속성의 getter 메서드를 통해 처리하는 방식
 - JPA에서 getter/setter 메서드를 호출하여 엔티티 속성에 액세스
 - ex) @Embedded
       public Address getAddress() {
          return address; }

----- 접근 방식 설정
만약 @Embedded로 매핑된 엔티티의 접근 방식과 상관없이 @Embeddable 클래스에서
접근 방식을 설정하기 위해선 @Access 어노테이션을 사용하면 접근 타입 고정 가능

ex) @Embeddable
    @Access(AccessType.FIELD | PROPERTY)
    public class 밸류클명 { }

----- 밸류 클래스의 라이프 사이클
밸류 클래스의 라이프 사이클 == 밸류클래스를 매핑한 엔티티의 라이프 사이클

----- 팁
1. DB에 컬럼들이 생성되면서 원래는 순서가 abc 순으로 만들어지지만, 밸류클래스의 컬럼들은 한묶음으로 순서가 표현됨
