---
emoji: 💻
title: "[BOJ] 1516번: 게임 개발 (Python)"
date: '2022-02-06 18:40:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/1516

숌 회사에서 이번에 새로운 전략 시뮬레이션 게임 세준 크래프트를 개발하기로 하였다. 핵심적인 부분은 개발이 끝난 상태고, 종족별 균형과 전체 게임 시간 등을 조절하는 부분만 남아 있었다.

게임 플레이에 들어가는 시간은 상황에 따라 다를 수 있기 때문에, 모든 건물을 짓는데 걸리는 최소의 시간을 이용하여 근사하기로 하였다. 물론, 어떤 건물을 짓기 위해서 다른 건물을 먼저 지어야 할 수도 있기 때문에 문제가 단순하지만은 않을 수도 있다. 예를 들면 스타크래프트에서 벙커를 짓기 위해서는 배럭을 먼저 지어야 하기 때문에, 배럭을 먼저 지은 뒤 벙커를 지어야 한다. 여러 개의 건물을 동시에 지을 수 있다.

편의상 자원은 무한히 많이 가지고 있고, 건물을 짓는 명령을 내리기까지는 시간이 걸리지 않는다고 가정하자.

---

## 입력  
첫째 줄에 건물의 종류 수 N(1 ≤ N ≤ 500)이 주어진다. 다음 N개의 줄에는 각 건물을 짓는데 걸리는 시간과 그 건물을 짓기 위해 먼저 지어져야 하는 건물들의 번호가 주어진다. 건물의 번호는 1부터 N까지로 하고, 각 줄은 -1로 끝난다고 하자. 각 건물을 짓는데 걸리는 시간은 100,000보다 작거나 같은 자연수이다. 모든 건물을 짓는 것이 가능한 입력만 주어진다.

---

## 출력  
N개의 각 건물이 완성되기까지 걸리는 최소 시간을 출력한다.

---

## 🔍 Algorithm
**위상 정렬, Dynamic Programming**

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
        result[num] += time[num]
        for i in graph[num]:
            # 먼저 지어져야 하는 건물들이 동시에 지어지는 경우 고려
            result[i] = max(result[i], result[num])
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)
```

- 위상 정렬 함수  
  - **진입 차수(`indegree`)** ***0***이면 `deque`에 **append**  
  - `deque`에서 **popleft**하고 `result`값 변경, 연결된 간선 제거(**진입차수 -1**)  
  - `result`값은 먼저 지어져야 하는 건물들이 동시에 지어지는 경우를 고려하기 위해  
    `result[i]` 와 `result[num]` 중 **max** 값을 `result[i]` 에 저장

---


```Python
N = int(sys.stdin.readline())
graph = [[] for _ in range(N+1)]
indegree = [0 for _ in range(N+1)]
time = [0 for _ in range(N+1)]
result = [0 for _ in range(N+1)]
for i in range(1, N+1):
    temp = [int(x) for x in sys.stdin.readline().split()]
    time[i] = temp[0]
    for j in range(1, len(temp)):
        if temp[j] == -1: break
        graph[temp[j]].append(i)
        indegree[i] += 1
     
topology_sort()
for i in range(1, N+1):
    print(result[i])
```

- 그래프 정보 저장 후, `topology_sort` 함수 실행


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from collections import deque

def topology_sort():
    global result
    q = deque()
    for i in range(1, N+1):
        if indegree[i] == 0:
            q.append(i)
    while q:
        num = q.popleft()
        result[num] += time[num]
        for i in graph[num]:
            # 먼저 지어져야 하는 건물들이 동시에 지어지는 경우 고려
            result[i] = max(result[i], result[num])
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)

N = int(sys.stdin.readline())
graph = [[] for _ in range(N+1)]
indegree = [0 for _ in range(N+1)]
time = [0 for _ in range(N+1)]
result = [0 for _ in range(N+1)]
for i in range(1, N+1):
    temp = [int(x) for x in sys.stdin.readline().split()]
    time[i] = temp[0]
    for j in range(1, len(temp)):
        if temp[j] == -1: break
        graph[temp[j]].append(i)
        indegree[i] += 1
     
topology_sort()
for i in range(1, N+1):
    print(result[i])
```
</details>

---

## 📝 Review

처음에는 그냥 위상정렬 문제 풀 듯이 풀면 되겠다고 생각하고 접근해서 풀었는데 `"여러 개의 건물을 동시에 지을 수 있다."` 이 부분을 생각 못하고 있었다.  
저 문장이 의미하는 바를 바로 파악하지 못했고, 그래서 이 부분을 처리하는데 시간이 걸렸었다.


```toc
```