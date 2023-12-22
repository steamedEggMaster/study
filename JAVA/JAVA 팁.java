src파일의 .java(소스 파일) complie -> .class(바이트 코드 파일) -> bin파일에 저장됨.(JVM에서 실행가능한 실행코드가 포함된 폴더)
클래스를 클래스 로더를 이용해 메소드영억에 클래스(정적 필드, 정적 메서드)를 "로딩"함.
    메소드영역 : 바이트 코드 파일을 읽은 내용이 저장되는 영역
메모리영역[ 메소드영역[클래스-1 ... 클래스-n] / 힙영역[객체-1 ... 객체-n] / 
    스레드-1[스택영역[프레임-n[변수-n...변수-1] ... 프레임-1[변수-n...변수-1]]] ... 스레드-n[스택영역[프레임-n[변수-n...변수-1] ... 프레임-1[변수-n...변수-1]]] ]
프레임 : 메소드 - 변수 : 메소드안의 변수.
변수들은 모두 스택이라는 메모리 영역에 생성. 참조 타입 변수는 힙 메모리 영역에 주솟값 저장.
  
참조 변수 간의 비교는 주솟값을 비교함.

객체를 출력시 컴파일러는 자동으로 toString함수를 부르고, Overriding하여 객체를 출력하고자 하는 형태로 출력가능.

"for"문과 "iterator"는 외부 반복자 / "스트림"은 요소 처리 방법을 컬렉션 내부로 주입시켜서 요소를 반복 처리하는 내부 반복자.

List<T>는 불변.
