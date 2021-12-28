---
emoji: 💻
title: "[BOJ] 14503번: 로봇 청소기 (Python)"
date: '2021-12-28 15:20:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/14503

로봇 청소기가 주어졌을 때, 청소하는 영역의 개수를 구하는 프로그램을 작성하시오.  

로봇 청소기가 있는 장소는 N×M 크기의 직사각형으로 나타낼 수 있으며, 1×1크기의 정사각형 칸으로 나누어져 있다. 각각의 칸은 벽 또는 빈 칸이다. 청소기는 바라보는 방향이 있으며, 이 방향은 동, 서, 남, 북중 하나이다. 지도의 각 칸은 (r, c)로 나타낼 수 있고, r은 북쪽으로부터 떨어진 칸의 개수, c는 서쪽으로 부터 떨어진 칸의 개수이다.  

로봇 청소기는 다음과 같이 작동한다.  

1. 현재 위치를 청소한다.  
2. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향부터 차례대로 인접한 칸을 탐색한다.  
    a. 왼쪽 방향에 아직 청소하지 않은 공간이 존재한다면, 그 방향으로 회전한 다음 한 칸을 전진하고 1번부터 진행한다.  
    b. 왼쪽 방향에 청소할 공간이 없다면, 그 방향으로 회전하고 2번으로 돌아간다.  
    c. 네 방향 모두 청소가 이미 되어있거나 벽인 경우에는, 바라보는 방향을 유지한 채로 한 칸 후진을 하고 2번으로 돌아간다.  
    d. 네 방향 모두 청소가 이미 되어있거나 벽이면서, 뒤쪽 방향이 벽이라 후진도 할 수 없는 경우에는 작동을 멈춘다.  
로봇 청소기는 이미 청소되어있는 칸을 또 청소하지 않으며, 벽을 통과할 수 없다.  

---

## 입력  
첫째 줄에 세로 크기 N과 가로 크기 M이 주어진다. (3 ≤ N, M ≤ 50)  

둘째 줄에 로봇 청소기가 있는 칸의 좌표 (r, c)와 바라보는 방향 d가 주어진다. d가 0인 경우에는 북쪽을, 1인 경우에는 동쪽을, 2인 경우에는 남쪽을, 3인 경우에는 서쪽을 바라보고 있는 것이다.  

셋째 줄부터 N개의 줄에 장소의 상태가 북쪽부터 남쪽 순서대로, 각 줄은 서쪽부터 동쪽 순서대로 주어진다. 빈 칸은 0, 벽은 1로 주어진다. 지도의 첫 행, 마지막 행, 첫 열, 마지막 열에 있는 모든 칸은 벽이다.  

로봇 청소기가 있는 칸의 상태는 항상 빈 칸이다.  

---

## 출력  
로봇 청소기가 청소하는 칸의 개수를 출력한다.  

---

## 예제 입력 1  
```
3 3
1 1 0
1 1 1
1 0 1
1 1 1
```

## 예제 출력 1  
```
1
```

## 예제 입력 2  
```
11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1
```

## 예제 출력 2  
```
57
```

---

## 🔍 Algorithm
**시뮬레이션**

## 💻 Logic

```Python
cur = [(c, r, d)]
while cur:
    cur_x, cur_y, d = cur.pop()
    if area[cur_y][cur_x] == 0:
        area[cur_y][cur_x] = 2
        result += 1
    for i in range(4):
        if d == 0: d = 3
        else: d -= 1
        next_x = cur_x + dx[d]
        next_y = cur_y + dy[d]
        if area[next_y][next_x] <= 0:
            cur.append((next_x, next_y, d))
            break
    if i == 3 and not cur:
        next_x = cur_x + -dx[d]
        next_y = cur_y + -dy[d]
        if area[next_y][next_x] == 1:
            break
        else:
            cur.append((next_x, next_y, d))
print(result)
```

- 문제에서 제시한 작동 방법에 맞춰 위치 이동  
  - **현재 위치 청소**  
    현재 위치가 청소되지 않았으면 `area[cur_y][cur_x] == 0`,  
    해당 `area` 값을 **2**로 변경하고, `result` 값 **1** 증가  
  - **현재 방향 기준으로 왼쪽 방향부터 탐색**  
    현재 방향 `d`를 기준으로 왼쪽부터 돌아가며 4번 for문,  
    이 과정에서 청소하지 않은 곳이 있으면 그 곳으로 이동하기 위해 `cur.append((next_x, next_y, d))` 하고, **break**
  - **뒤로 후진하는 경우**  
    for문을 4번 다 돌았지만 `cur`에 **append** 된 값이 없으면, 뒤로 후진하고 **append**  
    > 이 때, 후진한 위치의 `area` 값이 **1**이면 **break**하고 결과 출력  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
N, M = map(int, sys.stdin.readline().split())
r, c, d = map(int, sys.stdin.readline().split())
area = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
dx = [0, 1, 0, -1]
dy = [-1, 0, 1, 0]
result = 0

cur = [(c, r, d)]
while cur:
    cur_x, cur_y, d = cur.pop()
    if area[cur_y][cur_x] == 0:
        area[cur_y][cur_x] = 2
        result += 1
    for i in range(4):
        if d == 0: d = 3
        else: d -= 1
        next_x = cur_x + dx[d]
        next_y = cur_y + dy[d]
        if area[next_y][next_x] <= 0:
            cur.append((next_x, next_y, d))
            break
    if i == 3 and not cur:
        next_x = cur_x + -dx[d]
        next_y = cur_y + -dy[d]
        if area[next_y][next_x] == 1:
            break
        else:
            cur.append((next_x, next_y, d))
print(result)
```
</details>

## 📝 Review
처음에는 재귀함수가 먼저 생각나서 재귀함수로 구현을 하려고 했는데 그 과정에서 코드가 너무 길어지고, 제대로 결과가 바로 안나와서 미련없이 바로 원래 익숙한 for문 형태로 바꿔서 풀었다.

좌표 값을 이상하게 생각해서 쓸데없는 시간을 보내긴 했지만, 그렇게 오래 걸리지는 않은 듯  


```toc
```