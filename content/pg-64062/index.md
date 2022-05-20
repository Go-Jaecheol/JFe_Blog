---
emoji: 💻
title: "[Programmers] 64062번: 징검다리 건너기 (Python)"
date: '2022-05-16 01:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2019 카카오 개발자 겨울 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/64062

[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

카카오 초등학교의 "니니즈 친구들"이 "라이언" 선생님과 함께 가을 소풍을 가는 중에 징검다리가 있는 개울을 만나서 건너편으로 건너려고 합니다. "라이언" 선생님은 "니니즈 친구들"이 무사히 징검다리를 건널 수 있도록 다음과 같이 규칙을 만들었습니다.  

- 징검다리는 일렬로 놓여 있고 각 징검다리의 디딤돌에는 모두 숫자가 적혀 있으며 디딤돌의 숫자는 한 번 밟을 때마다 1씩 줄어듭니다.  
- 디딤돌의 숫자가 0이 되면 더 이상 밟을 수 없으며 이때는 그 다음 디딤돌로 한번에 여러 칸을 건너 뛸 수 있습니다.  
- 단, 다음으로 밟을 수 있는 디딤돌이 여러 개인 경우 무조건 가장 가까운 디딤돌로만 건너뛸 수 있습니다.  

"니니즈 친구들"은 개울의 왼쪽에 있으며, 개울의 오른쪽 건너편에 도착해야 징검다리를 건넌 것으로 인정합니다.  
"니니즈 친구들"은 한 번에 한 명씩 징검다리를 건너야 하며, 한 친구가 징검다리를 모두 건넌 후에 그 다음 친구가 건너기 시작합니다.  

디딤돌에 적힌 숫자가 순서대로 담긴 배열 stones와 한 번에 건너뛸 수 있는 디딤돌의 최대 칸수 k가 매개변수로 주어질 때, 최대 몇 명까지 징검다리를 건널 수 있는지 return 하도록 solution 함수를 완성해주세요.

---

## 제한사항  
- 징검다리를 건너야 하는 니니즈 친구들의 수는 무제한 이라고 간주합니다.  
- stones 배열의 크기는 1 이상 200,000 이하입니다.  
- stones 배열 각 원소들의 값은 1 이상 200,000,000 이하인 자연수입니다.  
- k는 1 이상 stones의 길이 이하인 자연수입니다.  

---

## 입출력 예  
|stones|k|result|
|---|---|---|
|[2, 4, 5, 3, 2, 1, 4, 2, 5, 1]|3|3|

---

## 🔍 Algorithm
**Binary Search**

## 💻 Logic

```Python
# Binary Search
    while start <= end:
        mid = (start + end) // 2
        count = 0
        # 디딤돌 확인
        for s in stones:
            # 밟을 수 있는 경우
            if s >= mid:
                count = 0
                continue
            # 밟을 수 없는 경우
            count += 1
            # 건너뛰어야 하는 디딤돌이 k인 경우 (징검다리를 건널 수 없는 경우)
            if count == k:
                end = mid - 1
                break
        # 징검다리를 건널 수 있는 경우
        if count < k:
            answer = mid
            start = mid + 1
    return answer
```
- **Parametric Search**  
    `징검다리를 건널 수 있는 최대 인원수`를 찾는 **최적화 문제**를 `x명의 인원이 건널 수 있는지` 찾는 **결정 문제**로 바꿔서 해결  
- **Binary Search**  
    `x영의 인원이 건널 수 있는지` 찾기 위해서 `x`를 **Binary Search**  
    `count`를 이용해서 한번에 건너뛰어야 하는 디딤돌 수 체크  
    **밟을 수 있는 경우**에는 `count`를 **0**으로 초기화  
    **밟을 수 없는 경우**에는 `count`를 하나씩 늘려주고, `count == k`가 되면 징검다리를 건널 수 없으므로 `end`를 `mid` 앞으로 옮겨주고 다시 **Binary Search**  
    징검다리를 끝까지 건널 수 있는 경우에는 현재 `mid` 값을 정답으로 우선 저장해두고, `start`를 `mid` 뒤로 옮겨주고 다시 **Binary Search**  



---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(stones, k):
    answer = 0
    start, end = 0, max(stones)
    # Binary Search
    while start <= end:
        mid = (start + end) // 2
        count = 0
        # 디딤돌 확인
        for s in stones:
            # 밟을 수 있는 경우
            if s >= mid:
                count = 0
                continue
            # 밟을 수 없는 경우
            count += 1
            # 건너뛰어야 하는 디딤돌이 k인 경우 (징검다리를 건널 수 없는 경우)
            if count == k:
                end = mid - 1
                break
        # 징검다리를 건널 수 있는 경우
        if count < k:
            answer = mid
            start = mid + 1
    return answer
```
</details>

---

## 📝 Review

처음에는 **Binary Search**로 풀어야겠다는 생각을 못하고 **Union-Find**나 다른 알고리즘을 생각하고 있었는데 입력도 터무니없이 크고, 저번에 풀었던 **Parametric Search** 문제가 생각나서 **Parametric Search** 기법을 사용해서 풀었다. 그러고 다시 보니까 전형적인 **Binary Search** 문제.  
다음부터 입력이 200,000,000처럼 터무니없이 크면 **Binary Search** 생각부터 하자!  


```toc
```