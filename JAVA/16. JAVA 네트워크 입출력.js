서비스를 제공하는 프로그램 = 서버 / 서비스를 요청하는 프로그램 = 클라이언트
IP주소는 LAN카드마다 할당됨. - IPCONFIG - (IPCONFIG /all) /맥: IFCONFIG

각 호스트의 네트워크 어댑터(LAN 카드)까지 통신이 가능한 것 = IP주소.
해당 호스트의 네트워크 어댑터에서 각각의 OS가 관리하는 서버 프로그램과 통신하기 위해서 사용하는 것 = 포트번호

서버는 고정적인 포트번호를 사용하지만, 클라이언트의 포트번호는 OS가 자동으로 부여.
클라이언트가 요청 시 자신의 포트번호를 서버에 같이 전송.
1. WellKnown포트번호 : 0~1023 : 이미 규정된 포트번호
2. Registered포트번호 : 1024~49151 - 회사에서 돈을 주고 전세계적인 포트번호를 사는 것.
3. Dynamic Or Private포트번호 : 49152~65535 : OS가 부여하는 동적 포트 or 개인적 목적 포트번호

