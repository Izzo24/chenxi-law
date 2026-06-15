# 臣璽律師事務所 — 品牌圖示資產

## Logo 變體

### 1. Icon Mark（1:1 正方形，純黑去背）✅ 最終版
用途：favicon、apple-touch-icon、footer（+ brightness(0)invert(1) → 白）
```
https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_113546_fff17f76-08e3-49d3-bf6f-00f4a98a1ae8.png
```

### 2. 橫式 Logo（純黑去背）✅ 最終版 — nav 用
用途：nav header（`brightness(0)invert(1)` → 白，顯示在深色 hero；`.solid` 時 `filter:none` → 黑）
```
https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_113544_6fe874ad-6a82-4b76-a676-731035a86794.png
```

### 3. 橫式 Logo（白底，og:image 用）
用途：社群分享預覽圖、og:image
```
https://d8j0ntlcm91z4.cloudfront.net/user_3Eqjq0zwo7LwUKMWfh8ca0nVfbA/hf_20260615_113507_dd6cfb59-69b8-414d-b264-2f1d4d051269.png
```

## CSS 策略（nav logo）— 純黑去背最乾淨
```css
/* 深色 hero：brightness(0)invert(1) 黑→白，純黑邊緣高對比，無霧感 */
.brand img { filter: brightness(0) invert(1); transition: filter .35s; height: 32px; max-width: 160px; }
/* 米色 .solid nav：filter:none → 黑色 logo 顯示 */
.site-header.solid .brand img { filter: none; }
```

## 現有網站使用狀況
- **nav**：純黑透明橫式 logo（6fe874ad），height 32px，亮面深面各自以 CSS 切換
- **footer**：純黑透明 Icon Mark（fff17f76）+ `filter:brightness(0) invert(1)` → 白
- **favicon / apple-touch-icon**：純黑透明 Icon Mark（fff17f76）
- **og:image**：白底橫式（dd6cfb59）

## 品牌色
- 墨黑（Ink）：`#16170f`
- 米紙（Paper）：`#f4f1e9`
- 金色（Gold）：`#9a7b3f`
- 淡金（Gold Light）：`#c2a366`
- 墨綠（Jade）：`#3d5343`
