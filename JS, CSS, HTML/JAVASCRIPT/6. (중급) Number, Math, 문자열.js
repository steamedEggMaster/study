- toString([진수]) : 진수에 맞는 숫자로 변환 후 String 화
  ex) let num = 10;
      num.toString() -> "10"
      num.toString(2) -> "1010"

----- 숫자 관련 메서드
1. Math.PI; : 3.14~ return 
2. Math.ceil(수 | 수로할당된변수); : 올림
3. Math.floor(수 | 수로할당된변수); : 내림
4. Math.round(수 | 수로할당된변수); : 반올림
   - 소수점 자리수 표현
     1. Math.round() 를 이용한 방법
        ex) let userRate = 30.1234; 일때, 소수점 2째 자리까지만 표현하는법
            (userRate * 100) 후 Math.round(userRate) 후 (userRate / 100)
     2. toFixed(남길자릿수) 를 이용한 방법
        ex) userRate.toFixed(2) -> "30.12" return
        - 남길 자릿수가 기존 소수점보다 크면, 0으로 채움
        - 문자열을 return 하기에, Number(userRate) 로 다시 숫자로 바꿔줄 것.
5. isNan(변수명); : 숫자 -> true / 문자 -> false return
   - 중요! 
     let x = Number('x') 일때, x == NaN
                               x === NaN
                               NaN == NaN 모두 false 
6. parseInt(변수명[, 진수]); : 문자를 숫자로 변환
                            - Number(변수명) 과 다른점 : Number() 는 문자가 섞여 있으면 무조건 NaN
                                                        parseInt() 는 맨앞이 문자가 아니라면, 숫자를 읽을 수 있는 부분까지는 읽어 숫자로 변환
                            - 진수를 매개변수로 전달 시 해당 변수를 해당 진수로 변환
7. parseFloat(변수명); : 문자열의 소수점 이하 인식 (parseInt() 는 불가)
                       - ex) let f = '18.5%';
                             parseFloat(f) -> 18.5
8. Math.random() : 0~1 사이 숫자 생성
                 - a~b 사이 숫자 생성하고 싶을땐 
                   Math.floor(Math.random()*b)+a
9. Math.max(수1,수2,...); : 최댓값
10. Math.min(수1,수2,...); : 최솟값
11. Math.abs(수1); : 절댓값
12. Math.pow(n, m); : n의m제곱
13. Math.sqrt(수); : 수의 제곱근
----------------------------------------------------------------------------------------------------------
----- 문자열 메서드
1. 문자열변수명.length : 문자열 길이
2. 문자열변수명[index] : 특정 문자접근
                      - 문자열변수명[index] = '~'; 로 변경 불가
3. 문자열변수명.toUpperCase();
4. 문자열변수명.toLowerCase();
5. 문자열변수명.indexOf(문자(열)); : 해당 문자(열)이 처음 나타나는 곳이 몇번째 index에 있는지 return // 없다면 -1 return 
6. 문자열변수명.slice(n[, m]); : n번째 index부터 m-1번째 index까지 return
                              - m 없으면 n~끝까지
                              - m 음수면 끝부터 셈
7. 문자열변수명.substring(n, m) : n번째 index부터 m-1번째 index까지 return
                               - m과 n 바꿔도 동작
                               - 음수는 0으로 인식
8. 문자열변수명.substr(n, m) : n번째 index부터 m개의 문자 return
9. 문자열변수명.trim() : 앞 뒤 공백 제거
10. 문자열변수명.repeat(n) : 문자열 n번 반복
11. "문자".codePointAt(0); : 해당 문자의 AsciiCode값 return
12. String.fromCodePoint(AsciiCode값) : 해당 AsciiCode에 해당하는 문자 return
13. 문자열변수명.includes(문자(열)) : 문자 있 -> true / 문자 없 -> false
