---
emoji: 💻
title: "[BOJ] 1083번: 소트 (Python)"
date: '2022-05-16 02:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/1083

크기가 N인 배열 A가 있다. 배열에 있는 모든 수는 서로 다르다. 이 배열을 소트할 때, 연속된 두 개의 원소만 교환할 수 있다. 그리고, 교환은 많아봐야 S번 할 수 있다. 이때, 소트한 결과가 사전순으로 가장 뒷서는 것을 출력한다.

---

## 입력  
첫째 줄에 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄에는 각 원소가 차례대로 주어진다. 이 값은 1000000보다 작거나 같은 자연수이다. 마지막 줄에는 S가 주어진다. S는 1000000보다 작거나 같은 음이 아닌 정수이다.

---

## 출력  
첫째 줄에 문제의 정답을 출력한다.

---

## 🔍 Algorithm
**Bubble Sort**

## 💻 Logic

```Python
# S번 교환하면서 가장 내림차순이 되게 만들기
for i in range(N):
    max_idx, max_v = i, A[i]
    # 현재 위치에서 최대로 교환 가능한 위치까지 최댓값 구하기
    for j in range(i, i+S+1):
        if j == N: break
        # 최댓값, 최댓값 인덱스 저장
        if max_v < A[j]:
            max_v = A[j]
            max_idx = j
    # 최댓값 위치까지 교환
    for j in range(max_idx, i, -1):
        A[j], A[j-1] = A[j-1], A[j]
        S -= 1
    if S == 0: break    # 더 이상 교환 못하면 break
```
- **S번 교환하면서 가장 내림차순이 되도록 만들기**  
    현재 위치(`i`)에서 최대로 교환 가능한 위치(`i+S`)까지 **최댓값** 구하고, 최댓값과 최댓값의 인덱스를 저장해둔다.  
    구한 **최댓값**이 현재 위치로 오도록 **Bubble Sort** 진행하고, `S` 값은 그만큼 줄여준다.  
    `S`가 **0**이 돼서 더 이상 교환 못하면 **break**  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
N = int(sys.stdin.readline())
A = [int(x) for x in sys.stdin.readline().split()]
S = int(sys.stdin.readline())
# S번 교환하면서 가장 내림차순이 되게 만들기
for i in range(N):
    max_idx, max_v = i, A[i]
    # 현재 위치에서 최대로 교환 가능한 위치까지 최댓값 구하기
    for j in range(i, i+S+1):
        if j == N: break
        # 최댓값, 최댓값 인덱스 저장
        if max_v < A[j]:
            max_v = A[j]
            max_idx = j
    # 최댓값 위치까지 교환
    for j in range(max_idx, i, -1):
        A[j], A[j-1] = A[j-1], A[j]
        S -= 1
    if S == 0: break    # 더 이상 교환 못하면 break
for i in A: print(i, end=' ')
```
</details>

---

## 📝 Review

일반적인 Bubble Sort와 비슷하지만 최대로 교환 가능한 횟수가 정해져 있는 문제. 이 부분만 추가로 처리해주면 된다.  
문제 자체는 어렵지 않은데 문제 설명이 너무 불친절하다,,,  


```toc
```