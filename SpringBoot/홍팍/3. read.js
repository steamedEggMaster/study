----- @PathVariable 
  : 변수가 들어간 url의 값을 가져오기 위한 어노테이션
  ex) GetMapping("/articles/{id}")
      public String show(@PathVariable Long id)

----- DB에서 조회 후 Entity 를 반환
* 이 return 값은 null 이 될수 있기때문에
  1. repository interface의 커스텀 함수를 만든 후 @Nullable 을 붙이기
  2. Optional 클래스
     - Optional<엔티티> 객체명 = repository.find~();
       으로 null을 받거나 있다면 <> 안의 객체로 받음.
     - 메서드
       1. 객체명.isPresent() - 있/없 여부 return
       2. 객체명.get() - <> 안의 객체 return / 없으면 nullpointException return
  3. .orElse(null) 사용
     ex) Article articleEntity = repository.findById(id).orElse(null);

----- mustache 에서 model.addAttribute(String name, Object value) 로 등록한 객체를 사용하는 방법
1. 객체가 사용될 범위 지정
{{#name}}
~
{{/name}}

2. ~ 에서 객체의 field 들을 사용하여 값 넣기
                                  - field명을 사용하면 됨
ex) value 가 Article객체고, Article의 field 가 id, title, content 라고 할때
{{id}}
{{title}}
{{content}}
