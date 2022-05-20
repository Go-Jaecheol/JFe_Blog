---
emoji: 💻
title: "[Programmers] 64064번: 불량 사용자 (Python)"
date: '2022-05-16 00:30:00'
author: JFe
tags: Algorithm
categories: Algorithm
---

## [2019 카카오 개발자 겨울 인턴십]

## 문제
https://programmers.co.kr/learn/courses/30/lessons/64064

개발팀 내에서 이벤트 개발을 담당하고 있는 "무지"는 최근 진행된 카카오이모티콘 이벤트에 비정상적인 방법으로 당첨을 시도한 응모자들을 발견하였습니다. 이런 응모자들을 따로 모아 불량 사용자라는 이름으로 목록을 만들어서 당첨 처리 시 제외하도록 이벤트 당첨자 담당자인 "프로도" 에게 전달하려고 합니다. 이 때 개인정보 보호을 위해 사용자 아이디 중 일부 문자를 '*' 문자로 가려서 전달했습니다. 가리고자 하는 문자 하나에 '*' 문자 하나를 사용하였고 아이디 당 최소 하나 이상의 '*' 문자를 사용하였습니다.  
"무지"와 "프로도"는 불량 사용자 목록에 매핑된 응모자 아이디를 제재 아이디 라고 부르기로 하였습니다.  

예를 들어, 이벤트에 응모한 전체 사용자 아이디 목록이 다음과 같다면

|응모자 아이디|
|---|
|frodo|
|fradi|
|crodo|
|abc123|
|frodoc|

다음과 같이 불량 사용자 아이디 목록이 전달된 경우,  

|불량 사용자|
|---|
|fr*d*|
|abc1**|

불량 사용자에 매핑되어 당첨에서 제외되어야 야 할 제재 아이디 목록은 다음과 같이 두 가지 경우가 있을 수 있습니다.

|제재 아이디|
|---|
|frodo|
|abc123|

|제재 아이디|
|---|
|fradi|
|abc123|

이벤트 응모자 아이디 목록이 담긴 배열 user_id와 불량 사용자 아이디 목록이 담긴 배열 banned_id가 매개변수로 주어질 때, 당첨에서 제외되어야 할 제재 아이디 목록은 몇가지 경우의 수가 가능한 지 return 하도록 solution 함수를 완성해주세요.

---

## 제한사항  
- user_id 배열의 크기는 1 이상 8 이하입니다.  
- user_id 배열 각 원소들의 값은 길이가 1 이상 8 이하인 문자열입니다.  
    - 응모한 사용자 아이디들은 서로 중복되지 않습니다.  
    - 응모한 사용자 아이디는 알파벳 소문자와 숫자로만으로 구성되어 있습니다.  
- banned_id 배열의 크기는 1 이상 user_id 배열의 크기 이하입니다.  
- banned_id 배열 각 원소들의 값은 길이가 1 이상 8 이하인 문자열입니다.  
    - 불량 사용자 아이디는 알파벳 소문자와 숫자, 가리기 위한 문자 '*' 로만 이루어져 있습니다.  
    - 불량 사용자 아이디는 '*' 문자를 하나 이상 포함하고 있습니다.  
    - 불량 사용자 아이디 하나는 응모자 아이디 중 하나에 해당하고 같은 응모자 아이디가 중복해서 제재 아이디 목록에 들어가는 경우는 없습니다.  
- 제재 아이디 목록들을 구했을 때 아이디들이 나열된 순서와 관계없이 아이디 목록의 내용이 동일하다면 같은 것으로 처리하여 하나로 세면 됩니다.  

---

## 입출력 예  
|user_id|banned_id|result|
|---|---|---|
|["frodo", "fradi", "crodo", "abc123", "frodoc"]|[`"fr*d*"`, `"abc1**"`]|2|
|["frodo", "fradi", "crodo", "abc123", "frodoc"]|[`"*rodo"`, `"*rodo"`, `"******"`]|2|
|["frodo", "fradi", "crodo", "abc123", "frodoc"]|[`"fr*d*"`, `"*rodo"`, `"******"`, `"******"`]|3|


---

## 🔍 Algorithm
**문자열, 순열**

## 💻 Logic

```Python
    order_list = permutations(user_id, len(banned_id))  # 순열 생성
    for order in order_list:
        check = True
        for i, id in enumerate(banned_id):
            # 정규 표현식 사용 (^: 시작 부분 매치 확인, $: 끝 부분 매치 확인)
            pattern = re.compile(f"^{id.replace('*', '.')}$")   # '*'는 '.'으로 치환
            if not pattern.match(order[i]): check = False
        # 전부 다 일치하는 경우
        if check:
            order = sorted(list(order)) # 중복 제거를 위해 우선 정렬
            result.append(tuple(order)) # set 처리하기 위해 tuple로 변환 후 append
    return len(set(result)) # set 이용해서 중복 제거
```
- **순열 생성**  
    **permutations**를 사용해서 `user_id` 배열에서 `len(banned_id)`개의 원소를 뽑는 순열을 만든다.  
    생성된 모든 순열을 비교하면서 경우의 수 확인  
- **정규 표현식 사용**  
    `f` 포매팅과 `replace`를 이용하여 `*` 문자를 `.` 으로 변환하고,  
    `^` 메타문자와 `$` 메타문자를 사용하여 시작 부분과 끝 부분 모두 매칭하는지 확인할 **정규 표현식** 패턴 생성  
- **중복 제거**  
    순열의 문자열이 다 일치하는 경우에는 중복 제거를 위해 `sorted`를 사용해서 우선 정렬하고,  
    **set** 처리를 위해 **tuple**로 변환 후 `result` 리스트에 **append** 해준다.  
    이 후, **set**으로 변환해 중복을 제거해주고 길이 반환  



---

## 🧩 Code
<details><summary>전체 코드 확인</summary>

```Python
import re
from itertools import permutations
def solution(user_id, banned_id):
    result = []
    order_list = permutations(user_id, len(banned_id))  # 순열 생성
    for order in order_list:
        check = True
        for i, id in enumerate(banned_id):
            # 정규 표현식 사용 (^: 시작 부분 매치 확인, $: 끝 부분 매치 확인)
            pattern = re.compile(f"^{id.replace('*', '.')}$")   # '*'는 '.'으로 치환
            if not pattern.match(order[i]): check = False
        # 전부 다 일치하는 경우
        if check:
            order = sorted(list(order)) # 중복 제거를 위해 우선 정렬
            result.append(tuple(order)) # set 처리하기 위해 tuple로 변환 후 append
    return len(set(result)) # set 이용해서 중복 제거
```
</details>

---


## 📝 Review

처음 보자마자 **순열**을 생성해서 경우의 수를 비교해야겠다고 생각했고, **정규 표현식**을 공부한 후 **정규 표현식** 활용해서 풀었다.  
당연히 **순열** 문제로 생각했는데 거의 다 **DFS**나 **비트마스크**로 풀었다는게 신기,,  
중복 제거를 위해 **list**로 변환해 **정렬**하고, **tuple**로 변환해서 **append**하고, 다시 **set** 처리하는 과정에서 실행 시간이 오래 걸린 것 같다...  


```toc
```