---
emoji: ๐ป
title: "[BOJ] 17472๋ฒ: ๋ค๋ฆฌ ๋ง๋ค๊ธฐ 2 (Python)"
date: '2022-03-24 18:50:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## ๋ฌธ์ 
https://www.acmicpc.net/problem/17472

์ฌ์ผ๋ก ์ด๋ฃจ์ด์ง ๋๋ผ๊ฐ ์๊ณ , ๋ชจ๋  ์ฌ์ ๋ค๋ฆฌ๋ก ์ฐ๊ฒฐํ๋ ค๊ณ  ํ๋ค. ์ด ๋๋ผ์ ์ง๋๋ NรM ํฌ๊ธฐ์ ์ด์ฐจ์ ๊ฒฉ์๋ก ๋ํ๋ผ ์ ์๊ณ , ๊ฒฉ์์ ๊ฐ ์นธ์ ๋์ด๊ฑฐ๋ ๋ฐ๋ค์ด๋ค.

์ฌ์ ์ฐ๊ฒฐ๋ ๋์ด ์ํ์ข์ฐ๋ก ๋ถ์ด์๋ ๋ฉ์ด๋ฆฌ๋ฅผ ๋งํ๊ณ , ์๋ ๊ทธ๋ฆผ์ ๋ค ๊ฐ์ ์ฌ์ผ๋ก ์ด๋ฃจ์ด์ง ๋๋ผ์ด๋ค. ์์น ๋์ด์๋ ์นธ์ ๋์ด๋ค.  

![17472-map.png](17472-map.png)  

๋ค๋ฆฌ๋ ๋ฐ๋ค์๋ง ๊ฑด์คํ  ์ ์๊ณ , ๋ค๋ฆฌ์ ๊ธธ์ด๋ ๋ค๋ฆฌ๊ฐ ๊ฒฉ์์์ ์ฐจ์งํ๋ ์นธ์ ์์ด๋ค. ๋ค๋ฆฌ๋ฅผ ์ฐ๊ฒฐํด์ ๋ชจ๋  ์ฌ์ ์ฐ๊ฒฐํ๋ ค๊ณ  ํ๋ค. ์ฌ A์์ ๋ค๋ฆฌ๋ฅผ ํตํด ์ฌ B๋ก ๊ฐ ์ ์์ ๋, ์ฌ A์ B๋ฅผ ์ฐ๊ฒฐ๋์๋ค๊ณ  ํ๋ค. ๋ค๋ฆฌ์ ์ ๋์ ์ฌ๊ณผ ์ธ์ ํ ๋ฐ๋ค ์์ ์์ด์ผ ํ๊ณ , ํ ๋ค๋ฆฌ์ ๋ฐฉํฅ์ด ์ค๊ฐ์ ๋ฐ๋๋ฉด ์๋๋ค. ๋, ๋ค๋ฆฌ์ ๊ธธ์ด๋ 2 ์ด์์ด์ด์ผ ํ๋ค.

๋ค๋ฆฌ์ ๋ฐฉํฅ์ด ์ค๊ฐ์ ๋ฐ๋๋ฉด ์๋๊ธฐ ๋๋ฌธ์, ๋ค๋ฆฌ์ ๋ฐฉํฅ์ ๊ฐ๋ก ๋๋ ์ธ๋ก๊ฐ ๋  ์ ๋ฐ์ ์๋ค. ๋ฐฉํฅ์ด ๊ฐ๋ก์ธ ๋ค๋ฆฌ๋ ๋ค๋ฆฌ์ ์ ๋์ด ๊ฐ๋ก ๋ฐฉํฅ์ผ๋ก ์ฌ๊ณผ ์ธ์ ํด์ผ ํ๊ณ , ๋ฐฉํฅ์ด ์ธ๋ก์ธ ๋ค๋ฆฌ๋ ๋ค๋ฆฌ์ ์ ๋์ด ์ธ๋ก ๋ฐฉํฅ์ผ๋ก ์ฌ๊ณผ ์ธ์ ํด์ผ ํ๋ค.

