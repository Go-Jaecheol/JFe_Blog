---
emoji: 💻
title: "[BOJ] 17135번: 캐슬 디펜스 (Python)"
date: '2022-03-02 16:16:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/17135

캐슬 디펜스는 성을 향해 몰려오는 적을 잡는 턴 방식의 게임이다. 게임이 진행되는 곳은 크기가 N×M인 격자판으로 나타낼 수 있다. 격자판은 1×1 크기의 칸으로 나누어져 있고, 각 칸에 포함된 적의 수는 최대 하나이다. 격자판의 N번행의 바로 아래(N+1번 행)의 모든 칸에는 성이 있다.

성을 적에게서 지키기 위해 궁수 3명을 배치하려고 한다. 궁수는 성이 있는 칸에 배치할 수 있고, 하나의 칸에는 최대 1명의 궁수만 있을 수 있다. 각각의 턴마다 궁수는 적 하나를 공격할 수 있고, 모든 궁수는 동시에 공격한다. 궁수가 공격하는 적은 거리가 D이하인 적 중에서 가장 가까운 적이고, 그러한 적이 여럿일 경우에는 가장 왼쪽에 있는 적을 공격한다. 같은 적이 여러 궁수에게 공격당할 수 있다. 공격받은 적은 게임에서 제외된다. 궁수의 공격이 끝나면, 적이 이동한다. 적은 아래로 한 칸 이동하며, 성이 있는 칸으로 이동한 경우에는 게임에서 제외된다. 모든 적이 격자판에서 제외되면 게임이 끝난다. 

게임 설명에서 보다시피 궁수를 배치한 이후의 게임 진행은 정해져있다. 따라서, 이 게임은 궁수의 위치가 중요하다. 격자판의 상태가 주어졌을 때, 궁수의 공격으로 제거할 수 있는 적의 최대 수를 계산해보자.

격자판의 두 위치 (r1, c1), (r2, c2)의 거리는 |r1-r2| + |c1-c2|이다.

---

## 입력  
첫째 줄에 격자판 행의 수 N, 열의 수 M, 궁수의 공격 거리 제한 D가 주어진다. 둘째 줄부터 N개의 줄에는 격자판의 상태가 주어진다. 0은 빈 칸, 1은 적이 있는 칸이다.

---

## 출력  
첫째 줄에 궁수의 공격으로 제거할 수 있는 적의 최대 수를 출력한다.

---

## 🔍 Algorithm
**Brute Force, Simulation**

## 💻 Logic

```Python
def attack(archer, enemy):
    global count
    target, new_enemy, min_i = [], [], -1
    for y, x in archer:
        distance = sys.maxsize
        # 거리 계산
        for i, (ey, ex) in enumerate(enemy):
            temp = abs(x - ex) + abs(y - ey)
            if temp <= D and distance > temp:
                distance = temp
                min_i = i
        if min_i > -1:
            target.append(min_i)
    # 집합으로 중복 제거
    target_set = set(target)
    count += len(target_set)
    for i, (y, x) in enumerate(enemy):
        if i not in target_set:
            new_enemy.append(enemy[i])
    return new_enemy
```

- 궁수가 가까운 적을 공격하는 함수  
  - **거리 계산**  
    각각 궁수마다 적과의 거리를 계산하고,  
    **D** 거리 이하의 가장 가까운 적의 **index**를 구해서 `min_i`에 저장  
    `min_i`가 초기값인 **-1**이 아니면 `target` 리스트에 **append**  
  - **집합으로 중복 제거**  
    중복을 제거하기 위해 **set**으로 변환해주고,  
    해당하는 **index**를 뺀 새로운 `new_enemy` 리스트를 만들어서 **return**  

---

```Python
def move_enemy(enemy):
    temp = []
    new_enemy = []
    # 아래로 한칸씩 이동
    for i, (y, x) in enumerate(enemy):
        if y == N-1: temp.append(i)
        else: enemy[i][0] = y+1
    # 집합으로 중복 제거
    temp_set = set(temp)
    for i, (y, x) in enumerate(enemy):
        if i not in temp_set:
            new_enemy.append(enemy[i])
    return new_enemy
```

