---
emoji: ๐โโ๏ธ
title: "[Database] Basic SQL Queries"
date: '2022-03-16 04:50:00'
author: JFe
tags: Database
categories: Database
---

## ๐ ๊ธฐ๋ณธ ๊ฒ์ Query

```sql
SELECT      <attribute list>
FROM        <relation list>
[ WHERE     <condition> ]
-- for aggregates
[ GROUP BY  <attribute list> ]
[ HAVING    <condition> ]
[ ORDER BY  <attribute list> [DESC] ];
```
### SELECT ๋ฌธ
๋ฐ์ดํฐ๋ฒ ์ด์ค์์ ์ ๋ณด **๊ฒ์**์ ํ๋๋ฐ ๊ฐ์ฅ ๊ธฐ๋ณธ์ด ๋๋ ๊ตฌ๋ฌธ์ผ๋ก, `SELECT-FROM-WHERE` ํํ๊ฐ ๊ธฐ๋ณธ์ ์ธ ํํ๋ค.  
> **relational algebra**์์ **selection**๊ณผ๋ ๋ค๋ฆ

ex)
```sql
SELECT Name
FROM Employee
WHERE Age >= 20;
```

### Aliasing / Renaming
๋ ๊ฐ ์ด์์ attribute๋ค์ด ์๋ก ์ด๋ฆ์ด ๊ฐ์ ๊ฒฝ์ฐ์๋ ๋ค์๊ณผ ๊ฐ์ด ์ด๋ฆ์ ๋ฐ๊พธ๊ฑฐ๋ ๋ช์ํด ํํํ  ์ ์๋ค.
```sql
SELECT E.Fname, E.Lname, S.Fname, S.Lname
FROM EMPLOYEE (AS) E, EMPLOYEE (AS) S
WHERE E.Super_ssn = S.ssn;
```

> SQL ์ง์๋ ๋ฐ์ดํฐ๋ฅผ ๊ฒ์ํ  ๋, **"์ด๋ป๊ฒ"** ๊ฐ ์๋ **"์ด๋ค"** ๋ฐ์ดํฐ๋ฅผ ๊ฒ์ํ๊ธฐ ์ํ๋์ง ๊ธฐ์ ํ๊ธฐ ๋๋ฌธ์ **๋น์ ์ฐจ์ (non-procedural)** ์ด๊ณ , **์ ์ธ์ (declarative)** ์ด๋ค.

---

## ๐ฆ SQL ์งํฉ ์ฐ์ฐ์

**SQL์ ์ค๋ณต๋ ํํ์ ์ ๊ฑฐํ์ง ์๋๋ค.**  
1. ์ค๋ณต ์ ๊ฑฐ๋ ๋น์ฉ์ด ๋ง์ด ๋ ๋ค.  
2. ์ฌ์ฉ์๊ฐ ์ฟผ๋ฆฌ ๊ฒฐ๊ณผ์์ ์ค๋ณต ํํ์ ๋ณด๊ธฐ ์ํ  ์๋ ์๋ค.  
3. ์ง๊ณ ํจ์(sum, avg, max, distinct, ...)๋ฅผ ์ฌ์ฉํ  ๋ ๋๋ถ๋ถ ์ค๋ณต ์ ๊ฑฐ๋ฅผ ์ํ์ง ์๋๋ค.  
์ค๋ณต ์ ๊ฑฐ๋ฅผ ์ํ๋ค๋ฉด ๋ค์๊ณผ ๊ฐ์ด `DISTINCT`๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

```sql
SELECT DISTINCT Salary
FROM EMPLOYEE;
```

### Set ์ฐ์ฐ์
**UNION** (ํฉ์งํฉ) / **EXCEPT** (์ฐจ์งํฉ) / **INTERSECT** (๊ต์งํฉ)
Set ์ฐ์ฐ์๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์๋ ๋ ํ์ด๋ธ์ด **Type-compatible** ํด์ผ ํ๋ค.
> **Type-compatible**
> 1. ๋ relation์ ๊ฐ์ attribute๋ฅผ ๊ฐ์ ธ์ผ ํจ
> 2. attribute๋ ๋ relation์์ ๊ฐ์ ์์๋ก ๋ํ๋์ผ ํจ

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

## โ SQL ์ถ๊ฐ ๊ธฐ๋ฅ

### Substring Pattern Matching
`LIKE` ๋น๊ต ์ฐ์ฐ์
- **%** : 0๊ฐ ์ด์์ ๋ฌธ์๋ฅผ ๋์ฒด
  ```sql
  SELECT Fname, Lname
  FROM EMPLOYEE
  WHERE Address LIKE '%Houston, TX%';
  ```
- **_** : 1๊ฐ ๋ฌธ์๋ฅผ ๋์ฒด
  ```sql
  SELECT Fname, Lname
  FROM EMPLOYEE
  WHERE Bdate LIKE '199_____-1______';
  ```
  
