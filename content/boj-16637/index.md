---
emoji: 💻
title: "[BOJ] 16637번: 괄호 추가하기 (Python)"
date: '2022-03-06 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/16637

길이가 N인 수식이 있다. 수식은 0보다 크거나 같고, 9보다 작거나 같은 정수와 연산자(+, -, ×)로 이루어져 있다. 연산자 우선순위는 모두 동일하기 때문에, 수식을 계산할 때는 왼쪽에서부터 순서대로 계산해야 한다. 예를 들어, 3+8×7-9×2의 결과는 136이다.

수식에 괄호를 추가하면, 괄호 안에 들어있는 식은 먼저 계산해야 한다. 단, 괄호 안에는 연산자가 하나만 들어 있어야 한다. 예를 들어, 3+8×7-9×2에 괄호를 3+(8×7)-(9×2)와 같이 추가했으면, 식의 결과는 41이 된다. 하지만, 중첩된 괄호는 사용할 수 없다. 즉, 3+((8×7)-9)×2, 3+((8×7)-(9×2))은 모두 괄호 안에 괄호가 있기 때문에, 올바른 식이 아니다.

수식이 주어졌을 때, 괄호를 적절히 추가해 만들 수 있는 식의 결과의 최댓값을 구하는 프로그램을 작성하시오. 추가하는 괄호 개수의 제한은 없으며, 추가하지 않아도 된다.

---

## 입력  
첫째 줄에 수식의 길이 N(1 ≤ N ≤ 19)가 주어진다. 둘째 줄에는 수식이 주어진다. 수식에 포함된 정수는 모두 0보다 크거나 같고, 9보다 작거나 같다. 문자열은 정수로 시작하고, 연산자와 정수가 번갈아가면서 나온다. 연산자는 +, -, * 중 하나이다. 여기서 *는 곱하기 연산을 나타내는 × 연산이다. 항상 올바른 수식만 주어지기 때문에, N은 홀수이다.

---

## 출력  
첫째 줄에 괄호를 적절히 추가해서 얻을 수 있는 결과의 최댓값을 출력한다. 정답은 2^31보다 작고, -2^31보다 크다.

---

## 🔍 Algorithm
**Brute Force**

## 💻 Logic

```Python
def prior_cal(comb):
    cnt, new_num, new_operator, check = [], [], [], False
    temp = copy.deepcopy(copy_num)
    # 조합에 따라 계산
    for i in comb:
        first, second = copy_num[i], copy_num[i+1]
        cnt.append(i)
        cnt.append(i+1)
        # 연산자에 맞게 계산
        if copy_operator[i] == "+": temp[i] = first + second
        elif copy_operator[i] == "-": temp[i] = first - second
        elif copy_operator[i] == "*": temp[i] = first * second
    # 계산 완료된 새로운 num 리스트 생성
    for i, n in enumerate(copy_num):
        # 계산에 사용되지 않은 숫자면 그대로 추가
        if i not in cnt:
            new_num.append(n)
        # 계산에 사용됐으면 계산 완료된 숫자 한번만 추가
        elif not check:
            new_num.append(temp[i])
            check = True
        elif check:
            check = False
    # 새로운 operator 리스트도 생성
    for i, op in enumerate(copy_operator):
        if i not in comb:
            new_operator.append(op)
    return_list = [new_num, new_operator]
    return return_list
```

- 조합에 맞게 괄호 계산하는 함수  
  - **조합에 따라 계산**  
    조합에 맞게 우선 계산할 숫자 두개를 `first`, `second`에 저장하고, 해당 **index**들은 `cnt`에 **append**  
    연산자에 맞게 계산 후, `temp`에 저장  
  - **계산 완료된 새로운 num 리스트 생성**  
    `cnt`에 있는 **index**인지 확인해서 계산에 사용되지 않은 수자면 그대로 **append**  
    계산에 사용됐으면 `check`를 이용해서 계산 완료된 숫자를 한번만 **append**  
  - **새로운 operator 리스트도 생성**  
    사용된 연산자를 뺀 새로운 operator 리스트를 생성한 후,  
    새로운 `new_num`, `new_operator` 리스트를 **return**  

---

