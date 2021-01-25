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
