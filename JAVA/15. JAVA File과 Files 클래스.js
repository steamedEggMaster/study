파일과 디렉토리 정보를 가지고 있는 클래스
File 클래스
사용법
File file = new File("경로"); - 경로 상 파일or디렉토리가 생성되는 것은 아님. also 실제 파일or디렉토리 "없어도 예외발생 X."
boolean isExist = file.exists(); - 파일or디렉토리의 존재 여부 return
1. isExist가 false 인 경우
메서드
-1. boolean createNewFile() - 새로운 파일 생성
-2. boolean mkdir() - 새로운 디렉토리 생성 / 경로 상에 없는 디렉토리가 있는데 실행 시 예외발생!
*-3. boolean mkdirs() - 경로 상에 없는 모든 디렉토리 생성

2. isExist가 true 인 경우
메서드
*-1. boolean delete() - 파일or디렉토리 삭제
-2. boolean canExecute() - 실행 가능 파일 여부 return
-3. boolean canRead() - 읽기 가능 파일 여부 return
-4. boolean canWrite() - 쓰기 가능 파일 여부 return
-5. String getName() - 파일 이름 return
-6. String getParent() - 부모 디렉토리 return
-7. File getParentFile() - 부모 디렉토리를 File 객체로 생성 후 return
-8. String getPath() - 전체 경로 return
*-9. boolean isDirectory() - 디렉토리 여부 return
*-10. boolean isFile() - 파일인지 여부 return
-11. boolean isHidden() - 숨김 파일인지 여부 return
-12. long lastModified() - 마지막 수정 날짜 및 시간 return
*-13. long length() - 파일의 크기 return
-14. String[] list() - 디렉토리에 포함된 파일 및 서브 디렉토리 목록 전부를 String배열로 return
-15. String[] list(FilenameFilter filter) - 디렉토리에 포함된 파일 및 서브 디렉토리 목록 중 FilenameFilter에 맞는 것만 String배열로 return
-16. File[] listFiles() - 디렉토리에 포함된 파일 및 서브 디렉토리 목록 전부를 File배열로 return
-17. File[] listFiles(FilenameFilter filter) -디렉토리에 포함된 파일 및 서브 디렉토리 목록 중 FilenameFilter에 맞는 것만 File배열로 return
FilenameFilter - boolean accept(File dir, String name) 구현하는 FuntionalInterface
