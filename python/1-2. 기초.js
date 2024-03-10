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
8. 딕명.items()                - dict_items([(key, value)]) return
