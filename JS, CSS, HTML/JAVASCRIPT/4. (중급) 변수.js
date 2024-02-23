----- 변수
1. let
2. const
3. var - 한번 선언된 변수 다시 선언 가능
       - var 변수명을 선언하기 전 해당 변수명을 사용할 수 있음.
         -> ex) console.log(name);
                var name = 'mike';
         -> name은 error 가 아닌 undefined 를 표시.
                                why undefined? var name; 만 호이스팅되어 최상위로 올라감
