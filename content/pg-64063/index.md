---
emoji: ๐ป
title: "[Programmers] 64063๋ฒ: ํธํ ๋ฐฉ ๋ฐฐ์  (Python)"
date: '2022-05-16 01:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2019 ์นด์นด์ค ๊ฐ๋ฐ์ ๊ฒจ์ธ ์ธํด์ญ]

## ๋ฌธ์ 
https://programmers.co.kr/learn/courses/30/lessons/64063

[๋ณธ ๋ฌธ์ ๋ ์ ํ์ฑ๊ณผ ํจ์จ์ฑ ํ์คํธ ๊ฐ๊ฐ ์ ์๊ฐ ์๋ ๋ฌธ์ ์๋๋ค.]

"์ค๋ธ์ฐํ์ด"์์ ํธํ์ ์ด์ํ๊ณ  ์๋ "์ค์นดํผ"๋ ํธํ์ ํฌ์ํ๋ ค๋ ๊ณ ๊ฐ๋ค์๊ฒ ๋ฐฉ์ ๋ฐฐ์ ํ๋ ค ํฉ๋๋ค. ํธํ์๋ ๋ฐฉ์ด ์ด k๊ฐ ์์ผ๋ฉฐ, ๊ฐ๊ฐ์ ๋ฐฉ์ 1๋ฒ๋ถํฐ k๋ฒ๊น์ง ๋ฒํธ๋ก ๊ตฌ๋ถํ๊ณ  ์์ต๋๋ค. ์ฒ์์๋ ๋ชจ๋  ๋ฐฉ์ด ๋น์ด ์์ผ๋ฉฐ "์ค์นดํผ"๋ ๋ค์๊ณผ ๊ฐ์ ๊ท์น์ ๋ฐ๋ผ ๊ณ ๊ฐ์๊ฒ ๋ฐฉ์ ๋ฐฐ์ ํ๋ ค๊ณ  ํฉ๋๋ค.

1. ํ ๋ฒ์ ํ ๋ช์ฉ ์ ์ฒญํ ์์๋๋ก ๋ฐฉ์ ๋ฐฐ์ ํฉ๋๋ค.  
2. ๊ณ ๊ฐ์ ํฌ์ํ๊ธฐ ์ํ๋ ๋ฐฉ ๋ฒํธ๋ฅผ ์ ์ถํฉ๋๋ค.  
3. ๊ณ ๊ฐ์ด ์ํ๋ ๋ฐฉ์ด ๋น์ด ์๋ค๋ฉด ์ฆ์ ๋ฐฐ์ ํฉ๋๋ค.  
4. ๊ณ ๊ฐ์ด ์ํ๋ ๋ฐฉ์ด ์ด๋ฏธ ๋ฐฐ์ ๋์ด ์์ผ๋ฉด ์ํ๋ ๋ฐฉ๋ณด๋ค ๋ฒํธ๊ฐ ํฌ๋ฉด์ ๋น์ด์๋ ๋ฐฉ ์ค ๊ฐ์ฅ ๋ฒํธ๊ฐ ์์ ๋ฐฉ์ ๋ฐฐ์ ํฉ๋๋ค.  

์๋ฅผ ๋ค์ด, ๋ฐฉ์ด ์ด 10๊ฐ์ด๊ณ , ๊ณ ๊ฐ๋ค์ด ์ํ๋ ๋ฐฉ ๋ฒํธ๊ฐ ์์๋๋ก [1, 3, 4, 1, 3, 1] ์ผ ๊ฒฝ์ฐ ๋ค์๊ณผ ๊ฐ์ด ๋ฐฉ์ ๋ฐฐ์ ๋ฐ๊ฒ ๋ฉ๋๋ค.

|์ํ๋ ๋ฐฉ ๋ฒํธ|๋ฐฐ์ ๋ ๋ฐฉ ๋ฒํธ|
|---|---|
|1|1|
|3|3|
|4|4|
|1|2|
|3|5|
|1|6|

