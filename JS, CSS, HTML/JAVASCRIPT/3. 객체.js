----- 객체
const | let 객채명 = {
  키1 : 밸류1,
  키2 : 밸류2, - 마지막 ,는 붙이는게 좋음
}

-- 접근법
1. 객체명.키1
2. 객체명['키2'] - '' 필수

-- 키:밸류 추가법
1. 객체명.키3 = 밸류3;
2. 객체명['키4'] = 밸류4;

- 키:밸류 삭제법
1. delete 객체명.키4

-- 단축프로퍼티
ex) const 객체명 = {  ==  const 객체명 = {
      name : name,          name,
      age : age,            age,
    }                     }

-- 없는 키 접근
ex) 객체명.없는키; -> undefined

-- 키가 있는지 확인 연산자
1. '키' in 객체명;
2. 객체명.hasOwnProperty('필드명');

-- 객체의 필드 반복문
for(x in 객체명)

----- 객체 메서드
ex) const superman = {
      name : 'clark',
      fly : function() { ~; }
   == fly() { ~; }

- 사용법
  superman[fly]();

----- 배열
let 배열명 = [~,~,...];
- 문자,숫자, 객체, 함수 등 다양하게 넣을 수 있음
-- 값 접근
배열명[index]
-- 값 수정
배열명[index] = ~;

-- 메서드
1. 배열명.length;
2. 배열명.push(~[,~,...]); - 맨 마지막에 요소 추가
3. 배열명.pop(); - 맨 마지막 요소 제거
4. 배열명.unshift(~[,~,...]); - 맨 처음에 요소 추가
5. 배열명.shift(); - 맨 처음 요소 제거

-- 배열 반복문
for(let 변수명 of 배열명)
