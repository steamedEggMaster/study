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
   ↙   ■   ↘      3. EntityManager.close() 
  ■           ↘    4-1. 조회 성공
                ■   4-2. 조회된 값이 없다면 Null
