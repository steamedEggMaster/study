- 다 동일하고, 컨트롤러의 return 값을 List로만 해주면 됨.

 -> res는 JS객체 리스트를 받음.
    그후 사용은 js문법에 따라서.
-------------------------------------------------------------------
-- ResponseEntity 의 HttpStatus 를 통해 ajax "성공 여부 컨트롤" 가능
ex) @PostMapping("/ex09")
    public ResponseEntity ex09(@RequestBody AjaxDto ajaxDto){
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); }
    -> ajax 가 실패하여 error: 프로퍼티 실행됨.
