# TwitterShowViewPhotoJa
Twitter のタイムラインに「画像を表示する」を表示させる Chrome 拡張機能

## きっかけ
最近、Twitter 公式 Web のアップデートがありまして、各ツイートの右下に表示されていた「画像を表示する」のリンクが消えました。

これで何が困るかっていうと、**ツイートする画像/動画を不適切な内容を含むものとして設定**しているユーザーのツイートに画像が含まれているかどうか、**一目でわからなくなりました**。

いちいちツイートをクリックして画像が入ってるかどうか調べるのめんどくさい:anger::anger:

（追記）アップデートで「画像を表示する」のリンクが復活したようですが、RTなどまだ一部表示されないところが残ってます（2015/09/05現在）。

## それで
「画像を表示する」のリンクを復活させる Chrome （野良）拡張機能をつくりました。**[ここからダウンロード](https://github.com/hunamizawa/TwitterShowViewPhotoJa/releases)**

## 注意
* 野良拡張です、**使用は自己責任で。**
* ~~一部「画像を表示する」のリンクが出ないところがあります~~ → ver0.2でたぶんなおりました

## 使い方
1. 適当な場所に zip を展開
2. `chrome://extensions/` を開く
3. 「デベロッパーモード」にチェック
4. 「パッケージ化されていない拡張機能を読み込む...」
5. さっきの zip を展開したフォルダを選択
6. [Twitter](https://twitter.com/) を開く
7. Enjoy!

## ライセンス
The MIT License です

## 個人的感想
* そもそも「画像を表示する」が消えたのに気づいてない人が多いのでは
* こんな拡張機能ないとまともに見れない公式はあまりにも使いにくい
* ぶっちゃけ数日で復活すると思ってるので、ストアに上げる気はないです（金かかるし） → 実際、不完全ながら復活した
