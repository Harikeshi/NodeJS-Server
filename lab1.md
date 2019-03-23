### Для чего используется запрос OPTIONS? Какие коды ответов приходят при этом запросе? Какие сайты правильно обработали запрос и вернули ожидаемые данные?

> OPTIONS - используется клиентским приложением для получения списка разрешенных сервером запросов.
 
 Только www.google.com вернул ожидаемые данные, но окработал с ошибкой 403 нет доступа. www.apple.com, www.msdn.com отработали без ошибок, Allow не вернули.

OPTIONS www.google.com 405 - Method Not Allowed
```sh
Allow →GET, HEAD
Date →Fri, 22 Mar 2019 20:31:23 GMT
Content-Type →text/html; charset=UTF-8
Server →gws
Content-Length →1592
X-XSS-Protection →1; mode=block
X-Frame-Options →SAMEORIGIN
```

OPTIONS www.msdn.com 200 - OK
```sh
Cache-Control →private
Content-Type →text/html; charset=utf-8
Server →Microsoft-IIS/10.0
X-Frame-Options →SAMEORIGIN
X-Powered-By →ASP.NET
X-Powered-By →ARR/3.0
X-Powered-By →ASP.NET
x-instance →AZ_MSDN_TN_08
x-instance →AZ_MSDN_TN_08
X-UA-Compatible →IE=edge
strict-transport-security →max-age=31536000; includeSubdomains
Vary →Accept-Encoding
Content-Encoding →gzip
Date →Fri, 22 Mar 2019 20:36:26 GMT
Content-Length →8255
Connection →keep-alive
```
OPTIONS www.apple.com 200 - OK
```sh
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
Content-Encoding →gzip
Cache-Control →max-age=92
Expires →Fri, 22 Mar 2019 20:40:13 GMT
Date →Fri, 22 Mar 2019 20:38:41 GMT
Content-Length →7978
Connection →keep-alive
```

OPTIONS www.vk.com 418 - I'm a teapot (RFC 2324)
```sh
Server →Internet Information Services
Date →Fri, 22 Mar 2019 20:39:20 GMT
Content-Length →0
Connection →keep-alive
X-Frontend →front504217
Access-Control-Expose-Headers →X-Frontend
```

OPTIONS www.yandex.ru 403 - Forbidden
```sh
Date →Fri, 22 Mar 2019 20:40:10 GMT
Content-Type →text/html; charset=utf-8
ETag →W/"5c951b55-3077"
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked
```
### Запрос HEAD. vk.com, www.apple.com, www.msn.com. Для чего нужен запрос HEAD? Какой сайт прислал ожидаемый ответ?

>HEAD - получение заголовков ресурса.

 При таком запросе ресурс не возваращается. Все сайты прислали ожидаемые ответы, только заголовки.
 
HEAD vk.com - 418 I'm a teapot (RFC 2324)
```sh
Server →Internet Information Services
Date →Fri, 22 Mar 2019 20:27:11 GMT
Content-Length →0
Connection →keep-alive
X-Frontend →front204303
Access-Control-Expose-Headers →X-Frontend
```

HEAD www.apple.com - 200 OK
```sh
Server →Apache
X-Frame-Options →SAMEORIGIN
X-Xss-Protection →1; mode=block
Accept-Ranges →bytes
X-Content-Type-Options →nosniff
Content-Type →text/html; charset=UTF-8
Content-Encoding →gzip
Content-Length →8551
Cache-Control →max-age=64
Expires →Fri, 22 Mar 2019 20:30:01 GMT
Date →Fri, 22 Mar 2019 20:28:57 GMT
Connection →keep-alive
Vary →Accept-Encoding
```

HEAD www.msdn.com - 200 OK
```sh
X-Powered-By →ARR/3.0
X-Powered-By →ASP.NET
x-instance →AZ_MSDN_TN_09
x-instance →AZ_MSDN_TN_09
X-UA-Compatible →IE=edge
strict-transport-security →max-age=31536000; includeSubdomains
Vary →Accept-Encoding
Content-Encoding →gzip
Date →Fri, 22 Mar 2019 20:29:49 GMT
Content-Length →20
Connection →keep-alive
```
### Запросы GET и POST. Отправьте по запросу на yandex.ru, google.com и apple.com. Что они вернули? Что содержится в теле ответа?

>GET - Получение данных с сервера.
>POST - Отправка данных на сервер для обработки.

 При POST запросе сайты вернули: yandex.ru страницу с ошибкой сервера,www.google.com ошибку 405 Method Not Allowed, www.apple.com вернул статус 200 - все OK.
 При GET запросе сайты вернули: yandex.ru 200 OK стартовую страницу, www.google.com - 200 OK стартовая страница, www.apple.com - 200 OK стартовая страница.
 
