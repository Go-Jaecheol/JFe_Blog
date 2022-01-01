---
emoji: 💻
title: "[BOJ] 3190번: 뱀 (Python)"
date: '2021-12-29 16:40:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/3190

'Dummy' 라는 도스게임이 있다. 이 게임에는 뱀이 나와서 기어다니는데, 사과를 먹으면 뱀 길이가 늘어난다. 뱀이 이리저리 기어다니다가 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다.  

게임은 NxN 정사각 보드위에서 진행되고, 몇몇 칸에는 사과가 놓여져 있다. 보드의 상하좌우 끝에 벽이 있다. 게임이 시작할때 뱀은 맨위 맨좌측에 위치하고 뱀의 길이는 1 이다. 뱀은 처음에 오른쪽을 향한다.  

뱀은 매 초마다 이동을 하는데 다음과 같은 규칙을 따른다.  
    - 먼저 뱀은 몸길이를 늘려 머리를 다음칸에 위치시킨다.  
    - 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.  
    - 만약 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다.  

사과의 위치와 뱀의 이동경로가 주어질 때 이 게임이 몇 초에 끝나는지 계산하라.  

---

## 입력  
첫째 줄에 보드의 크기 N이 주어진다. (2 ≤ N ≤ 100) 다음 줄에 사과의 개수 K가 주어진다. (0 ≤ K ≤ 100)  

다음 K개의 줄에는 사과의 위치가 주어지는데, 첫 번째 정수는 행, 두 번째 정수는 열 위치를 의미한다. 사과의 위치는 모두 다르며, 맨 위 맨 좌측 (1행 1열) 에는 사과가 없다.  

다음 줄에는 뱀의 방향 변환 횟수 L 이 주어진다. (1 ≤ L ≤ 100)  

다음 L개의 줄에는 뱀의 방향 변환 정보가 주어지는데,  정수 X와 문자 C로 이루어져 있으며. 게임 시작 시간으로부터 X초가 끝난 뒤에 왼쪽(C가 'L') 또는 오른쪽(C가 'D')로 90도 방향을 회전시킨다는 뜻이다. X는 10,000 이하의 양의 정수이며, 방향 전환 정보는 X가 증가하는 순으로 주어진다.  

---

## 출력  
첫째 줄에 게임이 몇 초에 끝나는지 출력한다.  

---

**예제 입력 1**  
```Python
6
3
3 4
2 5
5 3
3
3 D
15 L
17 D
```

**예제 출력 1**  
```Python
9
```

**예제 입력 2**  
```Python
10
4
1 2
1 3
1 4
1 5
4
8 D
10 D
11 D
13 L
```

**예제 출력 2**  
```Python
21
```

**예제 입력 3**  
```Python
10
5
1 5
1 3
1 2
1 6
1 7
4
8 D
10 D
11 D
13 L
```

**예제 출력 3**  
```Python
13
```

---

## 🔍 Algorithm
**시뮬레이션**

## 💻 Logic

```Python
direction_info = {}
for _ in range(L):
    X, C = sys.stdin.readline().split()
    direction_info[int(X)] = C
print(move(1, 1))
```

- **방향 변환 정보 저장 후, move 함수 실행 및 결과 출력**  
  **딕셔너리**를 이용해서 **key-value** 값으로 시간-방향을 저장  
  처음 위치인 **1,1**에서 `move` 함수 실행 후, **return** 값 출력  

---

```Python
def move(r, c):
    time = 0
    cur_dir = 0
    q = deque()
    q.append((r, c))
    while q:
        time += 1
        r, c = q.popleft()
        # 다음 위치 계산
        next_c = c + dx[cur_dir]
        next_r = r + dy[cur_dir]
        q.appendleft((r, c))

        # 벽에 부딪히는지 체크
        if next_r < 1 or next_r > N or next_c < 1 or next_c > N : return time
        # 자기 자신과 부딪히는지 체크
        if (next_r, next_c) in q : return time
        # 이동
        q.appendleft((next_r, next_c))
        if [next_r, next_c] in apple : apple.remove([next_r, next_c])
        else : q.pop()
        # 방향 변환
        if time in direction_info.keys():
            if direction_info[time] == 'D':
                if cur_dir == 3 : cur_dir = 0
                else : cur_dir += 1
            elif direction_info[time] == 'L':
                if cur_dir == 0 : cur_dir = 3
                else : cur_dir -= 1
```

- 제시된 조건에 맞게 뱀 위치를 이동시키고 종료되는 시간을 return하는 함수  
  - **다음 위치 계산**  
    이전에 선언한 `dx = [1, 0, -1, 0]` `dy = [0, 1, 0, -1]` 에서  
    현재 방향인 `cur_dir` 을 기준으로 다음 위치 `next_x` `next_y` 를 계산  
  - **종료 조건 체크**  
    **벽에 부딪히는지** boundary 체크해서 현재 `time` 값을 **return**  
    **자기 자신과 부딪히는지**는 다음 위치가 현재 **deque**에 있는지 확인하고, 있으면 `time` 값 **return**  
  - **이동**  
    다음 위치를 **deque**의 시작 위치에 **appendleft**하고  
    그 위치가 `apple` 리스트에 있으면, 해당 값을 리스트에서 **remove**  
    `apple` 리스트에 없으면, 뱀의 꼬리를 움직이기 위해 **deque**의 끝 위치 값을 **pop**  
  - **방향 변환**  
    딕셔너리 `direction_info` 에 현재 `time`에 해당하는 **key**가 있으면,  
    그 **key**에 해당하는 **value**가 **D**인지 **L**인지에 따라 `cur_dir` 값 변경  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from collections import deque
N = int(sys.stdin.readline())
K = int(sys.stdin.readline())
apple = [[int(x) for x in sys.stdin.readline().split()]for _ in range(K)]
L = int(sys.stdin.readline())
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def move(r, c):
    time = 0
    cur_dir = 0
    q = deque()
    q.append((r, c))
    while q:
        time += 1
        r, c = q.popleft()
        # 다음 위치 계산
        next_c = c + dx[cur_dir]
        next_r = r + dy[cur_dir]
        q.appendleft((r, c))

        # 벽에 부딪히는지 체크
        if next_r < 1 or next_r > N or next_c < 1 or next_c > N : return time
        # 자기 자신과 부딪히는지 체크
        if (next_r, next_c) in q : return time
        # 이동
        q.appendleft((next_r, next_c))
        if [next_r, next_c] in apple : apple.remove([next_r, next_c])
        else : q.pop()
        # 방향 변환
        if time in direction_info.keys():
            if direction_info[time] == 'D':
                if cur_dir == 3 : cur_dir = 0
                else : cur_dir += 1
            elif direction_info[time] == 'L':
                if cur_dir == 0 : cur_dir = 3
                else : cur_dir -= 1

direction_info = {}
for _ in range(L):
    X, C = sys.stdin.readline().split()
    direction_info[int(X)] = C
print(move(1, 1))
```
</details>

## 📝 Review
방향 변환에 대한 정보를 저장할 때, 리스트로 저장을 하려고 했는데 너무 비효율적인 것 같아서 딕셔너리를 사용했는데 진짜 편하다,,  

예제 케이스 다 맞았는데 틀렸다고 나오길래 다시 보니까 사과를 지난 다음에 사과를 없애주지 않아서 그런 거였음ㅜ  

```toc
```