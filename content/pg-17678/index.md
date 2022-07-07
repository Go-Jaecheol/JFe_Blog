---
emoji: 💻
title: "[Programmers] 17678번: 셔틀버스 (Python)"
date: '2022-05-22 23:10:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2018 KAKAO BLIND RECRUITMENT 1차]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/17678

카카오에서는 무료 셔틀버스를 운행하기 때문에 판교역에서 편하게 사무실로 올 수 있다. 카카오의 직원은 서로를 '크루'라고 부르는데, 아침마다 많은 크루들이 이 셔틀을 이용하여 출근한다.

이 문제에서는 편의를 위해 셔틀은 다음과 같은 규칙으로 운행한다고 가정하자.

- 셔틀은 `09:00`부터 총 `n`회 `t`분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 `m`명의 승객이 탈 수 있다.  
- 셔틀은 도착했을 때 도착한 순간에 대기열에 선 크루까지 포함해서 대기 순서대로 태우고 바로 출발한다. 예를 들어 `09:00`에 도착한 셔틀은 자리가 있다면 `09:00`에 줄을 선 크루도 탈 수 있다.  

일찍 나와서 셔틀을 기다리는 것이 귀찮았던 콘은, 일주일간의 집요한 관찰 끝에 어떤 크루가 몇 시에 셔틀 대기열에 도착하는지 알아냈다. 콘이 셔틀을 타고 사무실로 갈 수 있는 도착 시각 중 제일 늦은 시각을 구하여라.

단, 콘은 게으르기 때문에 같은 시각에 도착한 크루 중 대기열에서 제일 뒤에 선다. 또한, 모든 크루는 잠을 자야 하므로 `23:59`에 집에 돌아간다. 따라서 어떤 크루도 다음날 셔틀을 타는 일은 없다.

---

## 입력 형식  
셔틀 운행 횟수 `n`, 셔틀 운행 간격 `t`, 한 셔틀에 탈 수 있는 최대 크루 수 `m`, 크루가 대기열에 도착하는 시각을 모은 배열 `timetable`이 입력으로 주어진다.

- 0 ＜ `n` ≦ 10
- 0 ＜ `t` ≦ 60
- 0 ＜ `m` ≦ 45
- `timetable`은 최소 길이 1이고 최대 길이 2000인 배열로, 하루 동안 크루가 대기열에 도착하는 시각이 `HH:MM` 형식으로 이루어져 있다.
- 크루의 도착 시각 `HH:MM`은 `00:01`에서 `23:59` 사이이다.

---

## 출력 형식  
콘이 무사히 셔틀을 타고 사무실로 갈 수 있는 제일 늦은 도착 시각을 출력한다. 도착 시각은 `HH:MM` 형식이며, `00:00`에서 `23:59` 사이의 값이 될 수 있다.

---

## 예제 입출력  
|n|t|m|timetable|answer|
|---|---|---|---|---|
|1|1|5|["08:00", "08:01", "08:02", "08:03"]|"09:00"|
|2|10|2|["09:10", "09:09", "08:00"]|"09:09"|
|2|1|2|["09:00", "09:00", "09:00", "09:00"]|"08:59"|
|1|1|5|["00:01", "00:01", "00:01", "00:01", "00:01"]|"00:00"|
|1|1|1|["23:59"]|"09:00"|
|10|60|45|["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]|"18:00"|


---

## 🔍 Algorithm
**Sort**

## 💻 Logic

```Python
# 시간 분 단위로 변환 후, 내림차순 정렬
    for i, time in enumerate(timetable):
        timetable[i] = int(time[:2]) * 60 + int(time[3:])
    timetable.sort(reverse=True)
```
- **시간 분 단위로 변환 후, 내림차순 정렬**  

```Python
# 시간대별 셔틀 확인
    for i in range(n):
        full = True
        for j in range(m):
            # 셔틀에 탈 수 없으면, full을 False로 바꾸고 break
            if len(timetable) == 0 or timetable[-1] > cur_time:
                full = False
                break
            last_time = timetable.pop()
        cur_time += t
    if full: last_time -= 1 # 마지막 셔틀이 가득 차있으면, 제일 뒷 사람 시간 - 1
    else: last_time = cur_time - t  # 가득 차있지 않으면, 현재 셔틀 시간
```
- **셔틀에 탈 수 없는 경우**  
    `timetable` 리스트가 비어있거나 `timetable`의 마지막 값이 `cur_time`보다 큰 경우에는  
    `full`을 **False**로 바꾸고 **break**  
- **정답 시간 계산**  
    마지막 셔틀이 가득 차 있으면, **제일 뒷 사람 시간 - 1**  
    가득 차 있지 않으면, **현재 셔틀 시간**  


---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(n, t, m, timetable):
    answer = ''
    cur_time, last_time = 540, 540
    # 시간 분 단위로 변환 후, 내림차순 정렬
    for i, time in enumerate(timetable):
        timetable[i] = int(time[:2]) * 60 + int(time[3:])
    timetable.sort(reverse=True)
    # 시간대별 셔틀 확인
    for i in range(n):
        full = True
        for j in range(m):
            # 셔틀에 탈 수 없으면, full을 False로 바꾸고 break
            if len(timetable) == 0 or timetable[-1] > cur_time:
                full = False
                break
            last_time = timetable.pop()
        cur_time += t
    if full: last_time -= 1 # 마지막 셔틀이 가득 차있으면, 제일 뒷 사람 시간 - 1
    else: last_time = cur_time - t  # 가득 차있지 않으면, 현재 셔틀 시간
    # 시간 문자열 변환
    hour = last_time // 60
    min = last_time % 60
    if hour < 10: answer += '0' + str(hour)
    else: answer += str(hour)
    answer += ':'
    if min < 10: answer += '0' + str(min)
    else: answer += str(min)
    
    return answer
```
</details>

---

## 📝 Review

처음에 문제를 바로 이해하지 못해서 문제 이해하는데 시간을 보낸 것 같다...  
문제 이해하고 나서 구현하기까지는 그렇게 오래 걸리지는 않았다. 조금 더 깔끔하게 코드를 바꿀 수 있을까  

```toc
```