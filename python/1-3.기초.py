----- 함수
- 정의법
def 함수명([매개변수1, ...]):
  ~~~~
  [return ~]
   return ~, ~ -> 튜플형식으로 return
--- 기본값
def 함수명(매개변수1 = 17, ...): #값이 안들어오면 기본값으로 설정
--- 키워드값
def 함수명(name, age): 일때
함수명(age=17, name="유재석") 으로 함수호출 가능
--- 가변인자 *
def 함수명(매개변수1, *가변매개변수):

----- 지역변수와 전역변수
ex)
gun = 10
def checkpoint(soldiers):
  global gun #전역공간의 gun을 사용, 권장X -> 매개변수로 넘겨서 사용하는 것을 권장
  gun = gun - soldiers
  #으로 사용해야 오류 발생 X

----- 표준입출력
1. print("python", "java", sep="둘(이상) 사이에 쓸 문자")
2. print("안녕", end=" ") - 큰따옴표 안의 문자를 끝에 쓰고, 다음 print문을 다음줄로 넘기지 않고 연속 출력
3. print("하이", file=sys.stdout)
                 file=sys.stderr) - 에러 로깅 처리시 사용
4. print(문자열.ljust(칸수), 문자열.rjust(칸수))
5. print(문자열.zfill(칸수)) - 칸수만큼 크기 만들고 빈칸은 0으로 채움
--- 입력
input("입력하세요 : ")
int(input("입력하세요 : "))
