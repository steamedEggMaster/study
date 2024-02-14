Form 태그는 옛날 태그라 Patch(put) 기능 지원 X - Post 와 Get 만 지원
-> PostMapping으로 수행.

- DB에 내용을 갱신할 때는 해당되는 객체가 있다면
  save() 로 갱신 가능

----- 더미데이터
: 재실행할때마다 데이터를 넣기 귀찮으니 실행될때마다 저장소에 넣어주는 것.
- ex) 1. data.sql 파일을 resource에 생성
         INSERT INTO article(id, title, content) VALUES (1, '가가가가', '1111');
         INSERT INTO article(id, title, content) VALUES (2, '나나나나', '2222');
         INSERT INTO article(id, title, content) VALUES (3, '다다다다', '3333');
         * H2 Database 는 sql 문법을 사용! *
           -- 간략한 sql
              1. create : INSERT INTO 테이블명(컬럼,,,) VALUES (갑,,,);
              2. read : SELECT 컬럼,,, FROM 테이블명 WHERE 조건;
              3. update : UPDATE 테이블명 SET 컬럼 = 값 WHERE 조건;
              4. delete : DELETE FROM 테이블명 WHERE 조건;

      2. properties 파일에
         spring.jpa.defer-datasource-initialization=true
         설정