์ ์ฒด ๋ฐฉ ๊ฐ์ k์ ๊ณ ๊ฐ๋ค์ด ์ํ๋ ๋ฐฉ ๋ฒํธ๊ฐ ์์๋๋ก ๋ค์ด์๋ ๋ฐฐ์ด room_number๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ๊ฐ ๊ณ ๊ฐ์๊ฒ ๋ฐฐ์ ๋๋ ๋ฐฉ ๋ฒํธ๋ฅผ ์์๋๋ก ๋ฐฐ์ด์ ๋ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

---

## ์ ํ์ฌํญ  
- k๋ 1 ์ด์ 1012 ์ดํ์ธ ์์ฐ์์๋๋ค.  
- room_number ๋ฐฐ์ด์ ํฌ๊ธฐ๋ 1 ์ด์ 200,000 ์ดํ์๋๋ค.  
- room_number ๋ฐฐ์ด ๊ฐ ์์๋ค์ ๊ฐ์ 1 ์ด์ k ์ดํ์ธ ์์ฐ์์๋๋ค.  
- room_number ๋ฐฐ์ด์ ๋ชจ๋  ๊ณ ๊ฐ์ด ๋ฐฉ์ ๋ฐฐ์ ๋ฐ์ ์ ์๋ ๊ฒฝ์ฐ๋ง ์๋ ฅ์ผ๋ก ์ฃผ์ด์ง๋๋ค.  
    - ์๋ฅผ ๋ค์ด, k = 5, room_number = [5, 5] ์ ๊ฐ์ ๊ฒฝ์ฐ๋ ๋ฐฉ์ ๋ฐฐ์ ๋ฐ์ง ๋ชปํ๋ ๊ณ ๊ฐ์ด ๋ฐ์ํ๋ฏ๋ก ์ด๋ฐ ๊ฒฝ์ฐ๋ ์๋ ฅ์ผ๋ก ์ฃผ์ด์ง์ง ์์ต๋๋ค.  

---

## ์์ถ๋ ฅ ์  
|k|room_number|result|
|---|---|---|
|10|[1,3,4,1,3,1]|[1,3,4,2,5,6]|

---

## ๐ Algorithm
**DP**

## ๐ป Logic

```Python
    dp = defaultdict(int)   # ์ํ๋ ๋ฐฉ์ ๋ํด ๊ฐ ์ ์๋ ๋ค์ ๋ฐฉ ๋ฒํธ ๋ฉ๋ชจ์ด์ ์ด์ (0์ด๋ฉด ๋น์ด์๋ค๋ ๋ป)
    # ํ ๋ช์ฉ ๋น ๋ฐฉ ์ฐพ์์ ๋ฐฐ์ 
    for num in room_number:
        temp = []
        next_num = num
        # ๋น ๋ฐฉ์ ์ฐพ์ ๋๊น์ง ํ์
        while dp[next_num] > 0:
            next_num = dp[next_num]
            temp.append(next_num)   # ๋์ค์ dp ํ๋ฒ์ ์๋ฐ์ดํธ ํ๊ธฐ ์ํด ๋ฐ๋ก ์ ์ฅ
        # ๋น ๋ฐฉ ๋ค์ ์์น๋ก dp ์๋ฐ์ดํธ
        dp[next_num] = next_num + 1
        for i in temp:
            dp[i] = next_num + 1
        # ๋น ๋ฐฉ์ผ๋ก ๋ฐฐ์ 
        answer.append(next_num)
    return answer
```
- **๋ฉ๋ชจ์ด์ ์ด์**  
    ์ํ๋ ๋ฐฉ์ด ๋น์ด ์์ง ์๋ ๊ฒฝ์ฐ์ ๋ค์ ๊ฐ๋ฅํ ๋ฐฉ์ ๋นจ๋ฆฌ ์ฐพ์ ์ ์๋๋ก ๊ฐ ์ ์๋ ๋ค์ ๋ฐฉ ๋ฒํธ๋ฅผ ์ ์ฅํด๋๋ค.  
    `defaultdict`๋ฅผ ์ฌ์ฉํด์ **dictionary** ํํ๋ก ์ ์ฅํ๊ณ , ๊ธฐ๋ณธ๊ฐ์ **0**์ผ๋ก ์ค์ ํด์ **0**์ด๋ฉด **๋น์ด ์๋ ์ํ**  
