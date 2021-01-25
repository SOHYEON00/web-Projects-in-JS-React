# Movie Seat Booking


<br/><br/>

#### 추가하고 싶은 것
- ✔ Semantic tags instead of div tags
    - div 대신 section tag 추가
    - 2개의 section이 생겨서 class 추가하여 구분
    - main > article > section 

- ✔ 좌석 번호 지정
- ✔ 왼쪽에 클릭한 영화와 좌석번호 출력
- ✔ 리셋 버튼
- ✔ 선택현황 반응형 도입

<br/>

#### Questions

* container에 이벤트를 넣는 것과 seats에 이벤트를 넣는 것 중에 어떤 게 성능이 더 좋을까?

* HTML
    * small 태그

<br/>

* CSS
    01. [What are they?](https://sohyeon-oh.netlify.app/#/HTML-CSS/css%ED%8A%B9%EC%84%B1)
    * ~~-moz-apperance: none;~~
    * ~~-webkit-appearance: none;~~
    * ~~appearance: none;~~
    * ~~선택자:nth-of-type(number)~~
    * ~~선택자:not~~
    * ~~cursor ()~~
<br/>

* Javascript
    * ckassList.toggle()  
        classList.toggle(): 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다.
    * <select>.selectedIndex