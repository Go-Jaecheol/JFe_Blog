---
emoji: 📚
title: "[Elastic] Elastic Stack(ELK Stack) 소개"
date: '2022-04-06 10:00:00'
author: JFe
tags: Back-end
categories: Back-end
---

![the-elastic-stack.png](the-elastic-stack.png)  

> [Elastic 공식 페이지](https://www.elastic.co/) 문서를 참고하여 작성하였습니다.  

# Elastic Stack ??

모든 유형의 데이터를 실시간으로 검색, 분석 및 시각화할 수 있는 Elastic의 오픈소스 프로젝트들을 하나로 묶어서 **Elastic Stack**이라고 한다.  
원래는 검색 및 분석 엔진인 **Elasticsearch**, 수집 파이프라인인 **Logstash**, 시각화 도구인 **Kibana**의 앞글자만 따서 **ELK Stack**이라고 불렀으나 파일 추적을 위한 **Beats**를 추가하면서 **Elastic Stack**으로 이름이 바뀌었다.  

[https://www.elastic.co/kr/what-is/elk-stack](https://www.elastic.co/kr/what-is/elk-stack)  

---

# Elastic Stack 구조  
![elk-stack-elkb-diagram.svg](elk-stack-elkb-diagram.svg)  

|SQL|Elastic|설명|
|---|---|---|
|column|field||
|row|document||
|table|index||
|schema|X|SQL의 schema와 비슷한 기능을 따로 제공하지 X|

## 1. Beats  
**[경량 데이터 수집기]**  
**Beats**는 단일 목적의 데이터 수집기 무료 오픈 소스 플랫폼으로 수백 수천 개의 장비와 시스템으로부터 Logstash나 Elasticsearch에 데이터를 전송한다.  
- Filebeat - 로그 파일  
- Metricbeat - 메트릭  
- Packetbeat - 네트워크 데이터  
- Winlogbeat - Windows 이벤트 로그  
- Auditbeat - 감사 데이터  
- Heartbeat - 가동 시간 모니터링  
- Functionbeat - 서버를 사용하지 않는 수집기  
다음과 같이 데이터 유형에 따라 여러 종류의 수집기를 제공하고 있고, 자신의 데이터 수집 환경에 맞게 원하는 수집기를 선택하여 편리하게 데이터를 수집할 수 있다.  

## 2. Logstash  
**[데이터 처리 파이프라인]**  
무료 오픈 소스 서버의 데이터 처리 파이프라인인 Logstash는 다양한 소스에서 데이터를 수집하여 변환한 후 자주 사용하는 저장소로 전달한다.  
**Logstash**는 입력/필터/출력 구조로 구성되어 있고, 모든 형태의 데이터를 수집해서 필터를 이용해 형식이나 복잡성에 관계없이 데이터를 동적으로 변환하고 원하는 곳으로 스태시를 선택하여 전송할 수 있다.  
특히 필터에서는 `grok`을 이용해 비구조적 데이터에서 구조를 도출하여 IP 주소에서 위치 정보 좌표를 해독하고, 민감한 필드를 익명화하거나 제외시키며, 전반적인 처리를 손쉽게 할 수 있고, 플러그인을 이용해 원하는대로 파이프라인을 생성하고 구성할 수 있다.  

## 3. Elasticsearch  
**[검색 및 분석 엔진]**  
**Elasticsearch**는 `Apache Lucene`을 기반으로 하는 분산형 **RESTful** 검색 및 분석 엔진이다.  
Elastic Stack의 중심으로, Elasticsearch는 빠른 검색, 정교하게 조정된 정확도, 강력한 분석을 위해 데이터를 중앙에 저장하고 정형 데이터, 비정형 데이터, 위치 정보, 메트릭 등 다양한 유형의 데이터를 사용자가 원하는 방식으로 검색하고 결합할 수 있도록 지원한다.  

## 4. Kibana  
**[시각화 도구]**  
**Kibana**는 Elasticsearch 데이터를 시각화하고 Elastic Stack을 탐색하게 해주는 무료 오픈 소스 인터페이스다.  
히스토그램, 선 그래프, 원형 차트, 선버스트 등의 기본적인 요소로 구성되어 있고, 모든 문서에 걸쳐 검색이 가능하다.  
- **위치 분석**  
    : `Elastic Maps`를 활용하여 위치 데이터를 탐색하거나 사용자 정의 레이어와 벡터 도형을 시각화할 수 있다.  
- **시계열**  
    : `시계열 UI`를 통해 Elasticsearch 데이터에 대한 상세 시계열 분석을 할 수 있다.  
- **머신러닝**  
    : 자율적인 `머신 러닝` 기능을 통해 Elasticsearch 데이터에 숨어 있는 이상 징후를 탐색하고 이에 영향을 미치는 근본 원인을 찾아낼 수 있다.  
- **그래프와 네트워크**  
    : 검색 엔진의 연관성 기능과 `Graph 탐색`을 활용해 Elasticsearch 데이터에서 관계성을 발견할 수 있다.  

---

## 📎 Reference  
[https://www.elastic.co/kr/what-is/elk-stack](https://www.elastic.co/kr/what-is/elk-stack)  
[https://www.elastic.co/guide/en/elasticsearch/reference/8.1/_mapping_concepts_across_sql_and_elasticsearch.html#](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/_mapping_concepts_across_sql_and_elasticsearch.html#)  
[https://www.elastic.co/static-res/images/elk/elk-stack-elkb-diagram.svg](https://www.elastic.co/static-res/images/elk/elk-stack-elkb-diagram.svg)  


```toc
```