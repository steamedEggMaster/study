CSRF(Cross Site Request Forgery)
: 요청을 위조하여, 사용자가 원치 않아도 서버측으로 특정 요청을 강제로 보내는 것. ex) 회원 정보 변경, 게시글 CRUD를 사용자 모르게 요청

개발환경에선 http.csrf((auth) -> auth.disable()); 로 사용했지만(csrf 공격 허용),
배포환경에선 제거 후 추가적인 설정 필요

diable 설정이 없다면, 자동으로 enable(csrf 공격 방어) 설정이 진행됨
  -> enable 설정 시 Spring Security 는 CsrfFilter 를 통해 POST, PUT, DELETE 요청에 대해 토큰 검증 진행
  -> 토큰이 없다면 로그인이 안됨.
