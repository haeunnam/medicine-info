## BigData - Hadoop Project

### Git convention
- ***main branch에는 직접적으로 접근할 수 없다.***

#### 1. Commit Message Format
- 모든 커밋 메시지는 다음과 같은 형식을 **반드시** 따르도록 한다.
```
<[BE] or [FE]> <type>: <message> (<issue number>)
```
- ex) <br> `[BE] feat: Add user login api (S05P21B205-0)`
<br> `[FE] fix: Fix bug to can't login using google login (S05P21B205-0)`
<br> `docs: Update README.md`

#### 2. BE / FE
|         type          |                 description                 |
| :-------------------: | :-----------------------------------------: |
|          BE           |         Backend 코드와 관련된 커밋          |
|          FE           |         Frontend 코드와 관련된 커밋         |
| X(아무것도 적지 않음) | Backend/Frontend와 관련없는 커밋 (ex. docs) |

#### 3. Type
|   type   |                                     description                                     |
| :------: | :---------------------------------------------------------------------------------: |
|   feat   |                            새로운 기능 구현에 대한 커밋                             |
|   fix    |                        수정 사항에 대한 커밋(ex. bug, typo)                         |
|   docs   |                       문서 작성에 대한 커밋(ex. 주석, README)                       |
|  style   | 간단한 수정 사항에 대한 커밋(ex. 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우) |
| refactor |                              코드 리펙토링에 대한 커밋                              |
|   test   |                              테스트 작성과 관련된 커밋                              |
|  chore   |                      위의 상황에 해당하지 않는 커밋(ex. 빌드 업무 수정, 패키지 매니저 수정)  |

#### 4. Message
- 커밋 메시지는 명령문으로 작성한다.
- 첫 글자는 대문자가 되도록 한다.

#### 5. Issue number
- 커밋과 관련된 이슈는 커밋 메시지 마지막에 **반드시** 연결하도록 한다.
- 지라에 등록된 이슈와 연동되도록 한다.