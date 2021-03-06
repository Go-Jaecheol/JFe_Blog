---
emoji: ๐
title: "[Spring Boot] JPA Specification์ ์ด์ฉํ ์ฟผ๋ฆฌ ์กฐ๊ฑด ์ฒ๋ฆฌ"
date: '2022-04-24 20:00:00'
author: JFe
tags: Spring
categories: Spring
---

Spring Boot์์๋ ๊ธฐ๋ณธ์ ์ธ CRUD๊ฐ ๊ฐ๋ฅํ๋๋ก **JpaRepository** ์ธํฐํ์ด์ค๋ฅผ ์ ๊ณตํ๋๋ฐ ์ฌ๊ธฐ์ **findByName** ๊ฐ์ ํ์์ผ๋ก ์ฟผ๋ฆฌ ๋ฉ์๋๋ฅผ ๋ง๋ค์ด์ ์กฐ๊ฑด์ ๋ง๊ฒ ๊ฒ์ํ  ์ ์๋ค.  
ํ์ง๋ง ์กฐ๊ฑด์ด ๋ค์ํด์ง๋ฉด ๊ทธ๋งํผ ์ฟผ๋ฆฌ ๋ฉ์๋๋ ๋ง์ด ํ์ํ๊ณ , ์ฝ๋๋ ๋ณต์กํด์ง๋ ๋ฌธ์ ์ ์ด ์๊ธด๋ค.  

```java
public List<Seat> seatFilterList(String levelName, SeatFilterRequest seatFilterRequest) {
    Level level = levelRepository.findByLevelName(levelName);
    String section = seatFilterRequest.getSection();
    String row = seatFilterRequest.getRow();
    String num = seatFilterRequest.getNum();

    if(section.equals("All")) {
        if(!col.equals("") && !num.equals("")) {
            return seatRepository.findByLevelIdAndRowAndNum(level.getLevelId(), col, num);
        } else if(!col.equals("")) {
            return seatRepository.findByLevelIdAndRow(level.getLevelId(), col);
        } else if(!num.equals("")) {
            return seatRepository.findByLevelIdAndNum(level.getLevelId(), num);
        } else {
            return seatRepository.findByLevelId(level.getLevelId());
        }
    } else {
        if(!col.equals("") && !num.equals("")) {
            return seatRepository.findByLevelIdAndSectionAndRowAndNum(level.getLevelId(), section, col, num);
        } else if(!col.equals("")) {
            return seatRepository.findByLevelIdAndSectionAndRow(level.getLevelId(), section, col);
        } else if(!num.equals("")) {
            return seatRepository.findByLevelIdAndSectionAndNum(level.getLevelId(), section, num);
        } else {
            return seatRepository.findByLevelIdAndSection(level.getLevelId(), section);
        }
    }
}
```

๋ค์์ ์ค์  ์คํ๋ง์ ์ด์ฉํ ํ๋ก์ ํธ์์ ์ฟผ๋ฆฌ ๋ฉ์๋๊ฐ ๋ง์์ง๋ฉด์ ๋ณต์กํด์ง ์์  ์  ์ฝ๋๋ค.  
์คํ๋ง์ผ๋ก ํ๋ ์ฒซ ํ๋ก์ ํธ์ฌ์ ๊ธฐ๋ณธ์ ์ธ ์ฟผ๋ฆฌ ๋ฉ์๋ ์ฌ์ฉ ๋ฐฉ๋ฒ๋ง ์๊ณ  ์๋ ์ํ๋ก ์กฐ๊ฑด ์ฒ๋ฆฌ๋ฅผ ํ๋ ค๊ณ  ํ๋๋ฐ, ์กฐ๊ฑด์ด ๋ณต์กํด์ง๋ฉด์ ์ฝ๋๋ ๋ณต์กํด์ก๊ณ  ์คํ์๋ ๋ฌธ์ ๊ฐ ์์ง๋ง ๊ทธ๋ฅ ๋ด๋ ๋ฆฌํฉํ ๋ง์ด ํ์ํ ์ฝ๋๋ผ๋ ์๊ฐ์ด ๋ค์๋ค.  
๊ทธ๋์ ๋ ๊ฐ๋จํ๊ฒ ์ฝ๋๋ฅผ ์ง๋ ๋ฐฉ๋ฒ์ด ์์ ๊ฑฐ๋ผ๊ณ  ์๊ฐํ๋ฉด์ ๊ตฌ๊ธ๋ง์ ํ ๊ฒฐ๊ณผ, **JPA Specification**์ ํ์ฉํ๋ฉด ๋ณด๋ค ๊ฐ๋จํ๊ฒ ๊ตฌํํ  ์ ์๋ค๋ ๊ฒ์ ์๊ฒ ๋์๋ค.  

