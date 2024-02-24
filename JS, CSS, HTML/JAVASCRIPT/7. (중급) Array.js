배열 메서드2
1. 배열명.splice(n, m) : n번째 index부터 m 개 지우고, 삭제된 요소 배열 return
   배열명.splice(n, m, x1,x2...) : n번째 index부터 m 개 지우고, 거기에 추가할 요소들을 적음
                   m = 0일 경우 아무것도 지우지 않고, 추가 가능 -> n번째 index 앞에 요소 추가됨
2. 배열명.slice(n[, m]) : n번째 index부터 m-1번째 index까지 return, m이 없다면 끝까지 return
   배열명.slice() : 배열 복사됨
3. 배열명.concat(배열1,배열2,...) : 배열명과 배열 매개변수를 합쳐 새로운 배열 return
4. 배열명.forEach((요소, index) => { }) : 각각의 요소 처리
5. 배열명.indexOf(요소) : 해당 요소가 처음 나타나는 index return, 없 -> -1 return
6. 배열명.lastIndexOf(요소) : 해당 요소가 끝에서부터 처음 나타나는 index return, 없 -> -1 return
7. 배열명.includes(요소) : 해당 요소 있 -> true, 없 -> false
8. 배열명.find(item => return 조건문)
   배열명.findIndex(item => return 조건문)
   -> 첫번째 true 값만 return 하고 끝, 없다면 undefined return
9. 배열명.filter(item -> return 조건문) : 만족하는 모든 요소를 배열로 return
10. 배열명.reverse() : 배열 역순 정렬
11. 배열명.map((요소, index) => { return Object.assign({}, 요소, {추가할프로퍼티})} : 람다식을 통해 특정 기능을 시행하고, 새로운 배열을 return
12. 배열명.join([구분자]) : 배열의 요소를 구분자를 기준으로 합쳐 문자열 return
13. 배열명.split([구분자]) : 문자열을 구분자를 기준으로 나눠 배열 return
14. Array.isArray(객체명) : 배열인지 아닌지 true, false return
