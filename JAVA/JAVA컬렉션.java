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
3. Set객체명.remove(obj); - 값 제거 후 true return / "요소 얻기 2번 방법에서 사용시 에러 발생, 1번(Iterator)으로 해야함."

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
2. for(E e : set객체명) { } - "Iterable<E>가 구현되어 있는 클래스/인터페이스는 전부 사용 가능." / Map은 불가 -> EntrySet을 받아서 수행.
----------------------------------------------------------------------------------------------------------
Map<K, V> 컬렉션 - 구현 클래스 : HashMap, Hashable, TreeMap, Properties
  키, 값으로 구성된 엔트리 저장 / 키 중복 X, 값 중복 O.
객체 추가
1. Map객체명.put(K key, V value); - 저장 후 값 반환.

객체 변경
2. Map객체명.replace(K key, V value); 
3. Map객체명.replace(K key, V oldvalue, V newvalue);

객체 제거
4. Map객체명.clear();
5. Map객체명.remove(K key); - 해당 key가 있으면 {key, value} 삭제 후 value 반환 / key가 없다면 null 반환.
6. Map객체명.remove(K key, V value); - 해당 key가 없다면 에러 발생.

정보 얻기
7. Map객체명.get(K key); - value값 반환 / value 없을 시 null 반환.
8. Map객체명.size();
9. Map객체명.isEmpty();
10.Map객체명.equals(Map객체명2);
11.Map객체명.containsKey(K key);
12.Map객체명.containsValue(V value);
13.Map객체명.keySet(); - 모든 key를 포함하는 Set return.
14.Map객체명.values(); - 모든 value를 포함하는 Collection return.
15.Map객체명.entrySet(); - 모든 key-value 쌍을 포함하는 Set return. / "Set<Entry<K, V>> 객체명 = map객체명.entrySet()"  -> for-each사용 가능해짐.

1. HashMap<K, V> - 키로 사용할 객체가 hashCode()의 리턴값이 같고 equals()가 true일 경우 저장 X. -> 값은 마지막에 저장하는 키의 값으로 변경.
2. HashTable<K, V> - hashMap과 내부 구조가 동일. but, 모든 함수 synchronized.
3. Properties<K, V> - HashTable의 자식클래스. key와 value의 타입을 String으로 제한. / 주로 .properties 확장자 파일을 읽을 때 사용(.
----------------------------------------------------------------------------------------------------------
검색기능 강화 컬렉션
1. TreeSet - 이진 트리 기반 Set컬렉션. / 자동적으로 "객체의 크기를 비교"하여 정렬함(오름차순 default).
  TreeSet<E> TreeSet객체명 = new TreeSet<E>; - 검색관련 메서드가 TreeSet클래스에만 정의되어있음.
검색관련 메서드
-1. TreeSet객체명.first(); - "가장 작은" 크기 객체 return, empty면 NoSuchElementException.
-2. TreeSet객체명.last(); - "가장 큰" 크기 객체 return, empty면 NoSuchElementException.
-3. TreeSet객체명.lower(E e); - 주어진 객체의 "바로 아래" 크기 객체 return, 없다면 null.
-4. TreeSet객체명.higher(E e); - 주어진 객체의 "바로 위" 크기 객체 return, 없다면 null.
-5. TreeSet객체명.floor(E e); - 주어진 객체와 동등한 객체 존재 시 해당 객체 return, 없으면 "바로 아래" 크기 객체 return.
-6. TreeSet객체명.ceiling(E e); - 주어진 객체와 동등한 객체 존재 시 해당 객체 return, 없으면 "바로 위" 크기 객체 return.
-7. TreeSet객체명.pollFirst(); - 가장 작은 크기 객체 return 후 "해당 객체 제거". empty면 null.
-8. TreeSet객체명.pollLast(); - 가장 큰 크기 객체 return 후 "해당 객체 제거". empty면 null.
-9. TreeSet객체명.descendingIterator(); - 내림차순으로 정렬된 Itorator return.
-10. TreeSet객체명.descendingSet(); - 내림차순으로 정렬된 NavigableSet return.
  
2. TreeMap - 이진 트리 기반 Map컬렉션. / 자동적으로 "키를 비교"하여 낮은 키 왼쪽 자식노드, 높은 키 오른쪽 자식노드에 "Entry객체" 저장.(오름차순 default)
  TreeMap<K, V> 객체명 = new TreeMap<>;
검색관련 메서드
-1. TreeMap객체명.firstEntry(); - "가장 작은" 키값 엔트리 return, empty면 null.
-2. TreeMap객체명.firstKey(); - "가장 작은" 키값 return, empty면 NoSuchElementException.
-3. TreeMap객체명.lastEntry(); - "가장 큰" 키값 엔트리 return, empty면 null.
-4. TreeMap객체명.lastKey(); - "가장 큰" 키값 return, empty면 NoSuchElementException.
-5. TreeMap객체명.lowerEntry(K key); - 주어진 키값 "바로 아래" 엔트리 return, 없다면 null.
-6. TreeMap객체명.lowerKey(K key); - 주어진 키값 "바로 아래" 키값 return, 없다면 null.
-7. TreeMap객체명.higherEntry(K key); - 주어진 키값 "바로 위" 엔트리 return, 없다면 null.
-8. TreeMap객체명.higherKey(K key); - 주어진 키값 "바로 위" 키값 return, 없다면 null.
-9. TreeMap객체명.floorEntry(K key); - 주어진 키와 동등한 키 존재 시 해당 Enetry return, 없다면 바로 아래 키 Entry return, empty면 null.
-10.TreeMap객체명.floorKey(k key); - 주어진 키와 동등한 키 존재 시 해당 키값 return, 없다면 바로 아래 키값 return, empty면 null.
-11.TreeMap객체명.ceilingEntry(K key); - 주어진 키와 동등한 키 존재 시 해당 Enetry return, 없다면 바로 위 키 Entry return, empty면 null.
-12.TreeMap객체명.ceilingKey(K key); - 주어진 키와 동등한 키 존재 시 해당 키값 return, 없다면 바로 위 키값 return, empty면 null.
-13.TreeMap객체명.pollFirstEntry(); - 가장 작은 키값 엔트리 return 후 해당 엔트리 제거, empty면 null.
-14.TreeMap객체명.pollLastEntry(); - 가장 큰 키값 엔트리 return 후 해당 엔트리 제거, empty면 null.
-15.TreeMap객체명.descendingKeySet(); - 내림차순으로 정렬된 키의 NavigableSet return.
-16.TreeMap객체명.descendingMap(); - 내림차순으로 정렬된 엔트리의 NavigableMap return.
-17.TreeMap객체명.headMap(K toKey, boolean inclusive);
-18.TreeMap객체명.tailMap(K fromKey, boolean inclusive);
-19.TreeMap객체명.subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive);
----------------------------------------------------------------------------------------------------------
Comparable<E>과 Comparator
자동적으로 정렬을 가능하려면 해당 객체가 Comparable<E>인터페이스 - compaerTo(obj) 구현하고 있어야함. - 대부분의 클래스가 구현클래스지만 안되어있으면 사용자정의구현해야함.
ex)
[접근제한자] class 클래스명A implements Comparable<클래스명A> { //해당 클래스의 객체끼리 비교하기 때문에 <클래스명A>
  [접근제한자] 비교타입 비교변수;
  public int compareTo(클래스명A 객체명){
    return -1(this.비교변수 < 객체명.비교변수)
    return 0(this.비교변수 = 객체명.비교변수)
    return 1(this.비교변수 > 객체명.비교변수)
  }
}

