@Query 어노테이션
- Spring Data JPA에서 제공하는 기능으로 JPQL을 사용하여 쿼리를 작성하는 방법
- JPQL은 SQL과 문법이 거의 비슷 -> 사용 용이
- JPQL은 "엔티티 객체"를 대상으로 쿼리 수행 -> 사용중인 DB의 문법에 맞춰 자동 생성됨
 
----- @Query 문법 - 기본 쿼리 작성 방법
                                              
1. 직접 쿼리 사용 ex) @Query("SELECT p FROM ProductEntity p WHERE p.productPrice > 2000")
                     List<ProductEntity> findByProductPriceBasis();
2. DB의 Native Query 사용 ex) @Query(value = "SELECT * FROM product p WHERE p.productPrice > 2000", nativeQuery = true)
                              List<ProductEntity> findByProductPriceBasisNativeQuery();
                         - 주의사항! : 만약 엔티티객체가 가진 필드와 일치하지 않는 객체를 가지고 조회를 할 경우
                                       Native Query는 List<객체>를 return -> 후처리를 해주는 것이 중요
- 메서드 이름은 아무렇게나 지정 가능
- 직접 쿼리에선 FROM 다음에 Entity명
  NaitiveQuery에선 FROM 다음에 Table명 - 실제 SQL 문처럼 사용하면 됨

----- @Query 문법 - 파라미터를 쿼리에 주입하는 방법                                         //? 뒤의 숫자 : 파라미터의 순서 중 사용할 파라미터 번호
1. 파라미터를 쿼리에 주입하는 방법 ex) @Query("SELECT p FROM ProductEntity p WHERE p.productPrice > ?1")
                                     List<ProductEntity> finByPriceWithParameter(Integer productPrice);
2. :parameter 방식으로 주입하는 방법
ex) @Query("SELECT p FROM ProductEntity p WHERE p.productPrice > :productPrice") //파라미터의 변수 이름과 동일하게
    List<ProductEntity> findByPriceWithParameterNaming(Integer productPrice);
ex) @Query("SELECT p FROM ProductEntity p WHERE p.productPrice > :pri")
    List<ProductEntity> findByPriceWithParameterNaming2(@Param("pri") Integer productPrice);
                                                        //매핑 어노테이션
