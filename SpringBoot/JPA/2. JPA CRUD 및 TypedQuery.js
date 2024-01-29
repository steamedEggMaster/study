기본적은 CRUD 사용법
1. 데이터 추가하기
           ■      1. EntityManager를 생성 (by EntityManagerFactory)
           ↓  
           ■      2. EntityTransaction을 시작 (by EntityManager)
-----------↓----   
|try{}     ■   |  3. 저장하고자 하는 Entity 생성
|          ↓   |
|          ■   |  4. EntityManager.persist() 메서드를 통해 영속성 컨텍스트에 Entity 객체 저장
|          ↓   | 
|  🛢  ←←  ■   |  5. EntityTracsaction.commit() 메서드를 통해 DB에 실제 반영
-----------↓ ↘-
           ↓   ■  Exception. 3~5 단계에서 예외 발생 시 transaction.rollback()
           ■      6. EntityManager.close() 

2. 데이터 조회하기
 - 데이터를 조회하는 일반적인 진행 단계, 단일 조회의 경우 트랜잭션 필요 X

        ■           1. EntityManager를 생성 (by EntityManagerFactory)
        ↓ 
  ↗→→→ ■           2. EntityManager.find() 메서드를 활용하여 Entity 조회
🛢   ↙ ↓ ↘
   ↙   ■   ↘      3. EntityManager.close() 종료
  ■           ↘    4-1. 조회 성공
                ■   4-2. 조회된 값이 없다면 null

3. 데이터 변경하기
           ■      1. EntityManager를 생성 (by EntityManagerFactory)
           ↓  
           ■      2. EntityTransaction을 시작 (by EntityManager)
-----------↓----   
|try{}     ■   |  3. 변경하고자 하는 Entity 조회
|          ↓   |
|          ■   |  4. 조회된 Entity 객체에서 값을 변경
|          ↓   | 
|  🛢  ←←  ■   |  5. EntityTracsaction.commit() 메서드를 통해 변경 감지 및 DB에 실제 반영 (Dirty Check)
-----------↓ ↘-
           ↓   ■  Exception. 3~5 단계에서 예외 발생 시 transaction.rollback()
           ■      6. EntityManager.close() 

4. 데이터 삭제하기
           ■      1. EntityManager를 생성 (by EntityManagerFactory)
           ↓  
           ■      2. EntityTransaction을 시작 (by EntityManager)
-----------↓----   
|try{}     ■   |  3. 삭제하고자 하는 Entity 조회
|          ↓   |
|          ■   |  4. EntityManager.remove() 메서드를 통해 영속성 컨텍스트에서 영속객체 삭제
|          ↓   | 
|  🛢  ←←  ■   |  5. EntityTracsaction.commit() 메서드를 통해 변경 감지 및 DB에 실제 반영 (Dirty Check)
-----------↓ ↘-
           ↓   ■  Exception. 3~5 단계에서 예외 발생 시 transaction.rollback()
           ■      6. EntityManager.close() 

----- TypedQuery : 작성한 JPQL 쿼리를 실행시키기 위한 객체
      JPQL : 엔티티 객체를 조회하는 객체 지향 쿼리 언어

- 쿼리의 반환 타입 명확 -> TypedQuery 사용, 명확 X -> Query 사용
TypedQuery 예시                                                      테이블명 X, 객체의 타입
TypedQuery<UserEntity> query = entityManager.createQuery("select u from UserEntity u", UserEntity.class);
                                                            쿼리문(sql과 거의 동일)        return 타입
List<UserEntity> userEntities = query.getResultList();



































