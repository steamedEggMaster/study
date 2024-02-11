인터셉터(Interceptor)
: DispatcherServlet과 컨트롤러(Controller) 사이에서 요청(Request)를 가로채는 역할 수행
- 인터셉터 사용 시 기존 로직 수정 없이 비지니스 로직 전후에서 특정 기능 수행 가능
- 인터셉터 구현을 위해 "HandlerInterceptor" 사용

----- HandlerInterceptor 구조
          --------      -----------        ----------------
          |      | ---> |          | <---> | HandlerMapping |                                ↓ 위부터 아래로 순서
          |      |      |          |        ----------------                                 ↓
          |      |      |          |        -------------                                    ↓
          |      |      |          |       |             |        |---------------------|    ↓
Request   |      |      |          | ----> | Handler     | <----> | Handler(Controller) |    ↓
--------> |      |      |Dispatcher|       | Interceptor |        |---------------------|    ↓
          |Filter|      | Servlet  | <---- |             |                  ↑                ↓
<-------- |      |      |          |        -------------                   ↓                ↓
Response  |      |      |          |                                    | Logic |            ↓
          |      |      |          | <---> | ViewResolver|                                   ↓
          |      | <--- |          | <---> | View |                                          ↓
          --------      -----------    
Filter와 HandlerInterceptor는 비슷
차이점은 DispatcherServlet 우측의 내용들은 Spring Context에 존재하는데 Filter는 그 바깥에 있어 Spring Component에 접근하기 어렵다
                                                                    HandlerInterceptor는 Compoent에 접근이 쉽다

----- HandlerInterceptor 인터페이스
public interface HandlerInterceptor {
    default boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception { }

    default void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, 
      @Nullable ModelAndView modelAndView) throws Exception {  }

    default void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, 
      @Nullable Exception ex) throws Exception {  }
}

default 메서드는 인터페이스의 기본 메서드로 구현클래스에서 반드시 구현할 필요가 없음 - 필요한 것만 하면됨
1. preHandle 메서드 : 컨트롤러로 Request가 가기 전에 수행할 코드를 작성하는 메서드
                    - return 값이 true -> 컨트롤러로 Request 전달, false -> 전달 X
                    - Object handler : 요청을 전달할 컨트롤러 객체가 담겨있음
2. postHandle 메서드 : 컨트롤러 로직이 수행된 후 "View가 렌더링 되기 전"에 수행할 코드를 작성하는 메서드
3. afterCompletion 메서드 : "View가 렌더링 된 후"에 실행되는 메서드

----- HttpServletRequest 와 HttpServletResponse
: WAS 가 Request를 받으면 HttpServletRequest 와 HttpServletResponse 객체를 생성하여 웹 application으로 전달
1. HttpServletRequest 
          - Http 프로토콜의 Request 정보를 Servlet으로 전달하기 위해 사용되는 객체
          - Header, Parameter, Cookie, URL, URI 등의 정보를 가짐
          - Body의 값을 읽기 위한 메서드를 가짐
2. HttpServletResponse
          - Request에 대한 Response값을 담기 위한 객체
          - Content-Type, 응답코드, 메시지 를 가짐

----- 과정
HandlerInterceptor 인터페이스의 구현체에서 각 메서드들을 오버라이딩 후
WebMvcConfigurer 인터페이스의 구현체를 작성하여 
addInterceptors() 메서드를 오버라이딩하여 생성한 Interceptor 등록
          ex) public void addInterceptors(InterceptorRegistry registry) {
                registry.addInterceptor(new HandlerInterceptor구현체())
                    .addPathPatterns("/**") //해당 인터셉터가 동작할 경로 설정
                    .excludePathPatterns("/hello"); //설정된 경로는 인터셉터 예외 설정
              }
 