GET www.yandex.ru 200 - OK
```sh
Date →Fri, 22 Mar 2019 20:17:27 GMT
Content-Type →text/html; charset=UTF-8
Cache-Control →no-cache,no-store,max-age=0,must-revalidate
Expires →Fri, 22 Mar 2019 20:17:28 GMT
Last-Modified →Fri, 22 Mar 2019 20:17:28 GMT
Content-Security-Policy →connect-src 'self' wss://webasr.yandex.net https://mc.webvisor.com https://mc.webvisor.org wss://push.yandex.ru wss://portal-xiva.yandex.net https://yastatic.net https://home.yastatic.net https://yandex.ru https://*.yandex.ru static.yandex.sx brotli.yastatic.net et.yastatic.net *.serving-sys.com an.yandex.ru awaps.yandex.ru storage.mds.yandex.net music.yandex.ru music-browser.music.yandex.net mc.admetrica.ru portal-xiva.yandex.net yastatic.net home.yastatic.net yandex.ru *.yandex.ru *.yandex.net yandex.st; default-src 'self' blob: wss://portal-xiva.yandex.net yastatic.net portal-xiva.yandex.net; font-src 'self' https://yastatic.net zen.yandex.ru static.yandex.sx brotli.yastatic.net et.yastatic.net yabro1.zen-test.yandex.ru main.zdevx.yandex.ru yastatic.net; frame-src 'self' yabrowser: data: https://ok.ru https://www.youtube.com https://player.video.yandex.net https://ya.ru https://yastatic.net https://yandex.ru https://*.yandex.ru https://downloader.yandex.net wfarm.yandex.net secure-ds.serving-sys.com yandexadexchange.net *.yandexadexchange.net music.yandex.ru yastatic.net yandex.ru *.yandex.ru awaps.yandex.net *.cdn.yandex.net; img-src 'self' data: https://yastatic.net https://home.yastatic.net https://*.yandex.ru https://*.yandex.net https://*.tns-counter.ru ad.doubleclick.net awaps.yandex.net *.yastatic.net gdeua.hit.gemius.pl pa.tns-ua.com mc.yandex.com mc.webvisor.com mc.webvisor.org static.yandex.sx brotli.yastatic.net et.yastatic.net *.moatads.com avatars.mds.yandex.net bs.serving-sys.com an.yandex.ru awaps.yandex.ru nissanhelioseurope.demdex.net mc.admetrica.ru yastatic.net home.yastatic.net yandex.ru *.yandex.ru *.yandex.net *.tns-counter.ru yandex.st; media-src 'self' blob: data: *.storage.yandex.net *.yandex.net strm.yandex.ru strm.yandex.net *.strm.yandex.net *.cdn.yandex.net storage.mds.yandex.net *.storage.mds.yandex.net yastatic.net kiks.yandex.ru; object-src 'self' *.yandex.net music.yandex.ru strm.yandex.ru flashservice.adobe.com yastatic.net kiks.yandex.ru awaps.yandex.net storage.mds.yandex.net; report-uri https://csp.yandex.net/csp?from=big.ru&showid=1553285847.69493.141013.2972&h=man2-5661-de4-man-portal-morda-29675&csp=old&date=20190322&yandexuid=9173585141553285847; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://suburban-widget.rasp.yandex.ru https://suburban-widget.rasp.yandex.net https://music.yandex.ru https://mc.yandex.fr https://mc.webvisor.com https://yandex.fr https://mc.webvisor.org https://yastatic.net https://home.yastatic.net https://mc.yandex.ru https://pass.yandex.ru zen.yandex.ru an.yandex.ru api-maps.yandex.ru static.yandex.sx webasr.yandex.net brotli.yastatic.net et.yastatic.net z.moatads.com bs.serving-sys.com secure-ds.serving-sys.com yabro1.zen-test.yandex.ru main.zdevx.yandex.ru awaps.yandex.ru yastatic.net home.yastatic.net yandex.ru www.yandex.ru mc.yandex.ru suggest.yandex.ru clck.yandex.ru awaps.yandex.net; style-src 'self' 'unsafe-inline' https://yastatic.net https://home.yastatic.net zen.yandex.ru static.yandex.sx brotli.yastatic.net et.yastatic.net yabro1.zen-test.yandex.ru main.zdevx.yandex.ru yastatic.net home.yastatic.net;
P3P →policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
Set-Cookie →yp=1555877848.ygu.1; Expires=Mon, 19-Mar-2029 20:17:27 GMT; Domain=.yandex.ru; Path=/
Set-Cookie →mda=0; Expires=Sat, 20-Jul-2019 20:17:27 GMT; Domain=.yandex.ru; Path=/
Set-Cookie →yandex_gid=213; Expires=Sun, 21-Apr-2019 20:17:27 GMT; Domain=.yandex.ru; Path=/
X-Frame-Options →DENY
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked
```
GET www.google.com 200 - OK
```sh
Cache-Control →private, max-age=0
Content-Type →text/html; charset=ISO-8859-1
Content-Encoding →gzip
Server →gws
Content-Length →5861
X-XSS-Protection →1; mode=block
X-Frame-Options →SAMEORIGIN
Set-Cookie →1P_JAR=2019-03-22-20; expires=Sun, 21-Apr-2019 20:20:10 GMT; path=/; domain=.google.com
```

