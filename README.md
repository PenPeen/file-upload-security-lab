
## 概要

ファイルアップロードに潜む脆弱性を検証するデモアプリケーション

## TOP
![ホーム画面](public/home.png)

<details>
<summary>蓄積型クロスサイトスクリプティング</summary>

### HOME画面
![攻撃実行後の画面](public/stored-xss-home.png)

### 攻撃実行後
![攻撃実行後の画面](public/attack.png)

### 脆弱性

- Content-Typeは偽装可能（クライアント側で設定）
- HTMLファイルを `image/jpeg` として偽装してアップロード
- ファイルを開くと、JavaScriptが実行される

</details>
