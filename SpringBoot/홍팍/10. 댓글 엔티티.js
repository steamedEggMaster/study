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
------ 게시글 엔티티 와 댓글 엔티티를 연결하기
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

------ 네이티브 쿼리 메서드 생성하기
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
      - 작성 방법      
        1. orm.xml 파일에서 엔티티 매핑을 위한 xml 코드
           <?xml version="1.0" encoding="utf-8" ?>
           <entity-mappings xmlns="https://jakarta.ee/xml/ns/persistence/orm"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                          xsi:schemaLocation="https://jakarta.ee/xml/ns/persistence/orm
                          https://jakarta.ee/xml/ns/persistence/orm/orm_3_0.xsd"
                          version="3.0">
           </entity-mappings>

        2. <entity-mappings> 와 </entity-mappings> 태그 사이에 <named-native-query> 와 <query> 태그로 쿼리 작성
           - 형식 : <named-native-query
                            name="쿼리_수행_대상_엔티티.메서드_이름"
                            result-class="쿼리_수행_결과를_반환하는_타입의_전체_패키지_경로">
                        <query>
                            <![CDATA[
                                 //쿼리
                            ]]>
                        </query>
                    </named-native-query>
           - 코드 :  <named-native-query
                             name="Comment.findByNickname"
                             result-class="com.example.firstproject.entity.Comment">
                         <query>
                             <![CDATA[
                                 SELECT * FROM comment WHERE nickname = :nickname
                             ]]>
                         </query>
                     </named-native-query>

------ Repository의 메서드 Test 하기
1. 동일하게 Generate -> Test 로 생성

2. Test 클래스에 @DataJpaTest 붙이기
   - ex) @DataJpaTest
         class CommentRepositoryTest

3. 테스트 하려는 메서드가 있는 Repository 의존성 주입하기
   - ex) @Autowired
         CommentRepository commentRepository;
4. 입력 데이터, 실제 데이터, 예상 데이터 생성 후 assertEquals 로 비교하기
