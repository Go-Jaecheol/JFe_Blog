---
emoji: π»
title: "[BOJ] 14499λ²: μ£Όμ¬μ κ΅΄λ¦¬κΈ° (Python)"
date: '2022-01-01 20:45:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://www.acmicpc.net/problem/14499

ν¬κΈ°κ° NΓMμΈ μ§λκ° μ‘΄μ¬νλ€. μ§λμ μ€λ₯Έμͺ½μ λμͺ½, μμͺ½μ λΆμͺ½μ΄λ€. μ΄ μ§λμ μμ μ£Όμ¬μκ° νλ λμ¬μ Έ μμΌλ©°, μ£Όμ¬μμ μ κ°λλ μλμ κ°λ€. μ§λμ μ’νλ (r, c)λ‘ λνλ΄λ©°, rλ λΆμͺ½μΌλ‘λΆν° λ¨μ΄μ§ μΉΈμ κ°μ, cλ μμͺ½μΌλ‘λΆν° λ¨μ΄μ§ μΉΈμ κ°μμ΄λ€.  

```Python
  2
4 1 3
  5
  6
```

μ£Όμ¬μλ μ§λ μμ μ λ©΄μ΄ 1μ΄κ³ , λμͺ½μ λ°λΌλ³΄λ λ°©ν₯μ΄ 3μΈ μνλ‘ λμ¬μ Έ μμΌλ©°, λμ¬μ Έ μλ κ³³μ μ’νλ (x, y) μ΄λ€. κ°μ₯ μ²μμ μ£Όμ¬μμλ λͺ¨λ  λ©΄μ 0μ΄ μ νμ Έ μλ€.  

μ§λμ κ° μΉΈμλ μ μκ° νλμ© μ°μ¬μ Έ μλ€. μ£Όμ¬μλ₯Ό κ΅΄λ Έμ λ, μ΄λν μΉΈμ μ°μ¬ μλ μκ° 0μ΄λ©΄, μ£Όμ¬μμ λ°λ₯λ©΄μ μ°μ¬ μλ μκ° μΉΈμ λ³΅μ¬λλ€. 0μ΄ μλ κ²½μ°μλ μΉΈμ μ°μ¬ μλ μκ° μ£Όμ¬μμ λ°λ₯λ©΄μΌλ‘ λ³΅μ¬λλ©°, μΉΈμ μ°μ¬ μλ μλ 0μ΄ λλ€.  

μ£Όμ¬μλ₯Ό λμ κ³³μ μ’νμ μ΄λμν€λ λͺλ Ήμ΄ μ£Όμ΄μ‘μ λ, μ£Όμ¬μκ° μ΄λνμ λ λ§λ€ μλ¨μ μ°μ¬ μλ κ°μ κ΅¬νλ νλ‘κ·Έλ¨μ μμ±νμμ€.  

μ£Όμ¬μλ μ§λμ λ°κΉ₯μΌλ‘ μ΄λμν¬ μ μλ€. λ§μ½ λ°κΉ₯μΌλ‘ μ΄λμν€λ €κ³  νλ κ²½μ°μλ ν΄λΉ λͺλ Ήμ λ¬΄μν΄μΌ νλ©°, μΆλ ₯λ νλ©΄ μ λλ€.  

---

## μλ ₯  
μ²«μ§Έ μ€μ μ§λμ μΈλ‘ ν¬κΈ° N, κ°λ‘ ν¬κΈ° M (1 β€ N, M β€ 20), μ£Όμ¬μλ₯Ό λμ κ³³μ μ’ν x, y(0 β€ x β€ N-1, 0 β€ y β€ M-1), κ·Έλ¦¬κ³  λͺλ Ήμ κ°μ K (1 β€ K β€ 1,000)κ° μ£Όμ΄μ§λ€.  

λμ§Έ μ€λΆν° Nκ°μ μ€μ μ§λμ μ°μ¬ μλ μκ° λΆμͺ½λΆν° λ¨μͺ½μΌλ‘, κ° μ€μ μμͺ½λΆν° λμͺ½ μμλλ‘ μ£Όμ΄μ§λ€. μ£Όμ¬μλ₯Ό λμ μΉΈμ μ°μ¬ μλ μλ ν­μ 0μ΄λ€. μ§λμ κ° μΉΈμ μ°μ¬ μλ μλ 10 λ―Έλ§μ μμ°μ λλ 0μ΄λ€.  