Comparable을 구현하지 않은 클래스로 TreeSet, TreeMap 생성 시 비교자(Comparator)을 제공하면 비교해줌.
1. TreeSet<E> 객체명B = new TreeSet<E>( new 클래스명9Comparator() ); //Comparator-compare()을 구현한 클래스를 의미
2. TreeSet<K, V> 객체명C = new TreeMap<E>( new 클래스명9Comparator() );
비교자(Comparator) - Comparator<E>인터페이스-compare(obj1, obj2) 구현 클래스.
ex)
[접근제한자] class 클래스명9Comparator implements Comparator<클래스명>{
  public int compare(클래스명9 객체명1, 클래스명9 객체명2){
    return -1(객체명1.비교변수 < 객체명2.비교변수)
    return 0(객체명1.비교변수 = 객체명2.비교변수)
    return 1(객체명1.비교변수 > 객체명2.비교변수)
  }
}
----------------------------------------------------------------------------------------------------------
LIFO와 FIFO 컬렉션
컬렉션 프레임워크는 LIFO(push/pop) - stack<E>클래스 / FIFO(offer/poll)  - Queue<E>인터페이스 제공.
1. stack<E>클래스 - Vector<E>클래스 상속.
Stack<E> stack객체명 = new Stack<E>();
-1. stack객체명.push(E e);
-2. stack객체명.pop();
-3. stack객체명.peek(); - 맨 위의 객체를 리턴.
-4. stack객체명.empty();

2. Queue<E>인터페이스 - 대표적인 구현 클래스:LinkedList<E>
Queue<E> queue객체명 = new LinkedList<E>(); - 다른것도 가능.
-1. queue객체명.offer(E e);
-2. queue객체명.poll(); - 맨 위의 객체 삭제하면서 return, empty면 null.
-3. queue객체명.peek(); - 맨 위의 객체 삭제안하고 return, empty면 null. 
----------------------------------------------------------------------------------------------------------
동기화된 컬렉션
ArrayList, HashSet, HashMap를 멀티스레드에서 사용하고 싶을 때 동기화시킴.
List<T> list객체명 = Collections.synchronizedList(List<T> list객체명2);
Map<K, V> map객체명 = Collections.synchronizedMap(Map<K, V> map객체명2);
Set<T> set객체명 = Collections.synchronizedSet(Set<T> set객체명2);
----------------------------------------------------------------------------------------------------------
수정할 수 없는 컬렉션 - 요소를 추가, 삭제불가능한 컬렉션.
1. List, Set, Map 인터페이스의 정적메서드 of
List<E> list객체명 = List.of(E e, E e2...);
Set<E> set객체명 = Set.of(E e, E e2...);
Map<K, V> map객체명 = Map.of(k, v, k2, v2, ...);

2. List, Set, Map 인터페이스의 정적메서드 copyOf
List<E> list객체명 = List.copyOf(E e, E e2...);
Set<E> set객체명 = Set.copyOf(E e, E e2...);
Map<K, V> map객체명 = Map.copyOf(k, v, k2, v2, ...);

3. 배열로부터 수정 불가능한 List컬렉션 만들기 - ArrayList와 List는 DTO로 많이 쓰여서 읽기전용이 많음
ex)
Stringp[] arr = {"A", "B", "C"};
List<String> list객체명 = Arrays.asList(arr);



























