---
emoji: 💻
title: "[Programmers] 81301번: 숫자 문자열과 영단어 (Python)"
date: '2022-05-09 12:00:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2021 카카오 채용연계형 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/81301

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

- 1478 → "one4seveneight"  
- 234567 → "23four5six7"  
- 10203 → "1zerotwozero3"  

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 `s`가 매개변수로 주어집니다. `s`가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

|숫자|영단어|
|---|---|
|0|zero|
|1|one|
|2|two|
|3|three|
|4|four|
|5|five|
|6|six|
|7|seven|
|8|eight|
|9|nine|


---

## 제한사항  
- 1 ≤ `s`의 길이 ≤ 50  
- `s`가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.  
- return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 `s`로 주어집니다.  

---

## 입출력 예  
|s|result|
|---|---|
|"one4seveneight"|1478|
|"23four5six7"|234567|
|"2three45sixseven"|234567|
|"123"|123|


---

## 🔍 Algorithm
**문자열**

## 💻 Logic

```Python
# 문자열 s에서 글자 하나씩 분석
    for c in s:
        # 숫자인 경우
        if c.isdigit():
            answer *= 10
            answer += int(c)
        # 숫자가 아닌 경우
        else:
            word += c
        # word가 완성된 경우
        if word in number:
            answer *= 10
            answer += number.index(word)
            word = ''
    return answer
```
- **숫자인 경우 or 아닌 경우**  
  숫자인 경우에는 기존 `answer` 값에 **10**을 곱하고, 문자 `c`를 **int**로 변환해서 더해준다.  
  숫자가 아닌 경우에는 `word` 문자열에 문자 `c`를 더해준다.  
- **word가 완성된 경우**  
  `word`가 `number` 리스트에 있는 경우에는  
  기존 `answer` 값에 **10**을 곱하고, `number` 리스트에서 `word` 값에 해당하는 인덱스 값을 더해준다.  

---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
def solution(s):
    answer, word = 0, ''
    number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    # 문자열 s에서 글자 하나씩 분석
    for c in s:
        # 숫자인 경우
        if c.isdigit():
            answer *= 10
            answer += int(c)
        # 숫자가 아닌 경우
        else:
            word += c
        # word가 완성된 경우
        if word in number:
            answer *= 10
            answer += number.index(word)
            word = ''
    return answer
```
</details>

---

## 📝 Review

1번 문제다운 간단한 문자열 문제였다.


```toc
```