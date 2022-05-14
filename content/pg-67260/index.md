---
emoji: 💻
title: "[Programmers] 67260번: 동굴 탐험 (Python)"
date: '2022-05-02 12:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2020 카카오 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/67260

[본 문제는 정확성과 효율성 테스트 각각 점수가 있는 문제입니다.]

오지 탐험가인 프로도는 탐험 도중 n개의 방으로 이루어진 지하 동굴을 탐험하게 되었습니다. 모든 방에는 0부터 n - 1 까지 번호가 붙어있고, 이 동굴에 들어갈 수 있는 유일한 입구는 0번 방과 연결되어 있습니다. 각 방들은 양방향으로 통행이 가능한 통로로 서로 연결되어 있는데, 서로 다른 두 방을 직접 연결하는 통로는 오직 하나입니다. 임의의 서로 다른 두 방 사이의 최단경로는 딱 한 가지만 있으며, 또한 임의의 두 방 사이에 이동이 불가능한 경우는 없습니다.

탐험에 앞서 이 지하 동굴의 지도를 손에 넣은 프로도는 다음과 같이 탐험 계획을 세웠습니다.

1. 모든 방을 적어도 한 번은 방문해야 합니다.  
2. 특정 방은 방문하기 전에 반드시 먼저 방문할 방이 정해져 있습니다.  
    2-1. 이는 A번 방은 방문하기 전에 반드시 B번 방을 먼저 방문해야 한다는 의미입니다.  
    2-2. 어떤 방을 방문하기 위해 반드시 먼저 방문해야 하는 방은 없거나 또는 1개 입니다.  
    2-3. 서로 다른 두 개 이상의 방에 대해 먼저 방문해야 하는 방이 같은 경우는 없습니다.  
    2-4. 어떤 방이 먼저 방문해야 하는 방이면서 동시에 나중에 방문해야 되는 방인 경우는 없습니다.  

위 계획 중 2-2, 2-3, 2-4는 순서를 지켜 방문해야 하는 두 방의 쌍이 `A → B`(A를 먼저 방문하고 B를 방문함) 형태로 유일함을 의미합니다. 즉, 프로도는 아래와 같은 형태로 방문순서가 잡히지 않도록 방문 계획을 세웠습니다.

