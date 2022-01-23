---
emoji: 💻
title: "[BOJ] 20057번: 마법사 상어와 토네이도 (Python)"
date: '2022-01-23 19:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/20057

마법사 상어가 토네이도를 배웠고, 오늘은 토네이도를 크기가 N×N인 격자로 나누어진 모래밭에서 연습하려고 한다. 위치 (r, c)는 격자의 r행 c열을 의미하고, A[r][c]는 (r, c)에 있는 모래의 양을 의미한다.  

토네이도를 시전하면 격자의 가운데 칸부터 토네이도의 이동이 시작된다. 토네이도는 한 번에 한 칸 이동한다. 다음은 N = 7인 경우 토네이도의 이동이다.  
![20057-tornado.png](20057-tornado.png)  
토네이도가 한 칸 이동할 때마다 모래는 다음과 같이 일정한 비율로 흩날리게 된다.  
![20057-sand.png](20057-sand.png)  
토네이도가 x에서 y로 이동하면, y의 모든 모래가 비율과 α가 적혀있는 칸으로 이동한다. 비율이 적혀있는 칸으로 이동하는 모래의 양은 y에 있는 모래의 해당 비율만큼이고, 계산에서 소수점 아래는 버린다. α로 이동하는 모래의 양은 비율이 적혀있는 칸으로 이동하지 않은 남은 모래의 양과 같다. 모래가 이미 있는 칸으로 모래가 이동하면, 모래의 양은 더해진다. 위의 그림은 토네이도가 왼쪽으로 이동할 때이고, 다른 방향으로 이동하는 경우는 위의 그림을 해당 방향으로 회전하면 된다.  

토네이도는 (1, 1)까지 이동한 뒤 소멸한다. 모래가 격자의 밖으로 이동할 수도 있다. 토네이도가 소멸되었을 때, 격자의 밖으로 나간 모래의 양을 구해보자.  

---

## 입력  
첫째 줄에 격자의 크기 N이 주어진다. 둘째 줄부터 N개의 줄에는 격자의 각 칸에 있는 모래가 주어진다. r번째 줄에서 c번째 주어지는 정수는 A[r][c] 이다.  

---

## 출력  
격자의 밖으로 나간 모래의 양을 출력한다.  

---

## 🔍 Algorithm
**시뮬레이션**

## 💻 Logic

```Python
def move_tornado():
    x, y = N//2, N//2
    count = 0
    while True:
        # 좌, 하, 우, 상 순서로 반복
        for d in range(4):
            # 좌 or 우 경우에는 count +1
            if d%2 == 0:
                count += 1
            # count 만큼 해당 방향으로 이동 반복
            for _ in range(count):
                x, y = x+dx[d], y+dy[d]
                move_sand(x, y, d)
                # 0, 0 에서 멈춤
                if x == 0 and y == 0: return
```

- 토네이도 이동 함수  
  - **좌, 하, 우, 상 순서로 반복**  
    1, 1, 2, 2, 3, 3, ... 규칙으로 이동하는 칸 수가 좌 or 우에서 늘어나기 때문에  
    **좌 or 우** 경우에는 `count` **+1**  
  - **count 만큼 해당 방향으로 이동 반복**  
    다음 위치 계산해서 `move_sand` 함수 실행하고  
    **0, 0** 위치인 경우에는 **return**  

---

