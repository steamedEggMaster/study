----- 리포지토리에서 삭제하기
id 값을 통해 대상을 findById() 를 이용해 찾고
if( targetEntity != null) { repository.delete(entity); }

----- redirect 할때, redirect 된 페이지에서 한번 사용이 가능한 데이터를 넘기기
1. 매개변수에 "RedirectAttribute 변수명" 추가

2. 변수명.addFlashAttribute(String name, Object value); 로 값 넘기기
   -> redirect 된 경로의 뷰 파일에서 한번 사용 가능해짐.
