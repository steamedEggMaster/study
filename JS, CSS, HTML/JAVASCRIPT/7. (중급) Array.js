push, pop, unshift, shift
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
9. 배열명.filter(item => return 조건문) : 만족하는 모든 요소를 배열로 return
10. 배열명.reverse() : 배열 역순 정렬
11. 배열명.map((요소, index) => { return Object.assign({}, 요소, {추가할프로퍼티})}) : 람다식을 통해 특정 기능을 시행하고, 새로운 배열을 return
12. 배열명.join([구분자]) : 배열의 요소를 구분자를 기준으로 합쳐 문자열 return
13. 배열명.split([구분자]) : 문자열을 구분자를 기준으로 나눠 배열 return
14. Array.isArray(객체명) : 배열인지 아닌지 true, false return
15. 배열명.sort([정렬람다식]) : 배열 재정렬, 기존 배열이 변경됨
                정렬람다식의 ex) (a, b) => {return a-b;} // 0인지, 음수인지, 양수인지만 알려주면 댐
    - Lodash 사용 시 _.sortBy(배열명)으로 가능
17. 배열명.reduce((누적계산값, 현재값) => { return 계산값; }[, 초깃값])
    - 초깃값 설정 x 시 배열의 첫 요소가 초깃값이 됨
    ex) const result = arr.reduce((prev, cur) => { return prev + cur; }, 0)
    - 초깃값을 배열로 설정하여 원하는 값만 뽑아 새로운 배열을 얻어낼 수도 있음
18. 배열명.reduceRight(); : 17번과 기능 동일, 오른쪽부터 연산

   
- 람다식대신 만들어져있던 함수도 가능
------------------------------------------------------------------------------------------------------------------------
구조 분해 할당(Destructuring assignment)
: 배열 or 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게하는 표현식

ex) let [x, y] = [1, 2]; - x 는 1, y는 2가 들어감
ex) let str = "Mike-Tom-Jane";
    let [user1, user2, user3] = str.split('-');

- 할당되지 못할 경우 undefined 가 들어감
  -> 방지하기 위해 let [x =5, y= 3] 처럼 기본값 주기 가능

- 공백을 이용해 원하지 않는 값 빼기 가능
  ex) let [user1, , user2] = ['Mike', 'Tom', 'Jane', 'Tony'];

----- 객체 분해 할당
ex) let user = { name : 'Mike', age : 30 };
    let { name, age } = user;

- 새로운 키 이름 사용
ex) let { name: userName, age: userAge } = user;

- 기본값주기
ex) let { name, age, gender = 'male' } = user;
