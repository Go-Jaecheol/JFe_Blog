---
emoji: ๐บ
title: "[Database] ER-to-Relational Mapping"
date: '2021-12-07 23:30:00'
author: JFe
tags: Database
categories: Database
---

## ๐บ ER-to-Relational Mapping

* ### Goals  
  1. ๋ชจ๋  ์ ๋ณด๋ฅผ ๋ณด์กด  
  2. ์ต๋ํ ๊ฐ๋ฅํ ๋งํผ ์ ์ฝ์กฐ๊ฑด๋ค์ ์ ์ง  
  3. NULL ๊ฐ๋ค์ ์ต์ํ  
  
---

## Step 1. Regular Entity Types
๊ธฐ์กด ์ํฐํฐ์ attribute๋ฅผ ์ ๋ถ ํฌํจํ๊ณ , key attributes ์ค์์ ํ๋๋ฅผ ๊ณจ๋ผ **Primary key**๋ก ์ ํ๋ค.  
๋ง์ฝ, ๊ณ ๋ฅธ key๊ฐ **composite**์ด๋ฉด ํด๋นํ๋ attribute๋ค ๋ชจ๋ **Primary key**๋ก ์ ํ๋ค.  

## Step 2. Weak Entity Types
**weak** ์ํฐํฐ์ attribute๋ฅผ ์ ๋ถ ํฌํจ  
**owner** ์ํฐํฐ์ **Primary key**๋ฅผ **Foreign key**๋ก ๊ฐ์ง๊ณ ,  
**owner** ์ํฐํฐ์ **Primary key**์ weak ์ํฐํฐ์ **Partial key**๋ฅผ **Primary key**๋ก ๊ฐ์ง๋ค.  

## Step 3. Binary 1:1 Relation Types
์ํฉ์ ๋ฐ๋ผ 3๊ฐ์ง ๋ฐฉ๋ฒ์ผ๋ก ๊ฐ๋ฅํ๋ค.  
### 1. Foreign key approach (2 relations)  
  ์ฃผ๋ก **ํ์ชฝ์ด total participation**์ผ ๋ ์ฌ์ฉ  
  total participation์ธ ์ชฝ์ **S**, ๋ฐ๋๋ฅผ **T**๋ก ๋๋ฉด, T์ **Primary key**์ ํด๋นํ๋ **Foreign key**๋ฅผ S์ ๋ง๋ค์ด์ ์๋ก ์ฐ๊ฒฐ์ํจ๋ค.  
### 2. Merged relation (1 relation)  
  **๋๋ค total participation**์ธ ๊ฒฝ์ฐ์, ๋ entity๋ฅผ **ํ๋์ relation**์ผ๋ก ํฉ์น๋ค.  
### 3. Cross-reference or relationship relation (3 relations)  
  ์ธ ๋ฒ์งธ relation **U**๋ฅผ ๋ง๋ค์ด์ S, T์ ์ฐ๊ฒฐ  
  S์ T์ **Foreign key** ์ค ํ๋๋ฅผ U์ **Primary key**๋ก ๋ง๋ค๊ณ , ๋๋จธ์ง **Foreign key** ํ๋๋ U์ **Unique key**๋ก ๋ง๋ ๋ค.  
  ์ถ๊ฐ์ ์ธ **join operation**์ด ํ์

## Step 4. Binary 1:N Relation Types
**1-side**์ **Primary key**๋ฅผ **N-side**์ **Foreign key**๋ก ๊ฐ์ง๊ณ  ์๋ก ์ฐ๊ฒฐ์ํจ๋ค.  

## Step 5. Binary M:N Relation Types
relationship relation์ด๋ผ ๋ถ๋ฆฌ๋ ์๋ก์ด relation **U**๋ฅผ ์์ฑ  
๊ฐ๊ฐ ์ํฐํฐ์์ **Primary key**๋ค์ ๋ฝ์์ U์ **Foreign key**๋ก ๋ง๋ค๊ณ  ์๋ก ์ฐ๊ฒฐ  
์ด ๋, ์ด key๋ค์ U์ **Primary key**๊ฐ ๋๋ค.  

## Step 6. Multivalued attributes
**multivalued attribute A**์ ๋ํด์, ์๋ก์ด relation **U**๋ฅผ ๋ง๋ ๋ค.  
U์ **Foreign key**๋ก๋, ์๋ A attribute๊ฐ ์ํ๋ entity์ **Primary key**๋ฅผ Foreign key๋ก ๊ฐ์ง๋ค.  
U์ **Primary key**๋ก๋, ์์ ์๊ธฐํ **Foreign key**์ ์๋ **attribute A**, ์ด๋ ๊ฒ ๋์ Primary key๋ก ๊ฐ์ง๋ค.  

## Step 7. N-ary Relationship Types
N-ary relationship type **R**์์ **n > 2** ๋ฉด, ์๋ก์ด relationship relation **U**๋ฅผ ์์ฑ  
์ฐธ์ฌํ๋ ๋ชจ๋  entity์ **Primary key**๋ค์ U์ **Foreign key**๋ก ๊ฐ์ง๋ค.  

![mapping-terms.jpg](mapping-terms.jpg)

```toc
```