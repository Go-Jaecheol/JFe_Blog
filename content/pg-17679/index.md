---
emoji: 💻
title: "[Programmers] 17679번: 프렌즈4블록 (Python)"
date: '2022-05-22 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2018 KAKAO BLIND RECRUITMENT 1차]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/17679

블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 "프렌즈4블록".
같은 모양의 카카오프렌즈 블록이 2×2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.

만약 판이 위와 같이 주어질 경우, 라이언이 2×2로 배치된 7개 블록과 콘이 2×2로 배치된 4개 블록이 지워진다. 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.

블록이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.

만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.

위 초기 배치를 문자로 표시하면 아래와 같다.
```

TTTANT
RRFACC
RRRFCC
TRRRAA
TTMMMF
TMMTTJ
```

각 문자는 라이언(R), 무지(M), 어피치(A), 프로도(F), 네오(N), 튜브(T), 제이지(J), 콘(C)을 의미한다

입력으로 블록의 첫 배치가 주어졌을 때, 지워지는 블록은 모두 몇 개인지 판단하는 프로그램을 제작하라.

---

## 입력 형식  

- 입력으로 판의 높이 `m`, 폭 `n`과 판의 배치 정보 `board`가 들어온다.
- 2 ≦ `n`, `m` ≦ 30
- `board`는 길이 `n`인 문자열 `m`개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.

---

## 출력 형식  

입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.

---

## 예제 입출력  
|m|n|board|answer|
|---|---|---|---|
|4|5|["CCBDE", "AAADE", "AAABF", "CCBBF"]|14|
|6|6|["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]|15|


---

## 🔍 Algorithm
**구현**

## 💻 Logic

```Python
    # 블록 확인
        for i in range(m-1):
            for j in range(n-1):
                # 2X2 형태면 temp에 append
                if board[i][j] != 0 and board[i][j] == board[i+1][j] == board[i][j+1] == board[i+1][j+1]:
                    temp.append((i, j))
                    play = True
```
- **블록 확인**  
    2X2 형태면 temp에 append  

```Python
    # 블록 지우기
        for i, j in temp:
            board[i][j] = 0
            board[i+1][j] = 0
            board[i][j+1] = 0
            board[i+1][j+1] = 0
```
- **블록 지우기**  


```Python
    # 빈 공간 채우기
        for i in range(m-1):
            for j in range(n):
                # 밑에 빈 공간 있으면 내리기
                if board[i][j] != 0 and board[i+1][j] == 0:
                    board[i+1][j], board[i][j] = board[i][j], board[i+1][j]
                    # 해당 블록 위에 블록들도 내려주기
                    for k in range(i-1, 0, -1):
                        if board[k][j] != 0:
                            board[k][j], board[k+1][j] = board[k+1][j], board[k][j]
```
- **빈 공간 채우기**  
    밑에 빈 공간이 있는지 확인한 다음 블록을 내려주고,  
    해당 블록 위에 블록들도 확인해서 내려준다.  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(m, n, board):
    answer, temp, play = 0, [], True
    for i, b in enumerate(board):
        board[i] = list(b)
    # 더이상 지울게 없을 때까지 반복
    while play:
        play = False
        temp = []
        # 블록 확인
        for i in range(m-1):
            for j in range(n-1):
                # 2X2 형태면 temp에 append
                if board[i][j] != 0 and board[i][j] == board[i+1][j] == board[i][j+1] == board[i+1][j+1]:
                    temp.append((i, j))
                    play = True
        # 블록 지우기
        for i, j in temp:
            board[i][j] = 0
            board[i+1][j] = 0
            board[i][j+1] = 0
            board[i+1][j+1] = 0
        # 빈 공간 채우기
        for i in range(m-1):
            for j in range(n):
                # 밑에 빈 공간 있으면 내리기
                if board[i][j] != 0 and board[i+1][j] == 0:
                    board[i+1][j], board[i][j] = board[i][j], board[i+1][j]
                    # 해당 블록 위에 블록들도 내려주기
                    for k in range(i-1, 0, -1):
                        if board[k][j] != 0:
                            board[k][j], board[k+1][j] = board[k+1][j], board[k][j]
    # 지운 블록 수 체크
    for i in range(m):
        for j in range(n):
            if board[i][j] == 0:
                answer += 1
    return answer
```
</details>

---

## 📝 Review

블록 확인해주고, 지우고, 빈 공간 채우는 과정을 순서대로 구현하면 되는 문제다.  
블록 내려주는 과정에서 한 번 내리고, 그 다음에 해당 블록 위에 블록들도 내려줘야 하는 점을 잊어버려서 이 부분에서 살짝 당황했었다,,  

```toc
```