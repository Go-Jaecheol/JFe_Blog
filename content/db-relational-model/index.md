---
emoji: ๐
title: "[Database] Relational Model"
date: '2021-12-07 21:00:00'
author: JFe
tags: Database
categories: Database
---

## ๐ Relational Model Concepts

* ### Relation  
  ์งํฉ์ ๋ฒ ์ด์ค๋ก ํ ์ํ์ ์ธ ๊ฐ๋์ผ๋ก, **table**๊ณผ ๊ฐ์ ์ญํ ์ ํ๋ค.  
  table์ฒ๋ผ ์ฌ๋ฌ row์ column์ ๊ฐ์ง๊ณ  ์๋๋ฐ ์ด๋, row๋ฅผ ***tuple***, column์ ***attribute***๋ผ๊ณ  ๋ถ๋ฅธ๋ค.  
  relation์ ํํ์ ์ ์ผํ๊ฒ ์๋ณํ  ์ ์๋ ***key***๋ฅผ ๊ฐ์ง๊ณ , ์ ํฉํ key๊ฐ ์๋ ๊ฒฝ์ฐ์๋ ์์์ key๋ฅผ ์ถ๊ฐํ  ์ ์๋๋ฐ ์ด๊ฒ์ **surrogate key(or artificial key)** ๋ผ๊ณ  ๋ถ๋ฅธ๋ค.  
  
* ### Schema  
  `R(A_1, A_2, โฆ , A_n)`  
  R : relation ์ด๋ฆ  
  A_1, A_2, โฆ , A_n : attribute ๋ฆฌ์คํธ  
  degree of relation R : R์ attribute ์  
  
* ### Tuple  
  ๊ฐ๋ค์ด ์ ๋ ฌ๋ ์งํฉ์ผ๋ก <...> ๋ด๋ถ์ ํํ๋๋ค.  
  ํํ์ ๊ฐ๋ค์ ์๋ง์ **domain**์ผ๋ก๋ถํฐ ๋์์ผ ํ๋ค.  
  attribute์ ์์๋ ๋ฌด์กฐ๊ฑด ์ง์ผ์ ธ์ผ ํ์ง๋ง, tuple์ ์์๋ ์ค์ํ์ง ์๋ค.  
  tuple์ ๋ชจ๋  ๊ฐ๋ค์ atomic ํด์ผ ํ๋ค. (Composite or multi-valued attribute๋ ์๋จ)  
  > #### NULL values in certain tuples  
  > - **Unknown** : ์์ง ๋ชจ๋ฅด๋ ๊ฒฝ์ฐ  
  > - **Not available** : ์์ง ํด๋นํ๋ ๊ฐ์ด ์๋ ๊ฒฝ์ฐ (ex. ํด๋ํฐ์ด ์์ด์ ์์ง ๋ฒํธ๊ฐ ์๋ ๊ฒฝ์ฐ)  
  > - **Inapplicable** : ์ ์ฉ๋์ง ์๋ ๊ฒฝ์ฐ (ex. ์ฑ๋ณ์ ๋ฐ๋ผ ์ ์ฉ์ด ๋์ง ์๋ ํญ๋ชฉ์ด ์์ ์ ์์)  
  
* ### Domain  
  atomicํ ๊ฐ์ ์งํฉ์ผ๋ก, ํด๋น attribute๊ฐ ๊ฐ์ ธ์ผ ๋๋ ๊ฐ๋ค์ ํ์์ ๋ํ๋ธ๋ค.  
  ex) ํ๊ตญ ํฐ ๋ฒํธ์ ๊ฒฝ์ฐ์๋, **01X-XXXX-XXXX** ๊ณผ ๊ฐ์ ํ์  
  
* ### State  
  attribute๋ค๋ง๋ค domain์ ๋ฐ์นด๋ฅดํธ ๊ณฑ(Cartesian product) ์ค ๋ถ๋ถ์งํฉ์ผ๋ก,  
  attribute๋ค์ด ๊ฐ์ง ์ ์๋ ๊ฐ๋ค ์ค **์ค์ ๋ก ๊ฐ์ง๊ณ  ์๋ ๊ฐ๋ค์ ์งํฉ**์ ์๋ฏธํ๋ค.  

![relation-term.jpg](relation-term.jpg)

---

## ๐จ Constraints

