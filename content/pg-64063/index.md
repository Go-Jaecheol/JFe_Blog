---
emoji: 💻
title: "[Programmers] 64063번: 호텔 방 배정 (Python)"
date: '2022-05-16 01:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2019 카카오 개발자 겨울 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/64063

[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

"스노우타운"에서 호텔을 운영하고 있는 "스카피"는 호텔에 투숙하려는 고객들에게 방을 배정하려 합니다. 호텔에는 방이 총 k개 있으며, 각각의 방은 1번부터 k번까지 번호로 구분하고 있습니다. 처음에는 모든 방이 비어 있으며 "스카피"는 다음과 같은 규칙에 따라 고객에게 방을 배정하려고 합니다.

1. 한 번에 한 명씩 신청한 순서대로 방을 배정합니다.  
2. 고객은 투숙하기 원하는 방 번호를 제출합니다.  
3. 고객이 원하는 방이 비어 있다면 즉시 배정합니다.  
4. 고객이 원하는 방이 이미 배정되어 있으면 원하는 방보다 번호가 크면서 비어있는 방 중 가장 번호가 작은 방을 배정합니다.  

예를 들어, 방이 총 10개이고, 고객들이 원하는 방 번호가 순서대로 [1, 3, 4, 1, 3, 1] 일 경우 다음과 같이 방을 배정받게 됩니다.

|원하는 방 번호|배정된 방 번호|
|---|---|
|1|1|
|3|3|
|4|4|
|1|2|
|3|5|
|1|6|

전체 방 개수 k와 고객들이 원하는 방 번호가 순서대로 들어있는 배열 room_number가 매개변수로 주어질 때, 각 고객에게 배정되는 방 번호를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

---

## 제한사항  
- k는 1 이상 1012 이하인 자연수입니다.  
- room_number 배열의 크기는 1 이상 200,000 이하입니다.  
- room_number 배열 각 원소들의 값은 1 이상 k 이하인 자연수입니다.  
- room_number 배열은 모든 고객이 방을 배정받을 수 있는 경우만 입력으로 주어집니다.  
    - 예를 들어, k = 5, room_number = [5, 5] 와 같은 경우는 방을 배정받지 못하는 고객이 발생하므로 이런 경우는 입력으로 주어지지 않습니다.  

---

## 입출력 예  
|k|room_number|result|
|---|---|---|
|10|[1,3,4,1,3,1]|[1,3,4,2,5,6]|

---

## 🔍 Algorithm
**DP**

## 💻 Logic

```Python
    dp = defaultdict(int)   # 원하는 방에 대해 갈 수 있는 다음 방 번호 메모이제이션 (0이면 비어있다는 뜻)
    # 한 명씩 빈 방 찾아서 배정
    for num in room_number:
        temp = []
        next_num = num
        # 빈 방을 찾을 때까지 탐색
        while dp[next_num] > 0:
            next_num = dp[next_num]
            temp.append(next_num)   # 나중에 dp 한번에 업데이트 하기 위해 따로 저장
        # 빈 방 다음 위치로 dp 업데이트
        dp[next_num] = next_num + 1
        for i in temp:
            dp[i] = next_num + 1
        # 빈 방으로 배정
        answer.append(next_num)
    return answer
```
- **메모이제이션**  
    원하는 방이 비어 있지 않는 경우에 다음 가능한 방을 빨리 찾을 수 있도록 갈 수 있는 다음 방 번호를 저장해둔다.  
    `defaultdict`를 사용해서 **dictionary** 형태로 저장하고, 기본값을 **0**으로 설정해서 **0**이면 **비어 있는 상태**  
- **빈 방을 찾을 때까지 탐색**  
    해당 방 번호의 `dp` 값이 존재하면 그 `dp` 값으로 계속 반복해서 `dp` 값이 **0**일 때까지 찾는다.  
    탐색 과정에서 방문한 방 번호들은 나중에 `dp`를 한번에 업데이트 하기 위해 따로 저장해두고,  
    빈 방 다음 위치로 방문한 `dp` 값들을 전부 업데이트한다.  
    찾은 빈 방은 `answer`에 **append**  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
from collections import defaultdict

def solution(k, room_number):
    answer = []
    dp = defaultdict(int)   # 원하는 방에 대해 갈 수 있는 다음 방 번호 메모이제이션 (0이면 비어있다는 뜻)
    # 한 명씩 빈 방 찾아서 배정
    for num in room_number:
        temp = []
        next_num = num
        # 빈 방을 찾을 때까지 탐색
        while dp[next_num] > 0:
            next_num = dp[next_num]
            temp.append(next_num)   # 나중에 dp 한번에 업데이트 하기 위해 따로 저장
        # 빈 방 다음 위치로 dp 업데이트
        dp[next_num] = next_num + 1
        for i in temp:
            dp[i] = next_num + 1
        # 빈 방으로 배정
        answer.append(next_num)
    return answer
```
</details>

---

## 📝 Review

간단하게 딕셔너리만 사용해서 풀었는데 역시 효율성에서 다 걸렸다.  
그러다가 다음 가야 되는 위치를 메모이제이션 하면 더 빠르게 찾을 수 있겠다고 생각해서 DP로 풀었다.  


```toc
```