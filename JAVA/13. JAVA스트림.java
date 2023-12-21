내부 반복자(Stream) - 컬렉션에게 람다식을 이용한 데이터 처리 코드를 줌으로써 요소를 처리. / for-Each와 iterator는 외부 반복자
       장점 1. 처리 속도 빠르고, 병렬 처리 효율적.
            2. 람다식으로 요소 처리 가능
            3. 중간 처리 및 최종 처리를 수행하도록 파이프 라인 형성 가능.

Stream<T> stream = 컬렉션객체명.stream(); - Stream을 한번 이용하면 재사용 불가능 -> 다시 stream()을 통해 받아야 함.
stream.forEach((item)->{ 처리 내용 });

void forEach(Consumer<? super T> action)에 대해.
-> Consumer가 FunctionalInterface임. -> void accept(T t) 메서드를 구현하는 것.
-> 컬렉션객체에 들어있는 자료형과 Stream<>의 자료형이 동일하기 때문에 T 또한 동일.
-> 따라서 stream의 각 요소를 item으로 넘겨 처리.

병렬 처리를 하는법 - 논리 프로세서 수만큼 병렬 Thread를 만들어 처리
       순서 상관 X / 요소 적을땐 not good.
Stream<T> stream = 컬렉션객체명.parallelStream();
stream.forEach((item) -> { 처리 내용 })
---------------------------------------------------------------------------------------------------------------
중간 처리 및 최종 처리
오리지널 스트림 -> 중간 처리 -> 최종 처리(집계 처리) -> 결과
중간 처리 : 최종 처리를 위해 오리지널 스트림의 요소들을 필터링, 매핑, 정렬 등 수행.
최종 처리 : 정제된 요소들을 반복 or 집계(카운팅, 총합, 평균) 처리 작업 수행.

즉, if문이라고 생각하면됨. 해당되는 요소를 걸러내기 위한 작업.
ex)
Stream<Student> Ss = list.stream();
IntStream scoreStream = Ss.mapToInt( student -> student.getScore() );
double avg = scoreStream.average().getAsDouble();

IntStream mapToInt(ToIntFunction<? super T> mapper)에 대해
-> ToIntFunction은 FuntionalInterface -> int applyAsInt(T value) 메서드를 구현하는 것. -> 람다식을 통해 IntStream을 얻음.
                                         int를 반환하지만 Stream을 map하기 때문에 mapToInt는 IntStream 반환.
