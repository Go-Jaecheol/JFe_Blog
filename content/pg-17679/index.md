---
emoji: ๐ป
title: "[Programmers] 17679๋ฒ: ํ๋ ์ฆ4๋ธ๋ก (Python)"
date: '2022-05-22 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2018 KAKAO BLIND RECRUITMENT 1์ฐจ]

## ๋ฌธ์ 
https://programmers.co.kr/learn/courses/30/lessons/17679

๋ธ๋ผ์ธ๋ ๊ณต์ฑ๋ฅผ ํต๊ณผํ ์ ์ ์ฌ์ ๋ผ์ด์ธ์ ์ ๊ท ๊ฒ์ ๊ฐ๋ฐ ์๋ฌด๋ฅผ ๋งก๊ฒ ๋์๋ค. ์ด๋ฒ์ ์ถ์ํ  ๊ฒ์ ์ ๋ชฉ์ "ํ๋ ์ฆ4๋ธ๋ก".
๊ฐ์ ๋ชจ์์ ์นด์นด์คํ๋ ์ฆ ๋ธ๋ก์ด 2ร2 ํํ๋ก 4๊ฐ๊ฐ ๋ถ์ด์์ ๊ฒฝ์ฐ ์ฌ๋ผ์ง๋ฉด์ ์ ์๋ฅผ ์ป๋ ๊ฒ์์ด๋ค.

๋ง์ฝ ํ์ด ์์ ๊ฐ์ด ์ฃผ์ด์ง ๊ฒฝ์ฐ, ๋ผ์ด์ธ์ด 2ร2๋ก ๋ฐฐ์น๋ 7๊ฐ ๋ธ๋ก๊ณผ ์ฝ์ด 2ร2๋ก ๋ฐฐ์น๋ 4๊ฐ ๋ธ๋ก์ด ์ง์์ง๋ค. ๊ฐ์ ๋ธ๋ก์ ์ฌ๋ฌ 2ร2์ ํฌํจ๋  ์ ์์ผ๋ฉฐ, ์ง์์ง๋ ์กฐ๊ฑด์ ๋ง์กฑํ๋ 2ร2 ๋ชจ์์ด ์ฌ๋ฌ ๊ฐ ์๋ค๋ฉด ํ๊บผ๋ฒ์ ์ง์์ง๋ค.

๋ธ๋ก์ด ์ง์์ง ํ์ ์์ ์๋ ๋ธ๋ก์ด ์๋๋ก ๋จ์ด์ ธ ๋น ๊ณต๊ฐ์ ์ฑ์ฐ๊ฒ ๋๋ค.

๋ง์ฝ ๋น ๊ณต๊ฐ์ ์ฑ์ด ํ์ ๋ค์ 2ร2 ํํ๋ก ๊ฐ์ ๋ชจ์์ ๋ธ๋ก์ด ๋ชจ์ด๋ฉด ๋ค์ ์ง์์ง๊ณ  ๋จ์ด์ง๊ณ ๋ฅผ ๋ฐ๋ณตํ๊ฒ ๋๋ค.

์ ์ด๊ธฐ ๋ฐฐ์น๋ฅผ ๋ฌธ์๋ก ํ์ํ๋ฉด ์๋์ ๊ฐ๋ค.
```

TTTANT
RRFACC
RRRFCC
TRRRAA
TTMMMF
TMMTTJ
```

๊ฐ ๋ฌธ์๋ ๋ผ์ด์ธ(R), ๋ฌด์ง(M), ์ดํผ์น(A), ํ๋ก๋(F), ๋ค์ค(N), ํ๋ธ(T), ์ ์ด์ง(J), ์ฝ(C)์ ์๋ฏธํ๋ค

์๋ ฅ์ผ๋ก ๋ธ๋ก์ ์ฒซ ๋ฐฐ์น๊ฐ ์ฃผ์ด์ก์ ๋, ์ง์์ง๋ ๋ธ๋ก์ ๋ชจ๋ ๋ช ๊ฐ์ธ์ง ํ๋จํ๋ ํ๋ก๊ทธ๋จ์ ์ ์ํ๋ผ.

---

## ์๋ ฅ ํ์  

- ์๋ ฅ์ผ๋ก ํ์ ๋์ด `m`, ํญ `n`๊ณผ ํ์ ๋ฐฐ์น ์ ๋ณด `board`๊ฐ ๋ค์ด์จ๋ค.
- 2 โฆ `n`, `m` โฆ 30
- `board`๋ ๊ธธ์ด `n`์ธ ๋ฌธ์์ด `m`๊ฐ์ ๋ฐฐ์ด๋ก ์ฃผ์ด์ง๋ค. ๋ธ๋ก์ ๋ํ๋ด๋ ๋ฌธ์๋ ๋๋ฌธ์ A์์ Z๊ฐ ์ฌ์ฉ๋๋ค.

---

## ์ถ๋ ฅ ํ์  

์๋ ฅ์ผ๋ก ์ฃผ์ด์ง ํ ์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ๋ช ๊ฐ์ ๋ธ๋ก์ด ์ง์์ง์ง ์ถ๋ ฅํ๋ผ.

---

