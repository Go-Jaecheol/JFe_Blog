---
emoji: 💻
title: "[Programmers] 17683번: 방금그곡 (Python)"
date: '2022-05-29 20:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2018 KAKAO BLIND RECRUITMENT 3차]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/17683

라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다. 그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.

네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다. 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다. 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다. 그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.

- 방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.  
- 네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.  
- 각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.  
- 음악이 00:00를 넘겨서까지 재생되는 일은 없다.  
- 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.  
- 조건이 일치하는 음악이 없을 때에는 “`(None)`”을 반환한다.  

---

## 입력 형식  

입력으로 네오가 기억한 멜로디를 담은 문자열 `m`과 방송된 곡의 정보를 담고 있는 배열 `musicinfos`가 주어진다.

- `m`은 음 `1`개 이상 `1439`개 이하로 구성되어 있다.  
- `musicinfos`는 `100`개 이하의 곡 정보를 담고 있는 배열로, 각각의 곡 정보는 음악이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보가 '`,`'로 구분된 문자열이다.  
    - 음악의 시작 시각과 끝난 시각은 24시간 `HH:MM` 형식이다.  
    - 음악 제목은 '`,`' 이외의 출력 가능한 문자로 표현된 길이 `1` 이상 `64` 이하의 문자열이다.  
    - 악보 정보는 음 `1`개 이상 `1439`개 이하로 구성되어 있다.  

---

## 출력 형식  

조건과 일치하는 음악 제목을 출력한다.

---

## 예제 입출력  
|m|musicinfos|answer|
|---|---|---|
|"ABCDEFG"|["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]|"HELLO"|
|"CC#BCC#BCC#BCC#B"|["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]|"FOO"|
|"ABC"|["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]|"WORLD"|


---

## 🔍 Algorithm
**문자열**

## 💻 Logic

```Python
# '#' 들어간 음 변환
    for org, rep in zip(['A#', 'C#', 'D#', 'F#', 'G#'], ['H', 'I', 'J', 'K', 'L']):
        m = m.replace(org, rep)
```
- **'#' 들어간 음 변환**  
    탐색 편리하게 하기 위해서 '#' 들어간 문자들 전부 다른 문자들로 변환  

```Python
    # time만큼 악보 정보 반복해서 message 저장
        for i in range(time):
            message += info[3][i%len(info[3])]
    # pattern이 있고, 현재 저장된 길이보다 크면 answer 변경
        if pattern.search(message) and length < time:
            answer = info[2]
            length = time
```
- **time만큼 악보 정보 반복해서 message 저장**  
- **pattern이 있고, 현재 저장된 길이보다 크면 answer 변경**  



---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import re
def solution(m, musicinfos):
    answer, length = "(None)", 0
    # '#' 들어간 음 변환
    for org, rep in zip(['A#', 'C#', 'D#', 'F#', 'G#'], ['H', 'I', 'J', 'K', 'L']):
        m = m.replace(org, rep)
    pattern = re.compile(m)
    for info in musicinfos:
        info = info.split(',')
        info[0] = info[0].split(':')
        info[1] = info[1].split(':')
        time = (int(info[1][0])*60 + int(info[1][1])) - (int(info[0][0])*60 + int(info[0][1]))
        # '#' 들어간 음 변환
        for org, rep in zip(['A#', 'C#', 'D#', 'F#', 'G#'], ['H', 'I', 'J', 'K', 'L']):
            info[3] = info[3].replace(org, rep)
        message = ''
        # time만큼 악보 정보 반복해서 message 저장
        for i in range(time):
            message += info[3][i%len(info[3])]
        # pattern이 있고, 현재 저장된 길이보다 크면 answer 변경
        if pattern.search(message) and length < time:
            answer = info[2]
            length = time
    return answer
```
</details>

---


## 📝 Review

정규표현식 써서 해당하는 문자열이 있는지 찾으면 되는 문제.  
'#'이 들어간 부분을 계산하기 쉽게 다른 문자들로 변환해두고 푸는 것이 포인트

```toc
```