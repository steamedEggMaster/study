----- pickle
임포트 : import pickle
- 사용법
1. 파일에 객체 저장 ex)
profile_file = open("파일명.pickle", "wb") - b:binary로 해야함 / 따로 encoding 필요 X
profile = {"이름":"박명수","나이":30}
pickle.dump(profile, profile_file) - profile 에 있는 정보를 파일에 저장
profile_file.close()

2. 파일에 저장된 객체 가져와 쓰기
profile_file = open("파일명.pickle", "rb") - b:binary로 해야함 / 따로 encoding 필요 X
profile = pickle.load(profile_file) - profile_file의 정보를 profile 에 가져오기
profile_file.close()

----- with : 기존의 파일에 쓰고 가져오고를 쉽게 해줌
- 사용법 in pickle
import pickle
with open("파일명.pickle", "rb") as profile_file:
  printl(pickle.load(profile_file))
- close 필요 X

----- 클래스
--- 정의법
class 클래스명:
  def __init__(self, 멤버변수1, ... ): # 생성자함수, this == self
    self.멤버변수1 = 멤버변수1 #멤버변수
    self.멤버변수2 = 멤버변수2
    ...
    print("생성됨")
--- 인스턴스 생성
객체명 = 클래스명(멤버변수1, 멤버변수2, ...) # 매개변수의 개수와 같아야함
--- 멤버변수값 접근
객체명.멤버변수명
--- 각 객체에 자신만의 멤버변수 추가 가능
객체명.new멤버변수명 = 값

----- 메서드
class 클래스명:
  def __init__(self, 멤버변수1, ... ): # 생성자함수
    self.멤버변수1 = 멤버변수1 #멤버변수
    self.멤버변수2 = 멤버변수2
    ...
  def 메서드명(self, 매개변수1, ...): # 메서드에도 self 는 필수
    self.멤버변수1 # 이렇게 자신의 멤버변수에 접근가능
--- 사용법
1. 인스턴스 생성 후
2. 객체명.메서드명(인수1, ...) 으로 부르기

----- 상속
class 부모클명:
  def __init__(self, 멤1, 멤2):
    self.멤1 = 멤1;
    self.멤2 = 멤2;

class 자식클명(부모클명): # 상속
  def __init__(self, 멤1, 멤2, 멤3):
    1번방법 : 부모클명.__init__(self, 멤1, 멤2) # self를 꼭 넣어주기
    2번방법 : super().__init__(멤1, 멤2) # self 꼭 빼주기
    self.멤3 = 멤3

----- 다중상속
class 자식클명(부모클명1, 부모클명2, ...):
  def __init__(self, 멤1, 멤2, 멤3, 멤4): # 부모 멤버변수를 모두 포함해야함
    부모클명1.__init__(self, 멤1, 멤2)
    부모클명2.__init__(self, 멤3)
    self.멤4 = 멤4

----- 메서드 오버라이딩

----- pass
def 메서드명(): #init 도 가능
  pass
로 하면 해당 메서드가 일단 완성된것으로 간주하고 넘어감

----- super - 부모클래스 정의 - 다중상속에서는 사용하지 않음
super().__init__(멤버변수만 넣기) self는 뺌
