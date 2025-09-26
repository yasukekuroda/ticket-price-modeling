# ticket-price-modeling

## お題

https://cinemacity.co.jp/ticket/

この料金表に基づいて映画料金を決定するドメインモデルを作る。
料金表は 2023年7月21日改訂 のものを参照した。

## 考慮しないもの

- 同伴者
- ※特別興行の場合は上記の限りではございません。
- ※【極上爆音上映】はレイトショー割適用外です。
- ※パーク 80 の割引は終了しました。すでに券をお持ちの方は有効期限までお使いいただけます。

## Prerequisites

Node.js

## Getting Started

```bash
$ git clone git@github.com:yasukekuroda/ticket-price-modeling.git
$ cd ticket-price-modeling
$ npm i
```

## Usage

現在日時を元に最適なプランを選択して表示する

```bash
$ npx ts-node src/index.ts
```

テストを実行する

```bash
$ npm test
```

フォーマットする

```bash
$ npm run format
```

## 注意点

- 祝日には対応していない
- テストケースは網羅的ではない
- 複数のプランで同一料金になる場合にどちらのプランが選択されるかは考慮していない