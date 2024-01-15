@Query 어노테이션
- Spring Data JPA에서 제공하는 기능으로 JPQL을 사용하여 쿼리를 작성하는 방법
- JPQL은 SQL과 문법이 거의 비슷 -> 사용 용이
- JPQL은 "엔티티 객체"를 대상으로 쿼리 수행 -> 사용중인 DB의 문법에 맞춰 자동 생성됨
 
----- @Query 문법 - 기본 쿼리 작성 방법
1. 직접 쿼리 사용 ex) @Query("SELECT p FROM product p WHERE p.productPrice > 2000")
                     List<ProductEntity> findByProductPriceBasis();
2. DB의 Native Query 사용 ex) @Query(value = "SELECT * FROM product p WHERE p.productPrice > 2000", nativeQuery = true)
                              List<ProductEntity> findByProductPriceBasisNativeQuery();
- 메서드 이름은 아무렇게나 지정 가능

----- @Query 문법 - 파라미터를 쿼리에 주입하는 방법                                         //? 뒤의 숫자 : 파라미터의 순서 중 사용할 파라미터 번호
1. 파라미터를 쿼리에 주입하는 방법 ex) @Query("SELECT p FROM product p WHERE p.productPrice > ?1")
                                     List<ProductEntity> finByPriceWithParameter(Integer productPrice);
2. :parameter 방식으로 주입하는 방법
ex) @Query("SELECT p FROM product p WHERE p.productPrice > :productPrice") //파라미터의 변수 이름과 동일하게
    List<ProductEntity> findByPriceWithParameterNaming(Integer productPrice);
ex) @Query("SELECT p FROM product p WHERE p.productPrice > :pri")
    List<ProductEntity> findByPriceWithParameterNaming2(@Param("pri") Integer productPrice);
                                                        //매핑 어노테이션