์ฌ A์ B๋ฅผ ์ฐ๊ฒฐํ๋ ๋ค๋ฆฌ๊ฐ ์ค๊ฐ์ ์ฌ C์ ์ธ์ ํ ๋ฐ๋ค๋ฅผ ์ง๋๊ฐ๋ ๊ฒฝ์ฐ์ ์ฌ C๋ A, B์ ์ฐ๊ฒฐ๋์ด์๋ ๊ฒ์ด ์๋๋ค. 

์๋ ๊ทธ๋ฆผ์ ์ฌ์ ๋ชจ๋ ์ฐ๊ฒฐํ๋ ์ฌ๋ฐ๋ฅธ 2๊ฐ์ง ๋ฐฉ๋ฒ์ด๊ณ , ๋ค๋ฆฌ๋ ํ์์ผ๋ก ์์น ๋์ด ์๋ค. ์ฌ์ ์ ์, ๋ค๋ฆฌ๋ ์ํ๋ฒณ ๋๋ฌธ์๋ก ๊ตฌ๋ถํ๋ค.

![17472-ex1.png](17472-ex1.png)  

๋ค์์ ์ฌ๋ฐ๋ฅด์ง ์์ 3๊ฐ์ง ๋ฐฉ๋ฒ์ด๋ค

![17472-ex2.png](17472-ex2.png)  

๋ค๋ฆฌ๊ฐ ๊ต์ฐจํ๋ ๊ฒฝ์ฐ๊ฐ ์์ ์๋ ์๋ค. ๊ต์ฐจํ๋ ๋ค๋ฆฌ์ ๊ธธ์ด๋ฅผ ๊ณ์ฐํ  ๋๋ ๊ฐ ์นธ์ด ๊ฐ ๋ค๋ฆฌ์ ๊ธธ์ด์ ๋ชจ๋ ํฌํจ๋์ด์ผ ํ๋ค. ์๋๋ ๋ค๋ฆฌ๊ฐ ๊ต์ฐจํ๋ ๊ฒฝ์ฐ์ ๊ธฐํ ๋ค๋ฅธ ๊ฒฝ์ฐ์ ๋ํ 2๊ฐ์ง ์์์ด๋ค.

![17472-ex3.png](17472-ex3.png)  

๋๋ผ์ ์ ๋ณด๊ฐ ์ฃผ์ด์ก์ ๋, ๋ชจ๋  ์ฌ์ ์ฐ๊ฒฐํ๋ ๋ค๋ฆฌ ๊ธธ์ด์ ์ต์๊ฐ์ ๊ตฌํด๋ณด์.

---

## ์๋ ฅ  
์ฒซ์งธ ์ค์ ์ง๋์ ์ธ๋ก ํฌ๊ธฐ N๊ณผ ๊ฐ๋ก ํฌ๊ธฐ M์ด ์ฃผ์ด์ง๋ค. ๋์งธ ์ค๋ถํฐ N๊ฐ์ ์ค์ ์ง๋์ ์ ๋ณด๊ฐ ์ฃผ์ด์ง๋ค. ๊ฐ ์ค์ M๊ฐ์ ์๋ก ์ด๋ฃจ์ด์ ธ ์์ผ๋ฉฐ, ์๋ 0 ๋๋ 1์ด๋ค. 0์ ๋ฐ๋ค, 1์ ๋์ ์๋ฏธํ๋ค.

---

## ์ถ๋ ฅ  
๋ชจ๋  ์ฌ์ ์ฐ๊ฒฐํ๋ ๋ค๋ฆฌ ๊ธธ์ด์ ์ต์๊ฐ์ ์ถ๋ ฅํ๋ค. ๋ชจ๋  ์ฌ์ ์ฐ๊ฒฐํ๋ ๊ฒ์ด ๋ถ๊ฐ๋ฅํ๋ฉด -1์ ์ถ๋ ฅํ๋ค.

---

## ๐ Algorithm
**Brute Force, BFS, DFS, Kruskal**

## ๐ป Logic

