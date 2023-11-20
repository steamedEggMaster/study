컬렉션 프레임워크
1. List 인터페이스 - 구현 클래스 : ArrayList, Vector, LinkedList
  특징 : 순서 유지 및 중복
2. Set 인터페이스 - 구현 클래스 : HashSet, LinkedHashSet, TreeSet
  특징 : 순서 유지 및 중복 X
3. Map 인터페이스 - 구현 클래스 : HashMap, Hashable, TreeMap, Properties
  특징 : 키, 값으로 구성된 엔트리 저장 / 키 중복 X
----------------------------------------------------------------------------------------------------------
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
14. 객체명.hashCode();

1. ArrayList<E> - 제한 없이 객체 추가 가능. / "삭제, 삽입이 빈번한 경우 LinkedList를 사용하는 것이 바람직"
2. Vector<E> - ArrayList와 동일구조 / "동기화된 메소드로 구성되어 있음" -> 멀티스레드 환경에서 안전하게 사용 가능.
3. LinkedList - 인접 객체를 링크로 연결하여 관리. / "삭제, 삽입 용이"
----------------------------------------------------------------------------------------------------------
Set<E> 컬렉션 - 구현 클래스 : HashSet, LinkedHashSet, TreeSet
객체 추가.
1. Set객체명.add(E e);

객체 삭제.
2. Set객체명.clear();
3. Set객체명.remove(obj); - 값 제거 후 true 반환 / "요소 얻기 2번 방법에서 사용시 에러 발생, 1번(Iterator)으로 해야함."

정보 얻기.
4. Set객체명.size();
5. Set객체명.isEmpty();
6. Set객체명.equals(obj);
7. Set객체명.contains(obj);
8. Set객체명.hashCode();

Set의 요소들 하나씩 얻기 - List에서도 됨.
1. Iterator<E> iter객체명 = Set객체명.iterator();
      Iterator<E> 메서드. 
        1. iter객체명.hasNext(); - if(iter객체명.hasNext()){ iter객체명.next(); }로 사용해야함.
        2. iter객체명.next(); - next()를 처음사용 시 첫 요소를 포인터한 후 그 요소를 가져오고, next()할때마다 한칸씩 이동하며 요소를 포인터함. / hasNext()와 함께 사용.
        3. iter객체명.remove(); - 해당 포인터에 연결된 요소를 해당 Set객체에서 삭제. / next() 호출 당 1번씩만 사용 가능.
2. for(E e : set객체명) { } - "Iterable<E>가 구현되어 있는 클래스/인터페이스는 전부 사용 가능."
----------------------------------------------------------------------------------------------------------
Map<K, V> 컬렉션 - 구현 클래스 : HashMap, Hashable, TreeMap, Properties
  키, 값으로 구성된 엔트리 저장 / 키 중복 X, 값 중복 O
객체 추가.
Map객체명.put(K key, V value);

객체 변경.
Map객체명.replace(K key, V value); 
Map객체명.replace(K key, V oldvalue, V newvalue);

객체 제거.
Map객체명.clear();
Map객체명.remove(K key); - 해당 key가 있으면 {key, value} 삭제 후 value 반환 / key가 없다면 null 반환.
Map객체명.remove(K key, V value); - 해당 key가 없다면 에러 발생.

정보 얻기.
Map객체명.get(K key); - value값 반환 / value 없을 시 null 반환
Map객체명.size();
Map객체명.isEmpty():
Map객체명.equals(Map객체명2);
Map객체명.containsKey(K key):
Map객체명.containsValue(V value):
Map객체명.keySet();
Map객체명.values();
Map객체명.entrySet();









  
