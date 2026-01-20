# 第12問：アルゴリズムとデータ構造（階層データの操作）

下記要件を満たす `Pull Request` を `featureブランチ` として作成してください。

## 課題背景

APIから返ってくるデータは、データベースの都合上「フラットな配列」であることが多いですが、UI上では「ツリー構造（階層）」として表示する必要があります。  
また、フォルダーごとのファイルサイズ合計などをクライアントサイドで計算する要件があります。

## 要件

`src/utils/tree.js`、以下の機能を持つ関数 `buildTree` を実装してください。

### 入力データ仕様

以下のような、`id` と `parentId` を持つフラットなオブジェクトの配列を受け取ります。
- `type` が `folder` の場合、子を持つ可能性があります。
- `type` が `file` の場合、`size` (KB) を持ちます。

```javascript
const items = [
  { id: 1, parentId: null, type: 'folder', name: 'root' },
  { id: 2, parentId: 1,    type: 'folder', name: 'music' },
  { id: 3, parentId: 1,    type: 'folder', name: 'images' },
  { id: 4, parentId: 2,    type: 'file',   name: 'song.mp3', size: 5000 },
  { id: 5, parentId: 3,    type: 'file',   name: 'logo.png', size: 200 },
  { id: 6, parentId: 3,    type: 'file',   name: 'photo.jpg', size: 1500 },
];
```

## 要件

- フラットな配列を、親子関係に基づいたネストされたオブジェクト（`children` 配列を持つ）に変換してください。
  - `parentId` が `null` のデータがルートとなります。
- 各 `folder` に対して、その配下（直下だけでなく、孫やひ孫含むすべて）にある `file` の `size` の合計値を計算し、`totalSize` プロパティとして付与してください。
- 第六問で導入した `Vitest` を使用し、この関数が正しく動作することを証明するテストコード (`src/utils/tree.spec.js`) を作成してください。
