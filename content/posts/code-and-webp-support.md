---
title: Code Highlight theme 및 Webp 적용 완료
description: 역시 처음이라 어렵네요. prism의 okaidia 테마로 적용했습니다. 그리고 webp도 지원합니다!
date: 2020-06-27T21:42:00.000Z
---
### 코드 하일라이트 적용!

드디어 코드 하일라이트가 마음에 드네요. ㅎㅎ 사실 이전 모양은 그렇게 마음에 들지 않았습니다. ^ * - 이런 기호들의 배경이 흰색으로 바뀌는 문제가 있었는데요.

알고보니 그게 문제가 아니고 원래 테마가 그런거더라구요 -_-;;;

okaidia 테마로 변경해주니 완전 깔끔하게 변경되었습니다.

[첫번째 커밋](https://github.com/woosungchoi/nextjs-starter-blog/commit/e16e68e39b25b9470b18265fb8c0ad010fad1f60)

[두번째 커밋](https://github.com/woosungchoi/nextjs-starter-blog/commit/2d34802b37ea5747299c295f6e6d2707fbbcf407)

여기에서 작업 현황을 볼 수 있습니다.

```jsx:7-8,-10-11,!-13-14
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
	[optimizedImages, {
		inlineImageLimit: 8192,
		imagesFolder: 'images',
		imagesName: '[name]-[hash].[ext]',
		handleImages: ['jpeg', 'png', 'webp'],
		removeOriginalExtension: false,
		optimizeImages: true,
		optimizeImagesInDev: true,
		mozjpeg: {
		  quality: 80,
		},
		optipng: {
		  optimizationLevel: 3,
		},
		pngquant: false,
		webp: {
		  preset: 'default',
		  quality: 75,
    },		
}],		
]);
```

위 예시는 jsx 언어로 지정했을 때 표시되는 예시입니다.

---

```nginx
server {
listen 80;
listen [::]:80;
server_name admin.yoursitename.com;
location / {
	rewrite       ^/(.*)$ https://admin.yoursitename.com/$1 permanent;
	}
} 

server {
listen 443 ssl http2;
listen [::]:443 ssl http2;
server_tokens off;
client_max_body_size 100M;
include snippets/wp-ssl.conf;

#IP 차단 부분입니다. 밑의 내용을 수정 후 앞에 #을 빼면 IP차단이 적용됩니다.

#allow xxx.xxx.xxx.xxx; #자신의 집 컴퓨터의 외부IP를 확인 후 넣고 앞에 #을 제거하면 됩니다.
#allow 192.168.1.1; # 자신의 컴퓨터에 설치했다면 이것도 추가합니다. 추가 후 #을 제거
#deny all; # 위 아이피 이외에 모든 IP를 차단합니다. 

server_name admin.yoursitename.com;

location / {
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header X-Forwarded-Proto $scheme;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header Host $http_host;
	proxy_pass https://127.0.0.1:7080;
	}	
}
```

위 예시는 nginx를 언어로 지정한 결과입니다.

---

```css
@charset "utf-8";   4 7 8 

@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Roboto&display=swap');

/********************************************************
■ PC 폰트
********************************************************/

/* 기준 폰트 : 14px */
html {
	font-size:14px;
}

/* 제목, 내용 등 기본 폰트 : 15px */
body {
	font-size:15px !important;
	font-family: 'Nanum Gothic', 'Roboto', sans-serif !important;
	font-weight:700 !important;
	line-height:1.8;
	color:#000;
}

a {
	color:#000;
}

/* 일반 기본 폰트 : 15px */
.f-de {
	font-size:15px !important;
	font-weight:400 !important;
}

/* 게시판 글내용 : 18px */
#bo_v_con {
	font-size:18px !important;
	line-height:1.7;
}

/* 주석 등 : 13px */
.f-xs {
	font-size:13px !important;
	font-weight:400 !important;
}
```

css 언어로 지정했을 때 표현 방식입니다.

---

### 이미지 최적화 Webp 적용하기

[next-optimized-images 패키지 깃허브](https://github.com/cyrilwanner/next-optimized-images)

위 링크에 있듯이 이미 패키지가 있습니다. 그래도 적용하는데는 한세월이 걸렸는데요. ㅎㅎ

아무래도 자바스크립트와 리액터, Next js에 대한 지식이 전무하기 때문이었습니다.

IE11에도 적용되게 해보려고 했는데.. 득보다 실이 많은 것 같아 IE11은 과감하게 버리기로 했습니다. ^^;;

[커밋 모음](https://github.com/woosungchoi/nextjs-starter-blog/commit/0857af869dd047225b0158e9bd7a427bc8a1db76)

위 링크에서 작업현황을 한눈에 볼 수 있습니다.

마지막에 yarn.lock에서 문제가 있다고 했는데요.

별 문제없어서 기존대로 가기로 했습니다.

이상 작업 현황이었습니다.

---

### 블로그 소스

현재 이 블로그의 테마는 

https://github.com/JoseRFelix/nextjs-starter-blog

위 링크에서 확인할 수 있습니다!