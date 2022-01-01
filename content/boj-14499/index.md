---
emoji: 💻
title: "[BOJ] 14499번: 주사위 굴리기 (Python)"
date: '2022-01-01 20:45:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/14499

크기가 N×M인 지도가 존재한다. 지도의 오른쪽은 동쪽, 위쪽은 북쪽이다. 이 지도의 위에 주사위가 하나 놓여져 있으며, 주사위의 전개도는 아래와 같다. 지도의 좌표는 (r, c)로 나타내며, r는 북쪽으로부터 떨어진 칸의 개수, c는 서쪽으로부터 떨어진 칸의 개수이다.  

```Python
  2
4 1 3
  5
  6
```

주사위는 지도 위에 윗 면이 1이고, 동쪽을 바라보는 방향이 3인 상태로 놓여져 있으며, 놓여져 있는 곳의 좌표는 (x, y) 이다. 가장 처음에 주사위에는 모든 면에 0이 적혀져 있다.  

지도의 각 칸에는 정수가 하나씩 쓰여져 있다. 주사위를 굴렸을 때, 이동한 칸에 쓰여 있는 수가 0이면, 주사위의 바닥면에 쓰여 있는 수가 칸에 복사된다. 0이 아닌 경우에는 칸에 쓰여 있는 수가 주사위의 바닥면으로 복사되며, 칸에 쓰여 있는 수는 0이 된다.  

주사위를 놓은 곳의 좌표와 이동시키는 명령이 주어졌을 때, 주사위가 이동했을 때 마다 상단에 쓰여 있는 값을 구하는 프로그램을 작성하시오.  

주사위는 지도의 바깥으로 이동시킬 수 없다. 만약 바깥으로 이동시키려고 하는 경우에는 해당 명령을 무시해야 하며, 출력도 하면 안 된다.  

---

## 입력  
첫째 줄에 지도의 세로 크기 N, 가로 크기 M (1 ≤ N, M ≤ 20), 주사위를 놓은 곳의 좌표 x, y(0 ≤ x ≤ N-1, 0 ≤ y ≤ M-1), 그리고 명령의 개수 K (1 ≤ K ≤ 1,000)가 주어진다.  

둘째 줄부터 N개의 줄에 지도에 쓰여 있는 수가 북쪽부터 남쪽으로, 각 줄은 서쪽부터 동쪽 순서대로 주어진다. 주사위를 놓은 칸에 쓰여 있는 수는 항상 0이다. 지도의 각 칸에 쓰여 있는 수는 10 미만의 자연수 또는 0이다.  

마지막 줄에는 이동하는 명령이 순서대로 주어진다. 동쪽은 1, 서쪽은 2, 북쪽은 3, 남쪽은 4로 주어진다.  

---

## 출력  
이동할 때마다 주사위의 윗 면에 쓰여 있는 수를 출력한다. 만약 바깥으로 이동시키려고 하는 경우에는 해당 명령을 무시해야 하며, 출력도 하면 안 된다.  

---

**예제 입력 1**  
```Python
4 2 0 0 8
0 2
3 4
5 6
7 8
4 4 4 1 3 3 3 2
```

**예제 출력 1**  
```Python
0
```

**예제 입력 2**  
```Python
3 3 1 1 9
1 2 3
4 0 5
6 7 8
1 3 2 2 4 4 1 1 3
```

**예제 출력 2**  
```Python
0
0
0
3
0
1
0
6
0
```

**예제 입력 3**  
```Python
2 2 0 0 16
0 2
3 4
4 4 4 4 1 1 1 1 3 3 3 3 2 2 2 2
```

**예제 출력 3**  
```Python
0
0
0
0
```

**예제 입력 4**  
```Python
3 3 0 0 16
0 1 2
3 4 5
6 7 8
4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2
```

**예제 출력 4**  
```Python
0
0
0
6
0
8
0
2
0
8
0
2
0
8
0
2
```

---

# [14499] 주사위 굴리기 - Python

## 🔍 Algorithm
**시뮬레이션**

## 💻 Logic

```Python
class Dice:
    top, front, right, left, back, bottom = 0, 1, 2, 3, 4, 5
    value = [0 for _ in range(6)]
    def move_dice(self, d):
        if d == 1:
            temp = self.top
            self.top = self.left
            self.left = self.bottom
            self.bottom = self.right
            self.right = temp
        elif d == 2:
            temp = self.top
            self.top = self.right
            self.right = self.bottom
            self.bottom = self.left
            self.left = temp
        elif d == 3:
            temp = self.top
            self.top = self.back
            self.back = self.bottom
            self.bottom = self.front
            self.front = temp
        elif d == 4:
            temp = self.top
            self.top = self.front
            self.front = self.bottom
            self.bottom = self.back
            self.back = temp
```

