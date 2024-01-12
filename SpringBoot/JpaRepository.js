사용법
public interface ProductRepository extends JpaRepository<ProductEntity, String> {
    //-------------------------------------------------왼쪽엔 repository 가 사용할 Entity
    //---------------------------------------------------------------오른쪽엔 @Id의 데이터 타입
}
-> 기본적인 CRUD 메서드 제공

자주 사용되는 메서드
1. save(S entity)
2. findById(Id id) : 주어진 ID에 해당하는 entity return
3. findAll() : 모든 entity return
4. findAllById(Iterable<Id> ids) : 주어진 ID 목록에 해당하는 모든 entity return
5. deleteById(Id id) : 주어진 ID에 해당하는 entity 삭제
6. delete(T entity) : 주어진 entity 삭제
7. deleteAll() : 모든 entity 삭제
8. deleteAll(Iterable<? extends T> entities) : 주어진 엔티티 목록에 해당하는 모든 entity 삭제
9. count() : 엔티티 총 수 return
10. existsById(Id id) : 주어진 ID에 해당하는 엔티티 존재 여부 return
11. 자동쿼리 생성 메서드

-----Jpa 관련 application.properties 설정 (출처: https://pcm9881.tistory.com/130 [PCM9881:티스토리])
1. DB 세팅
spring.datasource.driver-class-name=각 DB별로 다름
spring.datasource.url=jdbc:DB프로그램명://localhost:3306/DB명
spring.datasource.username=아이디
spring.datasource.password=비번

2. JPA 세팅
spring.jpa.database : 사용하는 데이터베이스 종류 입력
spring.jpa.hibernate.ddl-auto=none/create/create-drop/validate/update
                              create : 테이블 없을 경우 테이블 생성
                              create-drop : 테스트 환경에 적합. 테스트 실행시 mock data를 위해 table 생성 후 테스트 종료 시 테이블 drop
                              validate : application 실행 시 @Entity들과 이미 존재하는 테이블이 정상적으로 맵핑되엇는지 판단하여 
                                         만약 @Entity와 테이블이 제대로 맵핑되지 않으면 application이 실행되지 않음
                              update : 이미 테이블이 존재하는 상황에서 @Entity에 속성이 추가될 경우, 기존 테이블의  테이버에는 변화없이 새로운 Column을 추가
spring.jpa.generate-ddl=false/true : 시작 시 스키마 초기화 여부
spring.jpa.show-sql=false/true : SQL문 로깅 활성화 여부
spring.jpa.properties.hibernate.format_sql=false/true : log, console에 SQL 문을 보기 좋게 출력

