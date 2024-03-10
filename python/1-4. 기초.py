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
- 정의법
class 클래스명:
  def __init__(self, 매개변수1, ... ):
    self.매개변수1 = 매개변수1 #멤버변수
    self.매개변수2 = 매개변수2
    ...
    print("생성됨")
- 사용법
객체명 = 클래스명(인수1, 인수2, ...) # 매개변수의 개수와 같아야함

- init : 생성자 # 매개변수의 개수와 같아야함
