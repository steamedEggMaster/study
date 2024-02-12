SecurityConfig 와 소셜 로그인 서비스 API 신청 후 CustomOAuth2UserService 구현하기

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
   코드 -  if(registrationId.equals("naver")){ oAuth2Response = new NaverResponse(oAuth2User.getAttributes()); }
           else if (registrationId.equals("google")){ oAuth2Response = new GoogleResponse(oAuth2User.getAttributes()); }
           else { return null; }
6. 
