로그백(logback) : Log4J 기반으로 개발된 로깅 라이브러리
               - Log4J에 비해 10배 정도 빠른 퍼포먼스 및 메모리 효율성 증대
               - 로그에 특정 레벨 설정 가능(Trace -> Debug -> Info -> Warn -> Error)
               - 실운영과 테스트 상황에서 각각 다른 출력 레벨을 설정하여 로그를 확인할 수 있음.
               - 출력 방식에 대해 설정 가능
               - 설정 파일을 일정 시간마다 스캔하여 어플리케이션 "중단 없이" 설정 변경 가능.
               - 별도의 프로그램 없이 자체적으로 로그 압축 지원
               - 로그 보관 기간 설정 가능

                                      Appender<Interface>
                                               ^
                                               |
                                  UnsynchronizedAppenderBase
                                               ^
                                               |
                          Filter ---> OutputStreamAppender <--- Encoder<Interface>
                                               ^
                                               |
                                    ----------- -----------
                                   ^                       ^
                                   |                       |
                            ConsolAppender            FileAppender
                                                           ^
                                                           |
                                                     RollingFileAppender

일반적으로 Classpath에 있는 logback 설정 파일을 참조하게 됨.
  - Java Legacy, Spring의 경우 logback.xml 파일을 참조
  - SpringBoot의 경우 logback-spring.xml 파일을 참조

----- Appender : Log의 형태 및 어디에 출력할지 설정하기 위한 영역
대표적인 Appender 형식
1. .ConsoleAppender : 콘솔에 로그 출력
2. .FileAppender : 파일에 로그를 저장
3. .RollingFileAppender : 여러 개의 파일을 순회하며 로그를 저장 - 로그의 레벨을 기준으로 순회
4. .SMTPAppender : 로그를 메일로 보냄
5. .DBAppender : DB에 로그를 저장

<encoder> : Appender 내에 포함되는 항목, <pattern>을 사용하여 원하는 형식으로 로그를 표현할 수 있음.
<root> : 설정한 Appender를 참조하여 로그의 레벨을 설정할 수 있음 -> 전역 설정임, 지역 설정을 위해선 <logger> 사용

-----로그 레벨
1. ERROR : 로직 수행 중에 오류가 발생한 경우, 시스템적으로 심각한 문제가 발생하여 작동이 불가한 경우
2. WARN : 시스템 에러의 원인이 될 수 있는 경고 레벨, 처리 가능한 사항
3. INFO : 상태 변경과 같은 정보성 메세지
4. DEBUG : 어플리케이션의 디버깅을 위한 메시지 레벨
5. TRACE : DEBUG 레벨보다 더 디테일한 메시지를 표현하기 위한 레벨

* 예를 들어, 로그레벨을 'INFO' 로 설정 -> 'TRACE', 'DEBUG' 레벨은 출력되지 않음.

-----pattern
1. %Logger{length} : Logger Name                    2. %thread : 현재 Thread명
3. %-5level : 로그 레벨, -5는 출력의 고정폭 값        4. %t : 로깅이 발생한 Thread명
5. %msg : 로그 메시지 영역(==%message)               6. %c : 로깅이 발생한 카테고리
7. ${PID:-} : 프로세스 I                             8. %C : 로깅이 발생한 클래스 명
9. %d : 로그 기록 시간                              10. %m : 로그 메시지
11. %p : 로깅 레벨                                  11. %n : 줄바꿈
12. %F : 로깅이 발생한 프로그램 파일명               12. %% : %출력
13. %M : 로깅이 발생한 메소드의 이름                 14. %r : 어플리케이션 실행 후 로깅이 발생한 시점까지의 시간
15. %I : 로깅이 발생한 호출지의 정보                 16. %L : 로깅이 발생한 호출지의 라인 수
사용 예시
<pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}][%-5level][%thread]%logger%msg%n</pattern>

logback을 사용하기 위해선 pom 파일에서 dependency 설정을 해주어야 하지만, SpringBoot에선 기본적으로 의존성을 잡고 있음.
