---
emoji: π»
title: "[BOJ] 2252λ²: μ€ μΈμ°κΈ° (Python)"
date: '2022-01-30 22:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://www.acmicpc.net/problem/2252

Nλͺμ νμλ€μ ν€ μμλλ‘ μ€μ μΈμ°λ €κ³  νλ€. κ° νμμ ν€λ₯Ό μ§μ  μ¬μ μ λ ¬νλ©΄ κ°λ¨νκ² μ§λ§, λ§λν λ°©λ²μ΄ μμ΄μ λ νμμ ν€λ₯Ό λΉκ΅νλ λ°©λ²μ μ¬μ©νκΈ°λ‘ νμλ€. κ·Έλλ§λ λͺ¨λ  νμλ€μ λ€ λΉκ΅ν΄ λ³Έ κ²μ΄ μλκ³ , μΌλΆ νμλ€μ ν€λ§μ λΉκ΅ν΄ λ³΄μλ€.  

μΌλΆ νμλ€μ ν€λ₯Ό λΉκ΅ν κ²°κ³Όκ° μ£Όμ΄μ‘μ λ, μ€μ μΈμ°λ νλ‘κ·Έλ¨μ μμ±νμμ€.  

---

## μλ ₯  
μ²«μ§Έ μ€μ N(1 β€ N β€ 32,000), M(1 β€ M β€ 100,000)μ΄ μ£Όμ΄μ§λ€. Mμ ν€λ₯Ό λΉκ΅ν νμμ΄λ€. λ€μ Mκ°μ μ€μλ ν€λ₯Ό λΉκ΅ν λ νμμ λ²νΈ A, Bκ° μ£Όμ΄μ§λ€. μ΄λ νμ Aκ° νμ Bμ μμ μμΌ νλ€λ μλ―Έμ΄λ€.  

νμλ€μ λ²νΈλ 1λ²λΆν° Nλ²μ΄λ€.  

---

## μΆλ ₯  
μ²«μ§Έ μ€μ νμλ€μ ν€ μμλλ‘ μ€μ μΈμ΄ κ²°κ³Όλ₯Ό μΆλ ₯νλ€. λ΅μ΄ μ¬λ¬ κ°μ§μΈ κ²½μ°μλ μλ¬΄κ±°λ μΆλ ₯νλ€.  

---

## π Algorithm
**μμ μ λ ¬**

## π» Logic

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

- μμ μ λ ¬ ν¨μ  
  - **μ§μ μ°¨μ(`indegree`)** ***0***μ΄λ©΄ `deque`μ **append**  
  - `deque`μμ **popleft**νκ³  `result`μ μΆκ°, μ°κ²°λ κ°μ  μ κ±°(**μ§μμ°¨μ -1**)  

---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

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

## π Review

κ°λ¨ν μμ μ λ ¬ λ¬Έμ   
μμ μ μμ μ λ ¬ λ¬Έμ λ₯Ό νμ΄λ³Έ μ μ΄ μμ§λ§ μ λλ‘ μ λ¦¬κ° μλμ΄μμ΄μ  
μ΄μ½νμμ μμ μ λ ¬ κ΄λ ¨ λ΄μ©μ μ°Έκ³ νμ¬ μμ μ λ ¬ μ΄λ‘ μ λ€μ μ λ¦¬νκ³  νμλ€.


```toc
```