λ§μ§λ§ μ€μλ μ΄λνλ λͺλ Ήμ΄ μμλλ‘ μ£Όμ΄μ§λ€. λμͺ½μ 1, μμͺ½μ 2, λΆμͺ½μ 3, λ¨μͺ½μ 4λ‘ μ£Όμ΄μ§λ€.  

---

## μΆλ ₯  
μ΄λν  λλ§λ€ μ£Όμ¬μμ μ λ©΄μ μ°μ¬ μλ μλ₯Ό μΆλ ₯νλ€. λ§μ½ λ°κΉ₯μΌλ‘ μ΄λμν€λ €κ³  νλ κ²½μ°μλ ν΄λΉ λͺλ Ήμ λ¬΄μν΄μΌ νλ©°, μΆλ ₯λ νλ©΄ μ λλ€.  

---

**μμ  μλ ₯ 1**  
```Python
4 2 0 0 8
0 2
3 4
5 6
7 8
4 4 4 1 3 3 3 2
```

**μμ  μΆλ ₯ 1**  
```Python
0
```

**μμ  μλ ₯ 2**  
```Python
3 3 1 1 9
1 2 3
4 0 5
6 7 8
1 3 2 2 4 4 1 1 3
```

**μμ  μΆλ ₯ 2**  
```Python
0
0
0
3
0
1
0
6
0
```

**μμ  μλ ₯ 3**  
```Python
2 2 0 0 16
0 2
3 4
4 4 4 4 1 1 1 1 3 3 3 3 2 2 2 2
```

**μμ  μΆλ ₯ 3**  
```Python
0
0
0
0
```

**μμ  μλ ₯ 4**  
```Python
3 3 0 0 16
0 1 2
3 4 5
6 7 8
4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2
```

**μμ  μΆλ ₯ 4**  
```Python
0
0
0
6
0
8
0
2
0
8
0
2
0
8
0
2
```

---

# [14499] μ£Όμ¬μ κ΅΄λ¦¬κΈ° - Python

## π Algorithm
**μλ?¬λ μ΄μ**

## π» Logic

```Python
class Dice:
    top, front, right, left, back, bottom = 0, 1, 2, 3, 4, 5
    value = [0 for _ in range(6)]
    def move_dice(self, d):
        if d == 1:
            temp = self.top
            self.top = self.left
            self.left = self.bottom
            self.bottom = self.right
            self.right = temp
        elif d == 2:
            temp = self.top
            self.top = self.right
            self.right = self.bottom
            self.bottom = self.left
            self.left = temp
        elif d == 3:
            temp = self.top
            self.top = self.back
            self.back = self.bottom
            self.bottom = self.front
            self.front = temp
        elif d == 4:
            temp = self.top
            self.top = self.front
            self.front = self.bottom
            self.bottom = self.back
            self.back = temp
```

- **Dice ν΄λμ€**  
  - **μ£Όμ¬μ μν μ μ₯**  
    μ κ°λμ λ§κ² `top, front, right, left, back, bottom` μ μ΄κΈ° κ° μ μ₯  
  - **μ£Όμ¬μμ μ°μ¬μ§λ μ μ μ₯**  
    μ£Όμ¬μμ κ° λ©΄μ μ°μ¬μ§λ μλ₯Ό μ μ₯νκΈ° μν΄ `value` λ¦¬μ€νΈ μμ±  
  - **μ£Όμ¬μ μ΄λμν€λ λ©μλ**  
    λͺλ Ή `d`μ λ§κ² μ£Όμ¬μλ₯Ό μ΄λμν€λ λ©μλ μμ±  

---

```Python
dice = Dice()
cur = [(y, x)]
while order:
    d = order[0]
    del order[0]
    cur_x, cur_y = cur.pop()
    # λ€μ μ’ν κ³μ°
    next_x = cur_x + dx[d-1]
    next_y = cur_y + dy[d-1]
    # boundary μ²΄ν¬
    if 0 <= next_x < M and 0 <= next_y < N:
        dice.move_dice(d)
        print(dice.value[dice.top])
        # μ£Όμ¬μ λ°λ₯λ©΄μ μλ₯Ό λ³΅μ¬ν μ§, μΉΈμ μ°μ¬ μλ μλ₯Ό λ³΅μ¬ν μ§
        if map[next_y][next_x] == 0:
            map[next_y][next_x] = dice.value[dice.bottom]
        else:
            dice.value[dice.bottom] = map[next_y][next_x]
            map[next_y][next_x] = 0
        cur.append((next_x, next_y))
    else:
        cur.append((cur_x, cur_y))
```

