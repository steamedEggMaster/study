JPA(Java Persistence API) : 자바의 ORM(Object Relational Mapping) 표준 스펙을 정의
                          - JPA의 스펙은 자바의 객체와 DB를 "어떻게 매핑하고 동작해야 하는지"를 정의함
                          - 영속성 컨텍스트(Persistence Context) : JPA가 관리하는 엔티티 객체의 집합
                                                                - 엔티티 객체가 영속 컨텍스트에 들어오면, JPA는 엔티티 객체의 매핑 정보를 가지고 DB에 반영
                                                                - 엔티티 객체가 영속 컨텍스트에 들어와 관리 대상이 되면, 그 객체를 "영속 객체"라 부름
    - Hibernate : ORM Framework 중 하나, 'JPA 프로바이더'라고도 부름
                - JPA의 실제 구현체 중 하나, 현재 JPA 구현체 중 가장 많이 사용됨.

                          
