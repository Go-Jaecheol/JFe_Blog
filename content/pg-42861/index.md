---
emoji: π»
title: "[Programmers] 42861λ²: μ¬ μ°κ²°νκΈ° (Python)"
date: '2022-04-12 23:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://programmers.co.kr/learn/courses/30/lessons/42861

nκ°μ μ¬ μ¬μ΄μ λ€λ¦¬λ₯Ό κ±΄μ€νλ λΉμ©(costs)μ΄ μ£Όμ΄μ§ λ, μ΅μμ λΉμ©μΌλ‘ λͺ¨λ  μ¬μ΄ μλ‘ ν΅ν κ°λ₯νλλ‘ λ§λ€ λ νμν μ΅μ λΉμ©μ return νλλ‘ solutionμ μμ±νμΈμ.

λ€λ¦¬λ₯Ό μ¬λ¬ λ² κ±΄λλλΌλ, λλ¬ν  μλ§ μμΌλ©΄ ν΅ν κ°λ₯νλ€κ³  λ΄λλ€. μλ₯Ό λ€μ΄ A μ¬κ³Ό B μ¬ μ¬μ΄μ λ€λ¦¬κ° μκ³ , B μ¬κ³Ό C μ¬ μ¬μ΄μ λ€λ¦¬κ° μμΌλ©΄ A μ¬κ³Ό C μ¬μ μλ‘ ν΅ν κ°λ₯ν©λλ€.

---

## μ νμ¬ν­  
- μ¬μ κ°μ nμ 1 μ΄μ 100 μ΄νμλλ€.  
- costsμ κΈΈμ΄λ `((n-1) * n) / 2` μ΄νμλλ€.  
- μμμ iμ λν΄, costs[i][0] μ costs[i][1]μλ λ€λ¦¬κ° μ°κ²°λλ λ μ¬μ λ²νΈκ° λ€μ΄μκ³ , costs[i][2]μλ μ΄ λ μ¬μ μ°κ²°νλ λ€λ¦¬λ₯Ό κ±΄μ€ν  λ λλ λΉμ©μλλ€.  
- κ°μ μ°κ²°μ λ λ² μ£Όμ΄μ§μ§ μμ΅λλ€. λν μμκ° λ°λλλΌλ κ°μ μ°κ²°λ‘ λ΄λλ€. μ¦ 0κ³Ό 1 μ¬μ΄λ₯Ό μ°κ²°νλ λΉμ©μ΄ μ£Όμ΄μ‘μ λ, 1κ³Ό 0μ λΉμ©μ΄ μ£Όμ΄μ§μ§ μμ΅λλ€.  
- λͺ¨λ  μ¬ μ¬μ΄μ λ€λ¦¬ κ±΄μ€ λΉμ©μ΄ μ£Όμ΄μ§μ§ μμ΅λλ€. μ΄ κ²½μ°, λ μ¬ μ¬μ΄μ κ±΄μ€μ΄ λΆκ°λ₯ν κ²μΌλ‘ λ΄λλ€.  
- μ°κ²°ν  μ μλ μ¬μ μ£Όμ΄μ§μ§ μμ΅λλ€.  

---

## μμΆλ ₯ μ  
|n|costs|return|
|---|---|---|
|4|[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]|4|


---

## π Algorithm
**Kruskal**

## π» Logic

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
- **Kruskal μκ³ λ¦¬μ¦ μ΄μ©ν΄μ MST νμΈνλ ν¨μ**  
  μ°μ μμ νλ₯Ό μ΄μ©ν΄μ MST νμΈ
  λͺ¨λ  λΈλ λ°©λ¬Ένλμ§ νμΈ


---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

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

## π Review

Minimun Spanning Treeλ₯Ό λ§λ€μ΄μΌ λλ€κ³  μκ°ν΄μ Kruskal μκ³ λ¦¬μ¦μ λ μ¬λ Έλ€.  
μΌλ§ μ μ Kruskal μκ³ λ¦¬μ¦μΌλ‘ λ¬Έμ λ₯Ό νμμ΄μ λ°λ‘ μκ°ν΄λ΄μ ν μ μμλ€.  


```toc
```