## ์์  ์์ถ๋ ฅ  
|m|n|board|answer|
|---|---|---|---|
|4|5|["CCBDE", "AAADE", "AAABF", "CCBBF"]|14|
|6|6|["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]|15|


---

## ๐ Algorithm
**๊ตฌํ**

## ๐ป Logic

```Python
    # ๋ธ๋ก ํ์ธ
        for i in range(m-1):
            for j in range(n-1):
                # 2X2 ํํ๋ฉด temp์ append
                if board[i][j] != 0 and board[i][j] == board[i+1][j] == board[i][j+1] == board[i+1][j+1]:
                    temp.append((i, j))
                    play = True
```
- **๋ธ๋ก ํ์ธ**  
    2X2 ํํ๋ฉด temp์ append  

```Python
    # ๋ธ๋ก ์ง์ฐ๊ธฐ
        for i, j in temp:
            board[i][j] = 0
            board[i+1][j] = 0
            board[i][j+1] = 0
            board[i+1][j+1] = 0
```
- **๋ธ๋ก ์ง์ฐ๊ธฐ**  


```Python
    # ๋น ๊ณต๊ฐ ์ฑ์ฐ๊ธฐ
        for i in range(m-1):
            for j in range(n):
                # ๋ฐ์ ๋น ๊ณต๊ฐ ์์ผ๋ฉด ๋ด๋ฆฌ๊ธฐ
                if board[i][j] != 0 and board[i+1][j] == 0:
                    board[i+1][j], board[i][j] = board[i][j], board[i+1][j]
                    # ํด๋น ๋ธ๋ก ์์ ๋ธ๋ก๋ค๋ ๋ด๋ ค์ฃผ๊ธฐ
                    for k in range(i-1, 0, -1):
                        if board[k][j] != 0:
                            board[k][j], board[k+1][j] = board[k+1][j], board[k][j]
```
- **๋น ๊ณต๊ฐ ์ฑ์ฐ๊ธฐ**  
    ๋ฐ์ ๋น ๊ณต๊ฐ์ด ์๋์ง ํ์ธํ ๋ค์ ๋ธ๋ก์ ๋ด๋ ค์ฃผ๊ณ ,  
    ํด๋น ๋ธ๋ก ์์ ๋ธ๋ก๋ค๋ ํ์ธํด์ ๋ด๋ ค์ค๋ค.  


---

## ๐งฉ Code
<details><summary>์ ์ฒด ์ฝ๋ ํ์ธ</summary>

```Python
def solution(m, n, board):
    answer, temp, play = 0, [], True
    for i, b in enumerate(board):
        board[i] = list(b)
    # ๋์ด์ ์ง์ธ๊ฒ ์์ ๋๊น์ง ๋ฐ๋ณต
    while play:
        play = False
        temp = []
        # ๋ธ๋ก ํ์ธ
        for i in range(m-1):
            for j in range(n-1):
                # 2X2 ํํ๋ฉด temp์ append
                if board[i][j] != 0 and board[i][j] == board[i+1][j] == board[i][j+1] == board[i+1][j+1]:
                    temp.append((i, j))
                    play = True
        # ๋ธ๋ก ์ง์ฐ๊ธฐ
        for i, j in temp:
            board[i][j] = 0
            board[i+1][j] = 0
            board[i][j+1] = 0
            board[i+1][j+1] = 0
        # ๋น ๊ณต๊ฐ ์ฑ์ฐ๊ธฐ
        for i in range(m-1):
            for j in range(n):
                # ๋ฐ์ ๋น ๊ณต๊ฐ ์์ผ๋ฉด ๋ด๋ฆฌ๊ธฐ
                if board[i][j] != 0 and board[i+1][j] == 0:
                    board[i+1][j], board[i][j] = board[i][j], board[i+1][j]
                    # ํด๋น ๋ธ๋ก ์์ ๋ธ๋ก๋ค๋ ๋ด๋ ค์ฃผ๊ธฐ
                    for k in range(i-1, 0, -1):
                        if board[k][j] != 0:
                            board[k][j], board[k+1][j] = board[k+1][j], board[k][j]
    # ์ง์ด ๋ธ๋ก ์ ์ฒดํฌ
    for i in range(m):
        for j in range(n):
            if board[i][j] == 0:
                answer += 1
    return answer
```
</details>

---

## ๐ Review

๋ธ๋ก ํ์ธํด์ฃผ๊ณ , ์ง์ฐ๊ณ , ๋น ๊ณต๊ฐ ์ฑ์ฐ๋ ๊ณผ์ ์ ์์๋๋ก ๊ตฌํํ๋ฉด ๋๋ ๋ฌธ์ ๋ค.  
๋ธ๋ก ๋ด๋ ค์ฃผ๋ ๊ณผ์ ์์ ํ ๋ฒ ๋ด๋ฆฌ๊ณ , ๊ทธ ๋ค์์ ํด๋น ๋ธ๋ก ์์ ๋ธ๋ก๋ค๋ ๋ด๋ ค์ค์ผ ํ๋ ์ ์ ์์ด๋ฒ๋ ค์ ์ด ๋ถ๋ถ์์ ์ด์ง ๋นํฉํ์๋ค,,  

```toc
```