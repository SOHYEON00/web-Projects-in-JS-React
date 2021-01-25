# new things 

1. :first-of-type

- Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.


2. css에서 변수 사용
    - 선언
    :root {
        --box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    - 사용
    box-shadow: var(--box-shadow);


3. 부드럽게 이벤트같이 구현 css (버튼 부드럽게 떠오르고 부드럽게 사라지기)

transition: opacity 0.3s ease;

<br/><br/>

# questions

1. css의 display에 대해 좀 더 구체적으로.

2. rem, em 의 차이와 px과 비교하여 언제 무엇을 사용하는게 좋은지

3. 어떤 이벤트까지 js로 구현하고 어떤 것까진 css로 해야하는지

4. DOM트리를 더 변경하지 않는 선에서 어떻게 구현해야하는지 .querySelector 등 사용안하려면..?

    ✔ 4-1. querySelector와 getElementById의 차이
    [답변 참고](https://hashcode.co.kr/questions/5692/%EA%B0%95%EC%9D%98-4-11-queryselector%EC%97%90-%EC%84%B1%EB%8A%A5%EB%AC%B8%EC%A0%9C%EC%97%90-%EB%8C%80%ED%95%B4-%EC%A7%88%EB%AC%B8-%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4)

<br/><br/>

# 수정할 기능

1. 