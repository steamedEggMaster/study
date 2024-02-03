Value의 의미
- 데이터 객체의 설계가 복잡해질수록, 컬럼이 길어져 각 컬럼이 의미하는 것을 파악하기 어려워짐.
  -> 이때, 동일한 의미를 가진 컬럼들을 구분하여 하나의 객체로 표현한 것.

----- 밸류 클래스 구현
아래의 특징을 살려 구현해야함
1. 밸류 클래스는 개념적으로 하나의 의미를 가질 수 있는 변수들을 포함
2. 별도의 식별자를 갖지 않음.

- 밸류 타입으로 설정되는 클래스는 @Embeddable 어노테이션을 통해 정의
- 밸류 클래스를 가져다 쓰는 클래스는 필드에 정의된 필드 클래스에 @Embedded 어노테이션을 적용
