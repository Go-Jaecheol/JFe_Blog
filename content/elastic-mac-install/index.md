---
emoji: πΊ
title: "[Elastic] Elastic Stack(ELK Stack) - Mac OS μ€μΉ λ°©λ²"
date: '2022-04-06 14:00:00'
author: JFe
tags: Database
categories: Database
---

## 1. Homebrew μ€μΉ  

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
**Homebrew** μ€μΉκ° λμ΄μμ§ μμΌλ©΄ ν°λ―Έλμμ μ λͺλ Ήμ΄λ₯Ό μλ ₯νμ¬ μ€μΉν  μ μλ€.  

---

## 2. elastic tap μ μ₯μ μΆκ°  
```shell
brew tap elastic/tap
```
ν°λ―Έλμμ μ λͺλ Ήμ΄λ₯Ό ν΅ν΄ elastic ν¨ν€μ§ μ μ₯μλ₯Ό μΆκ°ν  μ μλ€.  

---

## 3. Elasticsearch μ€μΉ λ° μ€ν  
```shell
brew install elastic/tap/elasticsearch-full
```
μ λͺλ Ήμ΄λ‘ **Elasticsearch**λ₯Ό μ€μΉν  μ μκ³  
```shell
elasticsearch
```
μ€μΉ μλ£ νμλ `elasticsearch` λͺλ Ήμ΄λ₯Ό ν΅ν΄ **Elasticsearch**λ₯Ό μ€νν  μ μλ€.  
λ°±κ·ΈλΌμ΄λμμ μ€ννκ³  μΆμΌλ©΄ `elasticsearch` λͺλ Ήμ΄ λμ  λ€μκ³Ό κ°μ λͺλ Ήμ΄λ‘ μ€νν  μλ μλ€.  
(μ€λ¨ν  κ²½μ°μλ `start` λμ μ `stop` μ¬μ©)  
```shell
brew services start elastic/tap/elasticsearch-full
```

μ€ν νμλ [http://localhost:9200](http://localhost:9200) μ μ μνμ¬ μ λλ‘ μ€νλμλμ§ νμΈν  μ μλ€.  
λ€μκ³Ό κ°μ νλ©΄μ΄ λ³΄μ΄λ©΄ μ λλ‘ μ€νμ€μΈ κ²½μ°  
![elasticsearch-running.png](elasticsearch-running.png)  

---

## 4. Kibana μ€μΉ λ° μ€ν  
```shell
brew install elastic/tap/kibana-full
```
**kibana** λν μ λͺλ Ήμ΄λ‘ **kibana**λ₯Ό μ€μΉν  μ μκ³  
```shell
kibana
```
μ€μΉ μλ£ νμλ `kibana` λͺλ Ήμ΄λ₯Ό ν΅ν΄ μ€νν  μ μκ³ ,  
λ€μκ³Ό κ°μ λͺλ Ήμ΄λ‘ λ°±κ·ΈλΌμ΄λμμ μ€νν  μλ μλ€.  
```shell
brew services start elastic/tap/kibana-full
```

μ€ν νμλ [http://localhost:5601](http://localhost:5601) μ μ μνμ¬ μ λλ‘ μ€νλμλμ§ νμΈν  μ μλ€.  
λ€μκ³Ό κ°μ νλ©΄μ΄ λ³΄μ΄λ©΄ μ±κ³΅  
![kibana-running.png](kibana-running.png)  

---

## 5. Logstash μ€μΉ λ° μ€ν  
```shell
brew install elastic/tap/logstash-full
```
**Logstash**λ μ λͺλ Ήμ΄λ₯Ό ν΅ν΄ μ€μΉν  μ μκ³ ,  
μ€ννκΈ° μ μ μΈλ±μ±νκΈ° μ μ νκ² νν°λ§μ μν μ€μ  νμΌ(`logstash-sample.conf`)μ μμ νμ¬ νν°λ§ μ€μ μ ν  μ μλ€.  
```shell
cd /opt/homebrew/etc/logstash
```
**Homebrew**λ₯Ό μ΄μ©νμ¬ μ€μΉν κ²½μ°μλ λ€μκ³Ό κ°μ κ²½λ‘μμ μ€μ  νμΌλ€μ νμΈν  μ μκ³   
μ¬κΈ°μ `logstash-sample.conf` μ€μ  νμΌμ μμ νλ©΄ λλ€.  
```shell
vi logstash-sample.conf
```

```shell
# Sample Logstash configuration for creating a simple
# Beats -> Logstash -> Elasticsearch pipeline.
input {
  beats {
    port => 5044
  }
}

output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
    index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"
    #user => "elastic"
    #password => "changeme"
  }
}
```
μ€μ  νμΌμ μ΄μ΄λ³΄λ©΄ μμ κ°μ΄ νμΌμ΄ κ΅¬μ±λμ΄ μλλ° μ¬κΈ°μ `filter`λ₯Ό μΆκ°νμ¬ νν°λ§ μ€μ μ ν  μ μλ€.  
(filter μ€μ μ λν μμλ μ΄ν ν¬μ€νΈμμ λ€λ£° μμ )  
μ΄λ κ² μ€μ ν νμλ ν΄λΉ λλ ν λ¦¬μμ λ€μ λͺλ Ήμ΄λ₯Ό ν΅ν΄ **Logstash**λ₯Ό μ€νν  μ μλ€.  
```shell
logstash -f logstash-sample.conf
```

---

## 6. Filebeat μ€μΉ λ° μ€ν  
```shell
brew install elastic/tap/filebeat-full
```
**Filebeat**λ μ λͺλ Ήμ΄λ₯Ό ν΅ν΄ μ€μΉν  μ μκ³ ,  
μ€ννκΈ° μ μ μ€μ  νμΌ(`filebeat.yml`)μ μμ νμ¬ **input**κ³Ό **output**μ λν μ€μ μ ν  μ μλ€.  
```shell
cd /opt/homebrew/etc/filebeat
vi filebeat.yml
```
**Filebeat** μ€μ μ λν μ€λͺλ μ΄ν ν¬μ€νΈμμ μμλ₯Ό ν΅ν΄ λ€λ£° μμ μ΄λ€.  
μ΄λ κ² μ€μ ν νμλ ν΄λΉ λλ ν λ¦¬μμ λ€μ λͺλ Ήμ΄λ₯Ό ν΅ν΄ **Filebeat**λ₯Ό μ€νν  μ μλ€.  
```shell
filebeat -e                 # μΌλ°μ μΌλ‘ μ€ν νλ κ²½μ°
filebeat -e -c filebeat.yml # -c μ΅μμ configuration νμΌμ νΉμ ν  λ μ¬μ© (-c μ¬μ©μνλ©΄ defaultλ filebeat.yml)
```

```toc
```