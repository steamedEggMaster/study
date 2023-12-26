서비스를 제공하는 프로그램 = 서버 / 서비스를 요청하는 프로그램 = 클라이언트
IP주소는 LAN카드마다 할당됨. - IPCONFIG - (IPCONFIG /all) /맥: IFCONFIG

각 호스트의 네트워크 어댑터(LAN 카드)까지 통신이 가능한 것 = IP주소.
해당 호스트의 네트워크 어댑터에서 각각의 OS가 관리하는 서버 프로그램과 통신하기 위해서 사용하는 것 = 포트번호

서버는 고정적인 포트번호를 사용하지만, 클라이언트의 포트번호는 OS가 자동으로 부여.
클라이언트가 요청 시 자신의 (IP주소, 포트번호)를 서버에 같이 전송.
1. WellKnown포트번호 : 0~1023 : 이미 규정된 포트번호
2. Registered포트번호 : 1024~49151 - 회사에서 돈을 주고 전세계적인 포트번호를 사는 것.
3. Dynamic Or Private포트번호 : 49152~65535 : OS가 부여하는 동적 포트 or 개인적 목적 포트번호
---------------------------------------------------------------------------------------------------------------
IP 주소 얻기 - InetAddress 객체는 생성자 X, 밑의 방법으로 객체를 얻어야함
로컬 컴퓨터의 IP주소를 얻는 법
InetAddress ia1 = InetAddress.getLocalHost();

컴퓨터의 도메인 이름을 알고있는 경우
1. InetAddress ia2 = InetAddress.getByName(String domainName); - 대표적은 IP 주소 return
2. InetAddress[] iaArr = InetAddress.getAllByName(String domainName);
    - 배열인 이유(하나의 도메인 이름으로 여러 IP가 등록되어 있는 이유)
           : 수많은 클라이언트들이 접근하는 도메인은 여러 개의 서버로 구성되어있어 해당 도메인의 모든 서버의 IP 주소를 얻어오기 위해

메서드
1. String ia1.getHostAddress();
---------------------------------------------------------------------------------------------------------------
TCP
- 연결형 프로토콜 -> 상대방이 연결된 상태에서 데이터 통신.
- 데이터 순서대로 전달, 손실 발생 X - why? 통신 회선이 고정됨.
- IP와 함께 사용 -> TCP/IP라고도 함.
- 사용되는 곳 : 웹브라우저-웹서버, 이메일전송, 파일전송, DB연동

ServerSocket 클래스 : 클라이언트의 연결을 수락하는 서버 쪽 클래스
Socket 클래스 : 클라이언트에서 "연결 요청" 시 and 클라이언트와 서버 양쪽에서 "데이터 주고받을 때" 사용.

TCP 서버
1. ServerSocket serverSocket = new ServerSocket(바인딩할 포트번호);
2. ServerSocket serverSocket = new ServerSocket();
   serverSocket.bind(new InetSocketAdderss(바인딩할 포트번호);
서버 컴퓨터에 여러 개의 IP가 할당된 경우, 특정 IP에서만 서비스하고자 할때
3. serverSocket.bind(new InetSocketAdderss("xxx.xxx.xxx.xxx", 바인딩할 포트번호);
-> 포트번호가 다른 프로그램에서 사용중이면, "BindException" 발생

ServerSocket 생성 후 연결 요청 수락
Socket socket = serverSocket.accept();
-> 클라이언트가 연결 요청하기 전까지 블로킹(실행 멈춤 상태)됨. -> 요청 오면 통신용 Socket return

return 된 Socket객체를 통해 연결된 "클라이언트"의 IP주소, 포트번호 얻는 방법
InetSocketAddress isa = (InetSocketAddress) socket.getRemoteSocketAddress();
String clientIp = isa.getHostName();
String portNo = isa.getPort();

서버 종료 -> 사용한 포트번호 다른 프로그램에서 사용 가능해짐(언바인딩)
serverSocket.close();
