# 第四問：コンポーネント

下記要件を満たす`Pull Request`を `featureブランチ` として作成してください。

### 資料

![サンプル](./images/example.png)

### 補足

- 今後のフォルダーストラクチャーは、`Atomic Design` とします。
- 必要に応じて、`npm` で `3rd Party` ライブラリを追加して使用してもかまいません。
- 各コンポーネントは `Composition API` で実装してください。

## 要件 1

- 第三問で作成した `App.vue` を適切なコンポーネントに分解してください。

## 要件 2

アバター画像は今後差し替えられる可能性があります。考慮した `Vue` コンポーネント化を行ってください。

- `HTML` の`<img>` タグが、取りうる属性を、すべて `prop` として渡すことが可能にしてください

## 要件 3

ソーシャルアイコンコンポーネントを作成し、ヘッダーに配置してください。

- クリックした場合、`<a target="_blank">` と同等の動作を行うようにしてください
- アイコンは、`svg` とします。
- ヘッダーに対して上下は中央揃え、左右は右寄せになるようにしてください。
- アイコンが複数ある場合は横並びとなるようにしてください。
- 対応ソーシャルサービスは、`GitHub`、`X(Twitter)`、`LinkdIn`、`Facebook`、`Line`、`Mixi`とします
  - リンク先は `GitHub` に関しては、受験者個人のもの、その他に関してはダミーの各サービストップへのリンクで構いません
  - カラーはモノクロで構いません。

## 要件 4

- `About` をクリックすると、`app/src/assets/markdown/about.md` の内容を `HTML` に変換して、メインに表示されるようにしてください。
- `Markdown` の規格としては、`GitHub Flavored Markdown Spec` を満たしていれば問題ありません。
- また、`npm run dev` で最初にアクセスしたとき、この内容が表示されるようにしてください

### 参考

- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

## 要件 5

`Hacker News`をクリックすると、[Hacker News](https://news.ycombinator.com/) の`最新の 50 件`がリストタグとしてメインに表示されるようにしてください。

### 参照

- [Hacker News API](https://github.com/HackerNews/API)
