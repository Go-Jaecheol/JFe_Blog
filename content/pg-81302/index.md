---
emoji: 💻
title: "[Programmers] 81302번: 거리두기 확인하기 (Python)"
date: '2022-05-09 12:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2021 카카오 채용연계형 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/81302

개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.

코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데 개발 직군 면접인 만큼
아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.

1. 대기실은 5개이며, 각 대기실은 5x5 크기입니다.  
2. 거리두기를 위하여 응시자들 끼리는 맨해튼 거리가 2 이하로 앉지 말아 주세요.  
3. 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.  

5개의 대기실을 본 죠르디는 각 대기실에서 응시자들이 거리두기를 잘 기키고 있는지 알고 싶어졌습니다. 자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열 `places`가 매개변수로 주어집니다. 각 대기실별로 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

---

## 제한사항  
- `places`의 행 길이(대기실 개수) = 5  
    - `places`의 각 행은 하나의 대기실 구조를 나타냅니다.  
- `places`의 열 길이(대기실 세로 길이) = 5  
- `places`의 원소는 `P`, `O`, `X`로 이루어진 문자열입니다.  
    - `places` 원소의 길이(대기실 가로 길이) = 5  
    - `P`는 응시자가 앉아있는 자리를 의미합니다.  
    - `O`는 빈 테이블을 의미합니다.  
    - `X`는 파티션을 의미합니다.  
- 입력으로 주어지는 5개 대기실의 크기는 모두 5x5 입니다.  
- return 값 형식  
    - 1차원 정수 배열에 5개의 원소를 담아서 return 합니다.  
    - `places`에 담겨 있는 5개 대기실의 순서대로, 거리두기 준수 여부를 차례대로 배열에 담습니다.  
    - 각 대기실 별로 모든 응시자가 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 담습니다.  

---

## 입출력 예  
|places|result|
|---|---|
|[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]|[1, 0, 1, 1, 1]|


---

## 🔍 Algorithm
**DFS**

## 💻 Logic

```Python
# 강의실마다 확인
    for place in places:
        check = True
        for i in range(5):
            for j in range(5):
                # 사람이 있는 경우에만 탐색하고, 반환값 체크
                if place[i][j] == 'P' and not search(place, j, i):
                    check = False
        # check에 따라 값 입력
        if check: answer.append(1)
        else: answer.append(0)
    return answer
```
- **강의실마다 거리두기 확인**  
    사람이 있는 경우에만 `search()` 함수로 탐색하고, 반환값이 **False**면 `check`도 **False**로 저장  
    전부 탐색 끝난 후에 `check` 값에 따라 `answer`에 거리두기 여부 **append**  

```Python
def search(place, x, y):
    stack = [(x, y, 0)]
    visited = [[False for _ in range(5)]for _ in range(5)]
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    visited[y][x] = True
    # DFS 탐색
    while stack:
        x, y, d = stack.pop()
        if d == 2: continue     # 깊이 2까지만
        for i in range(4):
            next_x, next_y = x + dx[i], y + dy[i]
            if next_x < 0 or next_x >= 5 or next_y < 0 or next_y >= 5 or visited[next_y][next_x]: continue
            if place[next_y][next_x] == "P": return False
            if place[next_y][next_x] == "O": stack.append((next_x, next_y, d+1))
    return True
```
- **DFS 탐색 함수**  
    **DFS**로 탐색하면서 `P`를 만나면 **False** 반환 / `O`를 만나면 `stack`에 **append**해서 탐색 계속 ***(깊이 2까지만)***  
    시작 좌표 `x, y` 의 `visited` 값을 **True**로 지정하고 예외 처리  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def search(place, x, y):
    stack = [(x, y, 0)]
    visited = [[False for _ in range(5)]for _ in range(5)]
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    visited[y][x] = True
    # DFS 탐색
    while stack:
        x, y, d = stack.pop()
        if d == 2: continue     # 깊이 2까지만
        for i in range(4):
            next_x, next_y = x + dx[i], y + dy[i]
            if next_x < 0 or next_x >= 5 or next_y < 0 or next_y >= 5 or visited[next_y][next_x]: continue
            if place[next_y][next_x] == "P": return False
            if place[next_y][next_x] == "O": stack.append((next_x, next_y, d+1))
    return True
            
def solution(places):
    answer = []
    # 강의실마다 확인
    for place in places:
        check = True
        for i in range(5):
            for j in range(5):
                # 사람이 있는 경우에만 탐색하고, 반환값 체크
                if place[i][j] == 'P' and not search(place, j, i):
                    check = False
        # check에 따라 값 입력
        if check: answer.append(1)
        else: answer.append(0)
    return answer
```
</details>

---

## 📝 Review

DFS로 깊이 2까지만 탐색하면 되는 문제.  
코드가 예쁘지는 않지만 코테 대비해서 최대한 빠르게 풀려고 했는데 걸린 시간은 만족!


```toc
```