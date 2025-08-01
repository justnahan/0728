# 產品需求文檔 (Product Requirements Document)

## 🎯 核心設計理念

**DailyMood 每日選物**是一個依照使用者每日心情與生活情境精選商品的療癒系電商品牌。我們相信每一天都值得被溫柔對待，每個心情都能找到「剛好適合今天的東西」。

**目標受眾：** 20-40歲注重生活品質的都市女性（兼顧中性設計），追求小確幸與情緒自我照顧，願意為儀式感與生活美學投資。

**品牌核心價值：** 溫柔陪伴、情緒理解、生活美學、個人化服務

## 🏗️ 頁面佈局與結構

### 導航區域
- **頂部導航：** 極簡設計，左側品牌Logo（手寫風格），右側包含「心情選物」、「MoodBox訂閱」、「生活靈感」、會員中心、購物車
- **移動端：** 漢堡選單，保持視覺清爽，一鍵快速進入心情選物模式

### 主要內容區域
- **情境式入口：** 大面積留白搭配溫柔文案「今天是需要被溫柔對待的一天嗎？」
- **心情選擇器：** 三層式選擇介面（心情 → 場景 → 期望感受）
- **商品展示區：** 個人化推薦結果，瀑布流或網格佈局
- **互動遊戲區：** 抽牌推薦、轉盤選物等趣味功能

### 頁尾區域
- **品牌故事簡介**、**聯絡資訊**、**社群連結**
- **每日一句溫柔話語**或**情緒小Tips**
- **簡潔的服務說明**（退換貨、配送資訊）

## 🛍️ 商品展示方式

### 商品卡片設計
- **卡片風格：** 圓角矩形，柔和陰影，圖片佔70%面積
- **商品照片：** 生活情境照優先於去背商品圖，營造代入感
- **資訊層級：** 商品名稱（手寫風字體）、簡短描述、價格、「適合心情標籤」
- **情緒標籤：** 小型Emoji + 文字（如 🌙 夜晚時光、☕ 慢活午後）

### 商品列表佈局
- **桌面版：** 4欄網格佈局，保持充足留白
- **平板版：** 3欄佈局，卡片稍大
- **手機版：** 2欄佈局，重點突出商品情境感受

### 互動效果
- **懸停效果：** 卡片輕微上浮 + 柔和陰影加深
- **點擊回饋：** 溫柔的脈衝動畫
- **載入動畫：** 商品卡片依序淡入，像花朵綻放的感覺

## 🎨 視覺風格與品牌

