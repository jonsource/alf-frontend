# antiadblock admin changelog

## v0.0.23 (2018-03-29):
- fix block rate script (https)

## v0.0.22 (2018-03-28):
- AAB-807 failed share top 5 graph
- AAB-840 new path for change password
- AAB-837 pridane google analytics jako samostatna service, volaji se v try-catch aby to nespadlo, kdyz neexistujou
- Aab 833 new atributes on website
- AAB-823 kununu script z cdn
- AAB-833 url_mask a not_url_mask na website
- User renamed to LoggedInUser (auth service, test, admin)

## v0.0.21 (2018-03-23):
- fix block rate changes

## v0.0.20 (2018-03-23):
- update api version

## v0.0.19 (2018-03-23):
- AAB-808 no pattern graph
- new frontend rights - super_admin, ad_scan
- message service, new message states

## v0.0.18 (2018-03-14):
- live demo fix

## v0.0.17 (2018-03-14):
- block rate - post
- AAB-780 adscan failed share graph

## v0.0.16 (2018-03-12):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.15 (2018-03-12):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.14 (2018-03-12):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.13 (2018-03-12):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.12 (2018-03-09):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.11 (2018-03-09):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.10 (2018-03-09):
- AAB-697-Zaridit_letsencrypt_certifikat_na_techadmin

## v0.0.9 (2018-03-08):
- upgrade API version
- live demo fix protocol

## v0.0.8 (2018-02-27):
- AAB-756 new ids in html
- AAB-740 - new attribute on website - website_url, in case of bad request at some pages -> returns error page
- AAB-740 uprava dat publisheru - resource a routy vyzaduji aab_publisher_id a/nebo aab_site_id
- AAB-672 - collapse only around arrow icon
- AAB-672 - check button without word, long output fix
- AAB-671 debug page - show ts.debug description
- AAB-671 debug page - show ts.debug output in different color
- AAB-729 debug page - table - top center align
- AAB-729 debug page - UI change
- AAB-672 responses from debug page fix
- AAB-447_texty texts added
- AAB-672 new tab on debug page for curl commands on antiadblock server

## v0.0.7 (2018-02-09):

- AAB-676 when no publishers navigate to error page
- AAB-676 fix in loading no publishers data
- AAB-639 add block-rate graph if website has one

## v0.0.6 (2018-01-22):

- AAB-621 link in whole cell in table
- AAB-621 responsive top menu, fix graph rendering
- AAB-621 pokud je web 'Live' ukazuje rovnou graf impresi

## v0.0.5 (2018-01-20):

- using api v0.0.4
- envitronment.ts referring api at localhost instead of 127.0.0.1
- fixed nginx conf, added --env=dock for local serving with nginx
- docker-compose(.prod).yml: added env for api for elasticsearch
- fixed nginx serving for /elasticproxy, api doesn't listen on a port }accessible only through nginx of admin)

## v0.0.4 (2018-01-19):

- Update package.json v0.0.4
- AAB-613 oprava testu
- AAB-613 uprava instalace - v nadpisech jmeno publishera s velkym pismenem
- AAB-619 kontrola validniho reset linku pri zmene hesla
- AAB-613 show version on login page
- AAB-613 delete unused

## v0.0.3 (2018-01-18):

- docker-compose.override.yml: removed from repo, docker-compose.prod.yml: increased version of api
- AAB-561_elasticproxy

## v0.0.2 (2018-01-12):

- fixed gitlab_ci and docker-compose.prod.yml

## v0.0.1 (2018-01-12): 

- prvni nasazeni