- `A → B, A → C` (방문순서 배열 order = [...,[A,B],...,[A,C],...]) 형태로 A를 방문 후에 방문해야 할 방이 B와 C로 두 개 또는 그 이상인 경우  
- `X → A, Z → A` (방문순서 배열 order = [...,[X,A],...,[Z,A],...]) 형태로 A를 방문하기 전에 방문해야 할 방이 X와 Z로 두 개 또는 그 이상인 경우  
- `A → B → C` (방문순서 배열 order = [...,[A,B],...,[B,C],...) 형태로 B처럼 A 방문 후이면서 동시에 C 방문 전인 경우  
그리고 먼저 방문해야 할 방과 나중에 방문할 방을 반드시 연속해서 방문해야 할 필요는 없어 A방을 방문한 후 다른 방을 방문한 후 B방을 방문해도 좋습니다.  

방 개수 n, 동굴의 각 통로들이 연결하는 두 방의 번호가 담긴 2차원 배열 path, 프로도가 정한 방문 순서가 담긴 2차원 배열 order가 매개변수로 주어질 때, 프로도가 규칙에 맞게 모든 방을 탐험할 수 있을 지 return 하도록 solution 함수를 완성해주세요.

---

## 제한사항  
- n은 2 이상 200,000 이하입니다.  
- path 배열의 세로(행) 길이는 n - 1 입니다.  
    - path 배열의 원소는 [방 번호 A, 방 번호 B] 형태입니다.  
    - 두 방 A, B사이를 연결하는 통로를 나타냅니다.  
    - 통로가 연결하는 두 방 번호가 순서없이 들어있음에 주의하세요.  
- order 배열의 세로(행) 길이는 1 이상 (n / 2) 이하입니다.  
    - order 배열의 원소는 [방 번호 A, 방 번호 B] 형태입니다.  
    - A번 방을 먼저 방문한 후 B번 방을 방문해야 함을 나타냅니다.  

---

## 입출력 예  
|n|path|order|result|
|---|---|---|---|
|9|[[0,1],[0,3],[0,7],[8,1],[3,6],[1,2],[4,7],[7,5]]|[[8,5],[6,7],[4,1]]|true|
|9|[[8,1],[0,1],[1,2],[0,7],[4,7],[0,3],[7,5],[3,6]]|[[4,1],[5,2]]|true|
|9|[[0,1],[0,3],[0,7],[8,1],[3,6],[1,2],[4,7],[7,5]]|[[4,1],[8,7],[6,5]]|false|


---

## 🔍 Algorithm
**DFS**

## 💻 Logic

```Python
# tree 정보 입력
    for a, b in path:
        tree[a].append(b)
        tree[b].append(a)
# 방문 순서 정보 입력
    for a, b in order:
        # 0을 나중에 방문해야 하는 경우는 존재 X
        if b == 0: return False
        orders[b] = a
```
- `defaultdict`를 이용해 기본값이 **list**인 **dictionary** 생성하고 `path` 정보 저장  
- **방문 순서 정보 입력**  
  방문 순서 정보를 `orders` 리스트에 입력  
  이 때, **0**을 나중에 방문해야 하는 경우는 존재할 수 없기 때문에 `b`가 **0**이면 **False** 반환하고 종료  

```Python
# DFS 탐색
    stack.extend(tree[0])
    while stack:
        num = stack.pop()
        if visited[num]: continue
        # 먼저 방문해야 할 방이 있지만, 방문하지 않은 경우
        if orders[num] and not visited[orders[num]]:
            after[orders[num]] = num
            continue
        # 방문하지 않은 경우
        visited[num] = True
        stack.extend(tree[num])
        if after[num] != -1:
            stack.append(after[num])    # after 값이 있으면 append
# 하나라도 방문하지 않았으면 False
    if False in visited:
        return False
    return True
```
- **DFS 탐색**  
  **stack**을 이용해서 방문하지 않은 경우에 **stack**에 연결된 노드 값을 넣는 방식으로 **DFS** 탐색  
  먼저 방문해야 할 방이 있지만 방문하지 않은 경우에는 다음에 바로 방문해서 처리해주기 위해 먼저 방문해야 할 해당 `after` 값에 현재 값 저장  
  일반적인 경우에는 `visited` 업데이트 해주고, **stack**에 연결된 노드 값 **extend**하고, 해당 `after` 값이 있으면 그 값도 **append**  
  탐색 끝난 후에, 하나라도 방문하지 않은 곳이 있으면 **False** 반환  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
from collections import defaultdict
def solution(n, path, order):
    stack = []
    tree = defaultdict(list)
    orders = defaultdict(int)
    visited = [False for _ in range(n)]
    after = [-1 for _ in range(n)]
    # tree 정보 입력
    for a, b in path:
        tree[a].append(b)
        tree[b].append(a)
    # 방문 순서 정보 입력
    for a, b in order:
        # 0을 나중에 방문해야 하는 경우는 존재 X
        if b == 0: return False
        orders[b] = a
    # DFS 탐색
    stack.extend(tree[0])
    while stack:
        num = stack.pop()
        if visited[num]: continue
        # 먼저 방문해야 할 방이 있지만, 방문하지 않은 경우
        if orders[num] and not visited[orders[num]]:
            after[orders[num]] = num
            continue
        # 방문하지 않은 경우
        visited[num] = True
        stack.extend(tree[num])
        if after[num] != -1:
            stack.append(after[num])    # after 값이 있으면 append
    # 하나라도 방문하지 않았으면 False
    if False in visited:
        return False
    return True
```
</details>

---

## 📝 Review

문제를 이해하고 아이디어를 내기까지 시간이 오래걸렸다. DFS를 사용해야 한다는 것은 쉽게 알 수 있었지만, after 리스트를 만들어서 방문 우선순위를 처리하는 방법을 생각해내지 못해서 다른 사람들의 힌트를 보고 구현했다.. 그리고 30번 테스트 케이스도 계속 틀려서 이유를 몰랐는데 0을 나중에 방문해야 하는 경우는 존재할 수 없다는 것을 생각 못해서 나중에 이 부분을 처리하고 통과했다.  
카카오 인턴 코테 마지막 문제답게 쉽지 않다,,


```toc
```