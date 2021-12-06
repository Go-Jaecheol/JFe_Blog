---
emoji: 🔍
title: "[Database] DB? DBMS??"
date: '2021-12-06 19:30:00'
author: JFe
tags: Database
categories: Database
---

**DB(database)** : 서로 관계있는 데이터들의 집합  
**DBMS** : **Database Management System**으로 데이터베이스를 만들고 관리할 수 있도록 하는 소프트웨어 / 시스템  

## 💡 DB를 사용하는 이유?

### 1. Queries (질의)
파일 기반 시스템에서는 자신이 원하는 데이터를 조회하기에 한계가 있다.  
하지만 DBMS에서는 ***DML(Data Manipulation Language)*** 을 이용해 쉽게 데이터를 조회할 수 있고, ***Schema***를 이용해 데이터 구조(Schema)와 데이터를 분리할 수 있다.  

### 2. Integrity (무결성)
DBMS에서는 ***제약조건(constraint)*** 을 이용해서 데이터의 일관성을 유지한다.  

### 3. Update (갱신)
DBMS에서는 ***DDL(Data Definition Language)*** 을 이용해서 데이터를 보다 쉽게 추가/삭제/갱신 할 수 있다.  

### 4. Multiple Users (다중 사용자)
하나의 데이터에 두 명 이상의 사용자가 접근해서 데이터를 수정하려고 하면 데이터의 무결성이 깨질 수 있다.  
이런 상황을 막기 위해 DBMS에서는 데이터 업데이트가 순서대로(***serial*** order) 일어나도록 ***동시성 제어***를 통해 다중 사용자를 허용한다.  

### 5. Crashes (크래시)
DBMS에서는 Crash가 일어났을 때를 대비하기 위해 ***Transactions, Commit, Rollback, Recovery*** 등을 제공한다.  

### 6. Data Physically Separate (물리적으로 떨어져 있는 데이터)
 ***Key*** 를 이용해서 떨어져 있는 데이터에 대해서도 쉽게 접근할 수 있다.  

### 7. Security (보안)
DBMS에서는 ***View*** 를 이용해 데이터에 접근할 수 있는 사람들을 제어할 수 있다.  

### 8. Efficiency
DBMS에서는 데이터의 양이 많아졌을 때도 효율적으로 관리하기 위해 ***Index*** 를 제공한다.  

### 9. New Needs
필요에 따라 ***Data mining*** 을 통해 데이터를 요약/분석/예측 할 수 있다.  

---

## 📌 DB 시스템의 주요 특징

### 1. Self-describing nature of a DB system
DB 시스템은 데이터 뿐만 아니라 DB 구조, 타입, 제약조건에 대한 완전한 정의를 포함한다.  
**metadata** 라고 불리는 특정 DB의 설명을 ***Catalog*** 에 저장한다.  

### 2-1. Insulation between programs and data
program-data 간의 독립  
DBMS 액세스 프로그램을 변경하지 않고도 데이터 구조와 저장소를 변경할 수 있다.  
(파일 기반 시스템에서는 프로그램에 의해 액세스 되는 파일의 구조가 변경되면 프로그램을 변경해야 함)  

### 2-2. Data abstraction (데이터 추상화)
program-data와 program-operation의 독립성을 허용하는 특징  
데이터가 어떻게 저장되고 접근되는지는 사용자가 몰라도 된다.  

### 3. Support of multiple views of the data
각각 사용자마다 DBMS의 다른 view를 볼 수 있다.  
각각 사용자는 자신이 원하는 데이터만 따로 볼 수 있다.  

### 4. Sharing of data and multiuser transaction processing
동시 사용자가 DB에 검색, 업데이트 할 수 있도록 허용  
DBMS의 동시성 제어를 통해 ***transaction***이 올바르게 실행되거나 중단된다.  
> **Transaction** : 데이터베이스의 상태를 변화시키기 위해 수행하는 작업의 단위로, ***ACID(Atomicity, Consistency, Isolation, Durability)*** 를 만족해야 함  
> **OLTP** : Online Transaction Processing으로 DB application의 중요한 부분  

---

## 🎯 DB 시스템의 장점

**1. 중복 제어**  
**2. 비인가 접근 제한**  
**3. 영속 저장**  
**4. 효율적 질의 처리를 위한 저장 구조 제공 (ex. index)**  

---

## ❌ DBMS를 사용하지 않는 경우

- DBMS 사용에 비용이 너무 많이 들 경우  
- DBMS를 사용하지 않아도 잘 짜여져 있는 경우  
- 제한된 저장공간을 가진 임베디드 시스템처럼 DBMS를 사용할 수 없는 경우  
- 모델링 한계 때문에 복잡한 데이터를 다룰 수 없는 경우  
- 사용자가 원하는 특별한 기능을 DBMS가 제공할 수 없는 경우 (ex. GIS, location-based service)  


```toc
```