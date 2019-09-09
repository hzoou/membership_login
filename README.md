# 멤버십 프로젝트 - 로그인과 회원가입 저장소
---
## week1
### 미션설명
이번미션은 HTML코드로 간단한 todo 웹서비스를 만드는 것이다. todo 웹서비스는 할일을 관리하는 웹서비스로 몇가지 상태를 가지고 있으며,
웹페이지 한개에서 동작되는 서비스이다.

### 기능요구사항
#### 기획서
https://docs.google.com/presentation/d/1xvs24VWVJc2KhmHUoj1Rm88zvtzItzQuD-6vBuzkvA0/edit?usp=sharing
- 로그인UI는 bootstrap, materialUI 등등 CSS 지원을 받을 수 있는 라이브러리를 사용해서 개발한다.
- 아이디 중복체크는 서버개발을 할 때 완성한다.
- 아이디 중복체크를 제외한 모든 입력값의 유효성체크는 JavaScript를 통해 체크한다.
- 실제 입력 데이터 전송은 서버개발을 할때 완성한다. 하지만 form 태그를 활용해서 개발해둔다.

### 기술요구사항
#### 일반공통
- 서버환경은 구현하지 않으며, 서버와 데이터 동기화는 하지 않는다.
- PC 기준 웹 화면을 개발한다. Mobile Web을 고려하지 않는다.
- 크롬브라우저를 기준으로 개발한다.
- 반응형웹을 고려하지 않는다.
- 라이브러리를 사용할 수 없다. (jQuery, React, Vue, lodash, bootstrap, materialUI등등)
  - 단, 로그인UI 개발에서는 CSS지원을 받을 수 있는 라이브러리를 필수로 사용해야 한다.

#### HTML
- HTML5 Layout 태그를 사용한다(header, footer 등)
- 의미에 맞는 적절한 태그를 선택해서 사용한다.
- W3C Validator 를 통과하도록 한다.

#### CSS
- 모든 엘리먼트의 크기는 임의로 크기를 정할 수 있으나, layout은 반듯하고, 불규칙적이거나, 삐뚤어지는 부분이 없어야 한다.
- 의미적으로 같은 엘리먼트들은 같은 넓이와 크기를 갖도록 한다.
- font 크기도 자유롭게 정해서 사용하되, 일관된 크기를 사용한다.
- padding 과 margin을 일관된 크기로 사용한다.
- CSS 클래스 이름 규칙을 스스로 정하고, 이를 지키며 개발한다.
- flexbox 속성을 이용하여 레이아웃을 구성한다.
- CSS variables 을 사용한다.

#### JavaScript
- 전역변수를 최소화 한다.
- 함수는 **동사+명사**로 구성한다. 변수는 명사를 사용한다.
- 기능단위로 객체를 만들고, 객체는 literal방식을 사용한다.
- literal은 2개 이상 만든다.
- 객체내의 메서드의 크기는 최소한의 크기로 유지한다.
- framework나 라이브러리를 사용하지 않는다.
- ES2015 문법을 적극 사용한다.
- 표준 DOM API를 사용한다.
- addEventListener를 사용해서 개발한다.
- 정규표현식을 사용할 수 있다.

------
## week2
### 미션 설명
- 회원가입 / 로그인/ 로그아웃의 백엔드를 구현한다.

### 필요지식
- http 프로토콜에 대한 이해
- cookie와 세션의 동작 원리
- node.js에 대한 기초적 이해
- node.js의 비동기 처리 - Promise, async-await
- Express 프레임워크에 대한 지식
- Express 미들웨어의 원리

### 기능 및 구현 요구사항
- 회원가입
- 로그인
- 로그인 이후의 변경된 상태 화면 (ex: OOO님 등)
- 로그아웃
  ![login](http://public.codesquad.kr/honux/bcamp/login.png)

#### 기획서
- 로그인 프론트 기획서를 참고한다.

### 기술요구사항
#### 프로그래밍
- 자바스크립트, node.js 런타임 사용
- 생성자, 함수 등에는 아래와 같이 간단히 함수의 내용을 주석으로 요약 표기한다.
```javascript
/**
 * Creates a new Circle from a diameter.
 *
 * @param {number} d The desired diameter of the circle.
 * @return {Circle} The new Circle object.
 */
```
- 또는 JSDOC (https://en.wikipedia.org/wiki/JSDoc) 스타일의 주석을 사용한다.

#### 웹 프레임워크
- Express를 사용
- passport 등의 로그인 관련 모듈은 사용하지 않고 직접 cookie를 이용해 session을 구현한다.
- 미들웨어로 로그인 상태 확인 함수를 구현한다.
- 프론트엔드는 단일 페이지 구현을 권장하지만 필요에 따라 페이지를 추가해도 무방하다.

#### 데이터베이스
1. 데이터베이스는 사용하지 않는 것을 추천한다. 객체를 사용한 간단한 key-value 메모리 DB를 구현한다.
2. (option) lowdb (https://github.com/typicode/lowdb) 와 같은 DB 이용
3. (option) sqlite 등 자유롭게 선택 가능하지만 별도 설치가 필요없는 DB를 사용할 것

#### 템플릿 엔진
- (선택) pug를 사용한다.
- API는 json으로 응답한다.

#### 배포
- heroku에 배포
- 저장소의 README.md 등에 완성된 배포 URL을 기술할 것
------
##### 배포 URL : https://membership-login-hzoou.herokuapp.com/