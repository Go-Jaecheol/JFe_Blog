---
emoji: 💻
title: "[Programmers] 42861번: 섬 연결하기 (Python)"
date: '2022-04-12 23:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://programmers.co.kr/learn/courses/30/lessons/42861

n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.

다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.

---

## 제한사항  
- 섬의 개수 n은 1 이상 100 이하입니다.  
- costs의 길이는 `((n-1) * n) / 2` 이하입니다.  
- 임의의 i에 대해, costs[i][0] 와 costs[i][1]에는 다리가 연결되는 두 섬의 번호가 들어있고, costs[i][2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.  
- 같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다. 즉 0과 1 사이를 연결하는 비용이 주어졌을 때, 1과 0의 비용이 주어지지 않습니다.  
- 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한 것으로 봅니다.  
- 연결할 수 없는 섬은 주어지지 않습니다.  

---

## 입출력 예  
|n|costs|return|
|---|---|---|
|4|[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]|4|


---

## 🔍 Algorithm
**Kruskal**

## 💻 Logic

```Python
def find_parent(parent, x):
        if parent[x] != x:
            parent[x] = find_parent(parent, parent[x])
        return parent[x]

def union_parent(parent, a, b):
        a = find_parent(parent, a)
        b = find_parent(parent, b)
        if(a < b):
            parent[b] = a
        else:
            parent[a] = b

def kruskal():
        result = 0
        while h:
            l, (a, b) = heapq.heappop(h)
            if find_parent(parent, a) != find_parent(parent, b):
                union_parent(parent, a, b)
                result += l
        return result
```
- **Kruskal 알고리즘 이용해서 MST 확인하는 함수**  
  우선순위 큐를 이용해서 MST 확인
  모든 노드 방문했는지 확인


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import heapq
def solution(n, costs):
    def find_parent(parent, x):
        if parent[x] != x:
            parent[x] = find_parent(parent, parent[x])
        return parent[x]

    def union_parent(parent, a, b):
        a = find_parent(parent, a)
        b = find_parent(parent, b)
        if(a < b):
            parent[b] = a
        else:
            parent[a] = b

    def kruskal():
        result = 0
        while h:
            l, (a, b) = heapq.heappop(h)
            if find_parent(parent, a) != find_parent(parent, b):
                union_parent(parent, a, b)
                result += l
        return result
    
    answer, h = 0, []
    parent = [int(x) for x in range(n)]
    for i in range(len(costs)):
        heapq.heappush(h, (costs[i][2], (costs[i][0], costs[i][1])))
    answer = kruskal()
    return answer
```
</details>

---

## 📝 Review

Minimun Spanning Tree를 만들어야 된다고 생각해서 Kruskal 알고리즘을 떠올렸다.  
얼마 전에 Kruskal 알고리즘으로 문제를 풀었어서 바로 생각해내서 풀 수 있었다.  


```toc
```