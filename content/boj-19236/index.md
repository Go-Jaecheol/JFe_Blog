---
emoji: ๐ป
title: "[BOJ] 19236๋ฒ: ์ฒญ์๋ ์์ด (Python)"
date: '2022-01-12 18:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## ๋ฌธ์ 
https://www.acmicpc.net/problem/19236

์๊ธฐ ์์ด๊ฐ ์ฑ์ฅํด ์ฒญ์๋ ์์ด๊ฐ ๋์๋ค.  

4ร4ํฌ๊ธฐ์ ๊ณต๊ฐ์ด ์๊ณ , ํฌ๊ธฐ๊ฐ 1ร1์ธ ์ ์ฌ๊ฐํ ์นธ์ผ๋ก ๋๋์ด์ ธ ์๋ค. ๊ณต๊ฐ์ ๊ฐ ์นธ์ (x, y)์ ๊ฐ์ด ํํํ๋ฉฐ, x๋ ํ์ ๋ฒํธ, y๋ ์ด์ ๋ฒํธ์ด๋ค. ํ ์นธ์๋ ๋ฌผ๊ณ ๊ธฐ๊ฐ ํ ๋ง๋ฆฌ ์กด์ฌํ๋ค. ๊ฐ ๋ฌผ๊ณ ๊ธฐ๋ ๋ฒํธ์ ๋ฐฉํฅ์ ๊ฐ์ง๊ณ  ์๋ค. ๋ฒํธ๋ 1๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ๊ณ , 16๋ณด๋ค ์๊ฑฐ๋ ๊ฐ์ ์์ฐ์์ด๋ฉฐ, ๋ ๋ฌผ๊ณ ๊ธฐ๊ฐ ๊ฐ์ ๋ฒํธ๋ฅผ ๊ฐ๋ ๊ฒฝ์ฐ๋ ์๋ค. ๋ฐฉํฅ์ 8๊ฐ์ง ๋ฐฉํฅ(์ํ์ข์ฐ, ๋๊ฐ์ ) ์ค ํ๋์ด๋ค.  

์ค๋์ ์ฒญ์๋ ์์ด๊ฐ ์ด ๊ณต๊ฐ์ ๋ค์ด๊ฐ ๋ฌผ๊ณ ๊ธฐ๋ฅผ ๋จน์ผ๋ ค๊ณ  ํ๋ค. ์ฒญ์๋ ์์ด๋ (0, 0)์ ์๋ ๋ฌผ๊ณ ๊ธฐ๋ฅผ ๋จน๊ณ , (0, 0)์ ๋ค์ด๊ฐ๊ฒ ๋๋ค. ์์ด์ ๋ฐฉํฅ์ (0, 0)์ ์๋ ๋ฌผ๊ณ ๊ธฐ์ ๋ฐฉํฅ๊ณผ ๊ฐ๋ค. ์ดํ ๋ฌผ๊ณ ๊ธฐ๊ฐ ์ด๋ํ๋ค.  

๋ฌผ๊ณ ๊ธฐ๋ ๋ฒํธ๊ฐ ์์ ๋ฌผ๊ณ ๊ธฐ๋ถํฐ ์์๋๋ก ์ด๋ํ๋ค. ๋ฌผ๊ณ ๊ธฐ๋ ํ ์นธ์ ์ด๋ํ  ์ ์๊ณ , ์ด๋ํ  ์ ์๋ ์นธ์ ๋น ์นธ๊ณผ ๋ค๋ฅธ ๋ฌผ๊ณ ๊ธฐ๊ฐ ์๋ ์นธ, ์ด๋ํ  ์ ์๋ ์นธ์ ์์ด๊ฐ ์๊ฑฐ๋, ๊ณต๊ฐ์ ๊ฒฝ๊ณ๋ฅผ ๋๋ ์นธ์ด๋ค. ๊ฐ ๋ฌผ๊ณ ๊ธฐ๋ ๋ฐฉํฅ์ด ์ด๋ํ  ์ ์๋ ์นธ์ ํฅํ  ๋๊น์ง ๋ฐฉํฅ์ 45๋ ๋ฐ์๊ณ ํ์ ์ํจ๋ค. ๋ง์ฝ, ์ด๋ํ  ์ ์๋ ์นธ์ด ์์ผ๋ฉด ์ด๋์ ํ์ง ์๋๋ค. ๊ทธ ์ธ์ ๊ฒฝ์ฐ์๋ ๊ทธ ์นธ์ผ๋ก ์ด๋์ ํ๋ค. ๋ฌผ๊ณ ๊ธฐ๊ฐ ๋ค๋ฅธ ๋ฌผ๊ณ ๊ธฐ๊ฐ ์๋ ์นธ์ผ๋ก ์ด๋ํ  ๋๋ ์๋ก์ ์์น๋ฅผ ๋ฐ๊พธ๋ ๋ฐฉ์์ผ๋ก ์ด๋ํ๋ค.  

