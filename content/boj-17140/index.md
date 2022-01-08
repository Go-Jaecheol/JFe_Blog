---
emoji: 💻
title: "[BOJ] 17140번: 이차원 배열과 연산 (Python)"
date: '2022-01-08 21:16:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/17140

크기가 3×3인 배열 A가 있다. 배열의 인덱스는 1부터 시작한다. 1초가 지날때마다 배열에 연산이 적용된다.  

- R 연산: 배열 A의 모든 행에 대해서 정렬을 수행한다. 행의 개수 ≥ 열의 개수인 경우에 적용된다.  
- C 연산: 배열 A의 모든 열에 대해서 정렬을 수행한다. 행의 개수 < 열의 개수인 경우에 적용된다.  
한 행 또는 열에 있는 수를 정렬하려면, 각각의 수가 몇 번 나왔는지 알아야 한다. 그 다음, 수의 등장 횟수가 커지는 순으로, 그러한 것이 여러가지면 수가 커지는 순으로 정렬한다. 그 다음에는 배열 A에 정렬된 결과를 다시 넣어야 한다. 정렬된 결과를 배열에 넣을 때는, 수와 등장 횟수를 모두 넣으며, 순서는 수가 먼저이다.  

예를 들어, [3, 1, 1]에는 3이 1번, 1가 2번 등장한다. 따라서, 정렬된 결과는 [3, 1, 1, 2]가 된다. 다시 이 배열에는 3이 1번, 1이 2번, 2가 1번 등장한다. 다시 정렬하면 [2, 1, 3, 1, 1, 2]가 된다.  

정렬된 결과를 배열에 다시 넣으면 행 또는 열의 크기가 달라질 수 있다. R 연산이 적용된 경우에는 가장 큰 행을 기준으로 모든 행의 크기가 변하고, C 연산이 적용된 경우에는 가장 큰 열을 기준으로 모든 열의 크기가 변한다. 행 또는 열의 크기가 커진 곳에는 0이 채워진다. 수를 정렬할 때 0은 무시해야 한다. 예를 들어, [3, 2, 0, 0]을 정렬한 결과는 [3, 2]를 정렬한 결과와 같다.  

행 또는 열의 크기가 100을 넘어가는 경우에는 처음 100개를 제외한 나머지는 버린다.  

배열 A에 들어있는 수와 r, c, k가 주어졌을 때, A[r][c]에 들어있는 값이 k가 되기 위한 최소 시간을 구해보자.  

---

## 입력  
첫째 줄에 r, c, k가 주어진다. (1 ≤ r, c, k ≤ 100)  

둘째 줄부터 3개의 줄에 배열 A에 들어있는 수가 주어진다. 배열 A에 들어있는 수는 100보다 작거나 같은 자연수이다.  

---

## 출력  
A[r][c]에 들어있는 값이 k가 되기 위한 연산의 최소 시간을 출력한다. 100초가 지나도 A[r][c] = k가 되지 않으면 -1을 출력한다.  

---

## 🔍 Algorithm
**시뮬레이션, 정렬**

## 💻 Logic

```Python
def sort(arr):
    d = {}
    rt = []
    for i in arr:
        # 0은 무시
        if i == 0: continue
        # 값이 key에 있으면 ++
        if i in d.keys(): d[i] += 1
        # 없으면 key-value 추가
        else: d[i] = 1
    # key 기준 sort
    d = dict(sorted(d.items()))
    # value 기준 sort
    temp = sorted(d.items(), key=lambda x:x[1])
    for i in range(len(temp)):
        # 100개 지나면 버림
        if i >= 100: break
        # key, value 순으로 append
        rt.append(temp[i][0])
        rt.append(temp[i][1])
    return rt
```

- 주어진 조건에 맞게 한 배열을 정렬하는 함수  
  - **수와 그 수의 등장 횟수를 key-value 형태로 dictionary에 저장**  
    값이 **key에 있으면** 해당 key의 **value**를 **+1**  
    **key에 없는 값이면** 해당 key를 **value** **1**로 매칭해서 저장  
  - **Sort 과정**  
    등장 횟수가 같으면 수가 커지는 순으로 정렬해야 하기 때문에 먼저, **key 기준으로 sort**  
    등장 횟수가 커지는 순으로 정렬해야 하기 때문에 **value 기준으로 sort**  
  - **리스트에 저장 후 return**  
    결과가 튜플 형태로 리스트에 저장되어 있기 때문에 `rt` 리스트에 key, value 순으로 **append**  
    크기가 **100**을 넘어가면 처음 100개를 제외하고 버려야해서 **break**  

---

```Python
def cal_R():
    global row_size
    # 행마다 정렬하고 최대 길이 계산
    for i in range(len(A)):
        A[i] = sort(A[i])
        row_size = max(len(A[i]), row_size)
    # 최대 길이보다 작으면 그만큼 0 추가
    for i in range(len(A)):
        if len(A[i]) < row_size:
            for _ in range(row_size-len(A[i])):
                A[i].append(0)
```

