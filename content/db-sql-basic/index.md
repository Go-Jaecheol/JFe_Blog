---
emoji: 🏫
title: "[Database] SQL 기초"
date: '2021-12-08 03:00:00'
author: JFe
tags: Database
categories: Database
---

## 📃 SQL Schema & Catalog

### SQL Schema
**데이터베이스**라고도 불리며, 같은 데이터베이스에 속해 있는 테이블과 다른 구조들을 그룹짓는 개념이다.  
Schema name으로 구별된다.  
스키마를 소유하는 사용자를 나타내는 **authorization identifier**와 스키마에 있는 각각 element의 **descriptor**를 포함한다.  
Schema element는 **table, constraints, views, domains** 등을 포함한다.  
```sql
CREATE SCHEMA COMPANY AUTHORIZATION 'Joshua'
```

### Catalog
**스키마의 모임**으로, `INFORMATION_SCHEMA` 라고 불리는 특별한 스키마를 항상 가지고 있다.  
**Integrity constraints**는 같은 catalog의 스키마들 사이에서만 정의될 수 있다.  
같은 catalog에 있는 스키마들은 **type/domain과 같은 특정 element**를 공유할 수 있다.  

---

## 📚 CREATE TABLE

새로운 relation R을 정의한다.  
R에 **이름**을 주고나서, R의 **attributes**와 **types(domains)**, **초기 제약조건들(NOT NULL or UNIQUE)** 을 정의한다.  
**key, 엔터티 무결성, 참조 무결성 제약조건들**은 attribute 선언 이후에 정의할 수 있다.  
(테이블 생성 후에도 `ALTER TABLE` 을 사용해서 추가할 수 있음)  
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
>   Table(relation)과 row(tuple)들이 실제로 DBMS 상에 생성되고 저장된다.  
> * ### Virtual relations (views)  
>   물리적 파일과 실제로 일치할 수도, 안할 수도 있다.  
>   view에 속한 tuple들은 구체화 되어 있지 않는 한 view가 참조될 때만 계산된다.  
>   `CREATE VIEW` 를 통해 생성된다.  
>   - 장점 : 1) 저장공간 낭비를 줄일 수 있고 2) 권한을 제한할 수 있다. 3) 계산 시간이 오래 걸리지 않을 때 유용  

---

## 🧩 Attribute의 Data Type과 Domain

* ### Numeric  
  정수 표현 : `INTEGER`, `INT`, `SMALLINT`, 오라클에서는 `NUMBER`  
  실수 표현 : `FLOAT`, `REAL`, `DOUBLE PRECISION`  
  Formated number : `DECIMAL(i, j)`, `DEC(i, j)`, `NUMERIC(i, j)`, 여기서 i: 전체 자릿수, j: 소수점 아래 자릿수  

* ### Charcter-string  
  고정 길이 : `CHAR(n)`, `CHARACTER(n)`, 여기서 n은 최대 가능 문자 수를 의미하고, n보다 짧으면 문자 뒤에 공백이 채워진다.  
  가변 길이 : `VARCHAR(n)`, `CHAR VARYING(n)`, `CHARACTER VARYING(n)`, 이 외에 `CLOB(CHARACTER LARGE OBJECT)`은 문서처럼 큰 텍스트 값들을 나타낼 수 있다.  

* ### Bit-string  
  고정 길이 : `BIT(n)`, 여기서 n은 최대 가능 bit 수를 의미하고, B'10101'과 같은 형식을 사용해야 한다.  
  가변 길이 : `BIT VARYING(n)`, 이 외에 `BLOB(BINARY LARGE OBJECT)`은 실행가능한 코드나 java 객체처럼 큰 binary 값들을 나타낼 수 있다.  

* ### Boolean  
  `TRUE` or `FALSE` or `NULL`  
  
* ### Date  
  **YYYY-MM-DD** 형식, 오라클에서는 `to_date()`를 사용  
  
* ### Time  
  **HH:MM:SS** 형식  
  
* ### Timestamp  
  **YYYY-MM-DD HH:MM:SS.xxxxxx** 형식으로, Date와 Time을 합치고 second의 소수점 이하 최소 6자리가 추가된 형식  

* ### Interval  
  Date, Time, Timestamp의 절댓값을 증가, 감소시키는데 사용하는 상대값을 나타낼 수 있다.  

* ### Domain  
  domain의 데이터 타입을 쉽게 변경할 수 있고, 스키마의 가독성을 높일 수 있다.  
  ```sql
  CREATE DOMAIN SSN_TYPE AS CHAR(9);
  ```

* ### Type  
  객체를 저장하는 용도로, 사용자 정의 타입(UDTs)을 생성하는데 사용된다.  
  `CREATE TYPE` 명령어로 생성  

---

## 🚧 SQL 제약조건 설정

* ### Attribute 제약조건 설정 방법  
  - `DEFAULT <value>` 구문으로 default 값 설정  
  - `NOT NULL`  
  - `CHECK` 구문으로 domain 확인 가능  
  ```sql
  Dnumber INT NOT NULL CHECK (Dnumber > 0 and Dnumber < 10)
  ```

* ### Key 제약조건 설정 방법  
  - `PRIMARY KEY` 구문으로 Primary key 지정  
  ```sql
  Dnumber INT PRIMARY KEY
  PRIMARY KEY(State, Number)
  ```

  - `UNIQUE` 구문으로 후보키 지정  
  ```sql
  Dnumber VARCHAR(15) UNIQUE
  UNIQUE(State, Number)
  ```

  - `FOREIGN KEY` 구문으로 Foreign key 지정, `SET NULL`, `CASCADE` 같은 **참조 트리거 액션 절**을 추가할 수 있다.  
  ```sql
  FOREIGN KEY (Mgr_ssn) REFERENCES EMPLOYEE(Ssn)
  ```

```toc
```