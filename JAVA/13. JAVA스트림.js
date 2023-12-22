내부 반복자(Stream) - 컬렉션에게 람다식을 이용한 데이터 처리 코드를 줌으로써 요소를 처리. / for-Each와 iterator는 외부 반복자
       장점 1. 처리 속도 빠르고, 병렬 처리 효율적.
            2. 람다식으로 요소 처리 가능
            3. 중간 처리 및 최종 처리를 수행하도록 파이프 라인 형성 가능.

Stream<T> stream = 컬렉션객체명.stream(); - Stream을 최종처리하면 재사용 불가능 -> 다시 stream()을 통해 받아야 함.
1. stream.forEach((item)->{ 처리 내용 }); - Stream의 요소들을 각각 처리할때 사용하면 됨.

void forEach(Consumer<? super T> action)에 대해.
-> Consumer가 FunctionalInterface임. -> void accept(T t) 메서드를 구현하는 것.
-> 컬렉션객체에 들어있는 자료형과 Stream<>의 자료형이 동일하기 때문에 T 또한 동일.
-> 따라서 stream의 각 요소를 item으로 넘겨 처리.

"병렬 처리를 하는법 - 논리 프로세서 수만큼 병렬 Thread를 만들어 처리"
       순서 상관 X / 요소 적을땐 not good.
2. Stream<T> stream = 컬렉션객체명.parallelStream();
stream.forEach((item) -> { 처리 내용 })
---------------------------------------------------------------------------------------------------------------
중간 처리 및 최종 처리
오리지널 스트림 -> 중간 처리 -> 최종 처리(집계 처리) -> 결과
중간 처리 : 최종 처리를 위해 오리지널 스트림의 요소들을 필터링, 매핑, 정렬 등 수행.
최종 처리 : 정제된 요소들을 반복 or 집계(카운팅, 총합, 평균) 처리 작업 수행.

즉, if문이라고 생각하면됨. 해당되는 요소를 걸러내기 위한 작업.
ex) 매핑
Stream<Student> Ss = list.stream();
IntStream scoreStream = Ss.mapToInt( student -> student.getScore() );
double avg = scoreStream.average().getAsDouble(); - IntStream의 average()가 OptionalDouble객체를 반환하고 getAsDouble()을 통해 average값을 얻음.

IntStream mapToInt(ToIntFunction<? super T> mapper)에 대해
-> ToIntFunction은 FuntionalInterface -> int applyAsInt(T value) 메서드를 구현하는 것. -> 람다식을 통해 IntStream을 얻음.
                                         int를 반환하지만 Stream을 map하기 때문에 mapToInt는 IntStream 반환.
-> 메서드 체이닝 패턴 사용 가능.
-> mapToInt같은 메서드들은 찾아볼것.
       1. Stream<R> map(Function<? super T,? extends R> mapper)
---------------------------------------------------------------------------------------------------------------
리소스로부터 스트림 얻기
상속관계                                 BaseStream
                                            |  
         ----------------> --------------->  <------------------- <-------------------             
         |               |                                    |                      |
       Stream        IntStream                            LongStream           DoubleStream       
Stream : 객체 요소 처리 스트림
IntStream, LongStream, DoubleStream : 기본 타입 요소 처리 스트림.
         메소드                                                                            리소스
*1. Stream<T> 컬렉션객체명.Stream();                                                   List 컬렉션,  Set 컬렉션
*2. Stream<T> 컬렉션객체명.parallelStream();                                              
*3. Stream<T> Arrays.stream(T[]);            4. Stream<T> Stream.of(T[]);                  배열
*5. IntStream Arrays.stream(int[]);          6. IntStream IntStream.of(int[]);                
*7. LongStream Arrays.stream(long[]);        8. LongStream LongStream.of(long[]);              
*9. DoubleStream Arrays.stream(double[]);   10. DoubleStream DoubleStrea.of(double[]);
11. IntStream IntStream.range(int, int);   12. IntStream.rangeClosed(int, int(포함));     int 범위
13. LongStream IntStream.range(long, long);14. LongStream.rangeClosed(long, long(포함));  long 범위
15. Stream<Path> Files.list(Path);                                                        디렉토리 - 디렉토리 안의 파일들의 경로들에 대한 스트림. 
*16. Stream<String> Files.lines(Path, 문자셋);                                             텍스트 파일
17. DoubleStream Random.doubles(...);                                                     랜덤 수
18. IntStream Random.ints();
19. LongStream Random.longs();

