----- 기본 키를 생성하는 방법
- Entity를 생성하면 꼭 필드에 @Id 필요
- @Id 필드는 DB에서 Primary key와 매핑됨
- 기본 키를 자동으로 생성하는 방식에서는 @GeneratedValue 어노테이션을 통해 전략 설정 가능

----- 전략 설정
1. (Direct) 직접 할당 방식 : 기본키를 애플리케이션에서 자체적으로 생성하여 할당하는 방식
                          - @GeneratedValue 어노테이션 사용 안하고 직접 값 주입
                          - 이 방식은 애플리케이션에서 별도의 키 생성 규칙을 정의하여 사용해야 중복 문제 발생 X

2. Identity
-   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;
- 기본키 생성을 DB에 위임하는 방식
- 컬럼에 AUTO_INCREMENT 기능 활용하여 값을 사용
- Identity 전략은 persist() 메서드가 호출되는 시점에 Insert 쿼리가 실행되며 식별자를 조회 -> 그래야 엔티티에서 쓰는 넘버가 뭔지 알 수 있음
                  - 일반적으로는 commit() 시점에 쿼리 실행

3. Sequence
- @Entity                              
  @SequenceGenerator( // Sequence 방식을 사용하기 위해선 @SequenceGenerator 어노테이션을 아래와 같이 적어줘야 함
    name = "sequence_generator",     // name : 시퀀스 생성기의 이름을 지정. 이 이름은 @GeneratedValue 에서 사용됨
    sequenceName = "my_seq",         // sequenceName : 식별자(Id)를 생성할 때 사용할 Sequence 이름을 지정
    allocationSize = 1)              // initialValue : DDL을 통해 DB를 생성할 때 사용되는 값으로, 최초 설정되는 값을 정의
  @Table(name = "sequence")          // allocationSize : 시퀀스에서 읽어온 값을 기준으로 몇 개의 식별자를 생성할 지 결정. 값을 1로 설정
  public class SequenceEntity { }

- @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;

- DB의 Sequence를 이용하는 방식
- DB의 Sequence : Unique 값을 생성해주는 객체
                - 일반적으로 Primary Key를 생성하기 위해 사용됨
                - 지원하는 DB : Oracle, PostgresSQL, H2, Maria DB 등
                - 대체로 Oracle 에서만 사용
  
-----  allocationSize를 설정하지 않을 경우 아래와 같은 방식으로 식별자 생성 -----
* 1. 최초에 DB 시퀀스에서 값을 구함. 이 값을 식별자 구간의 시작 값으로 사용
* 2. 한번 더 DB 시퀀스에 값을 구함. 이를 식별자 구간의 끝 값으로 사용
* 3. 구간의 시작 값부터 끝 값까지 순차적으로 엔티티의 식별 값으로 사용
       이때 메모리에 순차적으로 증가한 값을 보관.
       --> 이 과정 때문에 allocationSize를 1로 설정하지 않았을 경우, 여러 JVM이 가동되는 가정하에 충돌이 발생하게 됨
* 4. 구간의 끝에 다다르면 DB 시퀀스에 값을 구함
       시퀀스에서 구한 값을 다음 식별자 구간의 끝 값으로 사용한다. 구간 끝 값에서 (allocationSize -1)를 뺀 값을 식별자 구간의 시작 값으로 사용
* 5. 과정 3과 4를 반복


4. Table
- @Id
  @TableGenerator( // @TableGenerator 어노태이션으로 테이블 생성
      name = "id_generator",       // name : 테이블 생성기의 이름. @GeneratedValue의 generator 값으로 사용
      table = "id_gen",            // table : id를 생성할 때 사용할 테이블
      pkColumnName = "entity",     // pkColumnName : id 생성용 테이블의 주요 키 컬럼을 지정
      pkColumnValue = "next_id",   // pkColumnValue : 테이블 생성기가 주요 키 컬럼에 사용할 값을 지정. 각 TableGenerator 마다 다른 값을 사용.
      /*valueColumnName = "~"*/    // valueColumnName : 생성할 id를 갖는 컬럼을 지정
      initialValue =0,             // initialValue : id 초기 값을 지정. id 생성용 테이블에 해당 레코드가 없을 경우 이 속성의 값으로 생성
      allocationSize = 1)          // allocationSize : id의 할당 크기를 지정
  @GeneratedValue(generator = "id_generator")
  private Long number;

- DB의 Sequence 역할을 수행하는 테이블을 생성하여 활용하는 방식
- Sequence를 지원하지 않는 DB 사용 시 이용
- 다만 목적에 맞게 최적화된 테이블 X -> 성능 상 이슈 발생 가능


5. Auto
- @GeneratedValue(strategy = GenerationType.Auto)
- 연동된 DB의 종류에 따라 앞서 소개한 전략을 자동 채택
- 권장 방식 X