- **Dice 클래스**  
  - **주사위 상태 저장**  
    전개도에 맞게 `top, front, right, left, back, bottom` 에 초기 값 저장  
  - **주사위에 쓰여지는 수 저장**  
    주사위의 각 면에 쓰여지는 수를 저장하기 위해 `value` 리스트 생성  
  - **주사위 이동시키는 메소드**  
    명령 `d`에 맞게 주사위를 이동시키는 메소드 작성  

---

```Python
dice = Dice()
cur = [(y, x)]
while order:
    d = order[0]
    del order[0]
    cur_x, cur_y = cur.pop()
    # 다음 좌표 계산
    next_x = cur_x + dx[d-1]
    next_y = cur_y + dy[d-1]
    # boundary 체크
    if 0 <= next_x < M and 0 <= next_y < N:
        dice.move_dice(d)
        print(dice.value[dice.top])
        # 주사위 바닥면의 수를 복사할지, 칸에 쓰여 있는 수를 복사할지
        if map[next_y][next_x] == 0:
            map[next_y][next_x] = dice.value[dice.bottom]
        else:
            dice.value[dice.bottom] = map[next_y][next_x]
            map[next_y][next_x] = 0
        cur.append((next_x, next_y))
    else:
        cur.append((cur_x, cur_y))
```

- 입력된 명령에 맞게 주사위 이동시키며 주사위 윗 면에 적힌 수 출력  
  - **다음 좌표 계산**  
    `order`에서 받은 명령 `d`와 현재 위치 `cur`에서 **pop**한 값으로  
    다음 위치인 `next_x` , `next_y` 계산  
  - **boundary 체크**  
    **boundary 안에 속할 때**만 주사위를 이동하고 `dice.value[dice.top]` 값을 출력함  
    **아닐 때**는 현재 `cur_x` , `cur_y` 를 다시 `cur`에 **append**  
  - **주사위 바닥면의 수를 복사할지, 칸에 쓰여 있는 수를 복사할지**  
    다음 위치 칸의 값이 **0이면** `dice.value[dice.bottom]` 값을 복사  
    **0이 아니면** `dice.value[dice.bottom]`에 다음 위치 칸의 값을 복사하고 `map[next_y][next_x] = 0`  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
N, M, x, y, K = map(int, sys.stdin.readline().split())
map = [[int(x) for x in sys.stdin.readline().split()]for _ in range(N)]
order = [int(x) for x in sys.stdin.readline().split()]
dx = [1, -1, 0, 0]
dy = [0, 0, -1, 1]

class Dice:
    # 주사위 상태
    top, front, right, left, back, bottom = 0, 1, 2, 3, 4, 5
    # 주사위에 쓰여지는 수
    value = [0 for _ in range(6)]
    # 주사위 이동시키는 메소드
    def move_dice(self, d):
        if d == 1:
            temp = self.top
            self.top = self.left
            self.left = self.bottom
            self.bottom = self.right
            self.right = temp
        elif d == 2:
            temp = self.top
            self.top = self.right
            self.right = self.bottom
            self.bottom = self.left
            self.left = temp
        elif d == 3:
            temp = self.top
            self.top = self.back
            self.back = self.bottom
            self.bottom = self.front
            self.front = temp
        elif d == 4:
            temp = self.top
            self.top = self.front
            self.front = self.bottom
            self.bottom = self.back
            self.back = temp

dice = Dice()
cur = [(y, x)]
while order:
    d = order[0]
    del order[0]
    cur_x, cur_y = cur.pop()
    # 다음 좌표 계산
    next_x = cur_x + dx[d-1]
    next_y = cur_y + dy[d-1]
    # boundary 체크
    if 0 <= next_x < M and 0 <= next_y < N:
        dice.move_dice(d)
        print(dice.value[dice.top])
        # 주사위 바닥면의 수를 복사할지, 칸에 쓰여 있는 수를 복사할지
        if map[next_y][next_x] == 0:
            map[next_y][next_x] = dice.value[dice.bottom]
        else:
            dice.value[dice.bottom] = map[next_y][next_x]
            map[next_y][next_x] = 0
        cur.append((next_x, next_y))
    else:
        cur.append((cur_x, cur_y))
```
</details>

## 📝 Review
주사위를 이동시키고 출력하는 방법은 전체적으로 어렵지 않았다.  
현재 주사위 상태와 각 면에 적히는 수와 명령에 따라 이동시키는 함수까지 있어야 해서 Class로 정의하면 편하겠다고 생각했고, 그래서 평소에는 안쓰던 Class를 사용했다.  

문제를 똑바로 정독해서 실수를 줄이자..!


```toc
```