## JpaSpecificationExecutor ์์

```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long>, JpaSpecificationExecutor<Seat> {
    List<Seat> findByLevelId(Long levelId);
}
```
์ฐ์  **JPA Specification**์ ์ฌ์ฉํ๊ธฐ ์ํด ์ํ๋ **Repository** ์ธํฐํ์ด์ค์ `JpaRepository` ๋ฟ๋ง ์๋๋ผ `JpaSpecificationExecutor`๋ ์์๋ฐ๋๋ค.  

## 

```java
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class SeatFilterSpecification {
    public static Specification<Seat> equalLevelId(Long levelId) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("levelId"), levelId);
            }
        };
    }

    public static Specification<Seat> equalSection(String section) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("section"), section);
            }
        };
    }

    public static Specification<Seat> equalRow(String row) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("row"), row);
            }
        };
    }

    public static Specification<Seat> equalNum(String num) {
        return new Specification<Seat>() {
            @Override
            public Predicate toPredicate(Root<Seat> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.equal(root.get("num"), num);
            }
        };
    }
}
```
๊ทธ ๋ค์, `Specification` ํด๋์ค๋ฅผ ์ถ๊ฐํด์ฃผ๊ณ  ๋น๊ต๋ฅผ ์ํ๋ ์ฟผ๋ฆฌ ์กฐ๊ฑด๋ค์ ๋ฉ์๋๋ก ์ถ๊ฐํด์ค๋ค.  
๊ฐ ๋ฉ์๋์์๋ `criteriaBuilder.equal(root.get("์ํ๋ ์ปฌ๋ผ"), ์ํ๋ ์ปฌ๋ผ)`์ ํตํด ์๋ก ๊ฐ์์ง ๋น๊ตํ๋ ์ฟผ๋ฆฌ๋ฌธ์ด ์ถ๊ฐ๋๋ค. `criteriaBuilder`๋ **equal** ๋ง๊ณ ๋ **like**, **between** ๋ฑ ๋ค์ํ ๋ฉ์๋๋ฅผ ์ง์ํ๋ค.  

## ์ํ๋ ์กฐ๊ฑด์ ๋ง๊ฒ ์ฟผ๋ฆฌ ์กฐ๊ฑด ์ถ๊ฐ

```java
public List<Seat> seatFilterList(String levelName, SeatFilterRequest seatFilterRequest) {
    Level level = levelRepository.findByLevelName(levelName);
    String section = seatFilterRequest.getSection();
    String row = seatFilterRequest.getRow();
    String num = seatFilterRequest.getNum();

    Specification<Seat> spec = Specification.where(SeatFilterSpecification.equalLevelId(level.getLevelId()));
    if(!section.equals("All") && !section.equals("")) {
        spec = spec.and(SeatFilterSpecification.equalSection(section));
    }
    if(!row.equals("")) {
        spec = spec.and(SeatFilterSpecification.equalRow(row));
    }
    if(!num.equals("")) {
        spec = spec.and(SeatFilterSpecification.equalNum(num));
    }

    return seatRepository.findAll(spec);
}
```
์์์ ๋ง๋ค์๋ `Specification` ํด๋์ค์ `where()` ๋ฉ์๋์ `and()` ๋ฉ์๋๋ฅผ ํ์ฉํด์ ์ํ๋ ์กฐ๊ฑด์ ๋ง๊ฒ ์ฟผ๋ฆฌ ์กฐ๊ฑด์ ์ฒ๋ฆฌํ  ์ ์๋ค.  

---

## Reference  
[[Spring Boot ] JPA Specification ์ด์ฉํ์ฌ ์ฟผ๋ฆฌ ์กฐ๊ฑด ๋ค๋ฃจ๊ธฐ](https://groti.tistory.com/49)  
[JPA Specification์ผ๋ก ์ฟผ๋ฆฌ ์กฐ๊ฑด ์ฒ๋ฆฌํ๊ธฐ](https://velog.io/@hellozin/JPA-Specification%EC%9C%BC%EB%A1%9C-%EC%BF%BC%EB%A6%AC-%EC%A1%B0%EA%B1%B4-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)

```toc
```