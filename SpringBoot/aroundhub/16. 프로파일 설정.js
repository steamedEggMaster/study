스프링 부트에선 서버의 환경에 맞춰 애플리케이션의 설정을 다르게 설정 가능한 '프로파일' 기능 제공
- 특정 환경에서 실행할 Bean, 사용할 Property 파일 설정 가능

----- 특정 환경에서 실행할 Bean 설정 시 @Profile 사용
- @Profile 사용하기
@Profile("dev") - 'dev' 환경에서 실행한다는 의미
                - 일반적으로 개발 과정에서만 필요한 Bean이 있을 경우 사용됨
        ('!dev')- 연산자를 통한 표현도 가능 - 'dev' 환경에서 실행 X

- 프로파일 선언하기
*환경의 선언은 대체로 JVM 시스템 변수로 전달
Dspring.profiles.active=dev/prod/local 등 or 인텔리제이에선 Configuration에서 Active profiles에서 dev, ... 입력

- application.properties 분리하기
어플리케이션 가동 환경에 따라 별도로 구분하여 관리 가능
형식 : 'application-[profile환경명].properties'
2.4버전 이후론 동일한 파일에서 프로파일 별 속성을 구분하여 지정 가능
spring.config.activate.on-profile=dev/prod/local 등
