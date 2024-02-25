----- setTimeout
: 일정 시간 지난 후 함수 실행
1. const tId = setTimeout((익명)함수, 밀리세컨드);
2. const tId = setTimeout((익명)함수, 밀리세컨드, 인수);

clearTimeout(tId) : 예정된 함수 실행 취소

----- setInterval
: 일정 시간 간격으로 함수 반복
1. const tId = setInterval((익명)함수, 밀리세컨드);
2. const tId = setInterval((익명)함수, 밀리세컨드, 인수);

clearInterval(tId) : 반복 함수 실행 중단

밀리세컨드 = 0 -> 바로 실행 X
                 why? 브라우저는 기본 4ms 지연시간 있고, 해당 스크립트가 끝나야 실행됨
