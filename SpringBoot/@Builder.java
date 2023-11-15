https://velog.io/@park2348190/Lombok-Builder의-동작-원리

기본적으로 "메서드", "생성자"에만 붙일 수 있음.
클래스 레벨에서 @Builder 어노테이션을 붙이면 -> 모든 요소를 받는 package-private 생성자 자동 생성되며, 이 생성자에 @Builder 어노테이션을
                                             붙인 것과 동일하게 동작. 즉, 클래스 레벨도 중간 단계를 거쳐 생성자 레벨로 변환되어 동작.
@Builder
public class BuildMe {

    private String username;
    private int age;

}

변환.

public class BuildMe {
    private String username;
    private int age;

    BuildMe(String username, int age) {
        this.username = username;
        this.age = age;
    }

    public static BuildMe.BuildMeBuilder builder() {
        return new BuildMe.BuildMeBuilder();
    }

    public static class BuildMeBuilder {
        private String username;
        private int age;

        BuildMeBuilder() {
        }

        public BuildMe.BuildMeBuilder username(String username) {
            this.username = username;
            return this;
        }

        public BuildMe.BuildMeBuilder age(int age) {
            this.age = age;
            return this;
        }

        public BuildMe build() {
            return new BuildMe(this.username, this.age);
        }

        public String toString() {
            return "BuildMe.BuildMeBuilder(username=" + this.username + ", age=" + this.age + ")";
        }
    }
}