- **๋น ๋ฐฉ์ ์ฐพ์ ๋๊น์ง ํ์**  
    ํด๋น ๋ฐฉ ๋ฒํธ์ `dp` ๊ฐ์ด ์กด์ฌํ๋ฉด ๊ทธ `dp` ๊ฐ์ผ๋ก ๊ณ์ ๋ฐ๋ณตํด์ `dp` ๊ฐ์ด **0**์ผ ๋๊น์ง ์ฐพ๋๋ค.  
    ํ์ ๊ณผ์ ์์ ๋ฐฉ๋ฌธํ ๋ฐฉ ๋ฒํธ๋ค์ ๋์ค์ `dp`๋ฅผ ํ๋ฒ์ ์๋ฐ์ดํธ ํ๊ธฐ ์ํด ๋ฐ๋ก ์ ์ฅํด๋๊ณ ,  
    ๋น ๋ฐฉ ๋ค์ ์์น๋ก ๋ฐฉ๋ฌธํ `dp` ๊ฐ๋ค์ ์ ๋ถ ์๋ฐ์ดํธํ๋ค.  
    ์ฐพ์ ๋น ๋ฐฉ์ `answer`์ **append**  


---

## ๐งฉ Code
<details><summary>์ ์ฒด ์ฝ๋ ํ์ธ</summary>

```Python
from collections import defaultdict

def solution(k, room_number):
    answer = []
    dp = defaultdict(int)   # ์ํ๋ ๋ฐฉ์ ๋ํด ๊ฐ ์ ์๋ ๋ค์ ๋ฐฉ ๋ฒํธ ๋ฉ๋ชจ์ด์ ์ด์ (0์ด๋ฉด ๋น์ด์๋ค๋ ๋ป)
    # ํ ๋ช์ฉ ๋น ๋ฐฉ ์ฐพ์์ ๋ฐฐ์ 
    for num in room_number:
        temp = []
        next_num = num
        # ๋น ๋ฐฉ์ ์ฐพ์ ๋๊น์ง ํ์
        while dp[next_num] > 0:
            next_num = dp[next_num]
            temp.append(next_num)   # ๋์ค์ dp ํ๋ฒ์ ์๋ฐ์ดํธ ํ๊ธฐ ์ํด ๋ฐ๋ก ์ ์ฅ
        # ๋น ๋ฐฉ ๋ค์ ์์น๋ก dp ์๋ฐ์ดํธ
        dp[next_num] = next_num + 1
        for i in temp:
            dp[i] = next_num + 1
        # ๋น ๋ฐฉ์ผ๋ก ๋ฐฐ์ 
        answer.append(next_num)
    return answer
```
</details>

---

## ๐ Review

๊ฐ๋จํ๊ฒ ๋์๋๋ฆฌ๋ง ์ฌ์ฉํด์ ํ์๋๋ฐ ์ญ์ ํจ์จ์ฑ์์ ๋ค ๊ฑธ๋ ธ๋ค.  
๊ทธ๋ฌ๋ค๊ฐ ๋ค์ ๊ฐ์ผ ๋๋ ์์น๋ฅผ ๋ฉ๋ชจ์ด์ ์ด์ ํ๋ฉด ๋ ๋น ๋ฅด๊ฒ ์ฐพ์ ์ ์๊ฒ ๋ค๊ณ  ์๊ฐํด์ DP๋ก ํ์๋ค.  


```toc
```