```Python
def number_island(x, y, cnt):
    q = deque()
    q.append((x, y))
    map_list[y][x] = cnt
    # BFS ํ์
    while q:
        x, y = q.popleft()
        for i in range(4):
            next_x, next_y = x + dx[i], y + dy[i]
            if 0 <= next_x < M and 0 <= next_y < N:
                if not visited[next_y][next_x] and map_list[next_y][next_x] == 1:
                    map_list[next_y][next_x] = cnt
                    q.append((next_x, next_y))
                    visited[next_y][next_x] = True
```

- **BFS** ํ์์ ํตํด ์ฌ ๋ถ๋ฅํ๋ ํจ์  
  - **BFS ํ์**  
    ์ํ์ข์ฐ, `visited` ํ์ธํ๊ณ  `map_list` ๊ฐ์ด **1**์ด๋ฉด  
    ํด๋น `cnt`๋ก ์ฌ ์ซ์ ์ง์ ํ๋ ๋ฐฉ์์ผ๋ก ์ฐ๊ฒฐ๋ ๋๋ค ์ฌ์ผ๋ก ๋ถ๋ฅ  
    
---

```Python
def make_bridge(x, y, dest):
    result = sys.maxsize
    # ๋ฐฉํฅ 4๊ตฐ๋ฐ
    for i in range(4):
        stack = []
        stack.append((x, y))
        length = 0
        # ๊ทธ ๋ฐฉํฅ์ผ๋ก DFS ํ์
        while stack:
            cur_x, cur_y = stack.pop()
            next_x, next_y = cur_x + dx[i], cur_y + dy[i]
            # ๋ฒ์ ๋ฒ์ด๋๋ ๊ฒฝ์ฐ
            if not (0 <= next_x < M and 0 <= next_y < N):
                break
            # ๋ฐ๋ค์ธ ๊ฒฝ์ฐ
            elif map_list[next_y][next_x] == 0:
                length += 1
                stack.append((next_x, next_y))
            # ๋ชฉ์ ์ง์ธ ๊ฒฝ์ฐ
            elif map_list[next_y][next_x] == dest:
                if length >= 2:
                    result = min(result, length)
                break
            # ๋ชฉ์ ์ง๊ฐ ์๋ ๋์ธ ๊ฒฝ์ฐ
            else:
                break
    return result
```

- **DFS** ํ์์ ํตํด ๋ค๋ฆฌ ์ฐ๊ฒฐํ๋ ํจ์  
  - **๋ฐฉํฅ 4๊ตฐ๋ฐ ํ์ธ**  
    ์ํ์ข์ฐ ๋ฐฉํฅ 4๊ตฐ๋ฐ ์ ๋ถ ๋ฐ๋ณต๋ฌธ์ ๋๋ฉด์ ํ์ธ  
  - **DFS ํ์**
    ๊ทธ ๋ฐฉํฅ์ผ๋ก **DFS** ํ์ํ๋ฉด์ ๋ค๋ฆฌ๋ฅผ ๋ง๋ค ์ ์๋์ง ํ์ธ  
    ๋ฒ์์ ๋ฒ์ด๋๊ฑฐ๋ ๋ชฉ์ ์ง๊ฐ ์๋ ๋์ธ ๊ฒฝ์ฐ์๋ ๋ค๋ฆฌ๋ฅผ ๋ง๋ค ์ ์์ผ๋ฏ๋ก **break**  
    `map_list` ๊ฐ์ด **0**์ด์ด์ ๋ฐ๋ค์ธ ๊ฒฝ์ฐ์๋ `length` **+1** ํด์ ๋ค๋ฆฌ ๊ธธ์ด ๋๋ฆฌ๊ณ ,  
    `map_list` ๊ฐ์ด `dest`๋ฉด ๋ชฉ์ ์ง์ ๋์ฐฉํ ๊ฒฝ์ฐ์ด๋ฏ๋ก `result`์ `length` ๋น๊ตํด์ **์ต์๊ฐ**์ ์ ์ฅ  
    ์ด ๋, ๋ฌธ์  ์กฐ๊ฑด์์ ๋ค๋ฆฌ ๊ธธ์ด๋ **2 ์ด์**์ด์ด์ผ ํ๊ธฐ ๋๋ฌธ์ ์กฐ๊ฑด ํ์ธํ๊ณ  ์ ์ฅ  
    
---

