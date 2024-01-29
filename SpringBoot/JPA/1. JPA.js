JPA(Java Persistence API) : 자바의 ORM(Object Relational Mapping) 표준 스펙을 정의
                          - JPA의 스펙은 자바의 객체와 DB를 "어떻게 매핑하고 동작해야 하는지"를 정의함
                          - 영속성 컨텍스트(Persistence Context) : JPA가 관리하는 엔티티 객체의 집합
                                                                - 엔티티 객체가 영속 컨텍스트에 들어오면, JPA는 엔티티 객체의 매핑 정보를 가지고 DB에 반영
                                                                - 엔티티 객체가 영속 컨텍스트에 들어와 관리 대상이 되면, 그 객체를 "영속 객체(Persistence Object)"라 부름
    - Hibernate : ORM Framework 중 하나, 'JPA 프로바이더'라고도 부름
                - JPA의 실제 구현체 중 하나, 현재 JPA 구현체 중 가장 많이 사용됨.

                        JPA
                         ↑
         ---------------- ----------------
         ↑               ↑               ↑
   EclipseLink      Hibernate       DataNucleus

----- 영속성 컨텍스트
- 영속성 컨텍스트는 세션 단위로 생명주기를 갖고 있음 (세션이 생기면서 만들어지고, 세션이 종료되면 없어짐)
- 영속성 컨텍스트에 접근하기 위해서 "EntityManager" 사용
- EntityManager는 "하나의 세션" 으로 보고 아래와 같은 방식으로 동작 구성
      1. EntityManager 생성(EntityManagerFactory를 통해 생성)
      2. EntityManager가 가지고 있는 트랜잭션(Transaction)을 시작
      3. EntityManager를 통해 영속 컨텍스트에 접근하고 객체를 작업 
         ↑-------- 영속성 컨텍스트 안에서 작업 ---------↑
      4. 트랜잭션을 커밋(Commit)하여 DB에 반영
      5. EntityManager 종료

----- Entity 클래스
JPA 어노테이션을 활용하여 엔티티 클래스를 정의
- 주요 어노테이션
1. @Entity : 해당 클래스가 JPA 엔티티 클래스라고 정의
2. @Table  : 해당 클래스가 DB의 어느 테이블에 매핑되는지 정의
3. @Id     : DB 테이블의 Primary Key 컬럼과 매핑
4. @Column : 매핑할 DB의 칼럼 이름과 필드 변수의 이름이 다를 경우 매핑하기 위해 사용


javax.persistence.EntityManager;
javax.persistence.EntityManagerFactory;
javax.persistence.EntityTransaction;
javax.persistence.Persistence;

1. Persistence의 createEntityManagerFactory()를 통해 EntityManagerFactory의 객체를 만들고
2. entityManagerFactory의 createEntityManager()를 통해 EntityManager의 객체를 만들고
3. entityManager의 getTransaction()을 통해 EntityTransaction의 객체를 만들고
4. entityTransaction.begin()을 통해 트랜잭션을 시작
5. 저장하고자 하는 entity객체를 생성하여 entityManager.persist(엔티티객체)로 entity객체를 Persistence Context에 추가
6. entityTransction.commit()을 통해 DB에 반영
7. 예외 발생 시 entityTransaction.rollback()
8. 다 사용후 1. entityManager.close() - 
            2. entityManaagerFactory.close() - 커넥션 풀 자원 반납

* EntityManagerFactory는 EntityManager를 생성하기 위한 팩토리 인터페이스로 
  persistence 단위 별로 팩토리를 생성
* EMF를 Custom하여 싱글톤 방식으로 EMF를 불러와 작업량을 줄일 수 있음 (basic_jpa 와 entity_manager_factory 비교)
