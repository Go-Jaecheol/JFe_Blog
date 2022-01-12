---
emoji: 💻
title: "[BOJ] 19236번: 청소년 상어 (Python)"
date: '2022-01-12 18:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/19236

아기 상어가 성장해 청소년 상어가 되었다.  

4×4크기의 공간이 있고, 크기가 1×1인 정사각형 칸으로 나누어져 있다. 공간의 각 칸은 (x, y)와 같이 표현하며, x는 행의 번호, y는 열의 번호이다. 한 칸에는 물고기가 한 마리 존재한다. 각 물고기는 번호와 방향을 가지고 있다. 번호는 1보다 크거나 같고, 16보다 작거나 같은 자연수이며, 두 물고기가 같은 번호를 갖는 경우는 없다. 방향은 8가지 방향(상하좌우, 대각선) 중 하나이다.  

오늘은 청소년 상어가 이 공간에 들어가 물고기를 먹으려고 한다. 청소년 상어는 (0, 0)에 있는 물고기를 먹고, (0, 0)에 들어가게 된다. 상어의 방향은 (0, 0)에 있던 물고기의 방향과 같다. 이후 물고기가 이동한다.  

물고기는 번호가 작은 물고기부터 순서대로 이동한다. 물고기는 한 칸을 이동할 수 있고, 이동할 수 있는 칸은 빈 칸과 다른 물고기가 있는 칸, 이동할 수 없는 칸은 상어가 있거나, 공간의 경계를 넘는 칸이다. 각 물고기는 방향이 이동할 수 있는 칸을 향할 때까지 방향을 45도 반시계 회전시킨다. 만약, 이동할 수 있는 칸이 없으면 이동을 하지 않는다. 그 외의 경우에는 그 칸으로 이동을 한다. 물고기가 다른 물고기가 있는 칸으로 이동할 때는 서로의 위치를 바꾸는 방식으로 이동한다.  

물고기의 이동이 모두 끝나면 상어가 이동한다. 상어는 방향에 있는 칸으로 이동할 수 있는데, 한 번에 여러 개의 칸을 이동할 수 있다. 상어가 물고기가 있는 칸으로 이동했다면, 그 칸에 있는 물고기를 먹고, 그 물고기의 방향을 가지게 된다. 이동하는 중에 지나가는 칸에 있는 물고기는 먹지 않는다. 물고기가 없는 칸으로는 이동할 수 없다. 상어가 이동할 수 있는 칸이 없으면 공간에서 벗어나 집으로 간다. 상어가 이동한 후에는 다시 물고기가 이동하며, 이후 이 과정이 계속해서 반복된다.  

상어가 먹을 수 있는 물고기 번호의 합의 최댓값을 구해보자.  

