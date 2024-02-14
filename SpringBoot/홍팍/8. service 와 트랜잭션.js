삼항 연산자
return (조건문) ? true 내용 : false 내용;

----- stream
.stream()
.map( i -> i.~ ) - i를 다른 객체로 변환함.
.collect(Collection.toList());

.stream()
.forEach(i -> i.~); - i를 하나하나 처리함.

----- orElseThrow(() -> new 예외클래스("띄울말"));
ex) articleRepository.findById(-1L).orElseThrow(() -> new IllegalArgumentException("결제 실패!"));


----- 트랜잭션
트랜잭션은 보통 Service 에서 관리
- 간단한 사용법
  : service의 메서드에 @Transactional 어노테이션 붙이기
                      - 예외 발생 시 롤백
