----- Computed Property(계산된 프로퍼티)
ex) let a = 'age';
    const user = {    -> const user = {
      name : 'Mike',       name : 'Mike',
      age : 30,            [a] : 30,
    }                    }
   일때, age 대신 [a] 를 쓰면 age가 쓰임
- [] 안에 식 자체를 넣는 것도 가능
  ex) [1 + 4] : 5

----- 객체 메서드
1. Object.assign(초깃값, 복제할객체1, ...) : 객체 복제
   ex) const newUser = Object.assign({ gender : 'male' }, user);
                                     - {}안의 초기 프로퍼티에, user 객체가 덧붙여서 복제됨
                                     - 초기 프로퍼티 키와 복제할객체의 키가 겹친다면, 복제할 객체의 Value 로 덮어쓰기 됨
2. Object.keys(객체명) : 키 배열 return
   ex) const user  = { name : 'Mike', age : 30 } 일때,
       Object.keys(user); -> ["name", "age"] return

3. Object.values(객체명) : 값 배열 return
   ex) Object.values(user); -> ["Mike", 30] return

4. Object.entries(객체명) : 키, 값 배열 return
   ex) Object.entries(user);
       -> [ ["name", "Mike"],
            ["age", 30] ] return

5. Object.fromEntries(배열명) : 키, 값 배열을 객체로 만듬
   ex) const arr = [ ["name", "Mike"],
                     ["age", 30] ];
       Object.fromEntries(arr); -> { name : 'Mike', age : 30 } return
---------------------------------------------------------------------------------------------------------------
----- 심볼(symbol)
- 해당 변수가 유일성을 가짐.
  ex) const a = Symbol();
      const b = Symbol();
      - a === b -> false, a == b -> false
- 사용법
  ex) const id = Symbol(['설명']);
  - 설명이 동일해도, 유일성 보장
- 메서드
  1. 변수명.description : 심볼의 설명을 return
     ex) id.description -> "설명" return

- 객체 프로퍼티에서의 사용법(심볼형)
ex) const id = Symbol('id');
    const user = {
      name : 'Mike',
      [id] : 'myId' }
    console.log(user) -> { name : "Mike", Symbol(id) : "myId" }
    user[id] -> "myId" 
- 심볼형 프로퍼티를 건너뜀(가져오지 않음)
  1. 객체메서드(keys, values, entries)
     ex) Object.keys(user) -> ["name"]
  2. for-in
  -- 가져오지 않음으로써의 장점 : 어디선가 위의 메서드를 사용하고 있는 객체에 영향을 주지않고, 새로운 프로퍼티를 추가 가능

----- 전역 심볼(Symbol.for())
- 하나의 심볼만 보장받기 가능
  why? 없으면 만들고, 있으면 가져옴
- Symbol() 은 매번 다른 Symbol 값을 생성,
  but Symbol.for() 메서드는 하나의 심볼 생성 후 Key를 통해 같은 Symbol 공유
ex) const id1 = Symbol.for('id');
    const id2 = Symbol.for('id');
    - a === b -> true

-- 메서드 
1.Symbol.keyFor(변수명) : 해당 전역심볼의 '설명'을 알려줌
   ex) Symbol.keyFor(id1) -> "id" return
2. Object.getOwnPropertySymbols(객체명) : 객체에 숨겨진 symbol 들을 배열로 return
   ex) Object.getOwnPropertySymbols(user) -> [ Symbol(id) ] return
3. Reflect.ownKeys(객체명) : symbol을 포함한 모든 키값 배열 return
   ex) Reflect.ownKeys(user) -> [ "name", Symbol(id) ]
