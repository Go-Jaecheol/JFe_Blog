---
emoji: π»
title: "[BOJ] 16637λ²: κ΄νΈ μΆκ°νκΈ° (Python)"
date: '2022-03-06 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## λ¬Έμ 
https://www.acmicpc.net/problem/16637

κΈΈμ΄κ° NμΈ μμμ΄ μλ€. μμμ 0λ³΄λ€ ν¬κ±°λ κ°κ³ , 9λ³΄λ€ μκ±°λ κ°μ μ μμ μ°μ°μ(+, -, Γ)λ‘ μ΄λ£¨μ΄μ Έ μλ€. μ°μ°μ μ°μ μμλ λͺ¨λ λμΌνκΈ° λλ¬Έμ, μμμ κ³μ°ν  λλ μΌμͺ½μμλΆν° μμλλ‘ κ³μ°ν΄μΌ νλ€. μλ₯Ό λ€μ΄, 3+8Γ7-9Γ2μ κ²°κ³Όλ 136μ΄λ€.

μμμ κ΄νΈλ₯Ό μΆκ°νλ©΄, κ΄νΈ μμ λ€μ΄μλ μμ λ¨Όμ  κ³μ°ν΄μΌ νλ€. λ¨, κ΄νΈ μμλ μ°μ°μκ° νλλ§ λ€μ΄ μμ΄μΌ νλ€. μλ₯Ό λ€μ΄, 3+8Γ7-9Γ2μ κ΄νΈλ₯Ό 3+(8Γ7)-(9Γ2)μ κ°μ΄ μΆκ°νμΌλ©΄, μμ κ²°κ³Όλ 41μ΄ λλ€. νμ§λ§, μ€μ²©λ κ΄νΈλ μ¬μ©ν  μ μλ€. μ¦, 3+((8Γ7)-9)Γ2, 3+((8Γ7)-(9Γ2))μ λͺ¨λ κ΄νΈ μμ κ΄νΈκ° μκΈ° λλ¬Έμ, μ¬λ°λ₯Έ μμ΄ μλλ€.

μμμ΄ μ£Όμ΄μ‘μ λ, κ΄νΈλ₯Ό μ μ ν μΆκ°ν΄ λ§λ€ μ μλ μμ κ²°κ³Όμ μ΅λκ°μ κ΅¬νλ νλ‘κ·Έλ¨μ μμ±νμμ€. μΆκ°νλ κ΄νΈ κ°μμ μ νμ μμΌλ©°, μΆκ°νμ§ μμλ λλ€.

---

## μλ ₯  
μ²«μ§Έ μ€μ μμμ κΈΈμ΄ N(1 β€ N β€ 19)κ° μ£Όμ΄μ§λ€. λμ§Έ μ€μλ μμμ΄ μ£Όμ΄μ§λ€. μμμ ν¬ν¨λ μ μλ λͺ¨λ 0λ³΄λ€ ν¬κ±°λ κ°κ³ , 9λ³΄λ€ μκ±°λ κ°λ€. λ¬Έμμ΄μ μ μλ‘ μμνκ³ , μ°μ°μμ μ μκ° λ²κ°μκ°λ©΄μ λμ¨λ€. μ°μ°μλ +, -, * μ€ νλμ΄λ€. μ¬κΈ°μ *λ κ³±νκΈ° μ°μ°μ λνλ΄λ Γ μ°μ°μ΄λ€. ν­μ μ¬λ°λ₯Έ μμλ§ μ£Όμ΄μ§κΈ° λλ¬Έμ, Nμ νμμ΄λ€.

---

## μΆλ ₯  
μ²«μ§Έ μ€μ κ΄νΈλ₯Ό μ μ ν μΆκ°ν΄μ μ»μ μ μλ κ²°κ³Όμ μ΅λκ°μ μΆλ ₯νλ€. μ λ΅μ 2^31λ³΄λ€ μκ³ , -2^31λ³΄λ€ ν¬λ€.

---

## π Algorithm
**Brute Force**

## π» Logic