```Python
def move_sand(x, y, d):
    global result
    sand = A[y][x]
    # 주어진 규칙대로 모래 흩날림
    A[y][x] -= cal_moved_sand(x+dx[d]*2, y+dy[d]*2, 0.05, sand)
    A[y][x] -= cal_moved_sand(x+dx[d]+dx[(d+3)%4], y+dy[d]+dy[(d+3)%4], 0.1, sand)
    A[y][x] -= cal_moved_sand(x+dx[d]+dx[(d+1)%4], y+dy[d]+dy[(d+1)%4], 0.1, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+3)%4]*2, y+dy[(d+3)%4]*2, 0.02, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+3)%4], y+dy[(d+3)%4], 0.07, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+1)%4], y+dy[(d+1)%4], 0.07, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+1)%4]*2, y+dy[(d+1)%4]*2, 0.02, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+2)%4]+dx[(d+3)%4], y+dy[(d+2)%4]+dy[(d+3)%4], 0.01, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+2)%4]+dx[(d+1)%4], y+dy[(d+2)%4]+dy[(d+1)%4], 0.01, sand)
    # 알파 계산
    if 0 <= x+dx[d] < N and 0 <= y+dy[d] < N:
        A[y+dy[d]][x+dx[d]] += A[y][x]
    else:
        result += A[y][x]
    A[y][x] = 0
```

- 모래 이동 함수  
  문제에 주어진 규칙대로 모래 흩날림  
  각 위치마다 `cal_moved_sand` 함수 실행

---

```Python
def cal_moved_sand(next_x, next_y, percent, sand):
    global result
    # boundary 안인지 밖인지 확인
    if 0 <= next_x < N and 0 <= next_y < N:
        A[next_y][next_x] += int(percent * sand)
    else:
        result += int(percent * sand)
    return int(percent * sand)
```

- 이동한 모래 계산 함수  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
N = int(sys.stdin.readline())
A = [[int(x) for x in sys.stdin.readline().split()]for _ in range(N)]
# 좌, 하, 우, 상
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
result = 0

def cal_moved_sand(next_x, next_y, percent, sand):
    global result
    # boundary 안인지 밖인지 확인
    if 0 <= next_x < N and 0 <= next_y < N:
        A[next_y][next_x] += int(percent * sand)
    else:
        result += int(percent * sand)
    return int(percent * sand)

def move_sand(x, y, d):
    global result
    sand = A[y][x]
    # 주어진 규칙대로 모래 흩날림
    A[y][x] -= cal_moved_sand(x+dx[d]*2, y+dy[d]*2, 0.05, sand)
    A[y][x] -= cal_moved_sand(x+dx[d]+dx[(d+3)%4], y+dy[d]+dy[(d+3)%4], 0.1, sand)
    A[y][x] -= cal_moved_sand(x+dx[d]+dx[(d+1)%4], y+dy[d]+dy[(d+1)%4], 0.1, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+3)%4]*2, y+dy[(d+3)%4]*2, 0.02, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+3)%4], y+dy[(d+3)%4], 0.07, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+1)%4], y+dy[(d+1)%4], 0.07, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+1)%4]*2, y+dy[(d+1)%4]*2, 0.02, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+2)%4]+dx[(d+3)%4], y+dy[(d+2)%4]+dy[(d+3)%4], 0.01, sand)
    A[y][x] -= cal_moved_sand(x+dx[(d+2)%4]+dx[(d+1)%4], y+dy[(d+2)%4]+dy[(d+1)%4], 0.01, sand)
    # 알파 계산
    if 0 <= x+dx[d] < N and 0 <= y+dy[d] < N:
        A[y+dy[d]][x+dx[d]] += A[y][x]
    else:
        result += A[y][x]
    A[y][x] = 0

def move_tornado():
    x, y = N//2, N//2
    count = 0
    while True:
        # 좌, 하, 우, 상 순서로 반복
        for d in range(4):
            # 좌 or 우 경우에는 count +1
            if d%2 == 0:
                count += 1
            # count 만큼 해당 방향으로 이동 반복
            for _ in range(count):
                x, y = x+dx[d], y+dy[d]
                move_sand(x, y, d)
                # 0, 0 에서 멈춤
                if x == 0 and y == 0: return

move_tornado()
print(result)
```
</details>

---

## 📝 Review

문제 보고 어렵지 않게 규칙을 찾을 수 있어서 쉽게 구현할 수 있었다.  
주어진 규칙대로 구현은 쉬웠지만 원래 이런 문제인건지 코드는 안예쁨,,  


```toc
```