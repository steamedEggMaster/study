----- 세션을 사용하고 있는 사용자의 username 을 알아내는 법
ex) String username = SecurityContextHolder.getContext().getAuthentication().getName();

----- 세션을 사용하고 있는 사용자의 role 을 알아내는 법
Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
Collection<? extends GrantedAuthority> collection = authentication.getAuthorities();
Iterator<? extends GrantedAuthority> iterator = collection.iterator();
GrantedAuthority auth = iterator.next();
String role = auth.getAuthority();
