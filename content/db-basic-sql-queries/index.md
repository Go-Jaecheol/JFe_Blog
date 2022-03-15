---
emoji: 🏫
title: "[Database] Basic SQL Queries"
date: '2022-03-16 04:50:00'
author: JFe
tags: Database
categories: Database
---

## 🔍 기본 검색 Query

```sql
SELECT      <attribute list>
FROM        <relation list>
[ WHERE     <condition> ]
-- for aggregates
[ GROUP BY  <attribute list> ]
[ HAVING    <condition> ]
[ ORDER BY  <attribute list> [DESC] ];
```
### SELECT 문
데이터베이스에서 정보 **검색**을 하는데 가장 기본이 되는 구문으로, `SELECT-FROM-WHERE` 형태가 기본적인 형태다.  
> **relational algebra**에서 **selection**과는 다름

ex)
```sql
SELECT Name
FROM Employee
WHERE Age >= 20;
```

### Aliasing / Renaming
두 개 이상의 attribute들이 서로 이름이 같은 경우에는 다음과 같이 이름을 바꾸거나 명시해 표현할 수 있다.
```sql
SELECT E.Fname, E.Lname, S.Fname, S.Lname
FROM EMPLOYEE (AS) E, EMPLOYEE (AS) S
WHERE E.Super_ssn = S.ssn;
```

> SQL 질의는 데이터를 검색할 때, **"어떻게"** 가 아닌 **"어떤"** 데이터를 검색하기 원하는지 기술하기 때문에 **비절차적(non-procedural)** 이고, **선언적(declarative)** 이다.

---

## 📦 SQL 집합 연산자

**SQL은 중복된 튜플을 제거하지 않는다.**  
1. 중복 제거는 비용이 많이 든다.  
2. 사용자가 쿼리 결과에서 중복 튜플을 보기 원할 수도 있다.  
3. 집계 함수(sum, avg, max, distinct, ...)를 사용할 때 대부분 중복 제거를 원하지 않는다.  
중복 제거를 원한다면 다음과 같이 `DISTINCT`를 사용할 수 있다.

```sql
SELECT DISTINCT Salary
FROM EMPLOYEE;
```

### Set 연산자
**UNION** (합집합) / **EXCEPT** (차집합) / **INTERSECT** (교집합)
Set 연산자를 사용하기 위해서는 두 테이블이 **Type-compatible** 해야 한다.
> **Type-compatible**
> 1. 두 relation은 같은 attribute를 가져야 함
> 2. attribute는 두 relation에서 같은 순서로 나타나야 함

```sql
(
  SELECT DISTINCT Pnumber
  FROM PROJECT, WORKS_ON, EMPLOYEE
  WHERE Pnumber = Pno AND Essn = Ssn AND Lname = 'Smith'
)
UNION
(
  SELECT DISTINCT Pnumber
  FROM PROJECT, DEPARTMENT, EMPLOYEE
  WHERE Dnum = Dnumber AND Mgr_ssn = Ssn AND Lname = 'Smith'
);
```

---

## ⚙ SQL 추가 기능

### Substring Pattern Matching
`LIKE` 비교 연산자
- **%** : 0개 이상의 문자를 대체
  ```sql
  SELECT Fname, Lname
  FROM EMPLOYEE
  WHERE Address LIKE '%Houston, TX%';
  ```
- **_** : 1개 문자를 대체
  ```sql
  SELECT Fname, Lname
  FROM EMPLOYEE
  WHERE Bdate LIKE '199_____-1______';
  ```
  
### 산술 연산자
- **표준 산술 연산자** : +, -, *, /  
- `BETWEEN` 비교 연산자
  ```sql
  SELECT *
  FROM EMPLOYEE
  WHERE (Salary BETWEEN 30000 AND 40000) AND Dno = 5;
  ```
  
### 질의 결과 정렬
`ORDER BY` 절  
- **DESC** : attribute 값들을 내림차순으로 결과 정렬  
- **ASC** : attribute 값들을 오름차순으로 결과 정렬  
```sql
[...]
ORDER BY D.Dname DESC, E.Lname ASC, E.Fname ASC;
```

```toc
```