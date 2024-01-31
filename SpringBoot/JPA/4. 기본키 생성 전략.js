기본 키를 생성하는 방법
- Entity를 생성하면 꼭 필드에 @Id 필요
- @Id 필드는 DB에서 Primary key와 매핑됨
- 기본 키를 자동으로 생성하는 방식에서는 @GeneratedValue 어노테이션을 통해 전략 설정 가능

전략 설정
1. 직접 할당 방식 : 기본키를 애플리케이션에서 자체적으로 생성하여 할당하는 방식
                 - @GeneratedValue 어노테이션 사용 안하고 직접 값 주입
                 - 이 방식은 애플리케이션에서 별도의 키 생성 규칙을 정의하여 사용해야 중복 문제 발생 X

2. Identity
- @GeneratedValue(strategy = GenerationType.IDENTITY)
- 기본키 생성을 DB에 위임하는 방식
- 컬럼에 AUTO_INCREMENT 기능 활용하여 값을 사용
- Identity 전략은 persist() 메서드가 호출되는 시점에 Insert 쿼리가 실행되며 식별자를 조회 -> 그래야 엔티티에서 쓰는 넘버가 뭔지 알 수 있음
                  - 일반적으로는 commit() 시점에 쿼리 실행

3. Sequence
- @GeneratedValue(strategy = GenerationType.SEQUENCE)
- DB의 Sequence를 이용하는 방식
- DB의 Sequence : Unique 값을 생성해주는 객체
                - 일반적으로 Primary Key를 생성하기 위해 사용됨
                - 지원하는 DB : Oracle, PostgresSQL, H2, Maria DB 등
                - 대체로 Oracle 에서만 사용
- Sequence 방식을 사용하기 위해선 @SequenceGenerator 어노테이션을 아래와 같이 적어줘야 함
ex) @SequenceGenerator(
     name = "sequence_generator",
     sequenceName = "my_seq",
     allocationSize = 1)

4. Table
- @GeneratedValue(strategy = GenerationType.TABLE)
- DB의 Sequence 역할을 수행하는 테이블을 생성하여 활용하는 방식
- Sequence를 지원하지 않는 DB 사용 시 이용
- 다만 목적에 맞게 최적화된 테이블 X -> 성능 상 이슈 발생 가능
- @TableGenerator 어노태이션으로 테이블 생성
ex) @TableGenerator(name = "id_generator",
     table = "id_gen",
     pkColumnName = "entity",
     pkColumnValue = "table_gen",
     valueColumnName = "next_id",
     [initialValue = 0,]
     allocationSize = 1)

5. Auto
- @GeneratedValue(strategy = GenerationType.Auto)
- 연동된 DB의 종류에 따라 앞서 소개한 전략을 자동 채택
- 권장 방식 X