๋ฌผ๊ณ ๊ธฐ์ ์ด๋์ด ๋ชจ๋ ๋๋๋ฉด ์์ด๊ฐ ์ด๋ํ๋ค. ์์ด๋ ๋ฐฉํฅ์ ์๋ ์นธ์ผ๋ก ์ด๋ํ  ์ ์๋๋ฐ, ํ ๋ฒ์ ์ฌ๋ฌ ๊ฐ์ ์นธ์ ์ด๋ํ  ์ ์๋ค. ์์ด๊ฐ ๋ฌผ๊ณ ๊ธฐ๊ฐ ์๋ ์นธ์ผ๋ก ์ด๋ํ๋ค๋ฉด, ๊ทธ ์นธ์ ์๋ ๋ฌผ๊ณ ๊ธฐ๋ฅผ ๋จน๊ณ , ๊ทธ ๋ฌผ๊ณ ๊ธฐ์ ๋ฐฉํฅ์ ๊ฐ์ง๊ฒ ๋๋ค. ์ด๋ํ๋ ์ค์ ์ง๋๊ฐ๋ ์นธ์ ์๋ ๋ฌผ๊ณ ๊ธฐ๋ ๋จน์ง ์๋๋ค. ๋ฌผ๊ณ ๊ธฐ๊ฐ ์๋ ์นธ์ผ๋ก๋ ์ด๋ํ  ์ ์๋ค. ์์ด๊ฐ ์ด๋ํ  ์ ์๋ ์นธ์ด ์์ผ๋ฉด ๊ณต๊ฐ์์ ๋ฒ์ด๋ ์ง์ผ๋ก ๊ฐ๋ค. ์์ด๊ฐ ์ด๋ํ ํ์๋ ๋ค์ ๋ฌผ๊ณ ๊ธฐ๊ฐ ์ด๋ํ๋ฉฐ, ์ดํ ์ด ๊ณผ์ ์ด ๊ณ์ํด์ ๋ฐ๋ณต๋๋ค.  

์์ด๊ฐ ๋จน์ ์ ์๋ ๋ฌผ๊ณ ๊ธฐ ๋ฒํธ์ ํฉ์ ์ต๋๊ฐ์ ๊ตฌํด๋ณด์.  

