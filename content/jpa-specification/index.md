---
emoji: 📝
title: "[Spring Boot] JPA Specification을 이용한 쿼리 조건 처리"
date: '2022-04-24 20:00:00'
author: JFe
tags: Spring
categories: Spring
---

Spring Boot에서는 기본적인 CRUD가 가능하도록 **JpaRepository** 인터페이스를 제공하는데 여기서 **findByName** 같은 형식으로 쿼리 메서드를 만들어서 조건에 맞게 검색할 수 있다.  
하지만 조건이 다양해지면 그만큼 쿼리 메서드도 많이 필요하고, 코드도 복잡해지는 문제점이 생긴다.  

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

다음은 실제 스프링을 이용한 프로젝트에서 쿼리 메서드가 많아지면서 복잡해진 수정 전 코드다.  
스프링으로 하는 첫 프로젝트여서 기본적인 쿼리 메서드 사용 방법만 알고 있는 상태로 조건 처리를 하려고 했는데, 조건이 복잡해지면서 코드도 복잡해졌고 실행에는 문제가 없지만 그냥 봐도 리팩토링이 필요한 코드라는 생각이 들었다.  
그래서 더 간단하게 코드를 짜는 방법이 있을 거라고 생각하면서 구글링을 한 결과, **JPA Specification**을 활용하면 보다 간단하게 구현할 수 있다는 것을 알게 되었다.  

## JpaSpecificationExecutor 상속

```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long>, JpaSpecificationExecutor<Seat> {
    List<Seat> findByLevelId(Long levelId);
}
```
우선 **JPA Specification**을 사용하기 위해 원하는 **Repository** 인터페이스에 `JpaRepository` 뿐만 아니라 `JpaSpecificationExecutor`도 상속받는다.  

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
그 다음, `Specification` 클래스를 추가해주고 비교를 원하는 쿼리 조건들을 메서드로 추가해준다.  
각 메서드에서는 `criteriaBuilder.equal(root.get("원하는 컬럼"), 원하는 컬럼)`을 통해 서로 같은지 비교하는 쿼리문이 추가된다. `criteriaBuilder`는 **equal** 말고도 **like**, **between** 등 다양한 메서드를 지원한다.  

## 원하는 조건에 맞게 쿼리 조건 추가

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
앞에서 만들었던 `Specification` 클래스에 `where()` 메서드와 `and()` 메서드를 활용해서 원하는 조건에 맞게 쿼리 조건을 처리할 수 있다.  

---

## Reference  
[[Spring Boot ] JPA Specification 이용하여 쿼리 조건 다루기](https://groti.tistory.com/49)  
[JPA Specification으로 쿼리 조건 처리하기](https://velog.io/@hellozin/JPA-Specification%EC%9C%BC%EB%A1%9C-%EC%BF%BC%EB%A6%AC-%EC%A1%B0%EA%B1%B4-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)

```toc
```