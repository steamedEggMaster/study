내부 반복자(Stream) - 컬렉션에게 람다식을 이용한 데이터 처리 코드를 줌으로써 요소를 처리.
       장점 1. 처리 속도 빠르고, 병렬 처리 효율적.
            2. 람다식으로 요소 처리 가능
            3. 중간 처리 및 최종 처리를 수행하도록 파이프 라인 형성 가능.

Stream<T> stream = 컬렉션객체명.stream();
stream.forEach((item)->{ 처리 내용 });

forEach(Consumer<? super T> action)
-> Consumer이 FunctionalInterface임.
-> void accept(T t) 함수를 구현하는 것.
-> 컬렉션객체에 들어있는 자료형과 Stream<>의 자료형이 동일하기 때문에 T 또한 동일.
-> 따라서 stream의 각 요소를 item으로 넘겨 처리.
