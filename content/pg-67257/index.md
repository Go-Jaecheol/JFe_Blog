---
emoji: 💻
title: "[Programmers] 67257번: 수식 최대화 (Python)"
date: '2022-04-28 23:40:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2020 카카오 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/67257

IT 벤처 회사를 운영하고 있는 라이언은 매년 사내 해커톤 대회를 개최하여 우승자에게 상금을 지급하고 있습니다.  
이번 대회에서는 우승자에게 지급되는 상금을 이전 대회와는 다르게 다음과 같은 방식으로 결정하려고 합니다.  
해커톤 대회에 참가하는 모든 참가자들에게는 숫자들과 3가지의 연산문자(`+, -, *`) 만으로 이루어진 연산 수식이 전달되며, 참가자의 미션은 전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여 만들 수 있는 가장 큰 숫자를 제출하는 것입니다.  
단, 연산자의 우선순위를 새로 정의할 때, 같은 순위의 연산자는 없어야 합니다. 즉, `+` > `-` > `*` 또는 `-` > `*` > `+` 등과 같이 연산자 우선순위를 정의할 수 있으나 `+,*` > `-` 또는 `*` > `+,-` 처럼 2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다. 수식에 포함된 연산자가 2개라면 정의할 수 있는 연산자 우선순위 조합은 2! = 2가지이며, 연산자가 3개라면 3! = 6가지 조합이 가능합니다.  
만약 계산된 결과가 음수라면 해당 숫자의 절댓값으로 변환하여 제출하며 제출한 숫자가 가장 큰 참가자를 우승자로 선정하며, 우승자가 제출한 숫자를 우승상금으로 지급하게 됩니다.  

예를 들어, 참가자 중 네오가 아래와 같은 수식을 전달받았다고 가정합니다.

`"100-200*300-500+20"`

일반적으로 수학 및 전산학에서 약속된 연산자 우선순위에 따르면 더하기와 빼기는 서로 동등하며 곱하기는 더하기, 빼기에 비해 우선순위가 높아 `*` > `+,-` 로 우선순위가 정의되어 있습니다.  
대회 규칙에 따라 `+` > `-` > `*` 또는 `-` > `*` > `+` 등과 같이 연산자 우선순위를 정의할 수 있으나 `+,*` > `-` 또는 `*` > `+,-` 처럼 2개 이상의 연산자가 동일한 순위를 가지도록 연산자 우선순위를 정의할 수는 없습니다.  
수식에 연산자가 3개 주어졌으므로 가능한 연산자 우선순위 조합은 3! = 6가지이며, 그 중 `+` > `-` > `*` 로 연산자 우선순위를 정한다면 결괏값은 22,000원이 됩니다.  
반면에 `*` > `+` > `-` 로 연산자 우선순위를 정한다면 수식의 결괏값은 -60,420 이지만, 규칙에 따라 우승 시 상금은 절댓값인 60,420원이 됩니다.  

참가자에게 주어진 연산 수식이 담긴 문자열 expression이 매개변수로 주어질 때, 우승 시 받을 수 있는 가장 큰 상금 금액을 return 하도록 solution 함수를 완성해주세요.

---

## 제한사항  
- expression은 길이가 3 이상 100 이하인 문자열입니다.  
- expression은 공백문자, 괄호문자 없이 오로지 숫자와 3가지의 연산자(`+, -, *`) 만으로 이루어진 올바른 중위표기법(연산의 두 대상 사이에 연산기호를 사용하는 방식)으로 표현된 연산식입니다. 잘못된 연산식은 입력으로 주어지지 않습니다.  
    - 즉, `"402+-561*"`처럼 잘못된 수식은 올바른 중위표기법이 아니므로 주어지지 않습니다.
- expression의 피연산자(operand)는 0 이상 999 이하의 숫자입니다.  
    - 즉, `"100-2145*458+12"`처럼 999를 초과하는 피연산자가 포함된 수식은 입력으로 주어지지 않습니다.  
    - `"-56+100"`처럼 피연산자가 음수인 수식도 입력으로 주어지지 않습니다.  
- expression은 적어도 1개 이상의 연산자를 포함하고 있습니다.  
- 연산자 우선순위를 어떻게 적용하더라도, expression의 중간 계산값과 최종 결괏값은 절댓값이 263 - 1 이하가 되도록 입력이 주어집니다.  
- 같은 연산자끼리는 앞에 있는 것의 우선순위가 더 높습니다.  

---

