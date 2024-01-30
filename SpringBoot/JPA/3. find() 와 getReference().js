find(엔티티타입, @Id필드) 메서드 : EntityManager에서 조회 연산 수행
  ex) UserEntity userEntity = entityManager.find(UserEntity.class, email);
- 엔티티 조회 후 @Id필드(식별자)와 매핑되는 엔티티가 존재 -> 엔티티 객체 return
                                                 존재 X -> null return

getReference(엔티티타입, @Id필드) 메서드 : EntityManager에서 조회 연산 수행
  ex) userEntity = entityManager.getReference(UserEntity.class, email);
- getReference 메서드는 "프록시 객체" return, 메서드가 실행되는 시점에 쿼리를 실행하지 않음
- 실제 쿼리는 최초로 데이터를 접근하는 시점에 실행됨 - userEntity의 데이터를 get, set 할때
- 프록시 객체를 EntityManager 세션이 유지되는 상황에서 사용해야 객체를 세션 밖에서도 사용 가능
                             세션이 종료된 후 접근 시 NoSession 에러 발생
- 데이터 존재 X -> EntityNotFoundException 발생