- R 연산 함수  
  - **행마다 정렬하고 최대 길이 계산**  
    반복문 돌면서 각 행마다 `sort` 함수 실행하고, `row_size` **최대 길이** 저장  
  - **최대 길이보다 작으면 그만큼 0 추가**  

---

```Python
def cal_C():
    global row_size, col_size
    # 열마다 정렬하고 최대 길이 계산
    for i in range(row_size):
        temp = []
        for j in range(col_size):
            temp.append(A[j][i])
            A[j][i] = 0
        temp = sort(temp)
        # 최대 길이보다 작으면 그만큼 0 추가
        for j in range(len(temp)):
            if j >= col_size:
                A.append([0 for _ in range(row_size)])
            A[j][i] = temp[j]
        col_size = max(len(temp), col_size)
```

- C 연산 함수  
  - **열마다 정렬하고 최대 길이 계산**  
    반복문 돌면서 각 열마다 값들을 새로운 `temp` 리스트에 저장한 후,  
    그 `temp` 리스트로 `sort` 함수 실행하고, `col_size` **최대 길이** 저장  
  - **최대 길이보다 작으면 그만큼 0 추가**  

---

```Python
count = 0
while True:
    # boundary 안에서 종료조건 확인
    if 0 < r <= col_size and 0 < c <= row_size:
        if A[r-1][c-1] == k: 
            break
    # 100초 지나면 종료하고 -1 출력
    if count >= 100:
        count = -1
        break
    # 행의 개수 >= 열의 개수면 R 연산
    if row_size <= col_size: cal_R()
    # 행의 개수 < 열의 개수면 C 연산
    else: cal_C()
    count += 1
print(count)
```

- 조건에 맞게 함수 실행하고, 종료 조건이 맞으면 걸린 시간 `count` 출력  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
r, c, k = map(int, sys.stdin.readline().split())
A = [[int(x) for x in sys.stdin.readline().split()] for _ in range(3)]
row_size, col_size = 3, 3

def sort(arr):
    d = {}
    rt = []
    for i in arr:
        # 0은 무시
        if i == 0: continue
        # 값이 key에 있으면 ++
        if i in d.keys(): d[i] += 1
        # 없으면 key-value 추가
        else: d[i] = 1
    # key 기준 sort
    d = dict(sorted(d.items()))
    # value 기준 sort
    temp = sorted(d.items(), key=lambda x:x[1])
    for i in range(len(temp)):
        # 100개 지나면 버림
        if i >= 100: break
        # key, value 순으로 append
        rt.append(temp[i][0])
        rt.append(temp[i][1])
    return rt

def cal_R():
    global row_size
    # 행마다 정렬하고 최대 길이 계산
    for i in range(len(A)):
        A[i] = sort(A[i])
        row_size = max(len(A[i]), row_size)
    # 최대 길이보다 작으면 그만큼 0 추가
    for i in range(len(A)):
        if len(A[i]) < row_size:
            for _ in range(row_size-len(A[i])):
                A[i].append(0)

def cal_C():
    global row_size, col_size
    # 열마다 정렬하고 최대 길이 계산
    for i in range(row_size):
        temp = []
        for j in range(col_size):
            temp.append(A[j][i])
            A[j][i] = 0
        temp = sort(temp)
        # 최대 길이보다 작으면 그만큼 0 추가
        for j in range(len(temp)):
            if j >= col_size:
                A.append([0 for _ in range(row_size)])
            A[j][i] = temp[j]
        col_size = max(len(temp), col_size)

count = 0
while True:
    # boundary 안에서 종료조건 확인
    if 0 < r <= col_size and 0 < c <= row_size:
        if A[r-1][c-1] == k: 
            break
    # 100초 지나면 종료하고 -1 출력
    if count >= 100:
        count = -1
        break
    # 행의 개수 >= 열의 개수면 R 연산
    if row_size <= col_size: cal_R()
    # 행의 개수 < 열의 개수면 C 연산
    else: cal_C()
    count += 1
print(count)
```
</details>

## 📝 Review

정렬하는 방법은 바로 딕셔너리가 생각나서 딕셔너리를 사용해서 빠르게 해결했다.  
행 기준으로 정렬하는 것까지는 빠르게 할 수 있었는데 열 기준으로 정렬하는 과정에서 어떻게 효율적으로 할지 고민을 조오금 했다.  
전치행렬로 바꿔서 하면 되겠다고 생각했는데 numpy는 사용 못한다고 해서 그냥 반복문으로 품,,  

r, c, k 입력에서 r, c 값이 3보다 큰 값이 들어올 수도 있다는 것을 생각 못해서 런타임에러 났었음,,  


```toc
```