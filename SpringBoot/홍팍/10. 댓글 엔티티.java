                  ◤-----------◥
                  | Repository |
                  ◣-----------◢
                 ↗            ↖
   ◤---------------◥        ◤---------------------------◥
   | CrudRepository |        | PagingAndSortingRepository |
   ◣---------------◢        ◣---------------------------◢
           ↑                                 ↑
◤-------------------◥       ◤-------------------------------◥
| ListCrudRepository |       | ListPagingAndSortingRepository |
◣-------------------◢       ◣-------------------------------◢
                  ↖             ↗
                  ◤--------------◥
                  | JpaRepository | : 엔티티의 CRUD + 페이징 및 정렬 기능 + JPA 에 특화된 기능
                  ◣--------------◢

------------------------------------------------------------------------------------------------------------
----- 게시글 엔티티 와 댓글 엔티티를 연결하기
1. 댓글 엔티티의 필드로 게시글 엔티티 선언
   코드 - private Article article;

2. 댓글과 게시글은, 댓글 입장에서 many-to-one 관계
   -> @ManyToOne 어노테이션 붙이기
   코드 - @ManyToOne
          private Article article;

3. 외래키와 게시글엔티티의 PK 연결하기
   코드 - @ManyToOne
          @JoinColumn(name = "article_id") //name = "외래키 이름"
          private Article article;
   -> DB 상에는 article 컬럼이 아닌 article_id 컬럼이 생성됨.

----- 네이티브 쿼리 메서드 생성하기
네이티브 쿼리 메서드 : 직접 작성한 sql 쿼리를 repository 메서드로 실행 가능하게 해주는 것.

1. 원하는 메서드를 Repository interface 에 적기

2. 해당 메서드를 네이티브 쿼리 메서드로 만드는 방법은 2가지
   1. @Query 어노테이션
      - 형식 : @Query(value = "쿼리", nativeQuery = true)
      - ex) @Query(value = "SELECT * FROM comment WHERE article_id = :articleId" , nativeQuery = true)
            List<Comment> findByArticleId(Long articleId);
      ** where 절의 조건에 들어가는 매개변수의 앞에는 : 를 붙여야 함

   2. orm.xml 파일 - 네이티브 쿼리 XML
      - 무조건 경로는 resource -> META-INF -> orm.xml
      - orm.xml 파일에서 엔티티 매핑을 위한 xml 코드
        <?xml version="1.0" encoding="utf-8" ?>
        <entity-mappings xmlns="https://jakarta.ee/xml/ns/persistence/orm"
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="https://jakarta.ee/xml/ns/persistence/orm
                       https://jakarta.ee/xml/ns/persistence/orm/orm_3_0.xsd"
                       version="3.0">
        </entity-mappings>

                  
