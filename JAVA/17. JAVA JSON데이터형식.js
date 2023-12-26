JSON(JavaScript Object Notation) - 네트워크 통신에서 가장 많이 사용되는 데이터 형식
https://github.com/stleary/JSON-java -> click here if you just want the latest release jar file

객체 표기
{
  "속성명":속성값,                  속성명 - 반드시 "" 로 감싸야함!!
  "속성명":속성값,                  속성값으로 가능한것 
  ...                              - "문자열", 숫자, true/false
}                                  - 객체 { ... } //객체 표기법 고대로 사용
                                   - 배열 [ ... ] //배열 표기법 고대로 사용

배열 표기
[ 항목, 항목, ... ]
항목으로 가능한것 
- "문자열", 숫자, true/false
- 객체 { ... }
- 배열 [ ... ]

JSON 표기법 관련 클래스
1. JSOObject : JSON 객체 표기를 생성하거나 파싱할 때 사용
2. JSONArray : JSON 배열 표기를 생성하거나 파싱할 때 사용

-JSON 객체 생성
JSONObject root = new JSONObject();
-속성 추가
root.put("속성명", 속성값);
-객체 속성 추가
JSONObject tel = new JSONObject();
tel.put("속성명", 속성값); ...
root.put("tel", tel);
-배열 속성 추가
JSONArray skill = new JSONArray();
skill.put(속성값); ...
root.put("skill", skill);
-JSON 얻기
String json = root.toString();
