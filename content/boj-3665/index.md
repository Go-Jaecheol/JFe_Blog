---
emoji: 💻
title: "[BOJ] 3665번: 최종 순위 (Python)"
date: '2022-02-06 18:20:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/3665

올해 ACM-ICPC 대전 인터넷 예선에는 총 n개의 팀이 참가했다. 팀은 1번부터 n번까지 번호가 매겨져 있다. 놀랍게도 올해 참가하는 팀은 작년에 참가했던 팀과 동일하다.

올해는 인터넷 예선 본부에서는 최종 순위를 발표하지 않기로 했다. 그 대신에 작년에 비해서 상대적인 순위가 바뀐 팀의 목록만 발표하려고 한다. (작년에는 순위를 발표했다) 예를 들어, 작년에 팀 13이 팀 6 보다 순위가 높았는데, 올해 팀 6이 팀 13보다 순위가 높다면, (6, 13)을 발표할 것이다.

창영이는 이 정보만을 가지고 올해 최종 순위를 만들어보려고 한다. 작년 순위와 상대적인 순위가 바뀐 모든 팀의 목록이 주어졌을 때, 올해 순위를 만드는 프로그램을 작성하시오. 하지만, 본부에서 발표한 정보를 가지고 확실한 올해 순위를 만들 수 없는 경우가 있을 수도 있고, 일관성이 없는 잘못된 정보일 수도 있다. 이 두 경우도 모두 찾아내야 한다.  

---

## 입력  
첫째 줄에는 테스트 케이스의 개수가 주어진다. 테스트 케이스는 100개를 넘지 않는다. 각 테스트 케이스는 다음과 같이 이루어져 있다.

- 팀의 수 n을 포함하고 있는 한 줄. (2 ≤ n ≤ 500)  
- n개의 정수 ti를 포함하고 있는 한 줄. (1 ≤ ti ≤ n) ti는 작년에 i등을 한 팀의 번호이다. 1등이 가장 성적이 높은 팀이다. 모든 ti는 서로 다르다.  
- 상대적인 등수가 바뀐 쌍의 수 m (0 ≤ m ≤ 25000)  
- 두 정수 ai와 bi를 포함하고 있는 m줄. (1 ≤ ai < bi ≤ n) 상대적인 등수가 바뀐 두 팀이 주어진다. 같은 쌍이 여러 번 발표되는 경우는 없다.  

---

## 출력  
각 테스트 케이스에 대해서 다음을 출력한다.  

- n개의 정수를 한 줄에 출력한다. 출력하는 숫자는 올해 순위이며, 1등팀부터 순서대로 출력한다. 만약, 확실한 순위를 찾을 수 없다면 "?"를 출력한다. 데이터에 일관성이 없어서 순위를 정할 수 없는 경우에는 "IMPOSSIBLE"을 출력한다.

---

## 🔍 Algorithm
**위상 정렬**

## 💻 Logic

```Python
def topology_sort():
    global result
    q = deque()
    for i in range(1, n+1):
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


```Python
# 테스트 케이스
for _ in range(T):
    n = int(sys.stdin.readline())
    graph = [[] for _ in range(n+1)]
    indegree = [0 for _ in range(n+1)]
    result = []
    # 그래프 정보 입력
    temp = [int(x) for x in sys.stdin.readline().split()]
    for i in range(n-1):
        last = temp[i]
        for j in range(i+1, n):
            graph[last].append(temp[j])
            indegree[temp[j]] += 1
    # 순위 변경
    m = int(sys.stdin.readline())
    for i in range(m):
        a, b = map(int, sys.stdin.readline().split())
        # 원래 a가 b보다 순위가 높은 경우
        if b in graph[a]:
            graph[a].remove(b)
            graph[b].append(a)
            indegree[b] -= 1
            indegree[a] += 1
        # 원래 b가 a보다 순위가 높은 경우
        elif a in graph[b]:
            graph[b].remove(a)
            graph[a].append(b)
            indegree[a] -= 1
            indegree[b] += 1
    topology_sort()
    if len(result) != n:
        print("IMPOSSIBLE")
    else:
        for i in result:
            print(i, end=' ')
```

- 테스트케이스  
  - **그래프 정보 입력**  
  - **순위 변경**  
    원래 a가 b보다 순위가 높은 경우와 b가 a보다 순위가 높은 경우로 나눠서 계산  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from collections import deque
T = int(sys.stdin.readline())
def topology_sort():
    global result
    q = deque()
    for i in range(1, n+1):
        if indegree[i] == 0:
            q.append(i)
    while q:
        num = q.popleft()
        result.append(num)
        for i in graph[num]:
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)

# 테스트 케이스
for _ in range(T):
    n = int(sys.stdin.readline())
    graph = [[] for _ in range(n+1)]
    indegree = [0 for _ in range(n+1)]
    result = []
    # 그래프 정보 입력
    temp = [int(x) for x in sys.stdin.readline().split()]
    for i in range(n-1):
        last = temp[i]
        for j in range(i+1, n):
            graph[last].append(temp[j])
            indegree[temp[j]] += 1
    # 순위 변경
    m = int(sys.stdin.readline())
    for i in range(m):
        a, b = map(int, sys.stdin.readline().split())
        # 원래 a가 b보다 순위가 높은 경우
        if b in graph[a]:
            graph[a].remove(b)
            graph[b].append(a)
            indegree[b] -= 1
            indegree[a] += 1
        # 원래 b가 a보다 순위가 높은 경우
        elif a in graph[b]:
            graph[b].remove(a)
            graph[a].append(b)
            indegree[a] -= 1
            indegree[b] += 1
    topology_sort()
    if len(result) != n:
        print("IMPOSSIBLE")
    else:
        for i in result:
            print(i, end=' ')
```
</details>

---

## 📝 Review

?를 출력하는 경우 때문에 고민을 많이 했지만 ?인 경우가 나올 수 없다는 걸 깨닫고 허무했던 문제..  
나머지는 전형적인 위상정렬 문제랑 다를 게 없어서 크게 어렵지 않았음.


```toc
```