---
emoji: 💻
title: "[Programmers] 42883번: 큰 수 만들기 (Python)"
date: '2022-03-28 18:20:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://programmers.co.kr/learn/courses/30/lessons/42883

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

---

## 제한사항  
- number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.  
- k는 1 이상 number의 자릿수 미만인 자연수입니다.  

---

## 입출력 예  
|number|k|return|
|---|---|---|
|"1924"|2|"94"|
|"1231234"|3|"3234"|
|"4177252841"|4|"775841"|

---

## 🔍 Algorithm
**Greedy**

## 💻 Logic

```Python
def solution(number, k):
    answer, cnt = [], 0
    number = list(number)
    # 숫자 추가하면서 제거할 숫자 확인
    for n in number:
        # index error 나지 않도록
        if 0 < len(answer):
            # 맨 뒤 숫자가 현재 숫자 n보다 작으면 pop
            while cnt < k and answer[-1] < n:
                answer.pop()
                cnt += 1
                # index error 나지 않도록
                if 0 == len(answer): break
        # 숫자 추가
        answer.append(n)
    # k개 숫자를 전부 제거하지 않은 경우
    if cnt != k:
        for _ in range(k-cnt):
            answer.pop()
    answer = "".join(answer)
    return answer
```

- **숫자 추가하면서 제거할 숫자 확인**  
  숫자 하나씩 반복문을 돌면서 **append** 해주고, 제거할 숫자를 확인한 뒤 **k**개만큼 제거  
- **맨 뒤 숫자가 현재 숫자 n보다 작으면 pop**  
  맨 뒤 숫자가 현재 숫자 **n**보다 작으면 맨 뒤 숫자 **pop**해주고 `cnt` **+1**  
  `cnt`가 **k**개 될 때까지만 반복  
- **k개 숫자를 전부 제거하지 않은 경우**  
  제거할 숫자가 남은 경우에는 숫자가 **내림차순**으로 정렬된 상태이기 때문에  
  남은 개수만큼 뒤에서부터 **pop**해서 제거  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
def solution(number, k):
    answer, cnt = [], 0
    number = list(number)
    # 숫자 추가하면서 제거할 숫자 확인
    for n in number:
        # index error 나지 않도록
        if 0 < len(answer):
            # 맨 뒤 숫자가 현재 숫자 n보다 작으면 pop
            while cnt < k and answer[-1] < n:
                answer.pop()
                cnt += 1
                # index error 나지 않도록
                if 0 == len(answer): break
        # 숫자 추가
        answer.append(n)
    # k개 숫자를 전부 제거하지 않은 경우
    if cnt != k:
        for _ in range(k-cnt):
            answer.pop()
    answer = "".join(answer)
    return answer
```
</details>

---

## 📝 Review

문제를 제대로 이해했다고 생각했는데 풀이를 잘못 생각하고 그걸로 계속 해결하려고 해서 시간이 걸렸다,,  
문제에서 주는 입출력 예시 말고 다른 특이한 상황에 테스트케이스를 생각해내는 실력도 중요하니까 많이 해봐야겠다,,


```toc
```