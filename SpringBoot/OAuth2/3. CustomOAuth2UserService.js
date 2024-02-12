SecurityConfig 와 소셜 로그인 서비스 API 신청 후 CustomOAuth2UserService 구현 후 SecurityConfig 에 추가하기

1. DefaultOAuth2UserService 를 상속받는 CustomOAuth2UserService 생성
   코드 - @Service 
          public class CustomOAuth2UserService extends DefaultOAuth2UserService
                                                     // OAuth2UserService 의 구현체
2. loadUser() 메서드 @Overriding
   코드 - @Override
          public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException

3. super.loadUser(userRequest) 를 통해 OAuth2User 객체 생성하기
   코드 - OAuth2User oAuth2User = super.loadUser(userRequest);
   - 받은 json 을 oAuth2User.getAttributes() 로 확인 가능
                 // Map<String, Object> return
4. 외부 소셜 로그인 서비스 업체의 이름이 담긴 registrationId 값을 받기 위해 아래의 코드 사용
   코드 - String registrationId = userRequest.getClientRegistration().getRegistrationId();
                                              //클라이언트 등록정보    // 등록 ID
5. registrationId 를 비교하여 그에 맞는 json을 받을 ResponseDto 생성
   - Dto 는 각 서비스별로 오는 json 이 다르니 그에 맞게 각각 Dto클래스를 만들어주기
   코드 -  if(registrationId.equals("naver")){ oAuth2Response = new NaverResponse(oAuth2User.getAttributes()); }
           else if (registrationId.equals("google")){ oAuth2Response = new GoogleResponse(oAuth2User.getAttributes()); }
           else { return null; }
6. DB랑 비교하여 기존 회원 여부 파악 후 Role 을 정해준 후 ("ROLE_~")
   OAuth2User을 implements 한 Dto의 객체에 담아 return

7. SecurityConfig 에서 CustomOAuth2UserService 를 추가해주기 - OAuth2 토큰을 사용해 사용자 인증 후 사용자 정보를 가져오기 위한 설정
   코드 -  http
               .oauth2Login(oauth2 -> oauth2 // oauth2 로그인 구성
                  .userInfoEndpoint(userInfoEndpointConfig -> 
                     userInfoEndpointConfig.userService(customOAuth2UserService)));
