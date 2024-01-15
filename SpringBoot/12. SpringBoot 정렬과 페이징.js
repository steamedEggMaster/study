----- 쿼리문에서의 정렬
- 일반적인 쿼리문 작성 시 정렬 사용을 위해선 'ORDER BY' 구문 사용
   -> 특정 컬럼을 기준으로 오름or내림차순 정렬된 레코드 목록을 응답 받음

----- 쿼리메서드에서의 정렬 처리
- 쿼리메서드에서는 메서드의 이름으로 정렬 처리 설정 가능
Asc : 오름차순
Desc : 내림차순
ex) findByNameOrderByStockAsc

- 여러 정렬 기준 사용을 원할 시 이어 붙여 설정
ex) findByNameOrderByStockAscPriceDesc

----- 매개변수를 활용한 정렬 처리
- Sort 객체를 활용하여 정렬 기준 설정 가능
ex) findByName(String name, Sort sort)
    findByName("pen", Sort.by(Order.asc("productPrice")));

----- 매개변수를 활용한 페이징 처리
- 페이징 처리를 하면 return 타입으로 "Page"를 설정하고 매개변수로 "Pageable" 객체 사용
ex) findByNmae(String name, Pageable pageable);
    findBtName("공책", PageRequest.of(0,2));
- PageRequest의 of 메서드    //페이지 번호는 size로 나눈 페이지 중 보고 싶은 페이지 번호를 의미
1. of(int page, int size) : 페이지 번호(Zero-based), 페이지당 데이터 개수
2. of(int page, int size, Sort) : 페이지 번호(Zero-based), 페이지당 데이터 개수, 정렬
3. of(int page, int size, Direction, String··· properties) : 페이지 번호(Zero-based), 페이지당 데이터 개수, (enum) 정렬방향, 컬럼
                                                                                                          Sort.by(direction, properties)에 의해 정렬됨
