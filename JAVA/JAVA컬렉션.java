컬렉션 프레임워크
1. List 인터페이스 - 구현 클래스 : ArrayList, Vector, LinkedList
  특징 : 순서 유지 및 중복
2. Set 인터페이스 - 구현 클래스 : HashSet, TreeSet
  특징 : 순서 유지 및 중복 X
3. Map 인터페이스 - 구현 클래스 : HashMap, Hashable, TreeMap, Properties
  특징 : 키, 값으로 구성된 엔트리 저장 / 키 중복 X
----------------------------------------------------------------------------------
List<E> 컬렉션 - 구현 클래스 : ArrayList, Vector, LinkedList
객체 추가
1. 객체명.add(E e);
2. 객체명.add(index, E e);

객체 변경
3. 객체명.set(index, E e);

객체 제거
4. 객체명.clear();
5. 객체명.remove(index); - 인덱스 자리 값 삭제 후 값 반환.
6. 객체명.remove(obj); - 매개변수가 처음 나타나는 인덱스 자리 값 삭제 후 값 반환.

정보 얻기
7. 객체명.get(index);
8. 객체명.size(); - 배열 크기 반환. / 배열길이 = .length / 문자열길이 = .length()
9. 객체명.isEmpty();
10. 객체명.indexOf(obj);
11. 객체명.equals(obj);
12. 객체명.contains(obj);
13. 객체명.toArray();
----------------------------------------------------------------------------------
1. ArrayList<E> - 제한 없이 객체 추가 가능. / "삭제, 삽입이 빈번한 경우 LinkedList를 사용하는 것이 바람직"
2. Vector<E> - ArrayList와 동일구조 / "동기화된 메소드로 구성되어 있음" -> 멀티스레드 환경에서 안전하게 사용 가능.
3. LinkedList
