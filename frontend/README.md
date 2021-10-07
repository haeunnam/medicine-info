# 이게뭐약?! Frontend

## ✔ How to start project in local environment

```plaintext
// 레포지토리 클론
$ git clone <https://lab.ssafy.com/s05-bigdata-dist/S05P21B205.git>

// 경로 변경
$ cd S05P13B307/front

// npm package install
$ npm install

// 프로젝트 실행
$ npm start
```

<br><br>

## ✔ Tech Stack

| Usage               | Stack            |
| ------------------- | ---------------- |
| `React`             | Fronted Library  |
| `Redux`             | State  Container |
| `Axios`             | HTTP Library     |
| `HTML`              | Markup Language  |
| `Styled-components` | Styling          |

<br><br>

## ✔ Project Structure

- `src/` 하위 폴더들은 다음과 같은 역할을 한다.
- `api/` : api 요청 모듈이 정의되어 있다.
- `components/` : `page/` 의 컴포넌트에 포함되는 하위 컴포넌트를 정의하며 표현에 집중한다. 하위의  `atoms/`,  `molecules/`는 주로 재사용성이 높은 컴포넌트들이 정의되어 있으며 `templates/`는 페이지 UI 레이아웃을 담당한다.
- `hooks/` : 커스텀 훅들이 정의되어 있다.
- `lib/` : URL 접근 제한을 위한 라우트 관련 컴포넌트가 정의되어 있다.
- `modules/` : 기능별로 분리된 dispatch 요청과 reducer가 정의 되어 있다.
- `pages/` : 최상위 컴포넌트들을 포함하며 로직 구현에 집중한다.
- `styles/` :  전역 스타일이 변수로 지정되어 있다.

<br><br>