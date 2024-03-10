----- 예외처리
try:
  ~
except Error클명: 
  에러발생시 실행할 구문
except Error클명2 as err:
  print(err) -> 에러메시지를 그대로 가져와 출력
except: # 나머지 모든 에러 클래스에 대응
except Exception as err: # 모든 에러에 대한 메세지를 가져올 수 있음
  print("알수없는 에러발생")
finally:
  ~

----- 예외 발생시키기
try:
  ~
  raise Error클명1 # 에러발생시키기!
except Error클명1:
  ~

----- 사용자 정의 예외처리
class 에러클명(Exception): #Exception을 상속받기
  def __init__(self, msg):
    self.msg = msg
  def __str__(self): #except에서 부르는 메서드인듯. 오버라이딩 메서드
    return self.msg

try:
  raise 에러클명("에러메세지")
except 에러클명 as err:
  print(err)
-> 원하는 에러를 띄울 수 있음

----- 모듈 (확장자 : .py)
모듈을 사용하려는 파일은 모듈과 같은 경로 or 파이썬 라이브러리 파일들이 있는곳에 있어야 사용 가능
- 사용법
1. import 
import 모듈명 # import 뒤에는 마지막 . 뒤에 오는 것은 모듈 or 패키지 여야 함 / from import의 import 뒤에선 클래스, 함수 가능
import 모듈명 as alias - 모듈이름이 길 경우 별명으로
모듈명.모듈메서드()
2. from
from 모듈명 import *
from 모듈명 import 모듈메서드이름1, 2, ... # 원하는 메서드만 import 가능
모듈메서드() - 모듈명없이 사용 가능

----- 패키지
from import 로 가져와서 사용

----- __all__
내가 만든 패키지를 from ~ import * 을 하기 위해선 * 을 정의해주어야함. 이때 사용하는 것이 __all__
- 사용법
패키지 내 하나의 .py 파일 안에서
__all__ = ["py파일명1", ...] 써주기
-> *에 해당 파일이 포함됨

----- 모듈 직접 실행
- 모듈이 잘 동작하는지 해당 모듈 안에서 동작해보기 위해 사용
- 사용법
해당모듈 안에서
if __name__ == "__main__": #해당 모듈파일을 직접 실행할때 실행
  ~
else: # 외부에서 해당 모듈을 import하여 사용할때 실행
  ~

----- 패키지, 모듈 위치
1. import inspect
2. print(inspect.getfile(패키지 or 모듈명))
-> 위치 나옴

----- pip install 로 외부 패키지 설치하기
1. pypi 페이지 접속하기
2. 원하는 패키지 검색하기
3. 패키지 다운로드 하는 법 복사하여 터미널에서 실행
-- pip 관련 명령어
1. pip install 패키지명
2. pip list                       - 설치된 패키지 보기
3. pip show 패키지명               - 해당 패키지 정보 가져오기
4. pip install --upgrade 패키지명  - 최신 업그레이드
5. pip uninstall 패키지명          - 패키지 삭제

----- 내장함수 -> list of python builtins 검색하면 나옴
바로 사용가능한 함수
1. dir(obj) : 어떤 객체를 넘겨줬을 때 그 객체가 어떤 변수와 함수를 가지고 있는지 표시
   dir() : 해당 실행파일에서 사용가능한 변수, 함수들 알려줌

----- 외장함수 -> list of python modules 검색하면 나옴
