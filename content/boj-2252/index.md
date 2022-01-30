---
emoji: 💻
title: "[BOJ] 2252번: 줄 세우기 (Python)"
date: '2022-01-30 22:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/2252

N명의 학생들을 키 순서대로 줄을 세우려고 한다. 각 학생의 키를 직접 재서 정렬하면 간단하겠지만, 마땅한 방법이 없어서 두 학생의 키를 비교하는 방법을 사용하기로 하였다. 그나마도 모든 학생들을 다 비교해 본 것이 아니고, 일부 학생들의 키만을 비교해 보았다.  

일부 학생들의 키를 비교한 결과가 주어졌을 때, 줄을 세우는 프로그램을 작성하시오.  

---

## 입력  
첫째 줄에 N(1 ≤ N ≤ 32,000), M(1 ≤ M ≤ 100,000)이 주어진다. M은 키를 비교한 회수이다. 다음 M개의 줄에는 키를 비교한 두 학생의 번호 A, B가 주어진다. 이는 학생 A가 학생 B의 앞에 서야 한다는 의미이다.  

학생들의 번호는 1번부터 N번이다.  

---

## 출력  
첫째 줄에 학생들을 키 순서대로 줄을 세운 결과를 출력한다. 답이 여러 가지인 경우에는 아무거나 출력한다.  

---

## 🔍 Algorithm
**위상 정렬**

## 💻 Logic

```Python
def topology_sort():
    global result
    q = deque()
    for i in range(1, N+1):
        if indegree[i] == 0:
            q.append(i)
    while q:
        num = q.popleft()
        result.append(num)
        for i in graph[num]:
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)
```

- 위상 정렬 함수  
  - **진입 차수(`indegree`)** ***0***이면 `deque`에 **append**  
  - `deque`에서 **popleft**하고 `result`에 추가, 연결된 간선 제거(**진입차수 -1**)  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())
graph = [[] for _ in range(N+1)]
indegree = [0 for _ in range(N+1)]
result = []
for _ in range(M):
    A, B = map(int, sys.stdin.readline().split())
    graph[A].append(B)
    indegree[B] += 1

def topology_sort():
    global result
    q = deque()
    for i in range(1, N+1):
        if indegree[i] == 0:
            q.append(i)
    while q:
        num = q.popleft()
        result.append(num)
        for i in graph[num]:
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)

topology_sort()
for i in result:
    print(i, end=' ')
```
</details>

---

## 📝 Review

간단한 위상 정렬 문제  
예전에 위상 정렬 문제를 풀어본 적이 있지만 제대로 정리가 안되어있어서  
이코테에서 위상 정렬 관련 내용을 참고하여 위상 정렬 이론을 다시 정리하고 풀었다.


```toc
```