SecurityConfig 클래스
: 스프링 시큐리티의 인가 및 설정을 담당하는 클래스
- SecurityConfig 구현은 스프링 시큐리티 버전별로 매우 상이 
            -> https://substantial-park-a17.notion.site/f3cbc92735824274a570dd81284cac56
            과 https://www.youtube.com/watch?v=NdRVhOccuOs 참고

----- @EnableWebSecurity
: Spring Security를 사용하여 웹 보안을 설정하기 위한 어노테이션
- SecurityConfig 클래스에서 웹 어플리케이션의 보안 설정을 정의 가능케 함

----- SecurityFilterChain
: Spring Security에서 제공하는 인증, 인가를 위한 필터들의 모음
- Spring Security에서 가장 핵심이 되는 기능 제공, 거의 대부분의 서비스는 SecurityFilterChain에서 실행

----- 인증 과정 및 인가 과정
- Http 요청 -> Web Application Server(Servlet Container) -> filter 1 -> filter 2 -> ... -> filter N -> Servlet -> 컨트롤러

                     사용자 인증 요청
                            ↓                                                                                     -----------------------------------------------------------------          
{ServletFilter}   {DelegatingFilterProxy}   {ServletFilter}                                       Filters 전달    |                        생성                   SecurityConfig1  |
                            ↓                                                           ----------------------------- { HttpSecurity }  <------- { WebSecurityConfigurerAdopter } |
    |                 FilterChainProxy                |    생성자로 fiters 전달          ↓                         |---------------------------------------------------------------|
    |   {filters} {filters} {filters} ... {filters}   |  <---------------------- | WebSecurity |
                            ↓                                                           ↑                         |---------------------------------------------------------------|
                            ↓                                                           ----------------------------- { HttpSecurity }  <------- { WebSecurityConfigurerAdopter } |
                            ↓                                                                     Filter 전달     |                        생성                   SecurityConfig2  |
                            ↓                                                                                     -----------------------------------------------------------------     
                            ↓
         ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
         |                   |                      |                   |                   |                      |                       |                   |                    |
| SecurityContext | → { LogoutFilter } → |  UsernamePassword  | → | Concurrent  | → |   RememberMe   | → |     Anonymous      | → |     Session    | → |    Exception    | → |FilterSecurity|
|PersistenceFilter|                      |AuthenticationFilter|   |SessionFilter|   |AuthenticaFilter|   |AuthenticationFilter|   |ManagementFilter|   |TranslationFilter|   | Interceptor  |

- Spring Security에서는 인증, 인가에 대한 처리를 여러 개의 필터를 통해 연쇄적으로 실행하여 수행
- 이때, 상황에 따라서 필요, 필요 X 필터 존재
  -> SecurityConfig 클래스에서 제어
  -> @Bean
     public SecurityFilterChain filterChain(HttpSecurity http){} 
     메서드 안에서 http 객체를 통해 사용하고자 하는 필터와 사용자가 직접 정의한 필터를 정의 가능

----- HttpSecurity
HttpSecurity의 인스턴스 메서드
1. HttpSecurity객체명.csrf( auth -> auth.disable() );


-------------------------------------------------------------------------------------------------------------
BCryptPasswordEncoder
: SpringSecurity에서 제공하는 비밀번호 해싱 기능 구현 클래스 중 하나
- salt를 사용하여 공격에 대한 강력한 방어 기능 제공
  salt : 암호화된 비밀번호를 더욱 안전하게 만들기 위해 사용되는 임의의 데이터 조각
- SecurityConfig 클래스에서 @Bean을 통해 BCryptPasswordEncoder의 객체를 얻는 메서드 사용
  ex) @Bean
      public BCryprPasswordEncoder bCryptPasswordEncoder() { return new BCryprPasswordEncoder(); }
--- 사용법
1. 비밀번호 해싱
 - 사용자로부터 얻은 password 값을
   BCryprPasswordEncoder의객체명.encode(사용자의password); 로 해싱하여 Entity 객체에 저장 후 DB에 저장
2. 비밀번호가 틀렸는지 비교
 - BCryprPasswordEncoder의객체명.matches(사용자입력비번, 해싱된비번); 으로 true | false 를 return 하여 확인
