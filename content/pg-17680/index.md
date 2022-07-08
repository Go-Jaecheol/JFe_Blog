---
emoji: 💻
title: "[Programmers] 17680번: 캐시 (Python)"
date: '2022-05-22 23:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2018 KAKAO BLIND RECRUITMENT 1차]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/17680

지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

---

## 입력 형식  
- 캐시 크기(`cacheSize`)와 도시이름 배열(`cities`)을 입력받는다.  
- `cacheSize`는 정수이며, 범위는 0 ≦ `cacheSize` ≦ 30 이다.  
- `cities`는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.  
- 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.  

---

## 출력 형식  
입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.  

---

## 조건  
- 캐시 교체 알고리즘은 `LRU`(Least Recently Used)를 사용한다.
- `cache hit`일 경우 실행시간은 `1`이다.
- `cache miss`일 경우 실행시간은 `5`이다.

---

## 예제 입출력  
|캐시크기(cacheSize)|도시이름(cities)|실행시간|
|---|---|---|
|3|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|50|
|3|["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]|21|
|2|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|60|
|5|["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]|52|
|2|["Jeju", "Pangyo", "NewYork", "newyork"]|16|
|0|["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]|25|

---

## 🔍 Algorithm
**Queue**

## 💻 Logic

```Python
    for city in cities:
        city = city.upper() # 대소문자 통일
        # 캐시에 값이 있는 경우
        if city in cache:
            answer += 1
            # Recently Used 업데이트
            cache.remove(city)
            cache.append(city)
            continue
        # 캐시에 값이 없는 경우
        answer += 5
        # 캐시가 가득 찬 경우
        if len(cache) == cacheSize:
            key = cache.popleft()
        cache.append(city)
```
- **캐시에 값이 있는 경우**  
    hit 카운트인 **+1** 만큼 카운트해주고,  
    **Recently Used** 업데이트를 위해 해당 값을 **remove** 하고, 다시 **append** 해준다.  
- **캐시에 값이 없는 경우**  
    miss 카운트인 **+5** 만큼 카운트해주고, 해당 값을 **append** 해준다.  
    이 때, **캐시가 가득 찬 경우**에는 `cache`에서 **popleft** 해준다.  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
from collections import deque
def solution(cacheSize, cities):
    answer = 0
    cache = deque()
    # cacheSize가 0이면 전부 다 miss
    if cacheSize == 0: return len(cities) * 5
    
    for city in cities:
        city = city.upper() # 대소문자 통일
        # 캐시에 값이 있는 경우
        if city in cache:
            answer += 1
            # Recently Used 업데이트
            cache.remove(city)
            cache.append(city)
            continue
        # 캐시에 값이 없는 경우
        answer += 5
        # 캐시가 가득 찬 경우
        if len(cache) == cacheSize:
            key = cache.popleft()
        cache.append(city)
    return answer
```
</details>

---


## 📝 Review

**LRU**를 구현하기 위해 처음에는 **딕셔너리**를 생각했지만 비효율적인 것 같아서 `deque`을 사용해 **큐**를 이용하는 방법으로 구현했다.  
두 가지 정도 테스트케이스가 통과 못했었는데 `cacheSize`가 **0**인 경우 예외 처리 하는 과정을 통해 처리했다.  


```toc
```