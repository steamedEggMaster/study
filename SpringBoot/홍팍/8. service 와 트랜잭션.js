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
