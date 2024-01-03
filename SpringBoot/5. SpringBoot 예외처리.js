스프링 부트의 예외처리 방식
크게 2가지 존재
1. @ControllerAdvice를 통한 모든 Controller에서 발생 가능한 예외 처리
2. @ExceptionHandler를 통한 특정 Controller의 예외 처리

@ControllerAdvice로 모든 컨트롤러에서 발생할 예외를 정의하고, @ExceptionHandler를 통해 발생하는 예외마다 처리할 메서드를 정의

----- 예외클래스 - 모든 예외 클래스는 Throwable 클래스를 상속 받고 있음
가장 상위 클래스 : Exeception
                         Checked Exception                 Unchecked Exception
처리 여부                반드시 예외 처리 필요               명시적 처리 강제하지 않음
확인 시점                컴파일 단계                        실행 중 단계
예외발생 시 트랜잭션      롤백하지 않음                      설정에 따라 롤백하거나 안함
대표 예외                 IOException                        NullPointerException
                         SQLException                       IndexOutOfBoundException

----- @ControllerAdvice, @RestcontrollerAdvice
- @ControllerAdvice는 Spring에서 제공하는 어노테이션
- @Controller or @RestController에서 발생하는 예외를 한 곳에서 관리하고 처리할 수 있게 하는 어노테이션
- 설정을 통해 범위 지정이 가능하며, Default 값으로 모든 Controller에 대해 예외 처리를 관리함 
      Ex) @RestControllerAdvice(basePackages = "com.example.demo") 처럼 패키지 범위 설정 가능
- 예외 발생 시 "json의 형태"로 결과를 반환하기 위해선 "@RestControllerAdvice" 를 사용하면 됨.

----- @ExceptionHandler
- 예외 처리 상황이 발생하면, 해당 Handler로 처리하겠다고 명시하는 어노테이션
- 어노테이션 뒤에 괄호를 붙여 어떤 ExceptionClass를 처리할 지 설정 가능.
     Ex) @ExceptionHandler(Exception.class)
- Exception.class는 최상위 클래스로 하위 세부 예외 처리 클래스로 설정한 핸들러 존재 시 그 핸들러가 우선처리하게 하며
  처리 되지 못하는 예외 처리에 대해 ExceptionClass에서 핸들링함.
- @ControllerAdvice로 설정된 클래스 내에서도 메서드로 정의할 수 있지만, 각 Controller 안에 설정도 가능
- 전역 설정(@ControllerAdvice)보다 지역 설정(Controller)으로 정의한 Handler가 "우선순위"를 가짐.