DB ๋ฌด๊ฒฐ์ฑ์ ์งํค๊ธฐ ์ํด ์ฌ์ฉ๋๋ ์กฐ๊ฑด์ผ๋ก ํฌ๊ฒ ๋ค์๊ณผ ๊ฐ์ด 3๊ฐ์ง์ ์ ์ฝ์กฐ๊ฑด๋ค์ด ์๋ค.  
#### 1. Inherent or Implicit constraints  
: data model ์ค์ค๋ก ๊ฐ์ง๋ ์ ์ฝ์กฐ๊ฑด  
#### 2. Schema-based or Explicit constraints  
: data model schema ์์ฒด์ ์ง์ ์ ์ผ๋ก ๋ช์๋์ด ์๋ ์ ์ฝ์กฐ๊ฑด  
#### 3. Application-based or Semantic constraints  
: data model๊ณผ ์๊ด์์ด application ํ๋ก๊ทธ๋จ์์ ๊ฐ์ ๋์ด์ผ ํ๋ ์ ์ฝ์กฐ๊ฑด  
=> application program์ ๋ช์ธํ๋ฉฐ, ***TRIGGER***๋ ***ASSERTION***์ ์ฌ์ฉํด์ ํด๊ฒฐ

์ด ์ค **Relational model**์์์ ์ ์ฝ์กฐ๊ฑด๋ค์ **๋ ๋ฒ์งธ ์ ์ฝ์กฐ๊ฑด**์ ํด๋นํ๋ค.  

---

## ๐จ Relational Integrity Constraints

### 1. Key constraints (Unique constraints)  
: relation์์ ๋ชจ๋  tuple๋ค์ ์๋ก ์ ์ผํ๊ฒ ๊ตฌ๋ณ๋์ด์ผ ํ๋ค.  
> * #### Super Key  
>   ์์ฑ๋ค์ ์งํฉ์ผ๋ก ๊ตฌ์ฑ๋ ํค๋ก, ์ ์ผ์ฑ์ ๋ง์กฑ  
>   ์ด ์ค, ์ต์์ฑ์ ๋ง์กฑํ๋ ๊ฒ์ด Key  
> * #### Candidate Key  
>   ํํ์ ์ ์ผํ๊ฒ ์๋ณํ  ์ ์๋ ์์ฑ๋ค์ ๋ถ๋ถ์งํฉ  
>   ๋ชจ๋  relation์ ๋ฐ๋์ ํ๋ ์ด์์ ํ๋ณดํค๋ฅผ ๊ฐ์ ธ์ผ ํจ  
> * #### Primary Key  
>   ํ๋ณดํค ์ค์์ ์ ํํ ์ฃผ ํค (๋๋จธ์ง๋ unique key)  
>   Null ๊ฐ์ ๊ฐ์ง ์ ์๊ณ , ๋์ผํ ๊ฐ์ด ์ค๋ณต ์ ์ฅ๋  ์ ์์  

### 2. Entity integrity constraints (์ํฐํฐ ๋ฌด๊ฒฐ์ฑ ์ ์ฝ์กฐ๊ฑด)  
: primary key๋ NULL ๊ฐ์ ๊ฐ์ง ์ ์๋ค.  

### 3. Refrential integrity constraints (์ฐธ์กฐ ๋ฌด๊ฒฐ์ฑ ์ ์ฝ์กฐ๊ฑด)  
: foreign key์ ๊ฐ์ ์ฐธ์กฐํ๊ณ  ์๋ relation์ primary key์ ์กด์ฌํ๋ ๊ฐ๋ง ๊ฐ๋ฅ  

---

## ๐งต Integrity violation ํด๊ฒฐ ๋ฐฉ๋ฒ  

#### 1. Cancel the operation  
: RESTRICT or REJECT ์ต์์ ์ฌ์ฉํด์ violation์ ์ผ์ผํค๋ operation์ ๋ฐ๋ก ์ทจ์์ํค๋ ๋ฐฉ๋ฒ  
#### 2. Operation ์ํํ๊ณ  ๋์, ์ฌ์ฉ์์๊ฒ violation ์๋ ค์ฃผ๋ ๋ฐฉ๋ฒ  
: ๊ถ์ฅํ์ง ์์.  
#### 3. violation์ ํด๊ฒฐํ๋๋ก ์ถ๊ฐ์ ์ธ update trigger  
: CASCADE, SET NULL or SET DEFAULT ์ต์ ์ฌ์ฉ  
#### 4. ์ฌ์ฉ์ ์ง์  error-correction ์คํ  
: ํ๋ก๊ทธ๋จ์ด ๋ฏธ๋ฆฌ ์ง์ ๋์ด ์์ด์ผ ํจ  

```toc
```