```Python
def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if(a < b):
        parent[b] = a
    else:
        parent[a] = b

def kruskal():
    result, cnt = 0, 0
    while h:
        l, a, b = heapq.heappop(h)
        if find_parent(parent, a) != find_parent(parent, b):
            union_parent(parent, a, b)
            result += l
            cnt += 1
    # ๋ชจ๋  ๋ธ๋ ๋ฐฉ๋ฌธํ๋์ง ํ์ธ
    if cnt != island_cnt-2:
        return -1
    return result
```

- **Kruskal** ์๊ณ ๋ฆฌ์ฆ ์ด์ฉํด์ **MST** ํ์ธํ๋ ํจ์  
  - **์ฐ์ ์์ ํ๋ฅผ ์ด์ฉํด์ MST ํ์ธ**  
  - **๋ชจ๋  ๋ธ๋ ๋ฐฉ๋ฌธํ๋์ง ํ์ธ**
    
---

```Python
for i in range(N):
    for j in range(M):
        if not visited[i][j] and map_list[i][j] == 1:
            number_island(j, i, island_cnt)
            island_cnt += 1

parent = [int(x) for x in range(island_cnt)]
# ์ฌ ์กฐํฉ ์ ์์ฑ
comb_list = combinations([int(x) for x in range(1, island_cnt)], 2)
for comb in comb_list:
    comb = list(comb)
    bridge_len = sys.maxsize
    for i in range(N):
        for j in range(M):
            # ํด๋น ์กฐํฉ์ ๋ง๋ ๋ค๋ฆฌ ๋ง๋ค๊ณ  ๊ธธ์ด ์ต์๊ฐ ์ ์ฅ
            if map_list[i][j] == comb[0]:
                result = make_bridge(j, i, comb[1])
                bridge_len = min(result, bridge_len)
    # ์ฌ, ๋ค๋ฆฌ ์กฐํฉ ์ฐ์ ์์ ํ์ ์ ์ฅ
    if bridge_len != sys.maxsize:
        heapq.heappush(h, [bridge_len, comb[0], comb[1]])
# ํฌ๋ฃจ์ค์นผ ์๊ณ ๋ฆฌ์ฆ ์ํ
print(kruskal())
```

- `number_island` ํจ์ ์คํํด์ ์ฌ ๋๋ฒ๋ง  
- ์ฌ ์กฐํฉ ์ ์์ฑํ๊ณ  ๋ ์ฌ์ด์ ๋ค๋ฆฌ๋ฅผ ๋ง๋ค ์ ์๋์ง `make_bridge` ํจ์๋ฅผ ์คํํด์ ํ์ธํ๊ณ  ๋ค๋ฆฌ ์์ฑ  
- ์ฌ, ๋ค๋ฆฌ ์กฐํฉ **์ฐ์ ์์ ํ**์ ์ ์ฅํ๊ณ  **Kruskal** ์๊ณ ๋ฆฌ์ฆ ์ํ  

---

## ๐งฉ Code
<details><summary>์ ์ฒด ์ฝ๋ ํ์ธ</summary>

