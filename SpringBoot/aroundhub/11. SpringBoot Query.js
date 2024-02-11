JPQL(Java Persistence Query Language) : 테이블이 아닌 엔티티 객체를 대상으로 사용되는 객체 지향 쿼리
JPA는 JPQL을 분석한 후 연동되어 있는 DB에 맞는 SQL로 가공 후 사용

쿼리 메서드
- Spring Data JPA의 핵심 기능
- JpaRepository에서 제공하는 기본 메서드 만으로는 비지니스 로직 처리에 한계 존재
- Reposiotry 내 정의 되는 메서드의 이름만으로 쿼리 생성 가능
- 네이밍 컨벤션을 따르면 그에 맞는 쿼리 자동 생성

----- 쿼리 메서드 문법
 크게 주제(Subject)와 서술어(Predicate)로 구분됨
- 'find...by', 'exists...by'와 같은 키워드로 주제를 정하고 by는 서술어의 시작을 나타냄
- 서술어 영역은 검색 및 정렬 조건 작성

----- 쿼리 메서드의 주제 키워드
1. find...by, read...by, get...by, query...by 등 : 조회 기능 수행 키워드
                                                   ...의 영역은 엔티티를 표현 가능하나 Repository에서 이미 엔티티를 정의하고 있어 보통 생략함
                                                   return 타입은 Collection이나 Streamable에 속하는 타입 설정 가능
2. exists...by : 특정 데이터 존재 여부 확인 키워드
                 return 타입은 boolean 속성 사용

3. ...First<number>... , ...Top<number>... : 쿼리를 통해 조회되는 결과의 수 제한 키워드
                                             일반적으로 여러 건 조회위해 사용, 단 건으로 조회 시 <number>부분 생갹하면 됨

----- 쿼리 메서드의 조건자 키워드 - 서술부분에서 사용됨
1. Is : 값의 일치를 위한 키워드
        Equals 키워드와 동일 기능
2. (Is)Not : 값의 불일치를 위한 키워드
3. (Is)Null, (Is)NotNull : 해당 컬럼의 레코드 값이 Null인지 아닌지 체크하는 키워드
4. (Is)True, (Is)False : boolean 타입으로 지정되어 있는 컬럼의 값을 확인하는 키워드
5. And, Or : 여러 조건 묶을 때 사용
6. (Is)GreaterThan, (Is)LessThan, (Is)Between : 숫자 or DateTime 컬럼에서 사용가능한 비교연산 키워드
                                                경계값을 포함하기 위해선 Equal 키워드를 추가해야함
7. (Is)StartingWith(==StartsWith), (Is)EndingWith(==EndsWith), (Is)Containing(==Contains), (Is)Like
   : 컬럼의 값에서 값이 일부 일치하는지 확인하는 키워드
     SQL문으로 가공될 때 Containing 키워드는 "양끝", StartingWith는 "앞", EndingWith는 "뒤"에 "%"가 포함됨
     Like 키워드는 "%"를 "명시적"으로 기입해줘야함
