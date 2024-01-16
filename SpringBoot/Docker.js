마리아db설치 : docker pull mariadb:원하는 버전(최신은 latest)
                       (로컬포트)  (컨테이너이름지정)                            (컨테이너 백그라운드로 실행)== --detach
image 실행 : docker run -p 3306:3306 --name mariadb -e MARIADB_ROOT_PASSWORD=aroundhub12# -d mariadb:10.11 
                      (port)(컨테이너포트)       (환경변수 설정)                              (도커이미지태그)<이미지이름>:<태그>
                                 (interactive 모드 및 terminal 연결)
실행중인 컨테이너 내에서 명령 실행 : docker exec -it mariadb /bin/bash
                                            (실행중인컨테이너 이름)       /bin/bash : bash쉘 실행명령
