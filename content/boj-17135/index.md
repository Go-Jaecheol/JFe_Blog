---
emoji: π»
title: "[BOJ] 17135λ²: μΊμ¬ λνμ€ (Python)"
date: '2022-03-02 16:16:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://www.acmicpc.net/problem/17135

μΊμ¬ λνμ€λ μ±μ ν₯ν΄ λͺ°λ €μ€λ μ μ μ‘λ ν΄ λ°©μμ κ²μμ΄λ€. κ²μμ΄ μ§νλλ κ³³μ ν¬κΈ°κ° NΓMμΈ κ²©μνμΌλ‘ λνλΌ μ μλ€. κ²©μνμ 1Γ1 ν¬κΈ°μ μΉΈμΌλ‘ λλμ΄μ Έ μκ³ , κ° μΉΈμ ν¬ν¨λ μ μ μλ μ΅λ νλμ΄λ€. κ²©μνμ Nλ²νμ λ°λ‘ μλ(N+1λ² ν)μ λͺ¨λ  μΉΈμλ μ±μ΄ μλ€.

μ±μ μ μκ²μ μ§ν€κΈ° μν΄ κΆμ 3λͺμ λ°°μΉνλ €κ³  νλ€. κΆμλ μ±μ΄ μλ μΉΈμ λ°°μΉν  μ μκ³ , νλμ μΉΈμλ μ΅λ 1λͺμ κΆμλ§ μμ μ μλ€. κ°κ°μ ν΄λ§λ€ κΆμλ μ  νλλ₯Ό κ³΅κ²©ν  μ μκ³ , λͺ¨λ  κΆμλ λμμ κ³΅κ²©νλ€. κΆμκ° κ³΅κ²©νλ μ μ κ±°λ¦¬κ° Dμ΄νμΈ μ  μ€μμ κ°μ₯ κ°κΉμ΄ μ μ΄κ³ , κ·Έλ¬ν μ μ΄ μ¬λΏμΌ κ²½μ°μλ κ°μ₯ μΌμͺ½μ μλ μ μ κ³΅κ²©νλ€. κ°μ μ μ΄ μ¬λ¬ κΆμμκ² κ³΅κ²©λΉν  μ μλ€. κ³΅κ²©λ°μ μ μ κ²μμμ μ μΈλλ€. κΆμμ κ³΅κ²©μ΄ λλλ©΄, μ μ΄ μ΄λνλ€. μ μ μλλ‘ ν μΉΈ μ΄λνλ©°, μ±μ΄ μλ μΉΈμΌλ‘ μ΄λν κ²½μ°μλ κ²μμμ μ μΈλλ€. λͺ¨λ  μ μ΄ κ²©μνμμ μ μΈλλ©΄ κ²μμ΄ λλλ€. 

κ²μ μ€λͺμμ λ³΄λ€μνΌ κΆμλ₯Ό λ°°μΉν μ΄νμ κ²μ μ§νμ μ ν΄μ Έμλ€. λ°λΌμ, μ΄ κ²μμ κΆμμ μμΉκ° μ€μνλ€. κ²©μνμ μνκ° μ£Όμ΄μ‘μ λ, κΆμμ κ³΅κ²©μΌλ‘ μ κ±°ν  μ μλ μ μ μ΅λ μλ₯Ό κ³μ°ν΄λ³΄μ.

κ²©μνμ λ μμΉ (r1, c1), (r2, c2)μ κ±°λ¦¬λ |r1-r2| + |c1-c2|μ΄λ€.

---

## μλ ₯  
μ²«μ§Έ μ€μ κ²©μν νμ μ N, μ΄μ μ M, κΆμμ κ³΅κ²© κ±°λ¦¬ μ ν Dκ° μ£Όμ΄μ§λ€. λμ§Έ μ€λΆν° Nκ°μ μ€μλ κ²©μνμ μνκ° μ£Όμ΄μ§λ€. 0μ λΉ μΉΈ, 1μ μ μ΄ μλ μΉΈμ΄λ€.

---

## μΆλ ₯  
μ²«μ§Έ μ€μ κΆμμ κ³΅κ²©μΌλ‘ μ κ±°ν  μ μλ μ μ μ΅λ μλ₯Ό μΆλ ₯νλ€.

---

## π Algorithm
**Brute Force, Simulation**

