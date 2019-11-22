# WeChat Signable URL

获取微信内当前 WebView 的 URL 用于签名

## 动机

在调用微信 JS SDK 前需要调用 `wx.config` 方法往当前页面注入权限验证配置，`wx.config` 方法中的 `signature` 参数需要使用「当前 WebView 的 URL」（以下统称 WebView URL） 来生成。iOS 与 Android 两个平台的 WebView URL 获取结果不一致。在 Android 平台中，WebView URL 等于当前 `window.location.href` 的值，而在 iOS 平台中则为打开 WebView 时的 URL 的值。这就造成 iOS 平台下的 SPA ，在使用 History API 跳转页面后，因为 `window.location.href` 与 Native 获取的 WebView URL 不同，导致签名无效。所以在 iOS 平台中总是使用初始化时获取的 `window.location.href` 值来签名就能解决签名无效的问题。

## 安装

```bash
npm install @maroon1/wechat-signable-url
```

## 使用

```javascript
import url from '@maroon1/wechat-signable-url';

const signableUrl = url();

getSignatureFromRemote(signableUrl)
  .then(signature => {
    wx.config({
      signature,
      ...
    });
  });
```