16번 예시
Path객체를 파일에서 얻는법.
1. Path path = Paths.get(클래스명.class.getResource("파일명").toURI());
-> 클래스명.class를 통해 클래스가 있는 파일로 이동 -> getResource()를 통해 URL 객체를 반환하고, URI로 변환하여
-> Paths.get(URI객체) 메서드를 통해 path객체를 받음.
2. Stream<String> stream = Files.lines(path, Charset.defaultCharset());
3. stream.forEach(line -> System.out.println(line));
4. stream.close(); - 열어주었으니 닫아야함
---------------------------------------------------------------------------------------------------------------
요소 걸러내기(필터링)
메서드
1. Stream객체.distinct(); - 중복 제거 / 객체Stream일 경우 equals()가 true면 동일 요소로 판단. / IntStream, LongStream, DoubleStream은 같은 값이면 동일요소.
--Predicate가 true인 요소만 필터링.
2. Stream객체.filter(Predicate<T>); - 추상메서드 : boolean test(T t);
3. Stream객체.filter(IntPredicate); - 추상메서드 : boolean test(int value);
4. Stream객체.filter(LongPredicate); - 추상메서드 : boolean test(long value);
5. Stream객체.filter(DoublePredicate); - 추상메서드 : boolean test(double value);
predicate는 FuntionalInterface임. -> "람다식으로 구현"
---------------------------------------------------------------------------------------------------------------
요소 타입 변환(매핑)
메서드
1. mapXxx - 모든 Function은 "매개값 -> 리턴값" 형태의 FunctionalInterface -> 람다식으로 구현.
-1. Stream<R> map(Function<T, R>); - T -> R 
-2. IntStream mapToInt(ToIntFunction<T>); - T -> int
-3. LongStream mapToLong(ToLongFunction<T>); - T -> long
-4. DoubleStream mapToDouble(ToDoubleFuntion<T>); - T -> double
-5. Stream<U> mapToObj(IntFunction<U>); - int -> U
-6. Stream<U> mapToObj(LongFunction<U>); - long -> U
-7. Stream<U> mapToObj(DoubleFunction<U>); - double -> U
-8. DoubleStream mapToDouble(IntToDoubleFunction); - int -> double
-9. DoubleStream mapToDouble(LongToDoubleFunction); - long -> double
-10. IntStream mapToInt(DoubleToIntFunction); - double -> int
-11. LongStream mapToInt(DoubleToLongFunction); - double -> long

2. 기본 타입 간의 변화 or 기본 타입->Wrapping 메서드
-1. LongStream asLongStream(); - int -> long
-2. DoubleStream asDoubleStream(); - int -> double, long -> double
-3. Stream<Integer> boxed(); - int -> Integer
-4. Stream<Long> boxed(); - long -> Long
-5. Stream<Double> boxed(); - double -> Double

3. 요소를 복수 개의 요소로 변환
-1. Stream<R> flatMap(Function<T, Stream<R>); - T -> Stream<R>
-2. DoubleStream flatMap(DoubleFunction<DoubleStream>); - double -> DoubleStream
-3. IntStream flatMap(IntFunction<IntStream>); - int -> IntStream
-4. LongStream flatMap(LongFunction<LongStream>); - long -> LongStream
-5. DoubleStream flatMapToDouble(Function<T, DoubleStream>); - T -> DoubleStream
-6. IntStream flatMapToInt(Function<T, IntStream>); - T -> IntStream
-7. LongStream flatMapToLong(Function<T, LongStream>); - T -> LongStream
---------------------------------------------------------------------------------------------------------------
요소 정렬
1. Stream<T> sorted();
2. Stream<T> sorted(Conparator<T>); - Comparator는 int compare(T t1, T t2)를 가진 FunctionalInterface -> 람다식으로 작성.
       -> ((t1, t2) -> Integer.compare(t1.getXxx(), t2.getXxx())); 처럼 각 Wrapper Class의 compare()메서드를 통해 간단하게 작성 가능.
