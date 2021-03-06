---
emoji: ๐ซ
title: "[Database] SQL ๊ธฐ์ด"
date: '2021-12-08 03:00:00'
author: JFe
tags: Database
categories: Database
---

## ๐ SQL Schema & Catalog

### SQL Schema
**๋ฐ์ดํฐ๋ฒ ์ด์ค**๋ผ๊ณ ๋ ๋ถ๋ฆฌ๋ฉฐ, ๊ฐ์ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ํด ์๋ ํ์ด๋ธ๊ณผ ๋ค๋ฅธ ๊ตฌ์กฐ๋ค์ ๊ทธ๋ฃน์ง๋ ๊ฐ๋์ด๋ค.  
Schema name์ผ๋ก ๊ตฌ๋ณ๋๋ค.  
์คํค๋ง๋ฅผ ์์ ํ๋ ์ฌ์ฉ์๋ฅผ ๋ํ๋ด๋ **authorization identifier**์ ์คํค๋ง์ ์๋ ๊ฐ๊ฐ element์ **descriptor**๋ฅผ ํฌํจํ๋ค.  
Schema element๋ **table, constraints, views, domains** ๋ฑ์ ํฌํจํ๋ค.  
```sql
CREATE SCHEMA COMPANY AUTHORIZATION 'Joshua'
```

### Catalog
**์คํค๋ง์ ๋ชจ์**์ผ๋ก, `INFORMATION_SCHEMA` ๋ผ๊ณ  ๋ถ๋ฆฌ๋ ํน๋ณํ ์คํค๋ง๋ฅผ ํญ์ ๊ฐ์ง๊ณ  ์๋ค.  
**Integrity constraints**๋ ๊ฐ์ catalog์ ์คํค๋ง๋ค ์ฌ์ด์์๋ง ์ ์๋  ์ ์๋ค.  
๊ฐ์ catalog์ ์๋ ์คํค๋ง๋ค์ **type/domain๊ณผ ๊ฐ์ ํน์  element**๋ฅผ ๊ณต์ ํ  ์ ์๋ค.  

---

## ๐ CREATE TABLE

์๋ก์ด relation R์ ์ ์ํ๋ค.  
R์ **์ด๋ฆ**์ ์ฃผ๊ณ ๋์, R์ **attributes**์ **types(domains)**, **์ด๊ธฐ ์ ์ฝ์กฐ๊ฑด๋ค(NOT NULL or UNIQUE)** ์ ์ ์ํ๋ค.  
**key, ์ํฐํฐ ๋ฌด๊ฒฐ์ฑ, ์ฐธ์กฐ ๋ฌด๊ฒฐ์ฑ ์ ์ฝ์กฐ๊ฑด๋ค**์ attribute ์ ์ธ ์ดํ์ ์ ์ํ  ์ ์๋ค.  
(ํ์ด๋ธ ์์ฑ ํ์๋ `ALTER TABLE` ์ ์ฌ์ฉํด์ ์ถ๊ฐํ  ์ ์์)  
```sql
CREATE TABLE EMPLOYEE 
{
...
}
```
```sql
ALTER TABLE EMPLOYEE ADD FOREIGN KEY (Super_ssn) REFERENCES EMPLOYEE(Ssn);
```

> * ### Base tables (base relations)  
>   Table(relation)๊ณผ row(tuple)๋ค์ด ์ค์ ๋ก DBMS ์์ ์์ฑ๋๊ณ  ์ ์ฅ๋๋ค.  
> * ### Virtual relations (views)  
>   ๋ฌผ๋ฆฌ์  ํ์ผ๊ณผ ์ค์ ๋ก ์ผ์นํ  ์๋, ์ํ  ์๋ ์๋ค.  
>   view์ ์ํ tuple๋ค์ ๊ตฌ์ฒดํ ๋์ด ์์ง ์๋ ํ view๊ฐ ์ฐธ์กฐ๋  ๋๋ง ๊ณ์ฐ๋๋ค.  
>   `CREATE VIEW` ๋ฅผ ํตํด ์์ฑ๋๋ค.  
>   - ์ฅ์  : 1) ์ ์ฅ๊ณต๊ฐ ๋ญ๋น๋ฅผ ์ค์ผ ์ ์๊ณ  2) ๊ถํ์ ์ ํํ  ์ ์๋ค. 3) ๊ณ์ฐ ์๊ฐ์ด ์ค๋ ๊ฑธ๋ฆฌ์ง ์์ ๋ ์ ์ฉ  

---

## ๐งฉ Attribute์ Data Type๊ณผ Domain

* ### Numeric  
  ์ ์ ํํ : `INTEGER`, `INT`, `SMALLINT`, ์ค๋ผํด์์๋ `NUMBER`  
  ์ค์ ํํ : `FLOAT`, `REAL`, `DOUBLE PRECISION`  
  Formated number : `DECIMAL(i, j)`, `DEC(i, j)`, `NUMERIC(i, j)`, ์ฌ๊ธฐ์ i: ์ ์ฒด ์๋ฆฟ์, j: ์์์  ์๋ ์๋ฆฟ์  

