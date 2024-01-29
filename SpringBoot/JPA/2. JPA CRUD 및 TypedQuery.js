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
