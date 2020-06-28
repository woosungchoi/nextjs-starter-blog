---
title: 코드 하이라이트 적용 완료
description: 코드블럭에 색상을 지정할 수 있습니다! 코드 복사 버튼도 추가했어요!
date: 2020-06-28T15:51:00.000Z
---
### 드디어 완성했네요!!

원래 'prism'의 okaidia 스타일을 사용했었는데요.

이게 prism의 문제인지는 모르겠지만, 코드 블럭에 색깔을 지정하면 'jsx'나 'nginx'처럼 지정된 언어가 초기화되는 증상이 있더라구요.

그래서 [참조 커밋](https://github.com/telmogoncalves/telmo/blob/master/components/CodeBlock.js) 여기처럼

그냥 hljs를 사용해보니 문제없이 잘 되네요!! okaidia 스타일이 마음에 들었는데, 아쉽지만 hljs의 agate 스타일을 사용하니 괜찮은 것 같습니다.

[커밋 보기](https://github.com/woosungchoi/nextjs-starter-blog/commit/df9f8eb469cf42178dc330429e645e9fb328d5ab)

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

초록색, 빨간색, 노란색 배경색깔을 지정할 수 있어요 ㅠㅠ 정말 기쁩니다 ㅠㅠ

그리고 이제 코드블럭의 오른쪽 밑에 코드 복사하기 기능이 탑재되었습니다. 편하게 복사할 수 있어요!!

진짜 별거아닌데, 정말 기쁘네요 ㅠㅠ

---

### 블로그 소스

현재 이 블로그의 테마는 

https://github.com/JoseRFelix/nextjs-starter-blog

위 링크에서 확인할 수 있습니다!