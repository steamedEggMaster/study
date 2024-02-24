                   SpringBoot
                   ◤-----------------------------------------------------------◥
◤------◥          |    login Data    ◤---------◥        ◤------------◥       |
| login |  --------|----------------> | Security | -----> | UserDetails |       |
| form  |          |                  | Config   | <--- { UserDetails } |       |
◣------◢  ↖      |                  ◣---------◢        |   Service   |       |
              ↖   |  ◤-----------◥                      ◣------------◢       |
                 ↖__ |    Login   |                             ↑       ↘     |
                   |  | Controller |                             |         ◤---------------◥
                   |  ◣-----------◢                        { UserEntity } | UserRepository | ----- { DB }
                   |                                         ↗            ◣---------------◢
                   |  ◤-----------◥    ◤-----------◥    ↗                    |
  ------------------> |    Join    | -->|    Join    | ↗                       |
                   |  | Controller |    |   Service  |                          |
                   |  ◣-----------◢    ◣-----------◢                          |
                   ◣-----------------------------------------------------------◢


Spring Security는 로그인을 하면 username을 가져옴.
username을 UserDetailsService에 넘겨 UserRepository를 통해 Username이 있는지 확인하여 UserEntity를 얻어옴.
UserDetailsService는 가져온 UserEntity를 UserDetails에 담아 SpringSecurity에게 줌.

UserDetailsService와 UserDetails 는 Interface.
CustomUserDetailsService 와 CustomUserDetails 를 생성하여 구현하기

----- CustomUserDetailsService 생성
@Service //Service 붙여야함
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override // loadUserByUsername 구현
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userData = userRepository.findByUsername(username);
        if (userData != null) {
            return new CustomUserDetails(userData); }
        return null; }}

----- CustomUserDetails 생성
public class CustomUserDetails implements UserDetails {
    private UserEntity userEntity;
    public CustomUserDetails(UserEntity userEntity) {
        this.userEntity = userEntity; }
    @Override //구현 1
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collection = new ArrayList<>();
        collection.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return userEntity.getRole(); } });
        return collection; }
    @Override //구현 2
    public String getPassword() {
        return userEntity.getPassword(); }
    @Override //구현 3
    public String getUsername() {
        return userEntity.getUsername(); }
    @Override //구현 4
    public boolean isAccountNonExpired() {
        return true; }
    @Override //구현 5
    public boolean isAccountNonLocked() {
        return true; }
    @Override //구현 6
    public boolean isCredentialsNonExpired() {
        return true; }
    @Override //구현 7
    public boolean isEnabled() {
        return true; }}