```Python
def cal():
    # 남은 연산자들에 맞게 전부 다 계산
    while copy_operator:
        first, second = copy_num[0], copy_num[1]
        if copy_operator[0] == "+": copy_num[1] = first + second
        elif copy_operator[0] == "-": copy_num[1] = first - second
        elif copy_operator[0] == "*": copy_num[1] = first * second
        del copy_operator[0]
        del copy_num[0]
    return copy_num[0]
```

- 남은 식들 계산하는 함수  
  - **남은 연산자들에 맞게 전부 다 계산**  
    남은 연산자가 없을 때까지 연산자에 맞게 계산해주고,  
    계산 완료된 `copy_num[0]`을 **return**  
    
---

```Python
N = int(sys.stdin.readline())
exp = sys.stdin.readline()
num, operator, result = [], [], -sys.maxsize
# 문자열 분리
for i in range(len(exp)-1):
    if i % 2 == 0: num.append(int(exp[i]))
    else: operator.append(exp[i])
# 연산자 없이 숫자 하나만 있을 때, 예외 처리
if len(operator) == 0: result = num[0]
# 연산자 수에 맞게 조합 생성해서 최댓값 계산
for i in range(len(operator)):
    comb_list = combinations([int(x) for x in range(len(operator))], i+1)
    for comb in comb_list:
        comb = list(comb)
        check = False
        # 괄호가 연속되는지 확인하고, 연속되면 continue
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

- `exp` 문자열을 `num`, `operator`로 분리  
- 연산자 없이 숫자 하나만 있을 때는 바로 값을 출력하도록 예외 처리  
- 연산자 수에 맞게 조합을 이용해 가능한 조합 경우의 수를 다 만들고,  
- 가능한 경우의 수에 맞게 `prior_cal()` 함수 실행  
- 이 때, 괄호가 연속되는지 확인하고, 연속되면 함수 실행하기 전에 **continue**  
- 다음으로는 남은 식들 계산하는 `cal()` 함수 실행한 후,  
- 각 조합마다 **max** 값을 `result`에 저장하고 출력한다.  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys, copy
from itertools import combinations

def prior_cal(comb):
    cnt, new_num, new_operator, check = [], [], [], False
    temp = copy.deepcopy(copy_num)
    # 조합에 따라 계산
    for i in comb:
        first, second = copy_num[i], copy_num[i+1]
        cnt.append(i)
        cnt.append(i+1)
        # 연산자에 맞게 계산
        if copy_operator[i] == "+": temp[i] = first + second
        elif copy_operator[i] == "-": temp[i] = first - second
        elif copy_operator[i] == "*": temp[i] = first * second
    # 계산 완료된 새로운 num 리스트 생성
    for i, n in enumerate(copy_num):
        # 계산에 사용되지 않은 숫자면 그대로 추가
        if i not in cnt:
            new_num.append(n)
        # 계산에 사용됐으면 계산 완료된 숫자 한번만 추가
        elif not check:
            new_num.append(temp[i])
            check = True
        elif check:
            check = False
    # 새로운 operator 리스트도 생성
    for i, op in enumerate(copy_operator):
        if i not in comb:
            new_operator.append(op)
    return_list = [new_num, new_operator]
    return return_list

def cal():
    # 남은 연산자들에 맞게 전부 다 계산
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
# 문자열 분리
for i in range(len(exp)-1):
    if i % 2 == 0: num.append(int(exp[i]))
    else: operator.append(exp[i])
# 연산자없이 숫자 하나만 있을 때, 예외 처리
if len(operator) == 0: result = num[0]
# 연산자 수에 맞게 조합 생성해서 최댓값 계산
for i in range(len(operator)):
    comb_list = combinations([int(x) for x in range(len(operator))], i+1)
    for comb in comb_list:
        comb = list(comb)
        check = False
        # 괄호가 연속되는지 확인하고, 연속되면 continue
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

## 📝 Review

지금까지 했던 문제들처럼 조합을 이용해서 쉽게 해결방법을 생각해낼 수 있었다.  
하지만 연산자 없이 숫자 하나만 입력되었을 경우와, 음수만 입력되었을 경우를 바로 생각 못했다,,,ㅠ



```toc
```