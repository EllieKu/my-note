# 手機瀏海有無的UI

## 什麼是safe area?

  iPhone 瀏海螢幕的四方有專為iOS使用的區域，上方有著顯示時間以及無線訊號的Status Bar，下方有供iPhone X解鎖、跳出App所使用的Home Bar，除去這兩塊後，可供App使用的區域稱為Safe Area。

一般網頁內容採預設模式顯示：
![browser](https://miro.medium.com/max/700/1*aoHSgsngAYPgpjhJPFH5gQ.png)
![pic](https://webkit.org/wp-content/uploads/default-inset-behavior.png)

app:
![safeArea](https://docs-assets.developer.apple.com/published/dbcc36bfb3/e5aca39a-f9a2-4ab8-9f45-08fd95fb845c.png)

## 全螢幕顯示

使用 viewport-fit 設定

```html
<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>
```

![pic](https://miro.medium.com/max/1400/1*g2rBsFaE3Vxyp2ueMvOJnw.png)
![pic](https://webkit.org/wp-content/uploads/viewport-fit-cover.png)

### env() 和 constant()

iOS11 新增css屬性, 用以設定安全邊界與邊界的距離.

```css
padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
```

> The env() function shipped in iOS 11 with the name constant(). Beginning with Safari Technology Preview 41 and the iOS 11.2 beta, constant() has been removed and replaced with env(). You can use the CSS fallback mechanism to support both versions, if necessary, but should prefer env() going forward.

![pic](https://miro.medium.com/max/1400/1*Cc8jr4n_ZIFknBKNhoNFtg.png)
![pic](https://webkit.org/wp-content/uploads/safe-areas-1.png)

## 參考資料

1. [MDN - Viewport_meta_tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
2. [developer.apple.com](https://developer.apple.com/documentation/uikit/uiview/positioning_content_relative_to_the_safe_area)
3. [https://meistudio.medium.com/design-for-safari-15-4188f46ed3db](https://meistudio.medium.com/design-for-safari-15-4188f46ed3db)
4. [面對iPhone X，Web設計師需要知道的幾個CSS屬性](https://bobtung.medium.com/%E9%9D%A2%E5%B0%8Diphone-x-web%E8%A8%AD%E8%A8%88%E5%B8%AB%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%B9%BE%E5%80%8Bcss%E5%B1%AC%E6%80%A7-b7c03b314c6a)