3. DoubleStream sorted();
4. IntStream sorted();
5. LongStream sorted();
sort()를 사용하는 Stream은 Comparable<T>인터페이스를 구현한 객체를 담은 Stream으로써 자동 비교 후 정렬. / "내림차순 정렬" 시 sorted(Conparator.reverseOrder()) 사용
사용자 정의 클래스는 Comparable의 compareTo()를 구현해야 sorted() 사용가능.
       or 2번을 이용하여 람다식으로 비교식을 줄 수 있음.
---------------------------------------------------------------------------------------------------------------
요소를 하나씩 처리(루핑) - 스트림에서 요소를 하나씩 반복해서 가져와 처리
-- peek() - "중간 처리 단계"에서 수행. -> Stream을 반환함. -> peek() 이후 "최종처리 메서드"가 오지 않으면 해당 스트림 동작 X
1. Stream<T> peek(Consumer<? super T>);
2. IntStream peek(IntConsumer action);
3. DoubleStream peek(DoubleConsumer action);
-- forEach() - "최종 처리 단계"에서 수행.
4. void forEach(Consumer<? super T> action);
5. void forEach(IntConsumer action);
6. void forEach(DoubleConsumer action);

Consumer<T> - void accept(T t)
IntConsumer - void accept(int value)
LongConsumer - void accept(long value)
DoubleConsumer - void accept(double value)
---------------------------------------------------------------------------------------------------------------
요소 조건 만족 여부(매칭) - 최종 처리 기능
모든 요소가 만족하는지
1. boolean allMatch(Predicate<T> predicate)
2. boolean allMatch(IntPredicate predicate)
3. boolean allMatch(LongPredicate predicate)
4. boolean allMatch(DoublePredicte predicate)
최소 하나 요소가 만족하는지
1. boolean anyMatch(Predicate<T> predicate)
2. boolean anyMatch(IntPredicate predicate)
3. boolean anyMatch(LongPredicate predicate)
4. boolean anyMatch(DoublePredicte predicate)
모든 요소가 만족하지 않는지
1. boolean noneMatch(Predicate<T> predicate)
2. boolean noneMatch(IntPredicate predicate)
3. boolean noneMatch(LongPredicate predicate)
4. boolean noneMatch(DoublePredicte predicate)
---------------------------------------------------------------------------------------------------------------
요소 기본 집계 - 집계 연산을 통해 하나의 값을 산출하는 최종 처리 기능
Stream<T> 제공 메서드
1. long count();
2. OptionalXxx findFirst(); - 첫번째 요소
3. Optional<T> max(Comparator<T>);
4. OptionalXxx max();
5. Optional<T> min(Comparator<T>);
6. OptionalXxx min();
7. OptionalDouble average();
8. int/long/double sum();
OptioanlXxx 종류 - Optional, OptionalInt, OptionalLong, OptionalDouble
                     get()    getAsInt()  getAsLong()   getAsDouble() 로 최종값 얻음.
Why Optional로 받는가??
       -> 집계값의 존재 여부, 집계값 X일때 default값 설정, 집계값 처리 메서드 제공
OptionalXxx의 인스턴스 메서드
1. boolean isPresent(); - 집계값 존재 여부
집계값 X시 default값 설정
2. T orElse(T);
3. double orElse(douuble);
4. int orElse(int);
5. long orElse(long);
집계값 O시 Consumer에서 처리 -> 람다식으로 구현
6. void ifPresent(Consumer); 
7. void ifPresent(DoubleConsumer);
8. void ifPresent(IntConsumer);
9. void ifPresent(LongConsumer);
