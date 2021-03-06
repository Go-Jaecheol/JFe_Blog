---
emoji: ๐โโ๏ธ
title: "[Database] Entity-Relationship(ER) Model"
date: '2021-12-07 13:30:00'
author: JFe
tags: Database
categories: Database
---

## ๐ Database Design Process

  #### 1. ์๊ตฌ์ฌํญ ์์ง ๋ฐ ๋ถ์
  #### 2. Conceptual Design
  #### 3. Logical Design(or Data model mapping
  #### 4. Physical Design
  
---

## ๐โโ๏ธ Entity-Relationship(ER) model

๋ฐ์ดํฐ๋ฅผ **Entity, Relationship, Attribute** ๋ก ํํ

* ### Entity
  ER model์ ๊ธฐ๋ณธ ์ปจ์์ผ๋ก, ๊ตฌ์ฒด์ ์ธ ๊ฐ์ฒด๋ฅผ ์๋ฏธํ๋ค.  
  - **Entity Type** : ๋น์ทํ ์์ฑ์ ๊ฐ์ง entity์ ํ์ (schema ๊ฐ์ ๋๋)  
    ex) EMPLOYEE, COMPANY  
    > #### Weak Entity Type
    > ์๊ธฐ ์์ ์ ์ํ key attribute๋ฅผ ๊ฐ์ง ์๋ entity type์ผ๋ก ํญ์ total participation์ ๋งบ์  
    > ( ER diagram์์ ๋ค๋ชจ ๋ ๊ฐ๋ก ํํ )  
    > - **partial key** : weak entity๋ฅผ ์๋ณํ  ์ ์๋ attribute๋ก, owner entity type์ key์ ํฉ์ณ์ ํํ๋์ด์ผ ํจ. (์ ์  ๋ฐ์ค๋ก ํํ)  
    
  - **Entity Set** : ํน์ ํ ์๊ฐ์ ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์๋ ํน์  entity type์ entity ์งํฉ (state ๊ฐ์ ๋๋)  
    ex) EMPLOYEE: e1, e2, ...  
  
* ### Attribute
  entity๋ฅผ ์ค๋ชํ๋ ํน์ฑ์ผ๋ก, entity๋ ๊ฐ๊ฐ attribute๋ง๋ค ํน์ ํ ๊ฐ์ ๊ฐ์ง๋ค.  
  ๊ฐ๊ฐ์ attribute๋ value set(or data type)์ ๊ฐ์ง๋ค.  
  > * #### Attribute Type
  >   - **Simple (atomic)**
  >     ex) SSN
  >   - **Composite** : attribute๊ฐ ์ฌ๋ฌ ๊ฐ์ ์์๋ค๋ก ์ด๋ฃจ์ด์ง ๊ฒฝ์ฐ  
  >     ex) Name(FirstName, LastName)
  >   - **Multi-valued** : attribute๊ฐ ์ฌ๋ฌ ๊ฐ์ value๋ฅผ ๊ฐ์ง๋ ๊ฒฝ์ฐ  
  >     ex) {Color}
  
  - **Stored attribute**  
    : ๊ฐ์ด ์ง์  ์ ์ฅ๋ attribute  
  - **Derived attribute**  
    : ์ ์ฅ๋ ๊ฐ์ผ๋ก๋ถํฐ ํ์๋๋ attribute  
  - **Complex attribute**  
    : composite attribute์ multi-valued attribute์ ์ค์ฒฉ  
  - **Key attribute**  
    : ๊ฐ entity๊ฐ ๊ณ ์ ํ ๊ฐ์ ๊ฐ์ง๊ณ , ๊ณ ์ ํ๊ฒ ์๋ณ๋  ์ ์๋ ํน์ฑ (ํ๋ ์ด์ ๊ฐ์ง ์ ์์)  
  - **Value Sets (Domains) of Attribute**  
    : attribute๋ง๋ค ๊ฐ๋ค์ด ๊ฐ์ ธ์ผ ๋๋ domain  
    ex) ๋ ์ง์ ๊ฒฝ์ฐ์๋ ***MM-DD-YYYY*** ๊ฐ์ ๊ฒฝ์ฐ๊ฐ domain

![entity-notation.jpg](entity-notation.jpg)

* ### Relationship  
  ๋ ์ด์์ ๊ตฌ๋ณ๋๋ entity๋ค์ ํน์ ํ ์๋ฏธ๋ก ์ฐ๊ด์ํค๋ ๊ฒ  
  - **Relationship type R (๊ด๊ณ ์ ํ)** : entity๋ค์ด ์ด๋ป๊ฒ ์ฐ๊ด๋์ด ์๋์ง์ ๋ํ ์ ํ  
    ex) WORKS_ON, WORKS_FOR  
    
    > **Degree of relationship type**  
    > : relationship์ ์ฐธ์ฌํ๊ณ  ์๋ entity type์ ์  
    > ex) Unary (1) (for self), Binary (2) (involving two), Tertiary (about three), โฆ  

  - **Relationship set R (๊ด๊ณ ์งํฉ)** : relationship instance๋ค์ ์งํฉ  

---

## ๐ง Structural Constraints on Binary Relationship Types

* ### Cardinality ratio  
  entity๊ฐ ์ฐธ์ฌํ๋ relationship instance๋ค์ ์ต๋ ์ ์ง์   
  ex) 1:1, 1:N, N:1, M:N  
  
* ### Participation constraint  
  ๊ด๊ณ๋ฅผ ๋งบ๋ ๋ entity type์ ๋ํด ํ entity๊ฐ ์กด์ฌํ๋ ค๋ฉด ๋ค๋ฅธ entity์ ์์กดํด์ผ ํ๋์ง ์ฌ๋ถ๋ฅผ ๋ํ๋ (์ต์ ์)  
  - **Total Participation** : ๋ชจ๋ ์ฐธ์ฌ (double line์ผ๋ก ํํ)  
  - **Partial Participation** : ์ผ๋ถ ์ฐธ์ฌ (double line์ผ๋ก ํํ)  

![relationship-notation.jpg](relationship-notation.jpg)

```toc
```