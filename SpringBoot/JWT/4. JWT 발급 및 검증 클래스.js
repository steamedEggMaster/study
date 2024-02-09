- 로그인 과정
              ◤--------------------------------------------------------------------------------------------------------------------------------------------------------------------------◥
              |                                                                                                                                                                           |  
              |     ◤---------------------◥        ◤---------------◥            DTO           ◤---------------◥                          ◤---------------◥       ◤---------------◥   |
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


로그인 성공 -> JWT 발급
서비스 접근 -> JWT 검증

JWT(Json Web Token)
특징
1. Header.Payload.Signature 구조
    • Header - JWT임을 명시
             - 사용된 암호화 알고리즘
    • Payload - 사용자 관련 정보
    • Signature - 암호화 알고리즘((BASE64(Header)) + (BASE64(Payload)) + 암호화 키)
2. String 타입
3. 내부 정보를 단순 BASE64 방식으로 Encoding -> 외부에서 쉽게 Decoding 가능
   - 토큰 내부에 중요 정보 입력 금지
     Why 사용? 토큰 자체의 발급처 확인을 위해

----- JWT 암호화 방식
1. 양방향
   • 대칭키
   • 비대칭키
2. 단방향

----- 암호화 키 저장
암호화 키는 프로퍼티 파일에 설정한 값을 @Value("${}") 로 불러오는 방법 사용하기

----- JWTUtil 클래스(발급 및 검증) 생성
• 토큰 Payload 에 저장될 정보
1. username / 2. role / 3. 생성일 / 4. 만료일
• JWTUtil에서 구현할 메서드
1. JWTUtil 생성자
2. username 확인 메서드
3. role 확인 메서드
4. 만료일 확인 메서드

1. @Component
   public class JWTUtil 생성

2. secretKey를 생성자 주입 시 생성자로 암호화키를 받아와서 SecretKey 클래스의 객체로 변환해야함.
   public JWTUtil(@Value("${spring.jwt.secret}")String secret){
        secretKey = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), SIG.HS256.key().build().getAlgorithm());
                        SecretKeySpec(byte[] key, String algorithm); }

3. 검증 메서드
   1. 토큰에서 사용자의 username 을 가져오는 메서드
      public String getUsername(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("username", String.class); }
   2. 토큰에서 사용자의 role 을 가져오는 메서드
      public String getRole(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().get("role", String.class); }
   3. 토큰의 만료일 을 가져오는 메서드
      public Boolean isExpired(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload().getExpiration().before(new Date()); }

3-1. 검증 메서드 해석
   - Jwts.parser() : JWT 토큰을 파싱하기 위한 JwtParser 인스턴스 생성
   - verifyWith(secretKey) : secretKey를 이용하여 JWT의 유효성 검사
   - build() : 위의 내용을 바탕으로 JwtParser 빌더를 빌드
   - parseSignedClaims(token) : 주어진 토큰을 파싱하고, 서명(sign)된 클레임들을 추출
   - getPayload() : 파싱된 토큰의 Payload 부분 가져오기
   - get("키", 형변환클래스.class) : 형변환하여 원하는 값 return
 
4. 발급 메서드
  public String createJwt(String username, String role, Long expiredMs){
        return Jwts.builder()
            .claim("username", username)
            .claim("role", role)
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis() + expiredMs))
            .signWith(secretKey)
            .compact(); }
