---
emoji: π»
title: "[BOJ] 17406λ²: λ°°μ΄ λλ¦¬κΈ° 4 (Python)"
date: '2022-02-25 17:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://www.acmicpc.net/problem/2252

ν¬κΈ°κ° NΓM ν¬κΈ°μΈ λ°°μ΄ Aκ° μμλ, λ°°μ΄ Aμ κ°μ κ° νμ μλ λͺ¨λ  μμ ν© μ€ μ΅μκ°μ μλ―Ένλ€. λ°°μ΄ Aκ° μλμ κ°μ κ²½μ° 1νμ ν©μ 6, 2νμ ν©μ 4, 3νμ ν©μ 15μ΄λ€. λ°λΌμ, λ°°μ΄ Aμ κ°μ 4μ΄λ€.

```python
1 2 3
2 1 1
4 5 6
```

λ°°μ΄μ νμ  μ°μ°μ μνν  μ μλ€. νμ  μ°μ°μ μΈ μ μ (r, c, s)λ‘ μ΄λ£¨μ΄μ Έ μκ³ , κ°μ₯ μΌμͺ½ μ μΉΈμ΄ (r-s, c-s), κ°μ₯ μ€λ₯Έμͺ½ μλ« μΉΈμ΄ (r+s, c+s)μΈ μ μ¬κ°νμ μκ³ λ°©ν₯μΌλ‘ ν μΉΈμ© λλ¦°λ€λ μλ―Έμ΄λ€. λ°°μ΄μ μΉΈ (r, c)λ rν cμ΄μ μλ―Ένλ€.

μλ₯Ό λ€μ΄, λ°°μ΄ Aμ ν¬κΈ°κ° 6Γ6μ΄κ³ , νμ  μ°μ°μ΄ (3, 4, 2)μΈ κ²½μ°μλ μλ κ·Έλ¦Όκ³Ό κ°μ΄ νμ νκ² λλ€.

![17406-ex1.png](17406-ex1.png)  

νμ  μ°μ°μ΄ λ κ° μ΄μμ΄λ©΄, μ°μ°μ μνν μμμ λ°λΌ μ΅μ’ λ°°μ΄μ΄ λ€λ₯΄λ€.

λ€μμ λ°°μ΄ Aμ ν¬κΈ°κ° 5Γ6μ΄κ³ , νμ  μ°μ°μ΄ (3, 4, 2), (4, 2, 1)μΈ κ²½μ°μ μμμ΄λ€.

![17406-ex2.png](17406-ex2.png)  

λ°°μ΄ Aμ (3, 4, 2), (4, 2, 1) μμλ‘ μ°μ°μ μννλ©΄ λ°°μ΄ Aμ κ°μ 12, (4, 2, 1), (3, 4, 2) μμλ‘ μ°μ°μ μννλ©΄ 15 μ΄λ€.

λ°°μ΄ Aμ μ¬μ© κ°λ₯ν νμ  μ°μ°μ΄ μ£Όμ΄μ‘μ λ, λ°°μ΄ Aμ κ°μ μ΅μκ°μ κ΅¬ν΄λ³΄μ. νμ  μ°μ°μ λͺ¨λ ν λ²μ© μ¬μ©ν΄μΌ νλ©°, μμλ μμλ‘ μ ν΄λ λλ€.

---

## μλ ₯  
μ²«μ§Έ μ€μ λ°°μ΄ Aμ ν¬κΈ° N, M, νμ  μ°μ°μ κ°μ Kκ° μ£Όμ΄μ§λ€.

λμ§Έ μ€λΆν° Nκ°μ μ€μ λ°°μ΄ Aμ λ€μ΄μλ μ A[i][j]κ° μ£Όμ΄μ§κ³ , λ€μ Kκ°μ μ€μ νμ  μ°μ°μ μ λ³΄ r, c, sκ° μ£Όμ΄μ§λ€.

---

## μΆλ ₯  
λ°°μ΄ Aμ κ°μ μ΅μκ°μ μΆλ ₯νλ€.

---

## π Algorithm
**Brute Force**

## π» Logic

```Python
def rotate(r,c,s):
    start_y, start_x, last_y, last_x = r-s-1, c-s-1, r+s-1, c+s-1
    count = (last_x - start_x) // 2
    for i in range(count):
        rightup, rightdown, leftdown = copy_arr[start_y][last_x], copy_arr[last_y][last_x], copy_arr[last_y][start_x]
        # μμ€ κ°λ‘
        for j in reversed(range(start_x, last_x)):
            copy_arr[start_y][j+1] = copy_arr[start_y][j]
        # μ€λ₯Έμͺ½ μΈλ‘
        for j in reversed(range(start_y, last_y)):
            copy_arr[j+1][last_x] = copy_arr[j][last_x]
        copy_arr[start_y+1][last_x] = rightup
        # μλ«μ€ κ°λ‘
        for j in range(start_x, last_x-1):
            copy_arr[last_y][j] = copy_arr[last_y][j+1]
        copy_arr[last_y][last_x-1] = rightdown
        # μΌμͺ½ μΈλ‘
        for j in range(start_y, last_y-1):
            copy_arr[j][start_x] = copy_arr[j+1][start_x]
        copy_arr[last_y-1][start_x] = leftdown
        start_y, start_x, last_y, last_x = start_y+1, start_x+1, last_y-1, last_x-1
```

