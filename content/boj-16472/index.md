---
emoji: 💻
title: "[BOJ] 16472번: 고냥이 (Python)"
date: '2022-05-16 02:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## 문제
https://www.acmicpc.net/problem/16472

고양이는 너무 귀엽다. 사람들은 고양이를 너무 귀여워했고, 결국 고양이와 더욱 가까워지고 싶어 고양이와의 소통을 위한 고양이 말 번역기를 발명하기로 했다. 이 번역기는 사람의 언어를 고양이의 언어로, 고양이의 언어를 사람의 언어로 바꾸어 주는 희대의 발명품이 될 것이다.

현재 고양이말 번역기의 베타버전이 나왔다. 그러나 이 베타버전은 완전 엉망진창이다. 베타버전의 번역기는 문자열을 주면 그 중에서 최대 N개의 종류의 알파벳을 가진 연속된 문자열밖에 인식하지 못한다. 굉장히 별로지만 그나마 이게 최선이라고 사람들은 생각했다. 그리고 문자열이 주어졌을 때 이 번역기가 인식할 수 있는 최대 문자열의 길이는 얼마인지가 궁금해졌다.

고양이와 소통할 수 있도록 우리도 함께 노력해보자.

---

## 입력  
첫째 줄에는 인식할 수 있는 알파벳의 종류의 최대 개수 N이 입력된다. (1 < N ≤ 26)

둘째 줄에는 문자열이 주어진다. (1 ≤ 문자열의 길이 ≤ 100,000) 단, 문자열에는 알파벳 소문자만이 포함된다.

---

## 출력  
첫째 줄에 번역기가 인식할 수 있는 문자열의 최대길이를 출력한다. 

---

## 🔍 Algorithm
**Two Pointers**

## 💻 Logic

```Python
# start, end 투 포인터 사용
for end in range(len(s)):
    alpha[s[end]] += 1
    # N개 이하의 알파벳을 가지는 경우
    if len(alpha) <= N:
        result = max(result, end - start + 1)   # result와 최댓값 비교 후 저장
    # N개 보다 많이 알파벳을 가지는 경우
    while len(alpha) > N:
        alpha[s[start]] -= 1
        if alpha[s[start]] == 0: del alpha[s[start]]    # 해당 키 값이 0이 되면 dictionary에서 삭제
        start += 1
print(result)
```
- **start, end 투 포인터 사용**  
    - `end`가 문자열의 처음부터 끝까지 이동하면서 해당 문자의 **dictionary** 값을 **+1**  
    - **N개 이하의 알바펫을 가지는 경우**에는 `result`와 **최댓값** 비교 후 저장  
    - **N개 보다 알파벳을 많이 가지는 경우**에는 `start`에 해당하는 키 값을 **-1** 하고, `start`를 다음 위치로 옮기고 반복  
      이 때, 해당 키 값이 **0**이 되면 **dictionary**에서 삭제  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import sys
from collections import defaultdict
N = int(sys.stdin.readline())
s = sys.stdin.readline().strip()
start, result = 0, 0
alpha = defaultdict(int)
# start, end 투 포인터 사용
for end in range(len(s)):
    alpha[s[end]] += 1
    # N개 이하의 알파벳을 가지는 경우
    if len(alpha) <= N:
        result = max(result, end - start + 1)   # result와 최댓값 비교 후 저장
    # N개 보다 많이 알파벳을 가지는 경우
    while len(alpha) > N:
        alpha[s[start]] -= 1
        if alpha[s[start]] == 0: del alpha[s[start]]    # 해당 키 값이 0이 되면 dictionary에서 삭제
        start += 1
print(result)
```
</details>

---

## 📝 Review

최근에 **투 포인터** 문제를 몇 번 봤어서 바로 **투 포인터** 알고리즘으로 접근해서 풀어야겠다고 생각했다.  
다른 **투 포인터** 문제들과 큰 차이 없는 전형적인 **투 포인터** 문제  



```toc
```