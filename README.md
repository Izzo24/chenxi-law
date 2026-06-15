# 臣璽律師事務所 — 形象網站

中南部專業法律服務形象網站。多頁式、響應式（RWD）、SEO 友善。

## 頁面結構（5 頁）

| 檔案 | 頁面 | 配圖 |
|---|---|---|
| `index.html` | 首頁 | Hero 書牆 + 會議桌 + 四領域 ×4 |
| `about.html` | 關於事務所 | 事務所空間 |
| `services.html` | 專業領域（家事/勞資/車禍/刑事） | 四領域氛圍圖 |
| `cases.html` | 成功案例 + 當事人回饋 | — |
| `contact.html` | 預約諮詢（含表單） | 接待區 |

## 設計

- 色彩：墨黑 `#16170f` × 米白紙感 `#f4f1e9` × 黛綠 `#3d5343` × 暖金 `#9a7b3f`
- 字體：標題 Noto Serif TC（書卷感）、內文 Noto Sans TC
- 共用樣式 `styles.css`、首頁專屬 `home.css`、互動 `main.js`

## 配圖（重要）

目前所有圖片以 **Higgsfield CDN 連結**嵌入（線上即時載入）。CDN 連結可能隨時間失效，**正式上線前請務必把圖片下載到自己的主機**，步驟：

1. 開啟下方 7 個連結，分別另存為圖片
2. 在專案內建立 `images/` 資料夾，放入圖片
3. 將 HTML/CSS 中的 `https://d8j0ntlcm91z4.cloudfront.net/...` 路徑改為 `images/你的檔名.png`

### 圖片連結清單

1. Hero 書牆主視覺：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025245_d988541d-dfc1-45c6-aa90-7edff7b0aabc.png`
2. 會議桌 / 諮詢空間：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025613_cf2e7cce-91a5-4c70-8378-4fdb17b9a24b.png`
3. 家事·離婚（婚戒）：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025620_2231d4de-1a09-4036-b270-672bc4511d6a.png`
4. 勞資爭議（安全帽）：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025625_2b766e69-707f-42b3-a600-f7a22c298a74.png`
5. 車禍賠償（鑰匙+文件）：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025630_a6f294da-bccd-4074-9a8c-b7fcf08e6144.png`
6. 傷害·刑事（法槌+法典）：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025635_a84d8274-c691-4e7b-b717-df87e793648e.png`
7. 接待區：
   `https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_025640_c121dc37-36fd-4ebb-92da-8ac19295223d.png`

## 待客戶補充 / 調整

- 電話、地址（目前用表單填的 0922-333-444、「中南部」，建議補上完整地址以利在地 SEO）
- 真實案例與當事人回饋（目前為示意文案，須換成真實且合規內容）
- 統計數字（15 年、1200+ 案件等為示意，須核實）
- 表單後端：`main.js` 內為前端示意，正式須接後端或表單服務（如 Formspree、自架 API）
- 律師法廣告規範：成功案例 / 回饋的呈現方式建議經律師確認，符合律師倫理規範

## 部署

純靜態網站，可直接部署到 Vercel、Netlify、GitHub Pages 或任何主機。把整個資料夾上傳即可。

## SEO 已內建

- 各頁獨立 title / meta description / keywords
- 首頁 LegalService 結構化資料（JSON-LD）
- 語意化 HTML、圖片 alt、lazy loading
- 建議下一步：補地區關鍵字（如「台中離婚律師」）、申請 Google Business Profile、提交 sitemap 至 Search Console