> ๋ฌธ์  ์์ธํ ์ ๋ณด๋ [์ฒญ์๋ ์์ด](https://www.acmicpc.net/problem/19236)   

---

## ์๋ ฅ  
์ฒซ์งธ ์ค๋ถํฐ 4๊ฐ์ ์ค์ ๊ฐ ์นธ์ ๋ค์ด์๋ ๋ฌผ๊ณ ๊ธฐ์ ์ ๋ณด๊ฐ 1๋ฒ ํ๋ถํฐ ์์๋๋ก ์ฃผ์ด์ง๋ค. ๋ฌผ๊ณ ๊ธฐ์ ์ ๋ณด๋ ๋ ์ ์ ai, bi๋ก ์ด๋ฃจ์ด์ ธ ์๊ณ , ai๋ ๋ฌผ๊ณ ๊ธฐ์ ๋ฒํธ, bi๋ ๋ฐฉํฅ์ ์๋ฏธํ๋ค. ๋ฐฉํฅ bi๋ 8๋ณด๋ค ์๊ฑฐ๋ ๊ฐ์ ์์ฐ์๋ฅผ ์๋ฏธํ๊ณ , 1๋ถํฐ ์์๋๋ก โ, โ, โ, โ, โ, โ, โ, โ ๋ฅผ ์๋ฏธํ๋ค.   

---

## ์ถ๋ ฅ  
์์ด๊ฐ ๋จน์ ์ ์๋ ๋ฌผ๊ณ ๊ธฐ ๋ฒํธ์ ํฉ์ ์ต๋๊ฐ์ ์ถ๋ ฅํ๋ค.  

---

## ๐ Algorithm
**์๋ฎฌ๋ ์ด์, Backtracking**

## ๐ป Logic

```Python
fish = []
fish_dir = [0 for _ in range(16)]
dx = [0, -1, -1, -1, 0, 1, 1, 1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]
for _ in range(4):
    temp = []
    temp_input = [int(x) for x in sys.stdin.readline().split()]
    for i in range(4):
        # ์ธ๋ฑ์ฑ ํธํ๊ฒ ํ๊ธฐ ์ํด ๋ฌผ๊ณ ๊ธฐ ๋ฒํธ-1๋ก ์ ์ฅ, -1: ๋น์นธ, -2: ์์ด
        temp.append(temp_input[i*2]-1)
        fish_dir[temp_input[i*2]-1] = temp_input[i*2+1]
    fish.append(temp)
```

- ๋ฌผ๊ณ ๊ธฐ ์์น์ ๋ฌผ๊ณ ๊ธฐ ๋ฐฉํฅ ์ ์ฅ  
  ์ธ๋ฑ์ฑ ํธํ๊ฒ ํ๊ธฐ ์ํด **๋ฌผ๊ณ ๊ธฐ ๋ฒํธ-1**๋ก ์ ์ฅ, **-1: ๋น์นธ**, **-2: ์์ด**  

---

```Python
def move_fish(fish, fish_dir):
    # ๋ฌผ๊ณ ๊ธฐ ์์๋๋ก ์ด๋
    for i in range(16):
        cur_x, cur_y = -1, -1
        # ํ์ฌ ์์น ์ธ๋ฑ์ค ์ฐพ๊ธฐ
        for j in range(4):
            for k in range(4):
                if fish[j][k] == i:
                    cur_x, cur_y = k, j
        if cur_x == -1 and cur_y == -1 : continue
        # ์ด๋ ๊ฐ๋ฅํ ๋ฐฉํฅ ํ์ธ
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

- ๋ฌผ๊ณ ๊ธฐ ์ด๋ ํจ์  
  - **๋ฌผ๊ณ ๊ธฐ ์์๋๋ก ์ด๋**  
    ์ฃผ์ด์ง ์กฐ๊ฑด์ ๋ง๊ฒ ์ฒซ๋ฒ์งธ๋ถํฐ 16๋ฒ์งธ๊น์ง ์์๋๋ก ์ด๋  
  - **์ด๋ ๊ฐ๋ฅํ ๋ฐฉํฅ ํ์ธ**  
    `fish_dir`์ ์ฐธ๊ณ ํ์ฌ ๋ค์ ์ด๋ํ  ์์น ๊ณ์ฐํ๊ณ  ์ด๋ ๋ถ๊ฐ๋ฅํ๋ฉด ๋ฐฉํฅ์ ๋ฐ๊พธ๋ฉด์ ๋ค์ ์์น ๊ณ์ฐ  
    8๊ฐ ๋ฐฉํฅ ์ ๋ถ ๋ค ์ด๋ ๋ถ๊ฐ๋ฅํ๋ฉด ์ด๋ํ์ง ์๊ณ  ์งํ  

---

```Python
def move_shark(x, y, cur_shark, fish, fish_dir, sum):
    global result
    shark_location = []
    next_x, next_y = x, y
    move_fish(fish, fish_dir)
    result = max(result, sum)
    # ์์ด ์ด๋ ๊ฐ๋ฅํ ์์น ํ์ธ ํ, ์ ์ฅ
    for _ in range(4):
        next_x += dx[fish_dir[cur_shark] - 1]
        next_y += dy[fish_dir[cur_shark] - 1]
        if 0 <= next_x < 4 and 0 <= next_y < 4 and fish[next_y][next_x] >= 0:
            shark_location.append((next_x, next_y))
    # ์ด๋ ๊ฐ๋ฅํ ์์น ์์ ๋๊น์ง ์ฌ๊ท
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

- ์์ด ์ด๋ ์ฌ๊ทํจ์  
  - **์์ด ์ด๋ ๊ฐ๋ฅํ ์์น ํ์ธ ํ, ์ ์ฅ**  
    ํ์ฌ ๋ฐฉํฅ์ผ๋ก ์ด๋ ๊ฐ๋ฅํ ์์น๊ฐ ์์ผ๋ฉด `shark_location`์ **append**  
  - **์ด๋ ๊ฐ๋ฅํ ์์น ์์ ๋๊น์ง ์ฌ๊ท**  
    shark_location์ ์ ์ฅ๋์ด ์๋ ๊ฐ **pop** ํด์ ๊ทธ ์์น๋ก ์ด๋ ๊ณ์ฐํ๊ณ   
    `move_shark` ํจ์ **์ฌ๊ท**  
    ์ด๋ ๊ฒ ์ฌ๊ทํ๋ฉด์ ์ ์ผ ํฐ `sum` ๊ฐ `result`์ **max** ๊ณ์ฐํด์ ์ ์ฅ  

---

## ๐งฉ Code
<details><summary>์ ์ฒด ์ฝ๋ ํ์ธ</summary>

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
        # ์ธ๋ฑ์ฑ ํธํ๊ฒ ํ๊ธฐ ์ํด ๋ฌผ๊ณ ๊ธฐ ๋ฒํธ-1๋ก ์ ์ฅ, -1: ๋น์นธ, -2: ์์ด
        temp.append(temp_input[i*2]-1)
        fish_dir[temp_input[i*2]-1] = temp_input[i*2+1]
    fish.append(temp)

def move_fish(fish, fish_dir):
    # ๋ฌผ๊ณ ๊ธฐ ์์๋๋ก ์ด๋
    for i in range(16):
        cur_x, cur_y = -1, -1
        # ํ์ฌ ์์น ์ธ๋ฑ์ค ์ฐพ๊ธฐ
        for j in range(4):
            for k in range(4):
                if fish[j][k] == i:
                    cur_x, cur_y = k, j
        if cur_x == -1 and cur_y == -1 : continue
        # ์ด๋ ๊ฐ๋ฅํ ๋ฐฉํฅ ํ์ธ
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
    # ์์ด ์ด๋ ๊ฐ๋ฅํ ์์น ํ์ธ ํ, ์ ์ฅ
    for _ in range(4):
        next_x += dx[fish_dir[cur_shark] - 1]
        next_y += dy[fish_dir[cur_shark] - 1]
        if 0 <= next_x < 4 and 0 <= next_y < 4 and fish[next_y][next_x] >= 0:
            shark_location.append((next_x, next_y))
    # ์ด๋ ๊ฐ๋ฅํ ์์น ์์ ๋๊น์ง ์ฌ๊ท
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

## ๐ Review

์ฒ์ ๊ฐ์ ์ด๋ค ์์ผ๋ก ์ ์ฅํ๋ ๊ฒ์ด ๋ ํจ์จ์ ์ผ์ง ์๊ฐํ๋ค๊ฐ ์๋ชป ์๊ฐํด์ ์๊ฐ์ด ๊ฑธ๋ ธ๊ณ , ์ ์ฒด ์ด๋ํ  ๋ ์ฌ๊ท๋ก ์ง์ผํ๋ค๋ ๊ฑด ์ฝ๊ฒ ์ ์ ์์์ง๋ง ์ญ์๋ ์ฌ๊ท๋ ์ด๋ ต๋ค...  
์ผ๋จ ์ง๊ธ์ ์ผ๋ง๋ ๋ ๋นจ๋ฆฌ ํจ์จ์ ์ผ๋ก ํ์ง ์๊ฐํ๋ ๊ฒ๋ณด๋จ ๊ทธ๋ฅ ๋ง์ด ํ์ด๋ด์ผ๊ฒ ๋ค,


```toc
```