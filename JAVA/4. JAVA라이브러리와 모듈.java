라이브러리(.jar) - 개발 시 활용 가능한 클래스와 인터페이스들을 모아놓은 것.

eclipse에서 만드는 법 - 프로젝트 우클릭 - Export 클릭 - Java - JAR file 클릭 - 원하는 프로젝트 및 클래스, 경로 지정해주고 옵션 정하고 finish
프로젝트 우클릭 - Build Path - Configuration Build Path 클릭 - Libraries - Add External JARs 클릭 - 추가
---------------------------------------------------------------------------
모듈(jar) - 패키지 관리 기능까지 포함된 라이브러리 / 패키지별로 사용 or 은닉하여 일부 패키지에 접근하지 못하게함(private).
차이점 - module-info.java가 있음. - 모듈 간의 의존 관계를 설명함.(모듈 A를 실행하기 위해 필요한 모듈이 있는지)

모듈을 사용한 응용프로그램도 모듈임 - 어떤 모듈에 의존하는지를 기술해야하기 때문에
                                    
module-info.java파일에
  exports 패키지명; - 해당 패키지의 클래스 접근 가능, 안적으면 접근 불가.
  requires 모듈프로젝트명; - 해당모듈에 의존함. 밑의 과정을 해야 오류 안남.
동일하게 Build Path로 들어가서 jar 파일은 Libraries에서, 프로젝트는 Projects 에서 추가.

