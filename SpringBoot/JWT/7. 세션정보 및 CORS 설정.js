JWT를 세션은 STATELESS 로 관리하지만, JWTFilter 를 통과 후 일시적으로 세션을 생성하기 때문에
값에 접근이 가능하다.
  -1. username
      코드 : String name = SecurityContextHolder.getContext().getAuthentication().getName();

  -2. role
      코드 : Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
             Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
             Iterator<? extends GrantedAuthority> iter = authorities.iterator();
             GrantedAuthority auth = iter.next();
             String role = auth.getAuthority();
