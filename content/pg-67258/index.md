---
emoji: 💻
title: "[Programmers] 67258번: 보석 쇼핑 (Python)"
date: '2022-05-01 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2020 카카오 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/67258

[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.  
어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.  
어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.  
`진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매`  

예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.  

|진열대 번호|1|2|3|4|5|6|7|8|
|---|---|---|---|---|---|---|---|---|
|보석 이름|DIA|RUBY|RUBY|DIA|DIA|EMERALD|SAPPHIRE|DIA|

진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.  

진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.  

진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다. 이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.  
가장 짧은 구간의 `시작 진열대 번호`와 `끝 진열대 번호`를 차례대로 배열에 담아서 return 하도록 하며, 만약 가장 짧은 구간이 여러 개라면 `시작 진열대 번호`가 가장 작은 구간을 return 합니다.  

---

## 제한사항  
- gems 배열의 크기는 1 이상 100,000 이하입니다.  
    - gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.  
    - gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.  
    - gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다.  

---

## 입출력 예  
|gems|result|
|---|---|
|["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]|[3, 7]|
|["AA", "AB", "AC", "AA", "AC"]|[1, 3]|
|["XYZ", "XYZ", "XYZ"]|[1, 1]|
|["ZZZ", "YYY", "NNNN", "YYY", "BBB"]|[1, 5]|


---

## 🔍 Algorithm
**Two Pointers**

## 💻 Logic

```Python
start = 0
current = defaultdict(int)  # 기본값 0인 dictionary 생성
count = len(set(gems))  # set을 이용해서 중복 제거하고 전체 보석 수 저장
answer = [1, len(gems)]
```
- `defaultdict`에 **int**를 인자로 주고 생성하여 기본값이 **0**인 **dictionary**를 생성  
- `set`을 이용해서 중복 제거하고 전체 보석 수 저장  

```Python
# start, end 투 포인터를 이용해서 가장 짧은 구간 찾기
    for end in range(len(gems)):
        current[gems[end]] += 1
        # 모든 보석을 하나 이상 포함하는 경우
        while len(current) == count:
            # 해당 구간의 길이가 answer 구간 길이보다 작으면 업데이트
            if end - start < answer[1] - answer[0]:
                answer[0], answer[1] = start+1, end+1
            current[gems[start]] -= 1
            # 해당 키 값이 0이 되면 dictionary에서 삭제
            if current[gems[start]] == 0:
                del current[gems[start]]
            start += 1
    return answer
```
- **start, end 투 포인터를 이용해서 가장 짧은 구간 찾기**  
  `end`가 전체 보석 리스트의 처음부터 끝까지 이동하면서 해당 보석의 **dictionary** 키 값을 **+1**  
  모든 보석을 하나 이상 포함하는 경우에는,  
  해당 구간의 길이가 `answer` 구간 길이보다 작은지 확인하고 작으면 `answer` 값 업데이트하고  
  해당 키 값을 **-1** 하고(이 때, 해당 키 값이 **0**이 되면 **dictionary**에서 삭제), `start`를 다음 위치로 옮기고 반복한다.  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
from collections import defaultdict

def solution(gems):
    start = 0
    current = defaultdict(int)  # 기본값 0인 dictionary 생성
    count = len(set(gems))  # set을 이용해서 중복 제거하고 전체 보석 수 저장
    answer = [1, len(gems)]
    # start, end 투 포인터를 이용해서 가장 짧은 구간 찾기
    for end in range(len(gems)):
        current[gems[end]] += 1
        # 모든 보석을 하나 이상 포함하는 경우
        while len(current) == count:
            # 해당 구간의 길이가 answer 구간 길이보다 작으면 업데이트
            if end - start < answer[1] - answer[0]:
                answer[0], answer[1] = start+1, end+1
            current[gems[start]] -= 1
            # 해당 키 값이 0이 되면 dictionary에서 삭제
            if current[gems[start]] == 0:
                del current[gems[start]]
            start += 1
    return answer
```
</details>

---

## 📝 Review

처음에는 규칙이 있을 거라고 생각하고 규칙을 찾아서 해봤지만, 예외 케이스도 많이 나오고 효율성도 통과하지 못해서 아예 다른 방식을 생각해보았다.  
그러다가 예전에 배웠었던 `슬라이딩 윈도우`를 생각해냈는데 `슬라이딩 윈도우`는 고정 길이고, 여기서는 길이가 변해야 하기 때문에 `투 포인터` 알고리즘이라고 얘기하는게 맞는 것 같다.  
**dictionary**와 **투 포인터**를 이용해서 구현했는데 모든 보석을 하나 이상 포함하고 있는지 처리하는 과정이 효율적이지 않아서 이 부분은 검색을 통해 `defaultdict` 라는 것이 있다는 것을 알게 되었고, `defaultdict`를 이용해서 간단하게 구현할 수 있었다.  


```toc
```