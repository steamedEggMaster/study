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
---------------------------------------------------------------------------------------------------
call, apply, bind
: 함수 호출 방식과 관계없이 this 지정 가능

ex) const mike = { name : 'Mike' }
    const tom = { name : 'Tom' }
    function showThisName() { console.log(this.name); }
    일때, this 는 window 를 가리킴

1. 함수명.call(this로 사용할객체[, 인수1, 인수2,...]);         
    ex) showThisName.call(mike); -> this 는 mike 객체를 가리킴

2. 함수명.apply(this로 사용할객체[, [인수1, 인수2, ...]]); - 배열로 넣어주기
    ex) function update(birthYear, occupation){ this.birthYear = birthYear; this.occupation = occupation; }
    일때,
    update.apply(mike, [2001, "engineer"]);

3. const new함수명 = this객체변경할함수명.bind(this로 사용할객체) : this 가 가리키는 객체를 영구히 바꿈
    ex) const updateMike = update.bind(mike);
        updateMike(1980, "doctor");
