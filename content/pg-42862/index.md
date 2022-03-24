---
emoji: 💻
title: "[Programmers] 42862번: 체육복 (Python)"
date: '2022-03-24 19:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://programmers.co.kr/learn/courses/30/lessons/42862

점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

---

## 제한사항  
- 전체 학생의 수는 2명 이상 30명 이하입니다.
- 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
- 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
- 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.


---

## 입출력 예  
|n|lost|reserve|return|
|---|---|---|---|
|5|[2, 4]|[1, 3, 5]|5|
|5|[2, 4]|[3]|4|
|3|[3]|[1]|2|

---

## 🔍 Algorithm
**Greedy**

## 💻 Logic

```Python
def solution(n, lost, reserve):
    answer, dup_list = 0, []
    # lost, reserve 중복 확인
    for i in reserve:
        if i in lost:
            dup_list.append(i)
    # 중복 제거
    lost = list(set(lost) - set(dup_list))
    reserve = list(set(reserve) - set(dup_list))
    # 왼쪽부터 확인하고 빌려주기
    for i in reserve:
        if i - 1 > 0 and i - 1 in lost:
            lost.remove(i-1)
        elif i + 1 <= n and i + 1 in lost:
            lost.remove(i+1)
    answer = n - len(lost)
    return answer
```

- **lost, reserve 중복 확인**  
  여벌 체육복을 가져온 학생이 도난당하는 경우를 확인하기 위해  
  `lost`, `reserve` 중복 확인해서 `dup_list`에 **append**  
- **중복 제거**  
  **set**을 이용해서 `lost`, `reserve` 각각에 `dup_list`와의 중복 제거  
- **왼쪽부터 확인하고 빌려주기**  
  먼저, 앞 번호가 `lost`에 있으면 `lost`에서 해당 번호 삭제  
  없으면 같은 방식으로 뒷 번호도 확인  
  전체 학생 수 **n**에서 `lost`에 남아있는 학생 수를 뺀 값이 정답  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(n, lost, reserve):
    answer, dup_list = 0, []
    # lost, reserve 중복 확인
    for i in reserve:
        if i in lost:
            dup_list.append(i)
    # 중복 제거
    lost = list(set(lost) - set(dup_list))
    reserve = list(set(reserve) - set(dup_list))
    # 왼쪽부터 확인하고 빌려주기
    for i in reserve:
        if i - 1 > 0 and i - 1 in lost:
            lost.remove(i-1)
        elif i + 1 <= n and i + 1 in lost:
            lost.remove(i+1)
    answer = n - len(lost)
    return answer
```
</details>

---

## 📝 Review

간단한 문제.  
항상 VS Code로 문제 풀다가 IDE 사용없이 문제를 푸니 어색했다.  
코테에서는 IDE 사용없이 프로그래머스 이용해서 푸는 경우가 많다고 하니 프로그래머스에 익숙해져야겠다.  


```toc
```