## 입출력 예  
|expression|result|
|---|---|
|"100-200*300-500+20"|60420|
|"50*6-3*2"|300|


---

## 🔍 Algorithm
**Permutation, Stack**

## 💻 Logic

```Python
# 숫자, 연산자 분리
for e in expression:
    if e == '*' or e == '+' or e == '-':
        op.append(e)
        num.append(temp)
        temp = 0
    else:
        temp = 10 * temp
        temp += int(e)
num.append(temp)
```
- **숫자, 연산자 분리**  
  연산자를 만나기 전까지의 값들은 숫자 형태로 `temp`에 계산해서 저장해두고  
  연산자를 만나면 연산자를 `op`에 저장된 숫자 `temp`를 `num`에 **append**  

```Python
# 순열 생성
order_list = permutations(set(op))  # op 중복 제거하고 순열 생성
for order in order_list:
    result = abs(calculate(op, num, order)) # 계산 결과 절댓값으로 저장
    answer = max(answer, result)    # 순열 반복하면서 최댓값 저장
```
- **순열 생성**  
  연산자 우선순위를 정하기 위해 **permutations**를 이용해서 순열 생성  
  이 때, `op`에 중복을 제거하기 위해 **set** 사용  
  순열을 반복문 돌면서 우선순위에 맞게 `calculate` 함수 호출해서 계산하고 결과값을 절댓값으로 `result`에 저장  
  각 우선순위마다 나오는 결과값들 중 최댓값을 `answer`에 저장  

```Python
def calculate(op, num, order):
    for o in order:
        temp_num = [num[0]]
        temp_op = []
        for i, v in enumerate(op):
            # 연산자가 우선순위 아닌 경우
            if v != o: 
                temp_num.append(num[i+1])
                temp_op.append(v)
                continue
            # 연산자가 우선순위인 경우, 연산자에 따라 계산
            if v == '+': temp_num.append(temp_num.pop() + num[i+1])
            elif v == '-': temp_num.append(temp_num.pop() - num[i+1])
            else: temp_num.append(temp_num.pop() * num[i+1])
        num = temp_num
        op = temp_op
    return num[0]
```
- **정해진 우선순위 `order`에 맞게 계산하는 함수**  
  정해진 우선순위를 반복문 돌면서 `op` 리스트에서 해당 연산자가 우선순위인지 아닌지에 나눠서 처리  
  **해당 연산자가 우선순위가 아닌 경우** -> 그 연산자 뒤에 오는 숫자를 `temp_num`에, 해당 연산자를 `temp_op`에 **append**  
  **해당 연산자가 우선순위인 경우** -> `temp_num` 스택에서 **pop**한 값과 연산자 뒤에 오는 숫자를 연산자에 맞게 계산하고 `temp_num`에 다시 **append**  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import copy
from itertools import permutations

def calculate(op, num, order):
    for o in order:
        temp_num = [num[0]]
        temp_op = []
        for i, v in enumerate(op):
            # 연산자가 우선순위 아닌 경우
            if v != o: 
                temp_num.append(num[i+1])
                temp_op.append(v)
                continue
            # 연산자가 우선순위인 경우, 연산자에 따라 계산
            if v == '+': temp_num.append(temp_num.pop() + num[i+1])
            elif v == '-': temp_num.append(temp_num.pop() - num[i+1])
            else: temp_num.append(temp_num.pop() * num[i+1])
        num = temp_num
        op = temp_op
    return num[0]

def solution(expression):
    answer, temp, last = 0, 0, 0
    op, num = [], []
    # 숫자, 연산자 분리
    for e in expression:
        if e == '*' or e == '+' or e == '-':
            op.append(e)
            num.append(temp)
            temp = 0
        else:
            temp = 10 * temp
            temp += int(e)
    num.append(temp)
    # 순열 생성
    order_list = permutations(set(op))  # op 중복 제거하고 순열 생성
    for order in order_list:
        result = abs(calculate(op, num, order)) # 계산 결과 절댓값으로 저장
        answer = max(answer, result)    # 순열 반복하면서 최댓값 저장
    return answer
```
</details>

---

## 📝 Review

연산자 우선순위를 정해야 한다고 해서 `permutations`를 이용해서 순열로 만들어야겠다고 생각하고 구현했다.  
처음에는 반복문을 돌면서 인덱스를 이용해 리스트에서 값을 삭제하고 계산한 값을 넣는 방식으로 계산하는 부분을 구현하려고 했는데,  
인덱스 에러가 나서 스택을 이용해 계산하는 방식으로 바꿨다.  


```toc
```