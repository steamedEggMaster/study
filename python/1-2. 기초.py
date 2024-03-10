----- 리스트 []- 다양한 자료형 넣을 수 있음
1. 리스트명.index(obj1) - 없으면 오류 return
2. 리스트명.append(obj1)
3. 리스트명.insert(index, obj1)
4. 리스트명.pop()
5. 리스트명.count(obj)
6. 리스트명.sort()
7. 리스트명.reverse()
8. 리스트명.clear()
9. 리스트명.extend(리스트)

----- dictionary {key:value}
1. 딕명[key]                   - 없는 키값 주면 에러뜨고 종료
2. 딕명.get(key[, default값])  - 없는 키값 주면 None/default값 return
3. key in 딕명                 - 키 있는지 확인 후 true/false return
4. 딕명[newkey] = value        - 새로운 키밸류 추가
5. del 딕명[key]               - 해당 키밸류 삭제
6. 딕명.keys()                 - dict_keys([key1, ...]) return
7. 딕명.values()               - dict_values([values1, ...]) return
8. 딕명.items()                - dict_items([(key, value), (...)]) return
9. 딕명.clear()

----- 튜플 () - 내용 변경 및 추가 불가
              - 속도 : 튜플 > 리스트
1. 튜플명[index[:]]
2. (name, age, hobby) = ("김종국", 20, "코딩")
   print(name, age, hobby)

----- 집합 {} - 중복 X, 순서 X
--- 선언법
1. 변수명 = {obj1, obj2, ...}
2. 변수명 = set([obj1, obj2, ...])
--- 교집합
1. 집합명1 & 집함명2
2. 집합명1.intersection(집합명2)
--- 합집합
1. 집합명1 | 집합명2
2. 집합명1.union(집합명2)
--- 차집합
1. 집합명1 - 집합명2
2. 집합명1.difference(집합명2)
--- 메서드
1. 집합명.add(obj)
2. 집합명.remove(obj)

----- 자료구조의 변경
1. list()
2. tuple()
3. set()

----- if
1. if ~:
2. elif ~:
3. else:

----- for
for 변수 in iterable객체:
            range(n, m+1):
for 변수1, 변수2 in 튜플명:
----- 한줄 for - [] / () / {} 로 감싸기
실행문 for 변수명 in iterable객체

----- while
while 조건문: #True 시 무한루프, ctrl + c 로 취소

----- continue
----- break
-----
