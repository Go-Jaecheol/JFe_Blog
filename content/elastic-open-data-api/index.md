---
emoji: ๐ข
title: "[Elastic] Elastic Stack + ๊ณต๊ณต๋ฐ์ดํฐ api ํ์ฉ"
date: '2022-04-09 15:30:00'
author: JFe
tags: Database
categories: Database
---

## 1. ๊ณต๊ณต๋ฐ์ดํฐ api ์ค๋น  

์ผ๋จ ๋จผ์  ์ํ๋ ๊ณต๊ณต๋ฐ์ดํฐ api๋ฅผ [๊ณต๊ณต๋ฐ์ดํฐ ํฌํธ](https://www.data.go.kr/)์์ ํ์ธํ  ์ ์๋ค. ์ฌ๊ธฐ์ ์์ ์ด ์ํ๋ ๋ค์ํ ๊ณต๊ณต๋ฐ์ดํฐ๋ฅผ ์ฐพ์ ์ ์๊ณ , csv ํํ์ ํ์ผ ๋ฐ์ดํฐ๋ api ํ์์ผ๋ก ์ ๊ณต๋ฐ์ ์ ์๋๋ฐ ์ด ํฌ์คํธ์์๋ ์ค์  ํ๋ก์ ํธ ์งํ ์ค์ ์ฌ์ฉํ๋ ๊ณต๊ณต๋ฐ์ดํฐ api๋ฅผ ๊ธฐ์ค์ผ๋ก ์ค๋ชํ  ๊ฒ์ด๋ค.  
[๊ตญํ ๊ตํต๋ถ_๊ณต๋์ฃผํ ์๋์ง ์ฌ์ฉ ์ ๋ณด](https://www.data.go.kr/data/15012964/openapi.do) api๋ก api๋ฅผ ํธ์ถํ๋ฉด xml ํํ์ ๋ฐ์ดํฐ๋ฅผ ๋ฐํํด์ค๋ค.  

## 2. ๋ฐ์ดํฐ ์ ์ฒ๋ฆฌ  

Filebeat๊ฐ ํ์ผ์ ์ฝ์ด์ logstash๋ก ๋ณด๋ผ ๋, ๋ณดํต csv ํ์ผ์ ์ฝ๋๋ก ํ๋ ๊ฒ์ด ํธํ๊ธฐ ๋๋ฌธ์ Spring ํ๊ฒฝ์์ api๋ฅผ ํธ์ถํ๋ฉด์ xml ํํ์ ํธ์ถ ๊ฒฐ๊ณผ๋ฅผ csv ํ์ผ ํ์์ผ๋ก ์ ์ฅํ๋๋ก ์ค์ ํ๋ค.  
([Xml filter plugin](https://www.elastic.co/guide/en/logstash/current/plugins-filters-xml.html)์ ์ฌ์ฉํด์ Logstash์์ filter ์ค์ ์ ํ๋ ๋ฐฉ๋ฒ๋ ์๋ค.)  

๊ณต๊ณต๋ฐ์ดํฐ api ํธ์ถ ๋ฐฉ๋ฒ์ [๊ตญํ ๊ตํต๋ถ_๊ณต๋์ฃผํ ์๋์ง ์ฌ์ฉ ์ ๋ณด](https://www.data.go.kr/data/15012964/openapi.do) ํ๋จ์ ์ํ ์ฝ๋๋ฅผ ์ ๊ณตํ๊ณ  ์์ด์ ์ด๋ฅผ ํ์ฉํด์ api ํธ์ถ์ ์ฝ๊ฒ ํ  ์ ์๊ณ , xml ํธ์ถ ๊ฒฐ๊ณผ๋ฅผ csv ํ์ผ๋ก ๋ณํํ๋ ๋ฐฉ๋ฒ์ xsl ํ์ผ์ ์ด์ฉํด์ csv ํํ์ ์คํ์ผ๋ก ๋ฐ๊ฟ์ ํ์ผ์ ์ ์ฅํ๋ ๋ฐฉ์์ผ๋ก ์งํํ๋ค.  

```java
private void xmlToCsv(String xml, String apiName) throws Exception{
        File stylesheet = new File("src/main/resources/data/" + apiName + "Style.xsl");

        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document document = builder.parse(new InputSource(new StringReader(xml)));

        StreamSource stylesource = new StreamSource(stylesheet);
        Transformer transformer = TransformerFactory.newInstance()
                .newTransformer(stylesource);
        Source source = new DOMSource(document);
        Result outputTarget = new StreamResult(new FileOutputStream("src/main/resources/data/" + apiName + ".csv", true));
        transformer.transform(source, outputTarget);
    }
```
[์ฐธ๊ณ  : [https://stackoverflow.com/questions/21413978/convert-an-xml-file-to-csv-file-using-java](https://stackoverflow.com/questions/21413978/convert-an-xml-file-to-csv-file-using-java)]

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" omit-xml-declaration="yes" indent="no"/>
<xsl:template match="/">
reqDate,kaptCode,helect,hgas,hheat,hwaterCool
<xsl:for-each select="//item">
<xsl:value-of select="concat(kaptCode, ',', helect, ',', hgas, ',', hheat, ',', hwaterCool, '&#xA;')"/>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
```
์์ ๊ฐ์ ํํ์ xsl ํ์ผ์ ์ด์ฉํด์ ์ํ๋ ๊ฐ๋ค๋ง csv ์คํ์ผ๋ก ์ง์ ํ  ์ ์๋ค.  
๊ทธ๋ฌ๋ฉด ๋ค์๊ณผ ๊ฐ์ xml ํ์์ ์๋ต ๋ฐ์ดํฐ๋ค ์ค ์ํ๋ ๊ฐ๋ค๋ง csv ํ์ผ์ ์ ์ฅํ  ์ ์๋ค.  

![xml-example.png](xml-example.png)  
![csv-example.png](csv-example.png)  

(reqDate์ ๊ฒฝ์ฐ๋ ์๋ต ๋ฐ์ดํฐ์๋ ์์ง๋ง ๋ฐ๋ก ํ์ํ๊ธฐ ๋๋ฌธ์ ์ `xmlToCsv()` ๋ฉ์๋๋ฅผ ์์ ํด์ ์ถ๊ฐํ์ต๋๋ค.)  

---

## 3. Elasticsearch ๋ฐ Kibana ์คํ  
์์ ํฌ์คํธ์์ ์งํํ ๊ฒ์ฒ๋ผ Elastic Stack ์ ๋ถ ๋ค ์ค์น ์๋ฃ๋์๋ค๊ณ  ์๊ฐํ๊ณ  ๊ฐ์ ๋ฐฉ๋ฒ์ผ๋ก ์คํํ๋ฉด ๋๋ค.  
```shell
brew services start elastic/tap/elasticsearch-full
brew services start elastic/tap/kibana-full
```
์ ๋ช๋ น์ด๋ก Elasticsearch์ Kibana๋ฅผ ๋ฐฑ๊ทธ๋ผ์ด๋์์ ์คํํด์ฃผ๊ณ , ์ด์  Logstash ์ค์ ์ผ๋ก ๋์ด๊ฐ๋ฉด ๋๋ค.  

---

## 4. Logstash ์ค์  ๋ฐ ์คํ  
์คํํ๊ธฐ ์ ์ ์ธ๋ฑ์ฑํ๊ธฐ ์ ์ ํ๊ฒ ํํฐ๋ง์ ์ํ ์ค์  ํ์ผ(`logstash-sample.conf`)์ ์์ ํ์ฌ ํํฐ๋ง ์ค์ ์ ํ  ์ ์๋๋ฐ Homebrew๋ฅผ ํตํด ์ค์นํ ๊ฒฝ์ฐ์๋ ๋ค์๊ณผ ๊ฐ์ ๊ฒฝ๋ก์ Logstash์ ์ค์  ํ์ผ๋ค์ด ์์นํด ์๋ค.  
```shell
cd /opt/homebrew/etc/logstash
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
์ฒ์ ์ค์  ํ์ผ์ ์ด์ด๋ณด๋ฉด ์์ ๊ฐ์ด ํ์ผ์ด ๊ตฌ์ฑ๋์ด ์๋๋ฐ ์ฌ๊ธฐ์ `filter`๋ฅผ ์ถ๊ฐํ์ฌ ํํฐ๋ง ์ค์ ์ ํ  ์ ์๋ค.  
"message" ํ๋๋ฅผ ํตํด ๋ฐ์ดํฐ๋ค์ด ๋ค์ด์ค๊ณ  csv ํํ์ ํ์ผ๋ค์ ","๋ฅผ ๊ธฐ์ค์ผ๋ก ๋ฐ์ดํฐ๋ค์ด ๋๋๊ธฐ ๋๋ฌธ์ ์ด๋ฅผ ์ด์ฉํด์ ๊ฐ๋ค์ ๋๋์ด์ฃผ๋ฉด ๋๋ค.  
๋๋ ๊ฐ๋ค์ ์ด๋ฆ์ ์ง์ ํด์ ์๋ก์ด ํ๋๋ก ์ถ๊ฐํด์ฃผ๋ฉด ๋๊ณ , ๊ธฐ๋ณธ์ผ๋ก ์ ๊ณตํ๋ ํ์์๋ ํ๋๋ค์ ์ ๊ฑฐํด์ฃผ๋ฉด ๋๋ค.  

```shell
# Sample Logstash configuration for creating a simple
# Beats -> Logstash -> Elasticsearch pipeline.
input {
  beats {
    port => 5044
  }
}

filter {
  mutate {
    split => ["message", ","]
    add_field => {
      "reqDate" => "%{[message][0]}"
      "kaptCode" => "%{[message][1]}"
      "helect" => "%{[message][2]}"
      "hgas" => "%{[message][3]}"
      "hheat" => "%{[message][4]}"
      "hwaterCool" => "%{[message][5]}"
    }

    remove_field => ["ecs", "host", "@version", "agent", "log", "tags", "input", "message"]
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

์ด๋ ๊ฒ ์ค์ ํ ํ์๋ ํด๋น ๋๋ ํ ๋ฆฌ์์ ๋ค์ ๋ช๋ น์ด๋ฅผ ํตํด **Logstash**๋ฅผ ์คํํ๋ค.  
```shell
logstash -f logstash-sample.conf
```

---

## 5. Filebeat ์ค์  ๋ฐ ์คํ  
์คํํ๊ธฐ ์ ์ ์ค์  ํ์ผ(`filebeat.yml`)์ ์์ ํ์ฌ **input**๊ณผ **output**์ ๋ํ ์ค์ ์ ํ  ์ ์๋ค.  
```shell
cd /opt/homebrew/etc/filebeat
vi filebeat.yml
```
```shell
# ============================== Filebeat inputs ===============================

filebeat.inputs:

# Each - is an input. Most options can be set at the input level, so
# you can use different inputs for various configurations.
# Below are the input specific configurations.

# filestream is an input for collecting log messages from files.
- type: filestream

  # Change to true to enable this input configuration.
  enabled: true

  # Paths that should be crawled and fetched. Glob based paths.
  paths:
    - /Users/jfe/Desktop/Carbon_Tracker/Server/carbonTracker/src/main/resources/data/aptEnergy.csv
```
์ค์  ํ์ผ์์ input ๋ถ๋ถ์์ filestream ํ์์ input์ ํ์ฉํด์ฃผ๊ธฐ ์ํด enabled: true๋ก ๋ฐ๊ฟ์ฃผ๊ณ , ์ฝ๊ธฐ ์ํ๋ ๋ฐ์ดํฐ ํ์ผ์ ๊ฒฝ๋ก๋ฅผ ์ง์ ํด์ฃผ๋ฉด ๋๋ค.  
๊ทธ ๋ค์, Filebeat -> Logstash -> Elasticsearch -> Kibana ์์๋ก ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ด๊ธฐ ๋๋ฌธ์ Elasticsearch๋ก์ output ๋ถ๋ถ์ ์ ๋ถ ์ฃผ์ ์ฒ๋ฆฌํด์ฃผ๊ณ , Logstash๋ก์ output ๋ถ๋ถ ์ฃผ์๋ค์ ํด์ ํด์ฃผ๋ฉด ๋๋ค.  

```shell
# ---------------------------- Elasticsearch Output ----------------------------
# output.elasticsearch:
  # Array of hosts to connect to.
  # hosts: ["localhost:9200"]

  # Protocol - either `http` (default) or `https`.
  #protocol: "https"

  # Authentication credentials - either API key or username/password.
  #api_key: "id:api_key"
  #username: "elastic"
  #password: "changeme"

# ------------------------------ Logstash Output -------------------------------
output.logstash:
  # The Logstash hosts
  hosts: ["localhost:5044"]
```

์ด๋ ๊ฒ ์ค์ ํ ํ์๋ ํด๋น ๋๋ ํ ๋ฆฌ์์ ๋ค์ ๋ช๋ น์ด๋ฅผ ํตํด **Filebeat**๋ฅผ ์คํํ๋ฉด ๋๋ค.  
```shell
filebeat -e                 # ์ผ๋ฐ์ ์ผ๋ก ์คํ ํ๋ ๊ฒฝ์ฐ
filebeat -e -c filebeat.yml # -c ์ต์์ configuration ํ์ผ์ ํน์ ํ  ๋ ์ฌ์ฉ (-c ์ฌ์ฉ์ํ๋ฉด default๋ filebeat.yml)
```

---

## 6. Kibana์์ ๋ฐ์ดํฐ ํ์ธ  

[http://localhost:5601](http://localhost:5601) ์ ์ ์ํ์ฌ ์ ๋๋ก ์คํ๋์๋์ง ํ์ธํ๊ณ , Index Patterns๋ก ์ด๋ํด์ index pattern์ ์ค์ ํ๋ฉด ๋๋ค.  
๋ฐ์ดํฐ๊ฐ ์ ์์ ์ผ๋ก ์์ง๋๊ณ  ์์ผ๋ฉด ํด๋น index๊ฐ ๋ณด์ฌ์ง๊ณ , ๊ทธ index๋ฅผ ๊ธฐ์ค์ผ๋ก pattern์ ๋ง๋ค ์ ์๋ค.  
![kibana-main.png](kibana-main.png)  
![kibana-index-pattern.png](kibana-index-pattern.png)  

์์ฑํ index pattern์ ๋ํ ๋ฐ์ดํฐ๋ค์ discover ๋ฉ๋ด๋ก ๊ฐ์ ํ์ธํ  ์ ์๋ค.  
![kibana-discover.png](kibana-discover.png)  

---

๊ณต๊ณต๋ฐ์ดํฐ api๋ฅผ ์ฐ๋ํด์ ์ป์ ๋ฐ์ดํฐ๋ฅผ Filebeat -> Logstash -> Elasticsearch -> Kibana ์์๋ก ์์งํ๋ ๋ฐฉ๋ฒ์ ๋ํด์ ๊ฐ๋จํ๊ฒ๋ง ํฌ์คํํ๋๋ฐ, ๊ทธ๋์ ๋ฐ์ดํฐ ์ ์ฒ๋ฆฌ๋ ์์ง ์๋ฒฝํ๊ฒ ํ์ง ์์๊ณ  Kibana ์ฌ์ฉ ๋ฐฉ๋ฒ๋ ์์ง ์ ๋๋ก ์์ง๋ ๋ชปํด์ ํ๋ก์ ํธ๋ฅผ ๋ ์งํํ๋ฉด์ ์ถํ์ ํ๋ก์ ํธ ์งํ ๊ณผ์ ๊ณผ ํ๊ณ ์ ํจ๊ป ์ถ๊ฐ๋ก ํฌ์คํํ๊ฒ ์ต๋๋ค. (์ขํ ํ์ดํ,,)  

---

## ๐ Reference  
[https://www.data.go.kr/data/15012964/openapi.do](https://www.data.go.kr/data/15012964/openapi.do)  
[https://stackoverflow.com/questions/21413978/convert-an-xml-file-to-csv-file-using-java](https://stackoverflow.com/questions/21413978/convert-an-xml-file-to-csv-file-using-java)  
[https://taetaetae.github.io/posts/make-dashboards-from-elasticstack-1/](https://taetaetae.github.io/posts/make-dashboards-from-elasticstack-1/)  
[http://trandent.com/article/etc/detail/323366](http://trandent.com/article/etc/detail/323366)

```toc
```