- νμ  μ°μ° ν¨μ  
  - **μμ€ κ°λ‘, μ€λ₯Έμͺ½ μΈλ‘, μλ«μ€ κ°λ‘, μΌμͺ½ μΈλ‘ 4κ°μ§λ‘ λλ μ κ³μ°**  
    κΌ­μ§μ  μ λ³΄λ₯Ό λ―Έλ¦¬ μ μ₯ν΄λκ³ , κ° λΌμΈμ λ§κ² νμΉΈμ© μ΄λ

---

```Python
N, M, K = map(int, sys.stdin.readline().split())
arr = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
rot = [[int(x) for x in sys.stdin.readline().split()] for _ in range(K)]
rot_len = [int(x) for x in range(0, len(rot))]
order_list = permutations(rot_len, len(rot))
result = sys.maxsize

for order in order_list:
    order = list(order)
    copy_arr = copy.deepcopy(arr)
    for i in order:
        rotate(rot[i][0], rot[i][1], rot[i][2])
    for j in range(0, N):
        result = min(result, sum(copy_arr[j]))
print(result)
```

- μμ΄μ μ΄μ©ν΄ κ°λ₯ν μμ κ²½μ°μ μλ₯Ό λ€ λ§λ€κ³ ,  
- κ°λ₯ν κ²½μ°μ μλ§λ€ νμ  μ°μ°μ νκ³  μ΅μκ°μ κ΅¬ν λ€ μ΅μκ° μΆλ ₯  
- κ° κ²½μ°μ μλ§λ€ μλ³Έ λ¦¬μ€νΈλ₯Ό λ³΄μ‘΄νκΈ° μν΄ **deepcopy** ν νμ  μ°μ° μν  

---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

```Python
import sys, copy
from itertools import permutations

def rotate(r,c,s):
    start_y, start_x, last_y, last_x = r-s-1, c-s-1, r+s-1, c+s-1
    count = (last_x - start_x) // 2
    for i in range(count):
        rightup, rightdown, leftdown = copy_arr[start_y][last_x], copy_arr[last_y][last_x], copy_arr[last_y][start_x]
        # μμ€ κ°λ‘
        for j in reversed(range(start_x, last_x)):
            copy_arr[start_y][j+1] = copy_arr[start_y][j]
        # μ€λ₯Έμͺ½ μΈλ‘
        for j in reversed(range(start_y, last_y)):
            copy_arr[j+1][last_x] = copy_arr[j][last_x]
        copy_arr[start_y+1][last_x] = rightup
        # μλ«μ€ κ°λ‘
        for j in range(start_x, last_x-1):
            copy_arr[last_y][j] = copy_arr[last_y][j+1]
        copy_arr[last_y][last_x-1] = rightdown
        # μΌμͺ½ μΈλ‘
        for j in range(start_y, last_y-1):
            copy_arr[j][start_x] = copy_arr[j+1][start_x]
        copy_arr[last_y-1][start_x] = leftdown
        start_y, start_x, last_y, last_x = start_y+1, start_x+1, last_y-1, last_x-1
        
N, M, K = map(int, sys.stdin.readline().split())
arr = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
rot = [[int(x) for x in sys.stdin.readline().split()] for _ in range(K)]
rot_len = [int(x) for x in range(0, len(rot))]
order_list = permutations(rot_len, len(rot))
result = sys.maxsize

for order in order_list:
    order = list(order)
    copy_arr = copy.deepcopy(arr)
    for i in order:
        rotate(rot[i][0], rot[i][1], rot[i][2])
    for j in range(0, N):
        result = min(result, sum(copy_arr[j]))
print(result)
```
</details>

---

## π Review

μ΄μ  λ¬Έμ μ λΉμ·νκ² μμ΄μ μ΄μ©ν΄μ ν΄κ²°νλ λ¬Έμ μ¬μ κ΅¬νμλ ν¬κ² λ¬Έμ κ° μμλ€.  
κ° νμ  μ°μ°λ§λ€ μ΅μκ°μ κ΅¬ν΄μΌνλμ€ μλͺ» μμλ κ²λ§ λΉΌλ©΄,,



```toc
```