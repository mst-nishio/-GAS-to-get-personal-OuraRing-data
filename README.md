# GAS-to-get-personal-OuraRing-data

OuraRing の Personal Access Token を利用して、個人のデータをスプレッドシートに転写するだけの GAS

## 使い方

1. src/.settings.gs 内の項目に、自身で利用するスプレッドシート・取得したい日付の範囲・Personal Access Token の情報を記入する。

例
Settings.spreadSheetId = "xxxxxxxx";
Settings.sheetName = "xxxxxxxx";
Settings.startDate = "20xx-01-01";
Settings.endDate = "20xx-12-31";
Settings.ouraToken = "xxxxxxxx";

2. 自身の GAS プロジェクトを作成し、スクリプトファイルを２つ作成する。src/getDate.gs と src/.settings.gs の内容をコピぺする。
