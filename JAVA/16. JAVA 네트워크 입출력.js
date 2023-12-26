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

------TCP 서버 - 예외처리해주기
1. ServerSocket serverSocket = new ServerSocket(바인딩할 포트번호);
2. ServerSocket serverSocket = new ServerSocket();
   serverSocket.bind(new InetSocketAdderss(바인딩할 포트번호);
서버 컴퓨터에 여러 개의 IP가 할당된 경우, 특정 IP에서만 서비스하고자 할때
3. serverSocket.bind(new InetSocketAdderss("xxx.xxx.xxx.xxx", 바인딩할 포트번호);
-> 포트번호가 다른 프로그램에서 사용중이면, "BindException" 발생
-> 포트를 설정 시 방화벽을 해제해야함. 
        -> 해제 설정창이 안뜬다면, 방화벽 상태 확인-고급설정-인바운드 규칙-새 규칙-포트-(TCP, 특정로컬포트:포트번호)-다음-다음-이름설정 및 마침

-ServerSocket 생성 후 연결 요청 수락
Socket socket = serverSocket.accept();
-> 클라이언트가 연결 요청하기 전까지 블로킹(실행 멈춤 상태)됨. -> 요청 오면 통신용 Socket return

-return 된 Socket객체를 통해 연결된 "클라이언트"의 IP주소, 포트번호 얻는 방법
InetSocketAddress isa = (InetSocketAddress) socket.getRemoteSocketAddress();
String clientIp = isa.getHostName()/getHostStirng();
String portNo = isa.getPort();

-서버 종료 -> 사용한 포트번호 다른 프로그램에서 사용 가능해짐(언바인딩)
serverSocket.close();

-----TCP 클라이언트
-객체 생성과 동시에 클라->서버로 연결 요청
1. Socket socket = new Socket("서버 IP주소", 서버Port번호); - 로컬 컴퓨터에 연결 시 "localhost"
2. Socket socket = new Socket( InetAddress.getByName("도메인이름"), 서버Port번호 );
-객체 생성 후 connect()를 통해 연결 요청
Socket socket = new Socket();
socket.connect( new InetSocketAddress("도메인이름", 서버Port번호) );
-> UnknownHostException, IOException 예외 발생 가능.
(IP or 도메인 잘못 표기시)(제공된 IP, Port번호로 연결할 수 없을 때)

-서버와의 연결 끊기
socket.close();

-----입출력 스트림으로 데이터 주고 받기
InputStream is = socket.getInputStream();
OutputStream os = socket.getOutputStream();

serverExample 예제 잘보기
---------------------------------------------------------------------------------------------------------------
UDP
- 연결 과정 X -> 전송속도 > TCP
- 데이터 순서 X, 손실 발생 가능
- 실시간 전송 스트리밍 서비스에서 많이 사용

DatagramSocket : 발신점과 수신점
DatagramPacket : 주고 받는 데이터 - Packet을 통해 주고받아 패킷의 내용을 확인하는 getData() 등이 있는 것.

-----UDP 서버
1. DatagramSocket datagramSocket = new DatagramSocket(바인딩할 포트번호);

-DatagramSocket 생성 후 데이터 "수신" 과정
DataramPacket receivePacket = new DatagramPacket(new byte[1024], 1024); - 1번 매개값 : 수신된 데이터를 저장할 배열 / 2번 매개값 : 수신가능한 최대 바이트 수
datagramSocket.receive(receivePacket);
-> 클라이언트가 보낸 데이터 수신하기 전까지 블로킹(실행 멈춤 상태)됨. -> 수신 시 매개변수(receivePacket)에 내용 저장

-receivePacket에 수신된 데이터와 바이트 수를 얻는 방법
1. byte[] bytes = receivePacke.getData();
2. int num = receivePacket.getLength();

-UDP서버 -> 클라이언트 처리 내용 "전송" 과정 : "클라이언트" IP주소, 포트번호 필요
SocketAddress socketAddress = receivePacket.getSocketAddresss();
String data = "처리 내용"
byte[] bytes = data.getBytes("UTF-8");              시작인덱스         클라이언트 정보 담긴 객체
DatagramPacket sendPacket = new DatagramPacket( bytes, 0, bytes.length, socketAddress ); - 시작인덱스는 빼도 댐
                                            바이트 배열    보낼 바이트 수
datagramSocket.send( sendPacket );

-UDP 서버 종료
datagramSocket.close();

-----UDP 클라이언트 - UDP서버의 반대라고 생각하면 됨
1. DatagramSocket datagramSocket = new DatagramSocket(); - OS가 지정해주기에 서버와 달리 포트번호 지정 X

-클라이언트 -> UDP서버 처리 내용 "전송" 과정
DatagramPacket sendPacket = new DatagramPacket( bytes, 0, bytes.length, new InetSocketAddress("서버IP주소", 서버Port번호));
//socketAddress - > new InetSocketAddress("서버IP주소", 서버Port번호) 만 빼고 동일.(socketAddress객체 생성도 당연히 뺌)

-UDP서버와의 연결 종료
datagramSocket.close();