- μλ ₯λ λͺλ Ήμ λ§κ² μ£Όμ¬μ μ΄λμν€λ©° μ£Όμ¬μ μ λ©΄μ μ ν μ μΆλ ₯  
  - **λ€μ μ’ν κ³μ°**  
    `order`μμ λ°μ λͺλ Ή `d`μ νμ¬ μμΉ `cur`μμ **pop**ν κ°μΌλ‘  
    λ€μ μμΉμΈ `next_x` , `next_y` κ³μ°  
  - **boundary μ²΄ν¬**  
    **boundary μμ μν  λ**λ§ μ£Όμ¬μλ₯Ό μ΄λνκ³  `dice.value[dice.top]` κ°μ μΆλ ₯ν¨  
    **μλ λ**λ νμ¬ `cur_x` , `cur_y` λ₯Ό λ€μ `cur`μ **append**  
  - **μ£Όμ¬μ λ°λ₯λ©΄μ μλ₯Ό λ³΅μ¬ν μ§, μΉΈμ μ°μ¬ μλ μλ₯Ό λ³΅μ¬ν μ§**  
    λ€μ μμΉ μΉΈμ κ°μ΄ **0μ΄λ©΄** `dice.value[dice.bottom]` κ°μ λ³΅μ¬  
    **0μ΄ μλλ©΄** `dice.value[dice.bottom]`μ λ€μ μμΉ μΉΈμ κ°μ λ³΅μ¬νκ³  `map[next_y][next_x] = 0`  

---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

```Python
import sys
N, M, x, y, K = map(int, sys.stdin.readline().split())
map = [[int(x) for x in sys.stdin.readline().split()]for _ in range(N)]
order = [int(x) for x in sys.stdin.readline().split()]
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

class Dice:
    # μ£Όμ¬μ μν
    top, front, right, left, back, bottom = 0, 1, 2, 3, 4, 5
    # μ£Όμ¬μμ μ°μ¬μ§λ μ
    value = [0 for _ in range(6)]
    # μ£Όμ¬μ μ΄λμν€λ λ©μλ
    def move_dice(self, d):
        if d == 1:
            temp = self.top
            self.top = self.left
            self.left = self.bottom
            self.bottom = self.right
            self.right = temp
        elif d == 2:
            temp = self.top
            self.top = self.right
            self.right = self.bottom
            self.bottom = self.left
            self.left = temp
        elif d == 3:
            temp = self.top
            self.top = self.back
            self.back = self.bottom
            self.bottom = self.front
            self.front = temp
        elif d == 4:
            temp = self.top
            self.top = self.front
            self.front = self.bottom
            self.bottom = self.back
            self.back = temp

dice = Dice()
cur = [(y, x)]
while order:
    d = order[0]
    del order[0]
    cur_x, cur_y = cur.pop()
    # λ€μ μ’ν κ³μ°
    next_x = cur_x + dx[d-1]
    next_y = cur_y + dy[d-1]
    # boundary μ²΄ν¬
    if 0 <= next_x < M and 0 <= next_y < N:
        dice.move_dice(d)
        print(dice.value[dice.top])
        # μ£Όμ¬μ λ°λ₯λ©΄μ μλ₯Ό λ³΅μ¬ν μ§, μΉΈμ μ°μ¬ μλ μλ₯Ό λ³΅μ¬ν μ§
        if map[next_y][next_x] == 0:
            map[next_y][next_x] = dice.value[dice.bottom]
        else:
            dice.value[dice.bottom] = map[next_y][next_x]
            map[next_y][next_x] = 0
        cur.append((next_x, next_y))
    else:
        cur.append((cur_x, cur_y))
```
</details>

## π Review
μ£Όμ¬μλ₯Ό μ΄λμν€κ³  μΆλ ₯νλ λ°©λ²μ μ μ²΄μ μΌλ‘ μ΄λ ΅μ§ μμλ€.  
νμ¬ μ£Όμ¬μ μνμ κ° λ©΄μ μ νλ μμ λͺλ Ήμ λ°λΌ μ΄λμν€λ ν¨μκΉμ§ μμ΄μΌ ν΄μ Classλ‘ μ μνλ©΄ νΈνκ² λ€κ³  μκ°νκ³ , κ·Έλμ νμμλ μμ°λ Classλ₯Ό μ¬μ©νλ€.  

λ¬Έμ λ₯Ό λλ°λ‘ μ λν΄μ μ€μλ₯Ό μ€μ΄μ..!


```toc
```