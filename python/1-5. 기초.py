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