## π» Logic

```Python
def attack(archer, enemy):
    global count
    target, new_enemy, min_i = [], [], -1
    for y, x in archer:
        distance = sys.maxsize
        # κ±°λ¦¬ κ³μ°
        for i, (ey, ex) in enumerate(enemy):
            temp = abs(x - ex) + abs(y - ey)
            if temp <= D and distance > temp:
                distance = temp
                min_i = i
        if min_i > -1:
            target.append(min_i)
    # μ§ν©μΌλ‘ μ€λ³΅ μ κ±°
    target_set = set(target)
    count += len(target_set)
    for i, (y, x) in enumerate(enemy):
        if i not in target_set:
            new_enemy.append(enemy[i])
    return new_enemy
```

- κΆμκ° κ°κΉμ΄ μ μ κ³΅κ²©νλ ν¨μ  
  - **κ±°λ¦¬ κ³μ°**  
    κ°κ° κΆμλ§λ€ μ κ³Όμ κ±°λ¦¬λ₯Ό κ³μ°νκ³ ,  
    **D** κ±°λ¦¬ μ΄νμ κ°μ₯ κ°κΉμ΄ μ μ **index**λ₯Ό κ΅¬ν΄μ `min_i`μ μ μ₯  
    `min_i`κ° μ΄κΈ°κ°μΈ **-1**μ΄ μλλ©΄ `target` λ¦¬μ€νΈμ **append**  
  - **μ§ν©μΌλ‘ μ€λ³΅ μ κ±°**  
    μ€λ³΅μ μ κ±°νκΈ° μν΄ **set**μΌλ‘ λ³νν΄μ£Όκ³ ,  
    ν΄λΉνλ **index**λ₯Ό λΊ μλ‘μ΄ `new_enemy` λ¦¬μ€νΈλ₯Ό λ§λ€μ΄μ **return**  

---

```Python
def move_enemy(enemy):
    temp = []
    new_enemy = []
    # μλλ‘ νμΉΈμ© μ΄λ
    for i, (y, x) in enumerate(enemy):
        if y == N-1: temp.append(i)
        else: enemy[i][0] = y+1
    # μ§ν©μΌλ‘ μ€λ³΅ μ κ±°
    temp_set = set(temp)
    for i, (y, x) in enumerate(enemy):
        if i not in temp_set:
            new_enemy.append(enemy[i])
    return new_enemy
```

- μ  μμΉλ₯Ό μλλ‘ νμΉΈ μ΄λνλ ν¨μ  
  - **μλλ‘ νμΉΈ μ΄λ**  
    μμΉ **y**κ° **N-1**μ΄λ©΄ μ κ±°νκΈ° μν΄ `temp`μ **index**λ₯Ό **append** ν΄μ£Όκ³ ,  
    μλλ©΄ **y** κ°μ **+1**  
  - **μ§ν©μΌλ‘ μ€λ³΅ μ κ±°**  
    μ€λ³΅μ μ κ±°νκΈ° μν΄ **set**μΌλ‘ λ³νν΄μ£Όκ³ ,  
    ν΄λΉνλ **index**λ₯Ό λΊ μλ‘μ΄ `new_enemy` λ¦¬μ€νΈλ₯Ό λ§λ€μ΄μ **return**  
    
---

```Python
N, M, D = map(int, sys.stdin.readline().split())
arr = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
comb_list = combinations([int(x) for x in range(M)], 3)
result = 0
# κΆμ λ°°μΉ μ‘°ν©
for comb in comb_list:
    comb = list(comb)
    archer, enemy, count = [], [], 0
    # κΆμ λ°°μΉ
    for i in comb:
        archer.append([N, i])
    # μ  μμΉ μ μ₯
    for i in range(N):
        for j in range(M):
            if arr[i][j] == 1:
                enemy.append([i, j])
    # μ μ΄ λ€ μ¬λΌμ§ λκΉμ§ κ²μ μ§ν
    while enemy:
        # μ΄ κΈ°μ€ μ λ ¬
        enemy.sort(key=lambda x:x[1])
        enemy = attack(archer, enemy)
        enemy = move_enemy(enemy)
    result = max(result, count)
print(result)
```