```Python
def prior_cal(comb):
    cnt, new_num, new_operator, check = [], [], [], False
    temp = copy.deepcopy(copy_num)
    # μ‘°ν©μ λ°λΌ κ³μ°
    for i in comb:
        first, second = copy_num[i], copy_num[i+1]
        cnt.append(i)
        cnt.append(i+1)
        # μ°μ°μμ λ§κ² κ³μ°
        if copy_operator[i] == "+": temp[i] = first + second
        elif copy_operator[i] == "-": temp[i] = first - second
        elif copy_operator[i] == "*": temp[i] = first * second
    # κ³μ° μλ£λ μλ‘μ΄ num λ¦¬μ€νΈ μμ±
    for i, n in enumerate(copy_num):
        # κ³μ°μ μ¬μ©λμ§ μμ μ«μλ©΄ κ·Έλλ‘ μΆκ°
        if i not in cnt:
            new_num.append(n)
        # κ³μ°μ μ¬μ©λμΌλ©΄ κ³μ° μλ£λ μ«μ νλ²λ§ μΆκ°
        elif not check:
            new_num.append(temp[i])
            check = True
        elif check:
            check = False
    # μλ‘μ΄ operator λ¦¬μ€νΈλ μμ±
    for i, op in enumerate(copy_operator):
        if i not in comb:
            new_operator.append(op)
    return_list = [new_num, new_operator]
    return return_list
```

- μ‘°ν©μ λ§κ² κ΄νΈ κ³μ°νλ ν¨μ  
  - **μ‘°ν©μ λ°λΌ κ³μ°**  
    μ‘°ν©μ λ§κ² μ°μ  κ³μ°ν  μ«μ λκ°λ₯Ό `first`, `second`μ μ μ₯νκ³ , ν΄λΉ **index**λ€μ `cnt`μ **append**  
    μ°μ°μμ λ§κ² κ³μ° ν, `temp`μ μ μ₯  
  - **κ³μ° μλ£λ μλ‘μ΄ num λ¦¬μ€νΈ μμ±**  
    `cnt`μ μλ **index**μΈμ§ νμΈν΄μ κ³μ°μ μ¬μ©λμ§ μμ μμλ©΄ κ·Έλλ‘ **append**  
    κ³μ°μ μ¬μ©λμΌλ©΄ `check`λ₯Ό μ΄μ©ν΄μ κ³μ° μλ£λ μ«μλ₯Ό νλ²λ§ **append**  
  - **μλ‘μ΄ operator λ¦¬μ€νΈλ μμ±**  
    μ¬μ©λ μ°μ°μλ₯Ό λΊ μλ‘μ΄ operator λ¦¬μ€νΈλ₯Ό μμ±ν ν,  
    μλ‘μ΄ `new_num`, `new_operator` λ¦¬μ€νΈλ₯Ό **return**  

---

```Python
def cal():
    # λ¨μ μ°μ°μλ€μ λ§κ² μ λΆ λ€ κ³μ°
    while copy_operator:
        first, second = copy_num[0], copy_num[1]
        if copy_operator[0] == "+": copy_num[1] = first + second
        elif copy_operator[0] == "-": copy_num[1] = first - second
        elif copy_operator[0] == "*": copy_num[1] = first * second
        del copy_operator[0]
        del copy_num[0]
    return copy_num[0]
```

- λ¨μ μλ€ κ³μ°νλ ν¨μ  
  - **λ¨μ μ°μ°μλ€μ λ§κ² μ λΆ λ€ κ³μ°**  
    λ¨μ μ°μ°μκ° μμ λκΉμ§ μ°μ°μμ λ§κ² κ³μ°ν΄μ£Όκ³ ,  
    κ³μ° μλ£λ `copy_num[0]`μ **return**  
    
---

```Python
N = int(sys.stdin.readline())
exp = sys.stdin.readline()
num, operator, result = [], [], -sys.maxsize
# λ¬Έμμ΄ λΆλ¦¬
for i in range(len(exp)-1):
    if i % 2 == 0: num.append(int(exp[i]))
    else: operator.append(exp[i])
# μ°μ°μ μμ΄ μ«μ νλλ§ μμ λ, μμΈ μ²λ¦¬
if len(operator) == 0: result = num[0]
# μ°μ°μ μμ λ§κ² μ‘°ν© μμ±ν΄μ μ΅λκ° κ³μ°
for i in range(len(operator)):
    comb_list = combinations([int(x) for x in range(len(operator))], i+1)
    for comb in comb_list:
        comb = list(comb)
        check = False
        # κ΄νΈκ° μ°μλλμ§ νμΈνκ³ , μ°μλλ©΄ continue
        for j in range(len(comb)-1):
            if comb[j+1] - comb[j] == 1:
                check = True
                break
        if check: continue
        copy_num, copy_operator = copy.deepcopy(num), copy.deepcopy(operator)
        temp = prior_cal(comb)
        copy_num, copy_operator = temp[0], temp[1]
        result = max(result, cal())
print(result)
```

