---
emoji: 💻
title: "[Programmers] 42885번: 구명보트 (Python)"
date: '2022-04-01 22:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://programmers.co.kr/learn/courses/30/lessons/42885

무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

---

## 제한사항  
- 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.  
- 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.  
- 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.  
- 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.  

---

## 입출력 예  
|people|limit|return|
|---|---|---|
|[70, 50, 80, 50]|100|3|
|[70, 80, 50]|100|3|

---

## 🔍 Algorithm
**Greedy**

## 💻 Logic

```Python
def solution(people, limit):
    answer, left, right = 0, 0, len(people)-1
    # 오름차순 정렬
    people.sort()
    # 전부 태울 때까지 반복
    while left <= right:
        answer += 1
        boat = people[right]
        right -= 1
        # 전부 태운 경우
        if left > right : break
        # 제일 가벼운 사람(left)도 같이 태울 수 있는 경우
        if boat + people[left] <= limit:
            left += 1
    return answer
```

- **오름차순 정렬**  
  제일 무게가 나가는 사람을 기준으로 확인하면서 배에 태우기 위해  
- **전부 태울 때까지 반복**  
  남아있는 제일 가벼운 사람의 위치인 `left`가 남아있는 제일 무거운 사람의 위치인 `right`보다 커질 때까지 반복  
- **전부 태운 경우**  
  남아있는 제일 가벼운 사람의 위치인 `left`가 남아있는 제일 무거운 사람의 위치인 `right`보다 커진 경우  
- **제일 가벼운 사람도 같이 태울 수 있는 경우**  
  남아있는 제일 가벼운 사람의 위치는 `left`  
  `left` 위치에 있는 사람을 더한 무게가 `limit` 이하인 경우에는 `left` **+1**  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(people, limit):
    answer, left, right = 0, 0, len(people)-1
    # 오름차순 정렬
    people.sort()
    # 전부 태울 때까지 반복
    while left <= right:
        answer += 1
        boat = people[right]
        right -= 1
        # 전부 태운 경우
        if left > right : break
        # 제일 가벼운 사람(left)도 같이 태울 수 있는 경우
        if boat + people[left] <= limit:
            left += 1
    return answer
```
</details>

---

## 📝 Review

pop()을 이용해서 해결하는 방식으로 구현했는데 효율성 첫 번째 테스트케이스에서 시간초과가 났다,,  
그래서 pop()을 사용하지 않고 해결할 수 있는 방법을 생각해서 다시 풀었다.  
대표적인 그리디 문제인 동전 문제처럼 제일 무게가 많이 나가는 사람을 기준으로 생각해야 함.  


```toc
```