* ### Charcter-string  
  ๊ณ ์  ๊ธธ์ด : `CHAR(n)`, `CHARACTER(n)`, ์ฌ๊ธฐ์ n์ ์ต๋ ๊ฐ๋ฅ ๋ฌธ์ ์๋ฅผ ์๋ฏธํ๊ณ , n๋ณด๋ค ์งง์ผ๋ฉด ๋ฌธ์ ๋ค์ ๊ณต๋ฐฑ์ด ์ฑ์์ง๋ค.  
  ๊ฐ๋ณ ๊ธธ์ด : `VARCHAR(n)`, `CHAR VARYING(n)`, `CHARACTER VARYING(n)`, ์ด ์ธ์ `CLOB(CHARACTER LARGE OBJECT)`์ ๋ฌธ์์ฒ๋ผ ํฐ ํ์คํธ ๊ฐ๋ค์ ๋ํ๋ผ ์ ์๋ค.  

* ### Bit-string  
  ๊ณ ์  ๊ธธ์ด : `BIT(n)`, ์ฌ๊ธฐ์ n์ ์ต๋ ๊ฐ๋ฅ bit ์๋ฅผ ์๋ฏธํ๊ณ , B'10101'๊ณผ ๊ฐ์ ํ์์ ์ฌ์ฉํด์ผ ํ๋ค.  
  ๊ฐ๋ณ ๊ธธ์ด : `BIT VARYING(n)`, ์ด ์ธ์ `BLOB(BINARY LARGE OBJECT)`์ ์คํ๊ฐ๋ฅํ ์ฝ๋๋ java ๊ฐ์ฒด์ฒ๋ผ ํฐ binary ๊ฐ๋ค์ ๋ํ๋ผ ์ ์๋ค.  

* ### Boolean  
  `TRUE` or `FALSE` or `NULL`  
  
* ### Date  
  **YYYY-MM-DD** ํ์, ์ค๋ผํด์์๋ `to_date()`๋ฅผ ์ฌ์ฉ  
  
* ### Time  
  **HH:MM:SS** ํ์  
  
* ### Timestamp  
  **YYYY-MM-DD HH:MM:SS.xxxxxx** ํ์์ผ๋ก, Date์ Time์ ํฉ์น๊ณ  second์ ์์์  ์ดํ ์ต์ 6์๋ฆฌ๊ฐ ์ถ๊ฐ๋ ํ์  

* ### Interval  
  Date, Time, Timestamp์ ์ ๋๊ฐ์ ์ฆ๊ฐ, ๊ฐ์์ํค๋๋ฐ ์ฌ์ฉํ๋ ์๋๊ฐ์ ๋ํ๋ผ ์ ์๋ค.  

* ### Domain  
  domain์ ๋ฐ์ดํฐ ํ์์ ์ฝ๊ฒ ๋ณ๊ฒฝํ  ์ ์๊ณ , ์คํค๋ง์ ๊ฐ๋์ฑ์ ๋์ผ ์ ์๋ค.  
  ```sql
  CREATE DOMAIN SSN_TYPE AS CHAR(9);
  ```

* ### Type  
  ๊ฐ์ฒด๋ฅผ ์ ์ฅํ๋ ์ฉ๋๋ก, ์ฌ์ฉ์ ์ ์ ํ์(UDTs)์ ์์ฑํ๋๋ฐ ์ฌ์ฉ๋๋ค.  
  `CREATE TYPE` ๋ช๋ น์ด๋ก ์์ฑ  

---

## ๐ง SQL ์ ์ฝ์กฐ๊ฑด ์ค์ 

* ### Attribute ์ ์ฝ์กฐ๊ฑด ์ค์  ๋ฐฉ๋ฒ  
  - `DEFAULT <value>` ๊ตฌ๋ฌธ์ผ๋ก default ๊ฐ ์ค์   
  - `NOT NULL`  
  - `CHECK` ๊ตฌ๋ฌธ์ผ๋ก domain ํ์ธ ๊ฐ๋ฅ  
  ```sql
  Dnumber INT NOT NULL CHECK (Dnumber > 0 and Dnumber < 10)
  ```

* ### Key ์ ์ฝ์กฐ๊ฑด ์ค์  ๋ฐฉ๋ฒ  
  - `PRIMARY KEY` ๊ตฌ๋ฌธ์ผ๋ก Primary key ์ง์   
  ```sql
  Dnumber INT PRIMARY KEY
  PRIMARY KEY(State, Number)
  ```

  - `UNIQUE` ๊ตฌ๋ฌธ์ผ๋ก ํ๋ณดํค ์ง์   
  ```sql
  Dnumber VARCHAR(15) UNIQUE
  UNIQUE(State, Number)
  ```

  - `FOREIGN KEY` ๊ตฌ๋ฌธ์ผ๋ก Foreign key ์ง์ , `SET NULL`, `CASCADE` ๊ฐ์ **์ฐธ์กฐ ํธ๋ฆฌ๊ฑฐ ์ก์ ์ **์ ์ถ๊ฐํ  ์ ์๋ค.  
  ```sql
  FOREIGN KEY (Mgr_ssn) REFERENCES EMPLOYEE(Ssn)
  ```

```toc
```