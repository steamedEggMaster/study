## 깃 튜토리얼

소스코드 블록은 다음과 같이 작성할 수 있습니다.

```c
#include <stdio.h>

int main(void) {
  printf("Hello world");
  return 0;
}
```

링크는 다음과 같이 작성할 수 있습니다.

[블로그 주소](https://blog.naver.com/noglass_gongdae)

순서 없는 목록은 다음과 같이 작성할 수 있습니다.

* 깃 튜토리얼
  * 깃 clone
  * 깃 pull
  * 깃 commit

인용 구문은 다음과 같이 작성할 수 있습니다.

> '공부합시다' - 박찬영 -

테이블은 다음과 같이 작성할 수 있습니다.

이름|영어|정보|수학
---|---|---|---|
박찬영|90점|87점|100점|
홍길동|97점|78점|93점|
이순신|89점|93점|97점|

강조는 다음과 같이 할 수 있습니다.

**치킨**먹다가 ~~두드러기~~ 남.

cd 폴더명
git clone 주소 -> 해당 폴더 안에 리포지토리 파일명이 생성됨

git add 파일명.확장명 -> staging area로 올라감 / 다시 내려보내고 싶을 때 -> git reset 파일명.확장명
	모든 파일 올리고 싶을 때 -> git add .
 
git commit -m "업데이트에 대한 표시 느낌"

git push

git checkout -- 파일명.확장명 -> 수정 사항 삭제

git log

git status

git reset --hard(옵션임) 해시값 -> 해시값 변경 내역 이후 모든 변경사항 삭제
git push -f -> 위의 명령어 이후 깃허브에 적용하기 위해선 -f 옵션을 붙여야함.

git commit --amend -> unix cui 편집기로 들어가서 "업데이트에 대한 표시 느낌"을 변경할 수 있음.
		      a 누르고 편집하고 ESC -> :wq! 로 저장후 나갈 수 있음.


1. 해당 프로젝트에 소속된 사람이 아닌 경우
- PR(Pull Request)를 작성하여 오픈소스에 기여할 수 있음.
2. 소속된 인원
- commit push

-------------------------------------------------------------------
Branch - 서로 다른 환경에서 각 개발자들이 한 프로젝트에서 각기 다른 기능 개발 가능한 기능을 제공.
Master Branch
git branch - 현재 어느 브랜치에 있는지, 어떤 브랜치들이 있는지 확인
git branch 브랜치명 - 해당 브랜치 생성
git checkout 브랜치명 - 해당 브랜치로 접속
git checkout main - main으로 다시 접속
git merge 브랜치명 - 해당 브랜치와 현재 브랜치내용을 통합함.(main으로 이동 후 수행)
git branch -d 브랜치명 - 해당 브랜치 제거

-------------------------------------------------------------------
git log : History commit 내역 확인 가능
git log --stat - 해당 파일에 몇줄이 추가되었는가 확인 가능
git log --graph
git log -p
git log --pretty
-------------------------------------------------------------------