### 色彩方案
- **主色調：** 奶茶色 (#F5E6D3)、霧灰藍 (#B8C5D1)、乾燥玫瑰 (#D4A5A5)、杏仁米白 (#F7F3F0)
- **輔助色：** 森林綠 (#6B8E6B) 用於CTA按鈕、芥末黃 (#D4B86A) 用於特殊標示
- **文字色：** 深灰棕 (#4A3C28) 為主，保持溫和不刺眼

### 字體選擇
- **標題字：** 思源柔黑體或手寫風格字體，營造親切感
- **內文字：** PingFang TC Regular，清晰易讀
- **品牌Logo：** 客製化手寫感字型

### 整體氛圍
- **關鍵詞：** 溫柔、安心、有質感但不昂貴、療癒系日系風格
- **視覺元素：** 大量留白、柔和圓角、手繪風插圖、低飽和度攝影

## ✨ 用戶互動與動畫

### 按鈕和連結
- **CTA按鈕：** 圓角設計，點擊時有溫柔的ripple效果
- **文字連結：** 下劃線動畫，從中心向兩側展開
- **心情選擇按鈕：** 點選時有彈跳動畫 + 色彩變化

### 過渡動畫
- **頁面切換：** 淡入淡出，避免突兀跳躍
- **商品篩選：** 流暢的重新排列動畫
- **心情匹配：** 完成選擇時有「找到了！」的慶祝動畫

### 載入效果
- **初次載入：** 品牌Logo慢慢顯現 + 「正在為你準備今天的選物...」
- **商品載入：** 骨架屏 + 溫柔的呼吸燈效果
- **推薦生成：** 像在調製專屬配方的動畫效果

## 📱 響應式設計需求

### 手機版
- **單欄顯示：** 商品改為2欄小卡片或單欄大卡片切換
- **心情選擇：** 全屏沉浸式選擇介面，一次專注一個選項
- **滑動操作：** 支援左右滑動瀏覽商品，上下滑動查看詳情

### 平板版
- **3欄佈局：** 保持視覺平衡，適當增加卡片尺寸
- **側邊篩選：** 可收合的篩選面板
- **橫向模式：** 充分利用屏幕寬度展示更多商品

### 桌面版
- **4-5欄網格：** 根據屏幕尺寸自適應
- **懸停互動：** 豐富的hover效果和快速預覽功能
- **多任務操作：** 支援同時瀏覽多個商品分類

## 🎯 特殊功能需求

### 核心功能
1. **情境式心情選擇器**
   - 三層選擇邏輯：心情狀態 → 生活場景 → 期望感受
   - 即時天氣API整合，自動調整推薦
   - 節日節氣自動識別

2. **個人化推薦引擎**
   - 基於瀏覽歷史、購買記錄、收藏行為
   - 機器學習優化匹配準確度
   - 可手動調整偏好設定

3. **趣味互動功能**
   - 「今日抽牌」推薦系統
   - 「心情轉盤」隨機選物
   - 「情緒測驗」深度了解用戶

4. **MoodBox訂閱服務**
   - 月度客製化商品盒
   - 訂閱管理後台
   - 驚喜開箱體驗設計

5. **社群互動功能**
   - 用戶心情分享牆
   - 商品使用心得評價
   - 「今天也適合你」商品分享

## 📄 各分頁設計架構

### 🏠 首頁 (Homepage)
**設計重點：** 溫暖迎接，快速引導進入心情選物

**內容結構：**
- **Hero區域：** 大面積留白 + 手寫風標語「每一天，都值得被溫柔對待」
- **心情快選：** 6個情緒圖標快速入口（😊快樂、😌放鬆、💪充實、🌙療癒、☔陰鬱、✨驚喜）
- **今日推薦：** 基於天氣/節日的精選商品（3-4個）
- **熱門心情：** 當日最多人選擇的心情狀態統計
- **品牌故事預覽：** 簡短溫馨文案 + CTA到關於我們

### 🎭 心情選物頁 (Mood Shopping)
**設計重點：** 沉浸式選擇體驗，逐步深入了解用戶需求

**互動流程：**
1. **第一層-心情選擇：** 
   - 大圖標 + 文字描述的情緒選項
   - 可複選，支援混合心情
   
2. **第二層-場景選擇：**
   - 生活場景卡片（在家、通勤、工作、約會、獨處時光）
   - 每個場景配有插畫圖示
   
3. **第三層-期望感受：**
   - 想要達到的狀態（放鬆、療癒、提神、溫暖、驚喜）
   
4. **推薦結果頁：**
   - 個人化商品推薦網格
   - 「為什麼推薦給你」的小卡片說明
   - 「換個心情試試」快速重選按鈕

### 🛍️ 商品列表頁 (Product Listing)
**設計重點：** 清晰的商品分類與篩選，保持發現樂趣

**篩選功能：**
- **心情標籤篩選：** Emoji + 文字的標籤雲
- **價格區間：** 滑桿式選擇器
- **商品分類：** 香氛、零食、服飾、文具、居家
- **特色篩選：** 新品、熱銷、編輯推薦

**排序選項：**
- 最適合你、價格低到高、最新上架、熱門程度

### 📦 商品詳情頁 (Product Detail)
**設計重點：** 情境化商品介紹，強化購買動機

**內容區塊：**
- **商品大圖：** 生活情境照片輪播
- **情緒匹配說明：** 「這個適合...的時候」情境文案
- **商品詳細資訊：** 規格、成分、使用方式
- **心情評價：** 用戶分享使用後的心情變化
- **搭配推薦：** 「一起更完美」的組合商品
- **使用靈感：** 如何融入日常生活的小tips

### 📦 MoodBox訂閱頁 (Subscription)
**設計重點：** 訂閱價值傳達，客製化程度展示

**內容架構：**
- **服務介紹：** 動畫展示訂閱流程
- **個人化設定：** 偏好調查問卷（口味、香調、色彩喜好）
- **過往盒子展示：** 歷史月份盒子內容預覽
- **用戶好評：** 開箱照片 + 心得分享
- **訂閱方案：** 月付/季付/年付選項
- **客製化程度說明：** 展示個人化推薦準確度

### 📖 生活靈感頁 (Lifestyle Content)
**設計重點：** 內容導購，生活美學教學

**內容分類：**
- **情緒照護：** 心理健康相關文章
- **日常儀式：** 生活習慣建立指南  
- **季節生活：** 節氣對應的生活方式
- **商品故事：** 品牌背後的故事與理念
- **用戶分享：** UGC內容展示平台

**呈現方式：**
- 卡片式文章預覽，大圖 + 標題 + 摘要
- 文章內嵌相關商品推薦
- 社群分享功能

### 👤 會員中心 (User Profile)
**設計重點：** 個人化數據展示，增加用戶黏性

**功能模組：**
- **心情日記：** 用戶歷史心情選擇記錄
- **個人化設定：** 偏好調整、推薦優化
- **購買歷史：** 訂單記錄與復購建議
- **收藏清單：** 心願清單與提醒功能
- **積分與優惠：** 會員等級與專屬優惠
- **MoodBox管理：** 訂閱狀態與盒子歷史

### 🎮 趣味互動頁面

#### 🎴 今日抽牌 (Daily Card Draw)
- **卡牌設計：** 手繪風格的商品卡片
- **抽牌動畫：** 流暢的翻牌效果
- **結果展示：** 「今天的你適合...」+ 商品推薦

#### 🎡 心情轉盤 (Mood Wheel)  
- **轉盤UI：** 繽紛色彩的情緒分區
- **旋轉動畫：** 物理引擎驅動的真實感
- **結果驚喜：** 隨機推薦配有解釋說明

## 💬 其他補充說明

### 語言風格指南
- **品牌聲音：** 像朋友般的溫柔對話，有同理心但不說教
- **文案範例：**
  - 「今天是需要被溫柔對待的一天嗎？」
  - 「幫你挑好了，這些東西超適合現在的你 ✨」
  - 「每個心情都值得被好好照顧」

### 技術需求補充
- **效能優化：** 圖片延遲載入、關鍵內容優先載入
- **無障礙設計：** 符合WCAG 2.1標準，支援螢幕閱讀器
- **SEO優化：** 結構化數據標記，社群媒體分享優化
- **分析追蹤：** 用戶行為分析，轉換率優化

### 未來擴展規劃
- **AI聊天機器人：** 24小時情緒陪伴與商品推薦
- **AR試用功能：** 居家商品虛擬放置預覽
- **社群功能強化：** 心情分享社群、用戶互動系統
- **跨平台整合：** APP開發、智能音箱整合

---

> 📌 **開發重點提醒**: 
> - 優先實現心情選物核心功能，確保用戶體驗流暢
> - 視覺設計需傳達溫柔療癒感，避免過度繽紛或刺眼
> - 移動端體驗至關重要，需特別優化觸控互動
> - 個人化推薦可先用簡單邏輯，後續逐步優化演算法