- `exp` λ¬Έμμ΄μ `num`, `operator`λ‘ λΆλ¦¬  
- μ°μ°μ μμ΄ μ«μ νλλ§ μμ λλ λ°λ‘ κ°μ μΆλ ₯νλλ‘ μμΈ μ²λ¦¬  
- μ°μ°μ μμ λ§κ² μ‘°ν©μ μ΄μ©ν΄ κ°λ₯ν μ‘°ν© κ²½μ°μ μλ₯Ό λ€ λ§λ€κ³ ,  
- κ°λ₯ν κ²½μ°μ μμ λ§κ² `prior_cal()` ν¨μ μ€ν  
- μ΄ λ, κ΄νΈκ° μ°μλλμ§ νμΈνκ³ , μ°μλλ©΄ ν¨μ μ€ννκΈ° μ μ **continue**  
- λ€μμΌλ‘λ λ¨μ μλ€ κ³μ°νλ `cal()` ν¨μ μ€νν ν,  
- κ° μ‘°ν©λ§λ€ **max** κ°μ `result`μ μ μ₯νκ³  μΆλ ₯νλ€.  

---

## π§© Code
<details><summary>μ μ²΄ μ½λ νμΈ</summary>

```Python
import sys, copy
from itertools import combinations

def prior_cal(comb):
    cnt, new_num, new_operator, check = [], [], [], False
    temp = copy.deepcopy(copy_num)
    # μ‘°ν©μ λ°λΌ κ³μ°
    for i in comb:
        first, second = copy_num[i], copy_num[i+1]
        cnt.append(i)
        cnt.append(i+1)
        # μ°μ°μμ λ§κ² κ³μ°
        if copy_operator[i] == "+": temp[i] = first + second
        elif copy_operator[i] == "-": temp[i] = first - second
        elif copy_operator[i] == "*": temp[i] = first * second
    # κ³μ° μλ£λ μλ‘μ΄ num λ¦¬μ€νΈ μμ±
    for i, n in enumerate(copy_num):
        # κ³μ°μ μ¬μ©λμ§ μμ μ«μλ©΄ κ·Έλλ‘ μΆκ°
        if i not in cnt:
            new_num.append(n)
        # κ³μ°μ μ¬μ©λμΌλ©΄ κ³μ° μλ£λ μ«μ νλ²λ§ μΆκ°
        elif not check:
            new_num.append(temp[i])
            check = True
        elif check:
            check = False
    # μλ‘μ΄ operator λ¦¬μ€νΈλ μμ±
    for i, op in enumerate(copy_operator):
        if i not in comb:
            new_operator.append(op)
    return_list = [new_num, new_operator]
    return return_list

def cal():
    # λ¨μ μ°μ°μλ€μ λ§κ² μ λΆ λ€ κ³μ°
    while copy_operator:
        first, second = copy_num[0], copy_num[1]
        if copy_operator[0] == "+": copy_num[1] = first + second
        elif copy_operator[0] == "-": copy_num[1] = first - second
        elif copy_operator[0] == "*": copy_num[1] = first * second
        del copy_operator[0]
        del copy_num[0]
    return copy_num[0]

N = int(sys.stdin.readline())
exp = sys.stdin.readline()
num, operator, result = [], [], -sys.maxsize
# λ¬Έμμ΄ λΆλ¦¬
for i in range(len(exp)-1):
    if i % 2 == 0: num.append(int(exp[i]))
    else: operator.append(exp[i])
# μ°μ°μμμ΄ μ«μ νλλ§ μμ λ, μμΈ μ²λ¦¬
if len(operator) == 0: result = num[0]
# μ°μ°μ μμ λ§κ² μ‘°ν© μμ±ν΄μ μ΅λκ° κ³μ°
for i in range(len(operator)):
    comb_list = combinations([int(x) for x in range(len(operator))], i+1)
    for comb in comb_list:
        comb = list(comb)
        check = False
        # κ΄νΈκ° μ°μλλμ§ νμΈνκ³ , μ°μλλ©΄ continue
        for j in range(len(comb)-1):
            if comb[j+1] - comb[j] == 1:
                check = True
                break
        if check: continue
        copy_num, copy_operator = copy.deepcopy(num), copy.deepcopy(operator)
        temp = prior_cal(comb)
        copy_num, copy_operator = temp[0], temp[1]
        result = max(result, cal())
print(result)
```
</details>

---

## π Review

μ§κΈκΉμ§ νλ λ¬Έμ λ€μ²λΌ μ‘°ν©μ μ΄μ©ν΄μ μ½κ² ν΄κ²°λ°©λ²μ μκ°ν΄λΌ μ μμλ€.  
νμ§λ§ μ°μ°μ μμ΄ μ«μ νλλ§ μλ ₯λμμ κ²½μ°μ, μμλ§ μλ ₯λμμ κ²½μ°λ₯Ό λ°λ‘ μκ° λͺ»νλ€,,,γ 



```toc
```