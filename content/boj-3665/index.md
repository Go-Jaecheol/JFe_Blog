---
emoji: π»
title: "[BOJ] 3665λ²: μ΅μ’ μμ (Python)"
date: '2022-02-06 18:20:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://www.acmicpc.net/problem/3665

μ¬ν΄ ACM-ICPC λμ  μΈν°λ· μμ μλ μ΄ nκ°μ νμ΄ μ°Έκ°νλ€. νμ 1λ²λΆν° nλ²κΉμ§ λ²νΈκ° λ§€κ²¨μ Έ μλ€. λλκ²λ μ¬ν΄ μ°Έκ°νλ νμ μλμ μ°Έκ°νλ νκ³Ό λμΌνλ€.

μ¬ν΄λ μΈν°λ· μμ  λ³ΈλΆμμλ μ΅μ’ μμλ₯Ό λ°ννμ§ μκΈ°λ‘ νλ€. κ·Έ λμ μ μλμ λΉν΄μ μλμ μΈ μμκ° λ°λ νμ λͺ©λ‘λ§ λ°ννλ €κ³  νλ€. (μλμλ μμλ₯Ό λ°ννλ€) μλ₯Ό λ€μ΄, μλμ ν 13μ΄ ν 6 λ³΄λ€ μμκ° λμλλ°, μ¬ν΄ ν 6μ΄ ν 13λ³΄λ€ μμκ° λλ€λ©΄, (6, 13)μ λ°νν  κ²μ΄λ€.

μ°½μμ΄λ μ΄ μ λ³΄λ§μ κ°μ§κ³  μ¬ν΄ μ΅μ’ μμλ₯Ό λ§λ€μ΄λ³΄λ €κ³  νλ€. μλ μμμ μλμ μΈ μμκ° λ°λ λͺ¨λ  νμ λͺ©λ‘μ΄ μ£Όμ΄μ‘μ λ, μ¬ν΄ μμλ₯Ό λ§λλ νλ‘κ·Έλ¨μ μμ±νμμ€. νμ§λ§, λ³ΈλΆμμ λ°νν μ λ³΄λ₯Ό κ°μ§κ³  νμ€ν μ¬ν΄ μμλ₯Ό λ§λ€ μ μλ κ²½μ°κ° μμ μλ μκ³ , μΌκ΄μ±μ΄ μλ μλͺ»λ μ λ³΄μΌ μλ μλ€. μ΄ λ κ²½μ°λ λͺ¨λ μ°Ύμλ΄μΌ νλ€.  

---

## μλ ₯  
μ²«μ§Έ μ€μλ νμ€νΈ μΌμ΄μ€μ κ°μκ° μ£Όμ΄μ§λ€. νμ€νΈ μΌμ΄μ€λ 100κ°λ₯Ό λμ§ μλλ€. κ° νμ€νΈ μΌμ΄μ€λ λ€μκ³Ό κ°μ΄ μ΄λ£¨μ΄μ Έ μλ€.

- νμ μ nμ ν¬ν¨νκ³  μλ ν μ€. (2 β€ n β€ 500)  
- nκ°μ μ μ tiλ₯Ό ν¬ν¨νκ³  μλ ν μ€. (1 β€ ti β€ n) tiλ μλμ iλ±μ ν νμ λ²νΈμ΄λ€. 1λ±μ΄ κ°μ₯ μ±μ μ΄ λμ νμ΄λ€. λͺ¨λ  tiλ μλ‘ λ€λ₯΄λ€.  
- μλμ μΈ λ±μκ° λ°λ μμ μ m (0 β€ m β€ 25000)  
- λ μ μ aiμ biλ₯Ό ν¬ν¨νκ³  μλ mμ€. (1 β€ ai < bi β€ n) μλμ μΈ λ±μκ° λ°λ λ νμ΄ μ£Όμ΄μ§λ€. κ°μ μμ΄ μ¬λ¬ λ² λ°νλλ κ²½μ°λ μλ€.  

---

## μΆλ ₯  
κ° νμ€νΈ μΌμ΄μ€μ λν΄μ λ€μμ μΆλ ₯νλ€.  

