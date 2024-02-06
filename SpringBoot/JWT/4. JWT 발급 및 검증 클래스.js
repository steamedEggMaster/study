로그인 성공 -> JWT 발급
서비스 접근 -> JWT 검증

JWT(Json Web Token)
특징
1. Header.Payload.Signature 구조
    • Header - JWT임을 명시
             - 사용된 암호화 알고리즘
    • Payload - 사용자 관련 정보
    • Signature - 암호화 알고리즘((BASE64(Header)) + (BASE64(Payload)) + 암호화 키)
2. String 타입
3. 내부 정보를 단순 BASE64 방식으로 Encoding -> 외부에서 쉽게 Decoding 가능
   - 토큰 내부에 중요 정보 입력 금지
     Why 사용? 토큰 자체의 발급처 확인을 위해

----- JWT 암호화 방식
1. 양방향
   • 대칭키
   • 비대칭키
2. 단방향

----- 암호화 키 저장
암호화 키는 프로퍼티 파일에 설정한 값을 @Value("${}") 로 불러오는 방법 사용하기

----- JWTUtil 클래스(발급 및 검증) 생성
• 토큰 Payload 에 저장될 정보
1. username / 2. role / 3. 생성일 / 4. 만료일
• JWTUtil에서 구현할 메서드
1. JWTUtil 생성자
2. username 확인 메서드
3. role 확인 메서드
4. 만료일 확인 메서드