- μ‘°ν©μ μ΄μ©ν΄ κ°λ₯ν μ‘°ν© κ²½μ°μ μλ₯Ό λ€ λ§λ€κ³ ,  
- κ°λ₯ν κ²½μ°μ μλ§λ€ κΆμλ₯Ό λ°°μΉνκ³  μ  μμΉλ₯Ό μ μ₯ν λ€μ μ μ΄ λ€ μ¬λΌμ§ λκΉμ§ κ²μμ μ§ννλ€.    
- κ±°λ¦¬κ° κ°μ κ²½μ°μλ κ°μ₯ μΌμͺ½μ μλ μ μ κ³΅κ²©νκΈ° λλ¬Έμ `enemy` λ¦¬μ€νΈλ₯Ό μ΄ κΈ°μ€μΌλ‘ μ λ ¬ν΄μ£Όκ³ ,  
- κ° κ²μλ§λ€ `attack()` ν¨μμ `move_enemy()` ν¨μλ₯Ό μ€ννλ€.  
- κ° μ‘°ν©λ§λ€ **max** κ°μ `result`μ μ μ₯νκ³  μΆλ ₯νλ€.  

---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

```Python
import sys
from itertools import combinations

def attack(archer, enemy):
    global count
    target, new_enemy, min_i = [], [], -1
    for y, x in archer:
        distance = sys.maxsize
        # κ±°λ¦¬ κ³μ°
        for i, (ey, ex) in enumerate(enemy):
            temp = abs(x - ex) + abs(y - ey)
            if temp <= D and distance > temp:
                distance = temp
                min_i = i
        if min_i > -1:
            target.append(min_i)
    # μ§ν©μΌλ‘ μ€λ³΅ μ κ±°
    target_set = set(target)
    count += len(target_set)
    for i, (y, x) in enumerate(enemy):
        if i not in target_set:
            new_enemy.append(enemy[i])
    return new_enemy

def move_enemy(enemy):
    temp = []
    new_enemy = []
    # μλλ‘ νμΉΈμ© μ΄λ
    for i, (y, x) in enumerate(enemy):
        if y == N-1: temp.append(i)
        else: enemy[i][0] = y+1
    # μ§ν©μΌλ‘ μ€λ³΅ μ κ±°
    temp_set = set(temp)
    for i, (y, x) in enumerate(enemy):
        if i not in temp_set:
            new_enemy.append(enemy[i])
    return new_enemy

N, M, D = map(int, sys.stdin.readline().split())
arr = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
comb_list = combinations([int(x) for x in range(M)], 3)
result = 0
# κΆμ λ°°μΉ μ‘°ν©
for comb in comb_list:
    comb = list(comb)
    archer, enemy, count = [], [], 0
    # κΆμ λ°°μΉ
    for i in comb:
        archer.append([N, i])
    # μ  μμΉ μ μ₯
    for i in range(N):
        for j in range(M):
            if arr[i][j] == 1:
                enemy.append([i, j])
    # μ μ΄ λ€ μ¬λΌμ§ λκΉμ§ κ²μ μ§ν
    while enemy:
        # μ΄ κΈ°μ€ μ λ ¬
        enemy.sort(key=lambda x:x[1])
        enemy = attack(archer, enemy)
        enemy = move_enemy(enemy)
    result = max(result, count)
print(result)
```
</details>

---

## π Review

μκ°λ³΄λ€ μκ°μ΄ κ±Έλ Έλ λ¬Έμ .  
κ΅¬ν κ³Όμ μ μ°¨κ·Όμ°¨κ·Ό μ§ννλ©΄ λμ§λ§, combination, set, enumerate λ± νμ΄μ¬ λ¬Έλ²μ΄ μ λλ‘ κΈ°μ΅λμ§ μμμ μ°Ύμλ³΄κ³  νλλΌ μκ°μ΄ μ‘°κΈ κ±Έλ Έκ³   
κ±°λ¦¬κ° κ°μ κ²½μ°μλ κ°μ₯ μΌμͺ½μ μλ μ μ κ³΅κ²©νλ€λ λ¬Έμ  μμλ μ λλ‘ λͺ»μ½μ΄μ μκ°μ΄ κ±Έλ¦° κ² κ°λ€.  

μ²μ²ν λΉ λ₯΄κ² ν  μ μλλ‘ λ μ°μ΅ν΄μΌκ² λ€,,


```toc
```