GET www.apple.com 200 - OK
```sh
X-Frame-Options →SAMEORIGIN
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
Vary →Accept-Encoding
Content-Encoding →gzip
Cache-Control →max-age=215
Expires →Fri, 22 Mar 2019 20:23:29 GMT
Date →Fri, 22 Mar 2019 20:19:54 GMT
Content-Length →7978
Connection →keep-alive
```
POST www.yandex.ru 403 - Forbidden
```sh
Date →Fri, 22 Mar 2019 20:22:31 GMT
Content-Type →text/html; charset=utf-8
ETag →W/"5c951b55-3077"
Content-Encoding →gzip
X-Content-Type-Options →nosniff
Transfer-Encoding →chunked
www.google.com
405 Method not Allowed
Allow →GET, HEAD
Date →Fri, 22 Mar 2019 20:21:47 GMT
Content-Type →text/html; charset=UTF-8
Server →gws
Content-Length →1589
X-XSS-Protection →1; mode=block
X-Frame-Options →SAMEORIGIN
```

POST www.google.com 405 - MEthod Not Allowed

```sh
Allow →GET, HEAD
Date →Fri, 22 Mar 2019 20:34:44 GMT
Content-Type →text/html; charset=UTF-8
Server →gws
Content-Length →1589
X-XSS-Protection →1; mode=block
X-Frame-Options →SAMEORIGIN
```

POST www.apple.com 200 - OK
```sh
Server →Apache
Content-Type →text/html; charset=UTF-8
ETag →"KXKKJLLKHIXKXKVOX"
Vary →Accept-Encoding
X-Content-Type-Options →nosniff
X-Xss-Protection →1; mode=block
X-Frame-Options →SAMEORIGIN
Content-Encoding →gzip
Cache-Control →max-age=269
Expires →Fri, 22 Mar 2019 20:27:33 GMT
Date →Fri, 22 Mar 2019 20:23:04 GMT
Content-Length →7978
Connection →keep-alive
```

### Ответьте на вопросы: какой код ответа присылается от api? Что содержит тело ответа? В каком формате и какой кодировке содержаться данные? Какой веб-сервер отвечает на запросы? Какая версия протокола HTTP используется?

В формате JSON, кодировка utf-8 (Content-Type: application/json; charset=utf-8).
Сервер Server: Internet Information Services. srv179-129-240-87.vk.com [87.240.129.179]
Версия протокола HTTP/1.1 200 OK.

Список факультетов: https://api.vk.com/method/database.getFaculties?university_id=250&count=10&access_token=XXX&v=5.92
```sh
{
    "response": {
        "count": 20,
        "items": [
            {
                "id": 1031,
                "title": "Аэрокосмический факультет"
            },
            {
                "id": 1032,
                "title": "Факультет инженерного бизнеса и менеджмента"
            },
            {
                "id": 1033,
                "title": "Факультет информатики и систем управления"
            },
            {
                "id": 1034,
                "title": "Факультет машиностроительных технологий"
            },
            {
                "id": 1035,
                "title": "Факультет оптико-электронного приборостроения"
            },
            {
                "id": 1036,
                "title": "Приборостроительный факультет"
            },
            {
                "id": 1037,
                "title": "Радиотехнический факультет"
            },
            {
                "id": 1038,
                "title": "Факультет радиоэлектроники и лазерной техники"
            },
            {
                "id": 1039,
                "title": "Факультет ракетно-космической техники"
            },
            {
                "id": 1040,
                "title": "Факультет робототехники и комплексной автоматизации"
            }
        ]
    }
}
```
Аватарка: https://api.vk.com/method/users.get?user_ids=harikeshi&fields=photo_50&access_token=XXX&v=5.92
```sh
{
    "response": [
        {
            "id": 89736442,
            "first_name": "Сергей",
            "last_name": "Щеголихин",
            "is_closed": false,
            "can_access_closed": true,
            "photo_50": "https://pp.userapi.com/c845020/v845020395/a8aa6/a3NXTgVtw50.jpg?ava=1"
        }
    ]
}
```
