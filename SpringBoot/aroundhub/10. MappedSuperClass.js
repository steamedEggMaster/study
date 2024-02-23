@MappedSuperClass
  - 여러 엔티티 객체에서 사용되는 공통 속성이 존재할 경우가 많음
                                ex) id, createdAt, updatedAt 등이 있음
  - 공통되는 속성을 별도의 클래스로 구분하여 @MappedSuperClass를 선언 후 사용
  - 코드 상 분리된 것, DB의 테이블 개념에서는 분리된 것이 아님

----- JPA Auditing(감사)
: 각 엔티티 별로 누가, 언제 접근했는지 기록 후 감시 체계를 꾸리는 것 ex) 데이터의 생성 일시, 누가 데이터를 생성했는지 등
- Spring Data JPA에서 이 기능을 사용하기 위해선 @EnableJpaAuditing 을 새로 만든 Configuration 클래스에 추가해줄 것.

 @EntityListener을 필수로 사용하게 됨.
 : 엔티티 객체를 DB에 적용하기 전/후에 콜백을 요청하는 어노테이션
 - @EntityListener(콜백을 요청할 클래스명.class) 로 사용
   -ex) @EntityListeners(AuditingEntityListener.class)
 - @EntityListener의 요청 시점
      1. @PostLoad - get요청 후
      2. @PrePersist - Persist는 일반적으로 save
      3. @PostPersist
      4. @PreUpdate
      5. @PostUpdate
      6. @PreRemove
      7. @PostRemove

----- Jpa Auditing Annotation
1. @CreateDate : 엔티티가 저장되는 시점에 자동으로 시간 주입
2. @CreateBy : 엔티티가 저장되는 시점에 저장 주체가 누구인지 주입
3. @LastModifiedDate : 엔티티가 수정되는 시점에 자동으로 시간 주입
4. @LastModifiedBy : 엔티티가 수정되는 시점에 수정 주체가 누구인지 주입