- 적 위치를 아래로 한칸 이동하는 함수  
  - **아래로 한칸 이동**  
    위치 **y**가 **N-1**이면 제거하기 위해 `temp`에 **index**를 **append** 해주고,  
    아니면 **y** 값을 **+1**  
  - **집합으로 중복 제거**  
    중복을 제거하기 위해 **set**으로 변환해주고,  
    해당하는 **index**를 뺀 새로운 `new_enemy` 리스트를 만들어서 **return**  
    
---

```Python
N, M, D = map(int, sys.stdin.readline().split())
arr = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
comb_list = combinations([int(x) for x in range(M)], 3)
result = 0
# 궁수 배치 조합
for comb in comb_list:
    comb = list(comb)
    archer, enemy, count = [], [], 0
    # 궁수 배치
    for i in comb:
        archer.append([N, i])
    # 적 위치 저장
    for i in range(N):
        for j in range(M):
            if arr[i][j] == 1:
                enemy.append([i, j])
    # 적이 다 사라질 때까지 게임 진행
    while enemy:
        # 열 기준 정렬
        enemy.sort(key=lambda x:x[1])
        enemy = attack(archer, enemy)
        enemy = move_enemy(enemy)
    result = max(result, count)
print(result)
```

- 조합을 이용해 가능한 조합 경우의 수를 다 만들고,  
- 가능한 경우의 수마다 궁수를 배치하고 적 위치를 저장한 뒤에 적이 다 사라질 때까지 게임을 진행한다.    
- 거리가 같은 경우에는 가장 왼쪽에 있는 적을 공격하기 때문에 `enemy` 리스트를 열 기준으로 정렬해주고,  
- 각 게임마다 `attack()` 함수와 `move_enemy()` 함수를 실행한다.  
- 각 조합마다 **max** 값을 `result`에 저장하고 출력한다.  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from itertools import combinations

def attack(archer, enemy):
    global count
    target, new_enemy, min_i = [], [], -1
    for y, x in archer:
        distance = sys.maxsize
        # 거리 계산
        for i, (ey, ex) in enumerate(enemy):
            temp = abs(x - ex) + abs(y - ey)
            if temp <= D and distance > temp:
                distance = temp
                min_i = i
        if min_i > -1:
            target.append(min_i)
    # 집합으로 중복 제거
    target_set = set(target)
    count += len(target_set)
    for i, (y, x) in enumerate(enemy):
        if i not in target_set:
            new_enemy.append(enemy[i])
    return new_enemy

def move_enemy(enemy):
    temp = []
    new_enemy = []
    # 아래로 한칸씩 이동
    for i, (y, x) in enumerate(enemy):
        if y == N-1: temp.append(i)
        else: enemy[i][0] = y+1
    # 집합으로 중복 제거
    temp_set = set(temp)
    for i, (y, x) in enumerate(enemy):
        if i not in temp_set:
            new_enemy.append(enemy[i])
    return new_enemy

N, M, D = map(int, sys.stdin.readline().split())
arr = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
comb_list = combinations([int(x) for x in range(M)], 3)
result = 0
# 궁수 배치 조합
for comb in comb_list:
    comb = list(comb)
    archer, enemy, count = [], [], 0
    # 궁수 배치
    for i in comb:
        archer.append([N, i])
    # 적 위치 저장
    for i in range(N):
        for j in range(M):
            if arr[i][j] == 1:
                enemy.append([i, j])
    # 적이 다 사라질 때까지 게임 진행
    while enemy:
        # 열 기준 정렬
        enemy.sort(key=lambda x:x[1])
        enemy = attack(archer, enemy)
        enemy = move_enemy(enemy)
    result = max(result, count)
print(result)
```
</details>

---

## 📝 Review

생각보다 시간이 걸렸던 문제.  
구현 과정은 차근차근 진행하면 됐지만, combination, set, enumerate 등 파이썬 문법이 제대로 기억나지 않아서 찾아보고 하느라 시간이 조금 걸렸고  
거리가 같은 경우에는 가장 왼쪽에 있는 적을 공격한다는 문제 요소도 제대로 못읽어서 시간이 걸린 것 같다.  

천천히 빠르게 할 수 있도록 더 연습해야겠다,,


```toc
```