마리아db설치 : docker pull mariadb:원하는 버전(최신은 latest)
                       (로컬포트)  (컨테이너이름지정)                            (컨테이너 백그라운드로 실행)== --detach
image 실행 : docker run -p 3306:3306 --name mariadb -e MARIADB_ROOT_PASSWORD=aroundhub12# -d mariadb:10.11 
                      (port)(컨테이너포트)       (환경변수 설정)                              (도커이미지태그)<이미지이름>:<태그>
                                 (interactive 모드 및 terminal 연결)
실행중인 컨테이너 내에서 명령 실행 : docker exec -it mariadb /bin/bash
                                            (실행중인컨테이너 이름)       /bin/bash : bash쉘 실행명령

1. mysql 설치 : docket pull mysql:원하는버전
2. container 생성 : docker run -p 3306:3306 --name 이름지정 -e MYSQL_ROOT_PASSWORD=패스워드 -d mysql:버전
3. 해당 container안에서 bash shell 실행 : docker exec it 컨테이름 bash
4. bash shell에서 mysql을 실행하는 방법
   - 1. mysql -u root -p
   - 2. 패스워드 입력


docker 삭제 방법
1. 앱 및 기능 -> Docker Desktop 삭제
2. %appdata% 검색 후
   C:\Users\TT\AppData\Roaming 에서 Docker 과 Docker Desktop 삭제 후
   C:\Users\TT\AppData\Local 에서 Docker 삭제
   