```Python
import sys, heapq
from collections import deque
from itertools import combinations

def number_island(x, y, cnt):
    q = deque()
    q.append((x, y))
    map_list[y][x] = cnt
    # BFS ํ์
    while q:
        x, y = q.popleft()
        for i in range(4):
            next_x, next_y = x + dx[i], y + dy[i]
            if 0 <= next_x < M and 0 <= next_y < N:
                if not visited[next_y][next_x] and map_list[next_y][next_x] == 1:
                    map_list[next_y][next_x] = cnt
                    q.append((next_x, next_y))
                    visited[next_y][next_x] = True

def make_bridge(x, y, dest):
    result = sys.maxsize
    # ๋ฐฉํฅ 4๊ตฐ๋ฐ
    for i in range(4):
        stack = []
        stack.append((x, y))
        length = 0
        # ๊ทธ ๋ฐฉํฅ์ผ๋ก DFS ํ์
        while stack:
            cur_x, cur_y = stack.pop()
            next_x, next_y = cur_x + dx[i], cur_y + dy[i]
            # ๋ฒ์ ๋ฒ์ด๋๋ ๊ฒฝ์ฐ
            if not (0 <= next_x < M and 0 <= next_y < N):
                break
            # ๋ฐ๋ค์ธ ๊ฒฝ์ฐ
            elif map_list[next_y][next_x] == 0:
                length += 1
                stack.append((next_x, next_y))
            # ๋ชฉ์ ์ง์ธ ๊ฒฝ์ฐ
            elif map_list[next_y][next_x] == dest:
                if length >= 2:
                    result = min(result, length)
                break
            # ๋ชฉ์ ์ง๊ฐ ์๋ ๋์ธ ๊ฒฝ์ฐ
            else:
                break
    return result

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if(a < b):
        parent[b] = a
    else:
        parent[a] = b

def kruskal():
    result, cnt = 0, 0
    while h:
        l, a, b = heapq.heappop(h)
        if find_parent(parent, a) != find_parent(parent, b):
            union_parent(parent, a, b)
            result += l
            cnt += 1
    # ๋ชจ๋  ๋ธ๋ ๋ฐฉ๋ฌธํ๋์ง ํ์ธ
    if cnt != island_cnt-2:
        return -1
    return result

N, M = map(int, sys.stdin.readline().split())
map_list = [[int(x) for x in sys.stdin.readline().split()] for _ in range(N)]
visited = [[False for _ in range(M)] for _ in range(N)]
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
island_cnt, h = 1, []

for i in range(N):
    for j in range(M):
        if not visited[i][j] and map_list[i][j] == 1:
            number_island(j, i, island_cnt)
            island_cnt += 1

parent = [int(x) for x in range(island_cnt)]
# ์ฌ ์กฐํฉ ์ ์์ฑ
comb_list = combinations([int(x) for x in range(1, island_cnt)], 2)
for comb in comb_list:
    comb = list(comb)
    bridge_len = sys.maxsize
    for i in range(N):
        for j in range(M):
            # ํด๋น ์กฐํฉ์ ๋ง๋ ๋ค๋ฆฌ ๋ง๋ค๊ณ  ๊ธธ์ด ์ต์๊ฐ ์ ์ฅ
            if map_list[i][j] == comb[0]:
                result = make_bridge(j, i, comb[1])
                bridge_len = min(result, bridge_len)
    # ์ฌ, ๋ค๋ฆฌ ์กฐํฉ ์ฐ์ ์์ ํ์ ์ ์ฅ
    if bridge_len != sys.maxsize:
        heapq.heappush(h, [bridge_len, comb[0], comb[1]])
# ํฌ๋ฃจ์ค์นผ ์๊ณ ๋ฆฌ์ฆ ์ํ
print(kruskal())
```
</details>

---

## ๐ Review

DFS, BFS, MST ๋ค ์์ฌ์๋ ๋ณต์กํ ๋ฌธ์ ์๋ค.  
์์ง์ ๋ฌธ์ ๋ฅผ ๋ณด๊ณ  ์ด๋ค ์๊ณ ๋ฆฌ์ฆ์ ์ฌ์ฉํด์ผ ๋๋์ง ํ๋จํ๋๊ฒ ์ต์ํ์ง ์์์ ๋ฌธ์ ์ ์ ํ์๋ ์๊ณ ๋ฆฌ์ฆ ๋ถ๋ฅ๋ฅผ ๋ณด๊ณ  ๋ฌธ์ ๋ฅผ ํ์๋ค,,  
Kruskal ์๊ณ ๋ฆฌ์ฆ์ ๊ธฐ์ต์ด ์ ์๋์ ์ด์ฝํ ํ์ด์ฌ ์ฝ๋๋ฅผ ์ฐธ๊ณ ํด์ ๋ค์ ๊ณต๋ถํ๊ณ  ๊ตฌํํ๋ค.  
๋ฌธ์ ๋ง๋ค ์ด๋ค ์๊ณ ๋ฆฌ์ฆ์ ์ฌ์ฉํด์ผ ๋๋์ง ์ ํ๋จํ  ์ ์๋๋ก ์ฐ์ตํด์ผ๊ฒ ๋ค..!  



```toc
```