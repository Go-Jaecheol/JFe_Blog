---
emoji: 💻
title: "[Programmers] 67256번: 키패드 누르기 (Python)"
date: '2022-04-28 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2020 카카오 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/67256

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

![kakao_phone1.png](kakao_phone1.png)

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.  
맨 처음 왼손 엄지손가락은 `*` 키패드에 오른손 엄지손가락은 `#` 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.  
2. 왼쪽 열의 3개의 숫자 `1`, `4`, `7`을 입력할 때는 왼손 엄지손가락을 사용합니다.  
3. 오른쪽 열의 3개의 숫자 `3`, `6`, `9`를 입력할 때는 오른손 엄지손가락을 사용합니다.  
4. 가운데 열의 4개의 숫자 `2`, `5`, `8`, `0`을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.  
    4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.  

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

---

## 제한사항  
- numbers 배열의 크기는 1 이상 1,000 이하입니다.
- numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
- hand는 `"left"` 또는 `"right"` 입니다.
    - `"left"`는 왼손잡이, `"right"`는 오른손잡이를 의미합니다.
- 왼손 엄지손가락을 사용한 경우는 `L`, 오른손 엄지손가락을 사용한 경우는 `R`을 순서대로 이어붙여 문자열 형태로 return 해주세요.

---

## 입출력 예  
|numbers|hand|return|
|---|---|---|
|[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]|"right"|"LRLLLRLLRRL"|
|[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]|"left"|"LRLLRRLLLRR"|
|[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]|"right"|"LLRLLRLLRL"|


---

## 🔍 Algorithm
**구현**

## 💻 Logic

```Python
left, right = [0, 3], [2, 3]    # '*', '#' 좌표[x, y] 저장
for n in numbers:
    if n == 0: n = 11   # 0은 계산 편하게 11로 저장
    x, y = (n-1)%3, (n-1)//3    # 해당 숫자의 키패드 상 좌표 계산
```
- **왼손, 오른손 위치 저장**  
    `left`, `right`에 현재 왼손, 오른손 위치 저장  
    시작 위치는 `*`, `#` 좌표[x, y] 저장  
- **numbers에 있는 숫자만큼 반복문 진행**  
    키패드 상에 있는 위치에 맞게 `x = (n-1) % 3`, `y = (n-1) // 3` 계산  
    `n`이 **0**인 경우에는 계산하기 쉽게 키패드 위치처럼 **11**로 저장하고 계산  

```Python
# 키패드 위치에 따라 나눠서 처리
        if n == 1 or n == 4 or n == 7:
            answer += 'L'
            left = [x, y]
        elif n == 3 or n == 6 or n == 9:
            answer += 'R'
            right = [x, y]
        else:
            # 왼손, 오른손 거리 계산
            left_dir = abs(left[0]-x) + abs(left[1]-y)
            right_dir = abs(right[0]-x) + abs(right[1]-y)
            if left_dir < right_dir:
                answer += 'L'
                left = [x,y]
            elif left_dir > right_dir:
                answer += 'R'
                right = [x, y]
            # 거리가 같으면 hand 값에 따라서 처리
            else:
                if hand == "left": 
                    answer += 'L'
                    left = [x, y]
                else: 
                    answer += 'R'
                    right = [x, y]
```
- **키패드 위치에 따라 나눠서 처리**  
    `n`이 **2, 5, 8, 0**인 경우에는 `left`, `right` 값과의 거리를 계산해서  
    왼손이 가까우면 왼손으로, 오른손이 가까우면 오른손으로 처리  
    거리가 같으면 `hand` 값에 따라 나눠서 처리  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(numbers, hand):
    answer = ''
    left, right = [0, 3], [2, 3]    # '*', '#' 좌표[x, y] 저장
    for n in numbers:
        if n == 0: n = 11   # 0은 계산 편하게 11로 저장
        x, y = (n-1)%3, (n-1)//3    # 해당 숫자의 키패드 상 좌표 계산
        # 키패드 위치에 따라 나눠서 처리
        if n == 1 or n == 4 or n == 7:
            answer += 'L'
            left = [x, y]
        elif n == 3 or n == 6 or n == 9:
            answer += 'R'
            right = [x, y]
        else:
            # 왼손, 오른손 거리 계산
            left_dir = abs(left[0]-x) + abs(left[1]-y)
            right_dir = abs(right[0]-x) + abs(right[1]-y)
            if left_dir < right_dir:
                answer += 'L'
                left = [x,y]
            elif left_dir > right_dir:
                answer += 'R'
                right = [x, y]
            # 거리가 같으면 hand 값에 따라서 처리
            else:
                if hand == "left": 
                    answer += 'L'
                    left = [x, y]
                else: 
                    answer += 'R'
                    right = [x, y]
    return answer
```
</details>

---

## 📝 Review

좌표를 통해 거리를 계산하는 것이 편하겠다고 생각해서 왼손과 오른손의 현재 위치를 좌표로 저장하고, 번호를 키패드 위치에 맞게 좌표로 계산해서 저장하는 방식으로 구현했다.  
간단하게 구현하면 되는 문제였는데 조건문이 많아져서 코드는 안이쁜 것 같음,,


```toc
```