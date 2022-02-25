---
emoji: 💻
title: "[BOJ] 17406번: 배열 돌리기 4 (Python)"
date: '2022-02-25 17:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/2252

크기가 N×M 크기인 배열 A가 있을때, 배열 A의 값은 각 행에 있는 모든 수의 합 중 최솟값을 의미한다. 배열 A가 아래와 같은 경우 1행의 합은 6, 2행의 합은 4, 3행의 합은 15이다. 따라서, 배열 A의 값은 4이다.

```python
1 2 3
2 1 1
4 5 6
```

배열은 회전 연산을 수행할 수 있다. 회전 연산은 세 정수 (r, c, s)로 이루어져 있고, 가장 왼쪽 윗 칸이 (r-s, c-s), 가장 오른쪽 아랫 칸이 (r+s, c+s)인 정사각형을 시계 방향으로 한 칸씩 돌린다는 의미이다. 배열의 칸 (r, c)는 r행 c열을 의미한다.

예를 들어, 배열 A의 크기가 6×6이고, 회전 연산이 (3, 4, 2)인 경우에는 아래 그림과 같이 회전하게 된다.

![17406-ex1.png](17406-ex1.png)  

회전 연산이 두 개 이상이면, 연산을 수행한 순서에 따라 최종 배열이 다르다.

다음은 배열 A의 크기가 5×6이고, 회전 연산이 (3, 4, 2), (4, 2, 1)인 경우의 예시이다.

![17406-ex2.png](17406-ex2.png)  

배열 A에 (3, 4, 2), (4, 2, 1) 순서로 연산을 수행하면 배열 A의 값은 12, (4, 2, 1), (3, 4, 2) 순서로 연산을 수행하면 15 이다.

배열 A와 사용 가능한 회전 연산이 주어졌을 때, 배열 A의 값의 최솟값을 구해보자. 회전 연산은 모두 한 번씩 사용해야 하며, 순서는 임의로 정해도 된다.

---

## 입력  
첫째 줄에 배열 A의 크기 N, M, 회전 연산의 개수 K가 주어진다.

둘째 줄부터 N개의 줄에 배열 A에 들어있는 수 A[i][j]가 주어지고, 다음 K개의 줄에 회전 연산의 정보 r, c, s가 주어진다.

---

## 출력  
배열 A의 값의 최솟값을 출력한다.

---

## 🔍 Algorithm
**Brute Force**

## 💻 Logic

```Python
def rotate(r,c,s):
    start_y, start_x, last_y, last_x = r-s-1, c-s-1, r+s-1, c+s-1
    count = (last_x - start_x) // 2
    for i in range(count):
        rightup, rightdown, leftdown = copy_arr[start_y][last_x], copy_arr[last_y][last_x], copy_arr[last_y][start_x]
        # 윗줄 가로
        for j in reversed(range(start_x, last_x)):
            copy_arr[start_y][j+1] = copy_arr[start_y][j]
        # 오른쪽 세로
        for j in reversed(range(start_y, last_y)):
            copy_arr[j+1][last_x] = copy_arr[j][last_x]
        copy_arr[start_y+1][last_x] = rightup
        # 아랫줄 가로
        for j in range(start_x, last_x-1):
            copy_arr[last_y][j] = copy_arr[last_y][j+1]
        copy_arr[last_y][last_x-1] = rightdown
        # 왼쪽 세로
        for j in range(start_y, last_y-1):
            copy_arr[j][start_x] = copy_arr[j+1][start_x]
        copy_arr[last_y-1][start_x] = leftdown
        start_y, start_x, last_y, last_x = start_y+1, start_x+1, last_y-1, last_x-1
```

- 회전 연산 함수  
  - **윗줄 가로, 오른쪽 세로, 아랫줄 가로, 왼쪽 세로 4가지로 나눠서 계산**  
    꼭짓점 정보를 미리 저장해두고, 각 라인에 맞게 한칸씩 이동

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

- 순열을 이용해 가능한 순서 경우의 수를 다 만들고,  
- 가능한 경우의 수마다 회전 연산을 하고 최솟값을 구한 뒤 최솟값 출력  
- 각 경우의 수마다 원본 리스트를 보존하기 위해 **deepcopy** 후 회전 연산 수행  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys, copy
from itertools import permutations

def rotate(r,c,s):
    start_y, start_x, last_y, last_x = r-s-1, c-s-1, r+s-1, c+s-1
    count = (last_x - start_x) // 2
    for i in range(count):
        rightup, rightdown, leftdown = copy_arr[start_y][last_x], copy_arr[last_y][last_x], copy_arr[last_y][start_x]
        # 윗줄 가로
        for j in reversed(range(start_x, last_x)):
            copy_arr[start_y][j+1] = copy_arr[start_y][j]
        # 오른쪽 세로
        for j in reversed(range(start_y, last_y)):
            copy_arr[j+1][last_x] = copy_arr[j][last_x]
        copy_arr[start_y+1][last_x] = rightup
        # 아랫줄 가로
        for j in range(start_x, last_x-1):
            copy_arr[last_y][j] = copy_arr[last_y][j+1]
        copy_arr[last_y][last_x-1] = rightdown
        # 왼쪽 세로
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

## 📝 Review

이전 문제와 비슷하게 순열을 이용해서 해결하는 문제여서 구현에는 크게 문제가 없었다.  
각 회전 연산마다 최솟값을 구해야하는줄 잘못 알았던 것만 빼면,,



```toc
```