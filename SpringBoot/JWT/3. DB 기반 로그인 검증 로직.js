- 로그인 과정
              ◤--------------------------------------------------------------------------------------------------------------------------------------------------------------------------◥
              |                                                                                                                                                                           |  
              |     ◤---------------------◥        ◤---------------◥                          ◤---------------◥                          ◤---------------◥       ◤---------------◥   |
              |     |   UsernamePassword   |        | Authentication |      ◤------------◥     |   UserDetails  |      ◤------------◥     |                |       |                |   |
POST : login -----> | AuthenticationFilter | -----> |     Manager    |  --> | UserDetails | --> |    Service     |  --> | UserDetails | --> | UserRepository | ----> |       DB       |   |
              |     |                      |        |                |  <-- |             | <-- |                |  <-- |             | <-- |                | <---- |  (UserEntity)  |   |
              |     ◣---------------------◢        ◣---------------◢      ◣------------◢     ◣---------------◢      ◣------------◢     ◣---------------◢       ◣---------------◢   |
              |                                           ↙                                                                                                                              |
              |                 ◤---------------◥     ↙                                                                                                                                 |
    Response  |                 |   Successful   |  ↙                                                                                                                                    |
        <-----------------------| Authentication |                                                                                                                                        |
    JWT Token |                 ◣---------------◢                                                                                                                                        |
              |                          |                                                                                                                                                |
              |                 ◤---------------◥                                                                                                                                        |
              |                 |     JWTUtil    |                                                                                                                                        |
              |                 ◣---------------◢                                                                                                                                        |
              ◣--------------------------------------------------------------------------------------------------------------------------------------------------------------------------◢

- UserDetails 와 UserDetailsService 는 interface 이므로 implements 해야함.
  1. @Service
     public class CustomUserDetailsService implements UserDetailsService
     - Overriding 해야하는 메서드
     1. public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
        - DB에서 해당 Username을 가진 객체를 얻고, UserDetails를 implements 한 커스텀클래스의 생성자에 담아 return 하면, AuthenticationManager 가 검증.

  2. public class CustomUserDetails implements UserDetails <----- Dto 임.
     - UserEntity 를 생성자 방식으로 주입받음.
     - Overriding 해야하는 메서드
     1. @Override
        public Collection<? extends GrantedAuthority> getAuthorities() --- 사용자의 권한 목록 return
     2. @Override
        public String getPassword()
     3. @Override
        public String getUsername()
     4. @Override
        public boolean isAccountNonExpired() --- 계정의 유효기간 만효 여부, 만료 X -> true return
     5. @Override
        public boolean isAccountNonLocked() --- 계정의 락 여부, 락 X -> true return
     6. @Override
        public boolean isCredentialsNonExpired() --- 비밀번호 유효기간 만료 여부, 만료 X -> true return
     7. @Override  
        public boolean isEnabled() --- 계정의 활성화 여부, 활성화 O -> true return
