파일과 디렉토리 정보를 가지고 있는 클래스
File 클래스
사용법
File file = new File("경로"); - 경로 상 파일or디렉토리가 생성되는 것은 아님. also 실제 파일or디렉토리 "없어도 예외발생 X."
boolean isExist = file.exists(); - 파일or디렉토리의 존재 여부 return
1. isExist가 false 인경우
메서드
-1. boolean createNewFile() - 새로운 파일 생성
-2. boolean mkdir() - 새로운 디렉토리 생성
-3. boolean mkdirs() - 경로 상에 없는 모든 디렉토리 생성


