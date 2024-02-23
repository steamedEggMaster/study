                   SpringBoot
                   ◤-----------------------------------------------------------◥
◤------◥          |    login Data    ◤---------◥        ◤------------◥       |
| login |  --------|----------------> | Security |        | UserDetails |       |
| form  |          |                  | Config   | ---> { UserDetails } |       |
◣------◢  ↖      |                  ◣---------◢        |   Service   |       |
              ↖   |  ◤-----------◥                      ◣------------◢       |
                 ↖__ |    Login   |                             |              |
                   |  | Controller |                             ↓         ◤---------------◥
                   |  ◣-----------◢                        { UserEntity } | UserRepository | ----- { DB }
                   |                                         ↗            ◣---------------◢
                   |  ◤-----------◥    ◤-----------◥    ↗                    |
  ------------------> |    Join    | -->|    Join    | ↗                       |
                   |  | Controller |    |   Service  |                          |
                   |  ◣-----------◢    ◣-----------◢                          |
                   ◣-----------------------------------------------------------◢


1. Join Controller, Join Service, JoinDto, UserEntity, UserRepository 를 생성하기
2. 각각 다 만들어주기
3. SecurityConfig의 requestMatchers() 에 join 및 joinProc 경로 추가하기
---------------------------------------------------------------------------------