- nκ°μ μ μλ₯Ό ν μ€μ μΆλ ₯νλ€. μΆλ ₯νλ μ«μλ μ¬ν΄ μμμ΄λ©°, 1λ±νλΆν° μμλλ‘ μΆλ ₯νλ€. λ§μ½, νμ€ν μμλ₯Ό μ°Ύμ μ μλ€λ©΄ "?"λ₯Ό μΆλ ₯νλ€. λ°μ΄ν°μ μΌκ΄μ±μ΄ μμ΄μ μμλ₯Ό μ ν  μ μλ κ²½μ°μλ "IMPOSSIBLE"μ μΆλ ₯νλ€.

---

## π Algorithm
**μμ μ λ ¬**

## π» Logic

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

- μμ μ λ ¬ ν¨μ  
  - **μ§μ μ°¨μ(`indegree`)** ***0***μ΄λ©΄ `deque`μ **append**  
  - `deque`μμ **popleft**νκ³  `result`μ μΆκ°, μ°κ²°λ κ°μ  μ κ±°(**μ§μμ°¨μ -1**)  

---


```Python
# νμ€νΈ μΌμ΄μ€
for _ in range(T):
    n = int(sys.stdin.readline())
    graph = [[] for _ in range(n+1)]
    indegree = [0 for _ in range(n+1)]
    result = []
    # κ·Έλν μ λ³΄ μλ ₯
    temp = [int(x) for x in sys.stdin.readline().split()]
    for i in range(n-1):
        last = temp[i]
        for j in range(i+1, n):
            graph[last].append(temp[j])
            indegree[temp[j]] += 1
    # μμ λ³κ²½
    m = int(sys.stdin.readline())
    for i in range(m):
        a, b = map(int, sys.stdin.readline().split())
        # μλ aκ° bλ³΄λ€ μμκ° λμ κ²½μ°
        if b in graph[a]:
            graph[a].remove(b)
            graph[b].append(a)
            indegree[b] -= 1
            indegree[a] += 1
        # μλ bκ° aλ³΄λ€ μμκ° λμ κ²½μ°
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

- νμ€νΈμΌμ΄μ€  
  - **κ·Έλν μ λ³΄ μλ ₯**  
  - **μμ λ³κ²½**  
    μλ aκ° bλ³΄λ€ μμκ° λμ κ²½μ°μ bκ° aλ³΄λ€ μμκ° λμ κ²½μ°λ‘ λλ μ κ³μ°  


---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

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

# νμ€νΈ μΌμ΄μ€
for _ in range(T):
    n = int(sys.stdin.readline())
    graph = [[] for _ in range(n+1)]
    indegree = [0 for _ in range(n+1)]
    result = []
    # κ·Έλν μ λ³΄ μλ ₯
    temp = [int(x) for x in sys.stdin.readline().split()]
    for i in range(n-1):
        last = temp[i]
        for j in range(i+1, n):
            graph[last].append(temp[j])
            indegree[temp[j]] += 1
    # μμ λ³κ²½
    m = int(sys.stdin.readline())
    for i in range(m):
        a, b = map(int, sys.stdin.readline().split())
        # μλ aκ° bλ³΄λ€ μμκ° λμ κ²½μ°
        if b in graph[a]:
            graph[a].remove(b)
            graph[b].append(a)
            indegree[b] -= 1
            indegree[a] += 1
        # μλ bκ° aλ³΄λ€ μμκ° λμ κ²½μ°
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

## π Review

?λ₯Ό μΆλ ₯νλ κ²½μ° λλ¬Έμ κ³ λ―Όμ λ§μ΄ νμ§λ§ ?μΈ κ²½μ°κ° λμ¬ μ μλ€λ κ±Έ κΉ¨λ«κ³  νλ¬΄νλ λ¬Έμ ..  
λλ¨Έμ§λ μ νμ μΈ μμμ λ ¬ λ¬Έμ λ λ€λ₯Ό κ² μμ΄μ ν¬κ² μ΄λ ΅μ§ μμμ.


```toc
```