> 문제 자세한 정보는 [청소년 상어](https://www.acmicpc.net/problem/19236)   

---

## 입력  
첫째 줄부터 4개의 줄에 각 칸의 들어있는 물고기의 정보가 1번 행부터 순서대로 주어진다. 물고기의 정보는 두 정수 ai, bi로 이루어져 있고, ai는 물고기의 번호, bi는 방향을 의미한다. 방향 bi는 8보다 작거나 같은 자연수를 의미하고, 1부터 순서대로 ↑, ↖, ←, ↙, ↓, ↘, →, ↗ 를 의미한다.   

---

## 출력  
상어가 먹을 수 있는 물고기 번호의 합의 최댓값을 출력한다.  

---

**예제 입력 1**  
```Python
7 6 2 3 15 6 9 8
3 1 1 8 14 7 10 1
6 1 13 6 4 3 11 4
16 1 8 7 5 2 12 2
```

**예제 출력 1**  
```Python
33
```

---

## 🔍 Algorithm
**시뮬레이션, Backtracking**

## 💻 Logic

```Python
fish = []
fish_dir = [0 for _ in range(16)]
dx = [0, -1, -1, -1, 0, 1, 1, 1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]
for _ in range(4):
    temp = []
    temp_input = [int(x) for x in sys.stdin.readline().split()]
    for i in range(4):
        # 인덱싱 편하게 하기 위해 물고기 번호-1로 저장, -1: 빈칸, -2: 상어
        temp.append(temp_input[i*2]-1)
        fish_dir[temp_input[i*2]-1] = temp_input[i*2+1]
    fish.append(temp)
```

- 물고기 위치와 물고기 방향 저장  
  인덱싱 편하게 하기 위해 **물고기 번호-1**로 저장, **-1: 빈칸**, **-2: 상어**  

---

```Python
def move_fish(fish, fish_dir):
    # 물고기 순서대로 이동
    for i in range(16):
        cur_x, cur_y = -1, -1
        # 현재 위치 인덱스 찾기
        for j in range(4):
            for k in range(4):
                if fish[j][k] == i:
                    cur_x, cur_y = k, j
        if cur_x == -1 and cur_y == -1 : continue
        # 이동 가능한 방향 확인
        for _ in range(8):
            next_x = cur_x + dx[fish_dir[i] - 1]
            next_y = cur_y + dy[fish_dir[i] - 1]
            if 0 <= next_x < 4 and 0 <= next_y < 4:
                if fish[next_y][next_x] == -2:
                    if fish_dir[i] == 8: fish_dir[i] = 1
                    else: fish_dir[i] += 1
                else:
                    fish[cur_y][cur_x], fish[next_y][next_x] = fish[next_y][next_x], fish[cur_y][cur_x]
                    break
            else:
                if fish_dir[i] == 8: fish_dir[i] = 1
                else: fish_dir[i] += 1
```

- 물고기 이동 함수  
  - **물고기 순서대로 이동**  
    주어진 조건에 맞게 첫번째부터 16번째까지 순서대로 이동  
  - **이동 가능한 방향 확인**  
    `fish_dir`을 참고하여 다음 이동할 위치 계산하고 이동 불가능하면 방향을 바꾸면서 다음 위치 계산  
    8개 방향 전부 다 이동 불가능하면 이동하지 않고 진행  

---

```Python
def move_shark(x, y, cur_shark, fish, fish_dir, sum):
    global result
    shark_location = []
    next_x, next_y = x, y
    move_fish(fish, fish_dir)
    result = max(result, sum)
    # 상어 이동 가능한 위치 확인 후, 저장
    for _ in range(4):
        next_x += dx[fish_dir[cur_shark] - 1]
        next_y += dy[fish_dir[cur_shark] - 1]
        if 0 <= next_x < 4 and 0 <= next_y < 4 and fish[next_y][next_x] >= 0:
            shark_location.append((next_x, next_y))
    # 이동 가능한 위치 없을 때까지 재귀
    while(shark_location):
        next_x, next_y = shark_location.pop()
        temp_fish = copy.deepcopy(fish)
        temp_dir = copy.deepcopy(fish_dir)
        temp_shark = temp_fish[next_y][next_x]
        temp_sum = sum + temp_fish[next_y][next_x] + 1
        temp_fish[y][x] = -1
        temp_fish[next_y][next_x] = -2
        move_shark(next_x, next_y, temp_shark, temp_fish, temp_dir, temp_sum)
```

- 상어 이동 재귀함수  
  - **상어 이동 가능한 위치 확인 후, 저장**  
    현재 방향으로 이동 가능한 위치가 있으면 `shark_location`에 **append**  
  - **이동 가능한 위치 없을 때까지 재귀**  
    shark_location에 저장되어 있는 값 **pop** 해서 그 위치로 이동 계산하고  
    `move_shark` 함수 **재귀**  
    이렇게 재귀하면서 제일 큰 `sum` 값 `result`에 **max** 계산해서 저장  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys, copy

fish = []
fish_dir = [0 for _ in range(16)]
dx = [0, -1, -1, -1, 0, 1, 1, 1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]
for _ in range(4):
    temp = []
    temp_input = [int(x) for x in sys.stdin.readline().split()]
    for i in range(4):
        # 인덱싱 편하게 하기 위해 물고기 번호-1로 저장, -1: 빈칸, -2: 상어
        temp.append(temp_input[i*2]-1)
        fish_dir[temp_input[i*2]-1] = temp_input[i*2+1]
    fish.append(temp)

def move_fish(fish, fish_dir):
    # 물고기 순서대로 이동
    for i in range(16):
        cur_x, cur_y = -1, -1
        # 현재 위치 인덱스 찾기
        for j in range(4):
            for k in range(4):
                if fish[j][k] == i:
                    cur_x, cur_y = k, j
        if cur_x == -1 and cur_y == -1 : continue
        # 이동 가능한 방향 확인
        for _ in range(8):
            next_x = cur_x + dx[fish_dir[i] - 1]
            next_y = cur_y + dy[fish_dir[i] - 1]
            if 0 <= next_x < 4 and 0 <= next_y < 4:
                if fish[next_y][next_x] == -2:
                    if fish_dir[i] == 8: fish_dir[i] = 1
                    else: fish_dir[i] += 1
                else:
                    fish[cur_y][cur_x], fish[next_y][next_x] = fish[next_y][next_x], fish[cur_y][cur_x]
                    break
            else:
                if fish_dir[i] == 8: fish_dir[i] = 1
                else: fish_dir[i] += 1

def move_shark(x, y, cur_shark, fish, fish_dir, sum):
    global result
    shark_location = []
    next_x, next_y = x, y
    move_fish(fish, fish_dir)
    result = max(result, sum)
    # 상어 이동 가능한 위치 확인 후, 저장
    for _ in range(4):
        next_x += dx[fish_dir[cur_shark] - 1]
        next_y += dy[fish_dir[cur_shark] - 1]
        if 0 <= next_x < 4 and 0 <= next_y < 4 and fish[next_y][next_x] >= 0:
            shark_location.append((next_x, next_y))
    # 이동 가능한 위치 없을 때까지 재귀
    while(shark_location):
        next_x, next_y = shark_location.pop()
        temp_fish = copy.deepcopy(fish)
        temp_dir = copy.deepcopy(fish_dir)
        temp_shark = temp_fish[next_y][next_x]
        temp_sum = sum + temp_fish[next_y][next_x] + 1
        temp_fish[y][x] = -1
        temp_fish[next_y][next_x] = -2
        move_shark(next_x, next_y, temp_shark, temp_fish, temp_dir, temp_sum)

cur_shark = fish[0][0]
fish[0][0] = -2
result = cur_shark + 1
move_shark(0, 0, cur_shark, fish, fish_dir, result)
print(result)
```
</details>

---

## 📝 Review

처음 값을 어떤 식으로 저장하는 것이 더 효율적일지 생각하다가 잘못 생각해서 시간이 걸렸고, 전체 이동할 때 재귀로 짜야한다는 건 쉽게 알 수 있었지만 역시나 재귀는 어렵다...  
일단 지금은 얼마나 더 빨리 효율적으로 풀지 생각하는 것보단 그냥 많이 풀어봐야겠다,


```toc
```