### ์ฐ์  ์ฐ์ฐ์
- **ํ์ค ์ฐ์  ์ฐ์ฐ์** : +, -, *, /  
- `BETWEEN` ๋น๊ต ์ฐ์ฐ์
  ```sql
  SELECT *
  FROM EMPLOYEE
  WHERE (Salary BETWEEN 30000 AND 40000) AND Dno = 5;
  ```
  
### ์ง์ ๊ฒฐ๊ณผ ์ ๋ ฌ
`ORDER BY` ์   
- **DESC** : attribute ๊ฐ๋ค์ ๋ด๋ฆผ์ฐจ์์ผ๋ก ๊ฒฐ๊ณผ ์ ๋ ฌ  
- **ASC** : attribute ๊ฐ๋ค์ ์ค๋ฆ์ฐจ์์ผ๋ก ๊ฒฐ๊ณผ ์ ๋ ฌ  
```sql
[...]
ORDER BY D.Dname DESC, E.Lname ASC, E.Fname ASC;
```

---

## โ INSERT ๋ฌธ

relation์ tuple์ **์ถ๊ฐ**ํ๊ธฐ ์ํด ์ฌ์ฉ

- attribute ๊ฐ์ `CREATE TABLE`๋ฌธ์ ์ง์ ๋ attribute์ ๊ฐ์ ์์๋ก ๋์ด๋์ด์ผ ํ๋ค.  
- ๋ฐ์ดํฐ ํ์์ ๋ํ **์ ์ฝ ์กฐ๊ฑด**์ ์๋์ผ๋ก ์๋ํ์ฌ, ์๋ชป๋ ๊ฐ์ด ๋ค์ด์ค๋ฉด ๊ฑฐ๋ถ๋๋ค.  
- DDL๋ฌธ์ผ๋ก์ **๋ฌด๊ฒฐ์ฑ ์ ์ฝ์กฐ๊ฑด**์ด ์ ์ฉ๋๋ค.  

```sql
INSERT INTO EMPLOYEE (Fname, Lname, Dno)
VALUES ('Fernando', 'Tatis', 4);
```
์ ์์์ ๊ฐ์ด ์ํ๋ attribute ๊ฐ๋ง ๋ช์ํ์ฌ INSERT๋ฌธ์ ์์ฑํ  ์ ์๋ค.  
(=> ๋ช์๋์ง ์์ ๊ฐ๋ค์ **DEFAULT** ๋๋ **NULL**๋ก ์ค์ ๋จ)  
attribute ๊ฐ์ ๋ช์ํ์ง ์์ ๊ฒฝ์ฐ, **NULL**์ ํฌํจํ ๋ชจ๋  ๊ฐ์ ์์ฑํด์ผ ํ๋ค.  

---

## โ DELETE ๋ฌธ

์กฐ๊ฑด์ ๋ง๋ relation์์ tuple์ ์ญ์ ํ๊ธฐ ์ํด ์ฌ์ฉ

- `WHERE` ์ ์ ์กฐ๊ฑด์ ๋ง์กฑํ๋ tuple์ ์ ํํด ์ ๊ฑฐํ๋ค.  
- tuple์ ํ ๋ฒ์ ํ๋์ ํ์ด๋ธ์์๋ง ์ญ์ ๋๋ค.  
- **์ฐธ์กฐ ๋ฌด๊ฒฐ์ฑ**์ด ์ง์ผ์ ธ์ผํ๋ค.  
- `CASCADE`๊ฐ **์ฐธ์กฐ ๋ฌด๊ฒฐ์ฑ ์ ์ฝ์กฐ๊ฑด**์ ์ค์ ๋์ด ์์ผ๋ฉด, ์ญ์ ํ  tuple์ ์ฐธ์กฐํ๋ ๋ชจ๋  tuple์ด ์ญ์ ๋๋ค.  

```sql
DELETE FROM EMPLOYEE
WHERE Dno = 5;
```

---

## โ UPDATE ๋ฌธ

์กฐ๊ฑด์ ๋ง๋ relation์์ tuple์ ์๋ฐ์ดํธํ๊ธฐ ์ํด ์ฌ์ฉ

- `WHERE` ์ ์ ์กฐ๊ฑด์ ๋ง์กฑํ๋ tuple์ ์ ํํ๋ค.  
- `SET` ์ ์ ์์ ํ  attribute์ ๊ทธ ๊ฐ์ ์ง์ ํ๋ค.  
- ์ด๋ฐ ํธ๋ฆฌ๊ฑฐ ์์์ด **์ฐธ์กฐ ๋ฌด๊ฒฐ์ฑ ์ ์ฝ์กฐ๊ฑด**์ ์ค์ ๋์ด ์์ผ๋ฉด, **Primary Key** ๊ฐ ์๋ฐ์ดํธ๋ ๋ค๋ฅธ ํ์ด๋ธ์ ์๋ tuple์ **Foreign Key** ๊ฐ์ผ๋ก ์ ํ๋  ์ ์๋ค.

```sql
UPDATE EMPLOYEE E
SET E.Dno = 5,
WHERE E.Lname = 'Tatis';
```

```toc
```