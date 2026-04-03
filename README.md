# SeaWing Web Site

このサイトは、公開中のゲームと更新情報だけをシンプルに載せる構成です。

## 更新場所

- 作品追加: `site-data.js` の `projects`
- お知らせ追加: `site-data.js` の `updates`
- 連絡先変更: `site-data.js` の `links`
- ヒーロー文言変更: `site-data.js` の `hero`

## 追加のしかた

配列の中に既存の項目と同じ形でオブジェクトを1件追加すると、そのまま画面に反映されます。

例:

```js
projects: [
    {
        status: '公開中',
        title: 'My New Game',
        description: 'ここに作品説明を書く',
        platform: 'PC / Web',
        link: 'https://example.com',
        linkLabel: '遊ぶ',
    },
]
```

`updates` も同じ方式です。新しい情報を上に出したい場合は、配列の先頭へ追加してください。