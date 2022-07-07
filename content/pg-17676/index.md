---
emoji: 💻
title: "[Programmers] 17676번: 추석 트래픽 (Python)"
date: '2022-05-22 22:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2018 KAKAO BLIND RECRUITMENT 1차]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/17676

이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다. 장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다. 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.

---

## 입력 형식  
- `solution` 함수에 전달되는 `lines` 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열로 되어 있으며, 각 로그 문자열마다 요청에 대한 응답완료시간 S와 처리시간 T가 공백으로 구분되어 있다.  
- 응답완료시간 S는 작년 추석인 2016년 9월 15일만 포함하여 고정 길이 `2016-09-15 hh:mm:ss.sss` 형식으로 되어 있다.  
- 처리시간 T는 `0.1s`, `0.312s`, `2s` 와 같이 최대 소수점 셋째 자리까지 기록하며 뒤에는 초 단위를 의미하는 `s`로 끝난다.  
- 예를 들어, 로그 문자열 `2016-09-15 03:10:33.020 0.011s`은 "2016년 9월 15일 오전 3시 10분 33.010초"부터 "2016년 9월 15일 오전 3시 10분 33.020초"까지 "0.011초" 동안 처리된 요청을 의미한다. (처리시간은 시작시간과 끝시간을 포함)  
- 서버에는 타임아웃이 3초로 적용되어 있기 때문에 처리시간은 0.001 ≦ T ≦ 3.000이다.  
- `lines` 배열은 응답완료시간 S를 기준으로 오름차순 정렬되어 있다.  

---

## 출력 형식  
- `solution` 함수에서는 로그 데이터 `lines` 배열에 대해 초당 최대 처리량을 리턴한다.

---

## 🔍 Algorithm
**Greedy**

## 💻 Logic

```Python
    for l in lines:
        l = l.split(' ')    # 로그 split
        time = l[1].split(':')  # 로그 시간 부분 split
        last_time = Decimal(time[0])*3600 + Decimal(time[1])*60 + Decimal(time[2])  # 응답 완료 시간 초 단위로 변환
        start_time = last_time - Decimal(l[2][:-1]) + Decimal('0.001')  # 시작 시간 = 응답 완료 시간 - 처리 시간
        log.append((start_time, last_time))
```
- **로그 분리**  
    로그 문자열을 분리하여 **응답완료 시간**을 초 단위로 변환하여 저장해주고, **시작 시간**은 (응답완료 시간 - 처리 시간)으로 계산하여 저장해준다.  
    이 때, 정확한 소수 계산을 위해 `Decimal` 사용  

```Python
    for i in range(len(log)):
        count = 0
        t = log[i][1]   # 응답 완료 시간
        for j in range(i, len(log)):
            # i 인덱스 뒤 로그들 시작 시간이 (i 로그의 응답 완료 시간 + 0.999s) 이하면 count 추가
            if log[j][0] <= t + Decimal('0.999'):
                count += 1
        answer = max(answer, count) # 최댓값 저장
```
- **각 로그의 응답완료 시간을 기준으로 초당 처리량 계산**  
    각 로그의 **응답완료 시간**을 기준으로 1초간 처리 가능한 로그 수를 체크하면 되기 때문에,  
    해당 로그 뒤에 오는 로그들의 시작시간이 **(로그 응답완료 시간 + 0.999s) 이하**면 `count`를 추가해주는 방식으로 계산  
    최댓값을 `answer`에 저장하면서 반복문 수행  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
from decimal import Decimal
def solution(lines):
    answer, log = 0, []
    for l in lines:
        l = l.split(' ')    # 로그 split
        time = l[1].split(':')  # 로그 시간 부분 split
        last_time = Decimal(time[0])*3600 + Decimal(time[1])*60 + Decimal(time[2])  # 응답 완료 시간 초 단위로 변환
        start_time = last_time - Decimal(l[2][:-1]) + Decimal('0.001')  # 시작 시간 = 응답 완료 시간 - 처리 시간
        log.append((start_time, last_time))
    for i in range(len(log)):
        count = 0
        t = log[i][1]   # 응답 완료 시간
        for j in range(i, len(log)):
            # i 인덱스 뒤 로그들 시작 시간이 (i 로그의 응답 완료 시간 + 0.999s) 이하면 count 추가
            if log[j][0] <= t + Decimal('0.999'):
                count += 1
        answer = max(answer, count) # 최댓값 저장
    return answer
```
</details>

---

## 📝 Review

응답완료 시간을 기준으로 초당 처리량을 계산하면 된다는 사실을 알고 구현했지만, 소수 계산이 정확하지 않아서 틀렸었다.  
파이썬에서 **float**로 연산을 하면 정확하지 않을 수 있기 때문에 **Decimal**을 사용해야 된다는 점을 알게 되었고, 이를 활용해서 다시 풀었다.  

```toc
```