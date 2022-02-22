---
emoji: 💻
title: "[BOJ] 17281번: ⚾ (Python)"
date: '2022-02-22 23:40:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/17281

⚾는 9명으로 이루어진 두 팀이 공격과 수비를 번갈아 하는 게임이다. 하나의 이닝은 공격과 수비로 이루어져 있고, 총 N이닝 동안 게임을 진행해야 한다. 한 이닝에 3아웃이 발생하면 이닝이 종료되고, 두 팀이 공격과 수비를 서로 바꾼다.

두 팀은 경기가 시작하기 전까지 타순(타자가 타석에 서는 순서)을 정해야 하고, 경기 중에는 타순을 변경할 수 없다. 9번 타자까지 공을 쳤는데 3아웃이 발생하지 않은 상태면 이닝은 끝나지 않고, 1번 타자가 다시 타석에 선다. 타순은 이닝이 변경되어도 순서를 유지해야 한다. 예를 들어, 2이닝에 6번 타자가 마지막 타자였다면, 3이닝은 7번 타자부터 타석에 선다.

공격은 투수가 던진 공을 타석에 있는 타자가 치는 것이다. 공격 팀의 선수가 1루, 2루, 3루를 거쳐서 홈에 도착하면 1점을 득점한다. 타자가 홈에 도착하지 못하고 1루, 2루, 3루 중 하나에 머물러있을 수 있다. 루에 있는 선수를 주자라고 한다. 이닝이 시작될 때는 주자는 없다.

타자가 공을 쳐서 얻을 수 있는 결과는 안타, 2루타, 3루타, 홈런, 아웃 중 하나이다. 각각이 발생했을 때, 벌어지는 일은 다음과 같다.

- 안타: 타자와 모든 주자가 한 루씩 진루한다.  
- 2루타: 타자와 모든 주자가 두 루씩 진루한다.  
- 3루타: 타자와 모든 주자가 세 루씩 진루한다.  
- 홈런: 타자와 모든 주자가 홈까지 진루한다.  
- 아웃: 모든 주자는 진루하지 못하고, 공격 팀에 아웃이 하나 증가한다.  

한 야구팀의 감독 아인타는 타순을 정하려고 한다. 아인타 팀의 선수는 총 9명이 있고, 1번부터 9번까지 번호가 매겨져 있다. 아인타는 자신이 가장 좋아하는 선수인 1번 선수를 4번 타자로 미리 결정했다. 이제 다른 선수의 타순을 모두 결정해야 한다. 아인타는 각 선수가 각 이닝에서 어떤 결과를 얻는지 미리 알고 있다. 가장 많은 득점을 하는 타순을 찾고, 그 때의 득점을 구해보자.

---

## 입력  
첫째 줄에 이닝 수 N(2 ≤ N ≤ 50)이 주어진다. 둘째 줄부터 N개의 줄에는 각 선수가 각 이닝에서 얻는 결과가 1번 이닝부터 N번 이닝까지 순서대로 주어진다. 이닝에서 얻는 결과는 9개의 정수가 공백으로 구분되어져 있다. 각 결과가 의미하는 정수는 다음과 같다.

- 안타: 1
- 2루타: 2
- 3루타: 3
- 홈런: 4
- 아웃: 0
각 이닝에는 아웃을 기록하는 타자가 적어도 한 명 존재한다.

---

## 출력  
아인타팀이 얻을 수 있는 최대 점수를 출력한다.

---

## 🔍 Algorithm
**Brute Force**

## 💻 Logic

```Python
def hit_result(batter):
    global out, run, b1, b2, b3
    hit = inning[cur_inning][batter]
    
    # 아웃
    if hit == 0:
        out += 1
        return
    # 홈런
    if hit == 4:
        run += b1 + b2 + b3 + 1
        b1, b2, b3 = 0, 0, 0
        return
    # 3루 주자 있는 경우
    if b3 == 1:
        b3 = 0
        run += 1
    # 2루 주자 있는 경우
    if b2 == 1:
        b2 = 0
        if hit > 1: run += 1
        else: b3 = 1
    # 1루 주자 있는 경우
    if b1 == 1:
        b1 = 0
        if hit > 2: run += 1
        elif hit == 2: b3 = 1
        else: b2 = 1
    # 타자 주자 이동
    if hit == 1: b1 = 1
    elif hit == 2: b2 = 1
    elif hit == 3: b3 = 1
```

- 타격 결과에 따라 주자 진루하는 함수  
  - **아웃인 경우**  
    `out` 카운트 ***1*** 올려주고 **return**  
  - **홈런인 경우**  
    베이스별 주자 카운트 + 1을 `run`에 더해주고,  
    베이스별 주자 정보 ***0***으로 바꾸고 **return**  
  - **주자 상황별 진루**  
    1루, 2루, 3루 주자 상황에 따라 다르게 계산  
    타자 주자도 `hit` 정보에 따라 진루  

---

```Python
N = int(sys.stdin.readline())
inning = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
order_list = permutations([1,2,3,4,5,6,7,8], 8)
result = 0

for order in order_list:
    order = list(order)
    order.insert(3, 0)
    cur_inning, run, out = 0, 0, 0
    b1, b2, b3 = 0, 0, 0
    while cur_inning < N:
        for batter in order:
            hit_result(batter)
            if out == 3: 
                cur_inning += 1
                out = 0
                b1, b2, b3 = 0, 0, 0
            if cur_inning == N: break
    result = max(result, run)
print(result)
```

- 순열을 이용해 가능한 순서 경우의 수를 다 만들고,  
- 가능한 경우의 수마다 득점을 구해서 **max** 값 출력  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from itertools import permutations

def hit_result(batter):
    global out, run, b1, b2, b3
    hit = inning[cur_inning][batter]
    
    # 아웃
    if hit == 0:
        out += 1
        return
    # 홈런
    if hit == 4:
        run += b1 + b2 + b3 + 1
        b1, b2, b3 = 0, 0, 0
        return
    # 3루 주자 있는 경우
    if b3 == 1:
        b3 = 0
        run += 1
    # 2루 주자 있는 경우
    if b2 == 1:
        b2 = 0
        if hit > 1: run += 1
        else: b3 = 1
    # 1루 주자 있는 경우
    if b1 == 1:
        b1 = 0
        if hit > 2: run += 1
        elif hit == 2: b3 = 1
        else: b2 = 1
    # 타자 주자 이동
    if hit == 1: b1 = 1
    elif hit == 2: b2 = 1
    elif hit == 3: b3 = 1

N = int(sys.stdin.readline())
inning = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
order_list = permutations([1,2,3,4,5,6,7,8], 8)
result = 0

for order in order_list:
    order = list(order)
    order.insert(3, 0)
    cur_inning, run, out = 0, 0, 0
    b1, b2, b3 = 0, 0, 0
    while cur_inning < N:
        for batter in order:
            hit_result(batter)
            if out == 3: 
                cur_inning += 1
                out = 0
                b1, b2, b3 = 0, 0, 0
            if cur_inning == N: break
    result = max(result, run)
print(result)
```
</details>

---

## 📝 Review

야구 관련 문제여서 기대하고 시작했지만 시간초과 때문에 마음에 들지않는 문제였다.  

순열을 사용해야 된다는 것을 알고나서 permutation을 이용해서 문제를 해결했지만, 시간초과가 발생했다.  
시간초과를 줄일 방법이 생각나지 않아서 다른 사람들의 코드에서 힌트를 얻었고  
리스트로 저장해두었던 base 정보를 각각 b1, b2, b3로 방식을 바꿔서 시간초과 문제를 해결했다.


```toc
```