
## デモ

`attack.html` を開いて「🚀 攻撃を実行」→ 表示されたURLをクリック

## 脆弱性

- Content-Typeは偽装可能（クライアント側で設定）
- HTMLファイルを `image/jpeg` として偽装してアップロード
- ファイルを開くと、JavaScriptが実行される
