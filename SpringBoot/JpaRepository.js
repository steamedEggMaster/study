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
