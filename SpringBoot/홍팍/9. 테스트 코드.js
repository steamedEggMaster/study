테스트 주도 개발(TDD, Test Driven Development)
: 테스트 코드를 만든 후 이를 통과하는 최소한의 코드부터 시작해
  점진적으로 코드를 개선 및 확장해 나아가는 개발 방식

----- TEST 코드 작성하기
1. Test 파일은 java 파일의 위치와 동일하게 생성해야함
   - 보통 이름 형식 : 본래파일명Test

2. @SpringBootTest : 해당 클래스를 스프링부트와 연동해 통합 테스트를 수행함.
                   - ex) @SpringBootTest
                         class ArticleServiceTest
3. 본래파일클래스를 의존성 주입해주기
   - private final ArticleService articleService;
     @Autowired
     public ArticleServiceTest(ArticleService articleService) {
         this.articleService = articleService; }

4. 본래 클래스에서 원하는 메서드 우클릭 -> Generate -> Test -> 원하는 메서드 고르기
   -> 1번이 자동 생성되며, @Test가 붙은 메서드가 생성됨
      - @Test : 이 메서드가 테스트를 위한 코드임.

5. 예상 데이터와 실제 데이터를 만들고,
   JUnit 에서 제공하는
   assertEquals(Object expected, Object actual) 로 비교.

6. 테스트 메서드 여러 개를 실행 시 select 를 제외한 나머지는 DB에 데이터가 생성, 삭제되니,
   하나의 테스트가 끝날 때마다 DB 를 원상태로 되돌리기 위해
   테스트 메서드에 @Transactional 사용.
   ex) @Transactional
       @Test
       void create_성공_title과_content만_있는_dto_입력()

----- @DisplayName
: 테스트 결과에 메서드 이름 "대신" 보여줄 이름 설정 어노테이션
- @Test 가 붙은 메서드에 붙이면 됨.
- 형식 : @DisplayName("테스트_결과에_보여줄_이름")
- ex) @Test
      @DisplayName("특정 게시글의 모든 댓글 조회")
      void findByArticleId()

----- assertEquals
의 3번째 매개변수로 테스트 실패시 띄울 메세지 설정 가능
ex) assertEquals(expected.toString(), comments.toString(), "1번 글은 댓글이 없음");
                                                           // 실패 시 터미널에 띄워짐
