# 使用 wx.getLocation() 获取用户位置并转化成真实描述文字
**解决问题：**
1. 在小程序中获取用户的信息， 使用 `wx.getLocation` API, 在使用这个 API 之前需要首先设置 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html). 

2. 用户有可能在进入小程序的时候关闭了获取位置的权限， 当需要获取位置的时候要重新判断是否拥有权限。 如果没有权限需要再次提醒用户授权.

3. `wx.getLocation` 接口返回的用户位置是经纬度形式的， 需要借助于 `微信小程序JavaScript SDK` 对返回的 `latitude` `longitude` 经纬度信息解析为 `国家 省份 市 ...` 的形式。


## 设置用户授权
小程序中部分接口是需要用户授权同意后才能调用的。 像 `getUserInfo` `getLocation` `chooseAddress` `chooseInvoiceTitle` `getWeRunData` 等。 当我们在小程序中需要使用这些接口的时候，首先都要用户用户授权才能使用， 我们可以使用 `wx.openSetting` 打开设置界面，引导用户开启授权。

`getLocation` 除了需要用户授权外， 还需要在开发的时候在 `app.json` 配置 [地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission);

所以 `第一步` 我们需要在 `app.json` 文件中首先配置 `地理位置用途说明`

**app.json**
```json
{
    "permission": {
        "scope.userLocation": {
            "desc": "你的位置信息将用于小程序位置接口的效果展示"
        }
    }
}
```

## 获取经纬度信息
`第二步` 在需要使用到 `getLocation` 接口的页面中的 `xx.js` 的 `onLoad` 方法中判断用户时候已经授权了 `getLocation` 的权限。

> 使用 `wx.getSetting` 获取所有已授权接口。 该接口会返回一个 `authSetting` 对象， 里面包含了所有的授权结果。

 ```js
 wx.getSetting({
  success(res) {
    console.log(res.authSetting)
    // res.authSetting = {
    //   "scope.userInfo": true,
    //   "scope.userLocation": true
    // }
  }
})
```

所以我们可以在 `onLoad` 方法中使用 `getSetting` 方法判断用户是否授权了 `userLocation`

```js
onLoad: function() {
    // 将当前页面的 this 赋值给 vm, 以区别于下面回调函数中的 this 
    const vm = this

    wx.getSetting({
      success(res) {
        // 1. scope.userLocation 为真， 代表用户已经授权
        if (res.authSetting['scope.userLocation']) {
         // 1.1 使用 getlocation 获取用户 经纬度位置
         wx.getLocation({
             success(res){
                 // 1.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置
                 console.log(res)

                 // 1.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址
                vm.getAddress(res.latitude, res.longitude)
             }
         })
        }else {
            // 2. 用户未授权的情况下， 打开授权界面， 引导用户授权.
            wx.openSetting({
                success(res) {
                    // 2.1 如果二次授权允许了 userLocation 权限， 就再次执行获取位置的接口
                    if (res.authSetting["scope.userLocation"]) {
                         wx.getLocation({
                            success(res){
                                // 2.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置
                                console.log(res)

                                // 2.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址
                                vm.getAddress(res.latitude, res.longitude)
                            }
                        })
                    }
                }
            })
        }
      }
    })
}

```

> 上面的代码的逻辑是: 当页面加载完成后， 1. 先获取用户授权列表。 并判断是否有 `scope.userLocation` 的权限. 
>1. 如果有权限， 直接调用 `wx.getLocation` 获取用户的位置。 将获取的经纬度位置传递给 `getAddress`。 在 `getAddress` 方法中将会把 经纬度位置转换成实际的 `国家 省份 市 ` 格式的地址；  
>2. 如果没有权限，就使用 `wx.openSetting` 接口代开权限设置界面， 让用户进行二次授权。授权成功后执行 `wx.getLocation` --> `getAddress` 的方法。 

> **注意 注意 注意：** `wx.openSetting` 接口在 2018年10月1号起用法已经改变， 像代码中直接使用 `wx.openSetting` 来打开授权页面已经不能使用了， 新版本的使用方法参考 [打开小程序设置页（wx.openSetting）接口调整](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008) 

## 转化经纬度信息为 `国家 省份 市` 

在第二步， 已经拿到了经纬度的信息之后， 使用了一个  `getAddress` 的方法，来转化经纬度。在这个方法中需要使用 [微信小程序JavaScript SDK](https://lbs.qq.com/qqmap_wx_jssdk/index.html) 来作为工具。

> 在使用 `微信小程序JavaScript SDK` 的时候需要先在 [微信小程序JavaScript SDK](https://lbs.qq.com/qqmap_wx_jssdk/index.html) 中注册账号， 并申请一个 `key`, **要想在小程序中使用这个 `key` 还需要 把这个 `key` 的 `WebServiceAPI` 勾选上** 

> 使用 '微信小程序 JavaScriptSDK'  需要[下载微信小程序 JavaScriptSDK v1.2 文件](http://3gimg.qq.com/lightmap/xcx/jssdk/qqmap-wx-jssdk1.2.zip)。 然后将 `微信小程序 JavaScriptSDK` 文件引入到当前页面的 `xx.js` 中。

```js
// xx.js
const QQMapWX = require('../../utils/qqmap-wx-jssdk.js')
```

最后实现 `getAddress` 方法:

```js 
    getAddress(latitude, longitude) {
        // 生成 QQMapWX 实例
        let qqmapsdk = new QQMapWX({
            key: 'xxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'
        })

        // reverseGeocoder 为 QQMapWX 解析 经纬度的方法
        qqmapsdk.reverseGeocoder({
            location: {latitude,longitude},
            success(res) {
                console.log('success', res)
                vm.setData({
                    // ad_info: res.result.ad_info
                    // city： res.result.ad_info
                })
            }
        })
    }
```

> 关于 reverseGeocoder 返回的详细信息可以查看 [reverseGeocoder 返回信息](https://lbs.qq.com/qqmap_wx_jssdk/method-reverseGeocoder.html)
