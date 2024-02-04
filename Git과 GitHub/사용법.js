1. Git 다운로드 : https://git-scm.com/download/win
                - 기본 설정으로 설치

2. cmd에서 사용
-- 명령어
  1. git --version : git의 버전 확인
  2. git config --global user.name 깃허브이름
     git config --global user.email 깃허브에사용한메일주소
     로 환경설정 하기
  3. mkdir 파일명 으로 원하는 곳에 파일을 만들어주고
     cd 파일명을 통해 이동 
  4. git clone 리포지토리주소 : 리포지토리를 다운로드함
     git init 명령어와의 차이점 : git init은 해당 파일을 리포지토리화 시키지만, git clone은 만들어져있는 리포지토리를 내 파일 안에 가져오는 것.
     
  ----- 리포지토리 안에서 파일을 생성하여 변경사항이 생긴 후 -----
  ----- 리포지토리 파일 안에서 명령어 사용할 것 -----
  5. git add 파일명.확장자 : 변경 사항 Staging Area에 올려두기
     git add . : 모든 파일의 변경 사항 Staging Area에 올리기
  5-1. git checkout -- 파일명.확장자 
       : 파일에 변경사항이 생기면 add와 checkout -- 중에 고를 수 있는데, 5-1을 사용하면 변경 사항을 폐기하고 원래의 파일로 돌려놓음
  6. git commit -m "커밋메세지" : 변경 사항 적용
  
  7. git push : 깃허브에 반영하기
  8. git status : 현재 브랜치의 변경사항 상태를 보여줌
  9. git reset 파일명.확장자 : add 명령을 통해 Staging Area에 올라간 파일 취소 시킴

  -----Git에서 커밋 내역 수정하기 -----
  10. git log : 반영된 내역들을 확인
                Author, Date, 커밋메세지, 해쉬코드, 브랜치까지 보여줌
                내역이 많으면 enter로 밑으로 이동 / 나가고싶으면 q
  11. git reset --hard 해쉬코드 : 해당 내역 뒤의 내역들은 모두 삭제
      이후 git push 하면 명령어 거절됨
      git push -f 로 강제로 변경해야함.
  12. git commit --amend : 가장 마지막에 commit 된 내역의 커밋메세지 수정 가능한 unix 에디터로 이동
      a 입력하여 수정모드로 변경 -> 커밋메세지 변경 -> esc -> :wq! 로 저장 후 나오기 -> git push -f

----- Git 동작 과정

| Working |   |Staging |    |  Local   |   |  Remote  |
|Directory|   |  Area  |    |Repository|   |Repository|
     |   git add   |             |               |
     |  ---------> |             |               |
     |             |  git commit |               |
     |             |  ---------> |               |
     |             |             |   git push    |
     |             |             |  ---------->  |
     |             |             |  <----------  |
     |             |             |   git fetch   |
     |             |             |               |
     | <------------------------ |               |
     |         git merge         |               |
     |             |             |               |
   
-----------------------------------------------------------------------------------------------------------------
소스코드 수정
사례
1. 해당 프로젝트에 소속된 사람이 아닌 경우
  : 스스로 commit을 하여 저장소에 적용할 권한 X -> PR(Pull Request) 로 오픈소스에 기여 가능
2. 해당 프로젝트에 소속된 사람인 경우
  : add -> commit -> push
