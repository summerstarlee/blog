(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{438:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用-wx-getlocation-获取用户位置并转化成真实描述文字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-wx-getlocation-获取用户位置并转化成真实描述文字"}},[s._v("#")]),s._v(" 使用 wx.getLocation() 获取用户位置并转化成真实描述文字")]),s._v(" "),n("p",[n("strong",[s._v("解决问题：")])]),s._v(" "),n("ol",[n("li",[n("p",[s._v("在小程序中获取用户的信息， 使用 "),n("code",[s._v("wx.getLocation")]),s._v(" API, 在使用这个 API 之前需要首先设置 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("用户授权"),n("OutboundLink")],1),s._v(".")])]),s._v(" "),n("li",[n("p",[s._v("用户有可能在进入小程序的时候关闭了获取位置的权限， 当需要获取位置的时候要重新判断是否拥有权限。 如果没有权限需要再次提醒用户授权.")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("wx.getLocation")]),s._v(" 接口返回的用户位置是经纬度形式的， 需要借助于 "),n("code",[s._v("微信小程序JavaScript SDK")]),s._v(" 对返回的 "),n("code",[s._v("latitude")]),s._v(" "),n("code",[s._v("longitude")]),s._v(" 经纬度信息解析为 "),n("code",[s._v("国家 省份 市 ...")]),s._v(" 的形式。")])])]),s._v(" "),n("h2",{attrs:{id:"设置用户授权"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置用户授权"}},[s._v("#")]),s._v(" 设置用户授权")]),s._v(" "),n("p",[s._v("小程序中部分接口是需要用户授权同意后才能调用的。 像 "),n("code",[s._v("getUserInfo")]),s._v(" "),n("code",[s._v("getLocation")]),s._v(" "),n("code",[s._v("chooseAddress")]),s._v(" "),n("code",[s._v("chooseInvoiceTitle")]),s._v(" "),n("code",[s._v("getWeRunData")]),s._v(" 等。 当我们在小程序中需要使用这些接口的时候，首先都要用户用户授权才能使用， 我们可以使用 "),n("code",[s._v("wx.openSetting")]),s._v(" 打开设置界面，引导用户开启授权。")]),s._v(" "),n("p",[n("code",[s._v("getLocation")]),s._v(" 除了需要用户授权外， 还需要在开发的时候在 "),n("code",[s._v("app.json")]),s._v(" 配置 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission",target:"_blank",rel:"noopener noreferrer"}},[s._v("地理位置用途说明"),n("OutboundLink")],1),s._v(";")]),s._v(" "),n("p",[s._v("所以 "),n("code",[s._v("第一步")]),s._v(" 我们需要在 "),n("code",[s._v("app.json")]),s._v(" 文件中首先配置 "),n("code",[s._v("地理位置用途说明")])]),s._v(" "),n("p",[n("strong",[s._v("app.json")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"permission"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope.userLocation"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"desc"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的位置信息将用于小程序位置接口的效果展示"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"获取经纬度信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取经纬度信息"}},[s._v("#")]),s._v(" 获取经纬度信息")]),s._v(" "),n("p",[n("code",[s._v("第二步")]),s._v(" 在需要使用到 "),n("code",[s._v("getLocation")]),s._v(" 接口的页面中的 "),n("code",[s._v("xx.js")]),s._v(" 的 "),n("code",[s._v("onLoad")]),s._v(" 方法中判断用户时候已经授权了 "),n("code",[s._v("getLocation")]),s._v(" 的权限。")]),s._v(" "),n("blockquote",[n("p",[s._v("使用 "),n("code",[s._v("wx.getSetting")]),s._v(" 获取所有已授权接口。 该接口会返回一个 "),n("code",[s._v("authSetting")]),s._v(" 对象， 里面包含了所有的授权结果。")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSetting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("authSetting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// res.authSetting = {")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "scope.userInfo": true,')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//   "scope.userLocation": true')]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("所以我们可以在 "),n("code",[s._v("onLoad")]),s._v(" 方法中使用 "),n("code",[s._v("getSetting")]),s._v(" 方法判断用户是否授权了 "),n("code",[s._v("userLocation")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onLoad")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将当前页面的 this 赋值给 vm, 以区别于下面回调函数中的 this ")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vm "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("\n\n    wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSetting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. scope.userLocation 为真， 代表用户已经授权")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("authSetting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scope.userLocation'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.1 使用 getlocation 获取用户 经纬度位置")]),s._v("\n         wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置")]),s._v("\n                 console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址")]),s._v("\n                vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 用户未授权的情况下， 打开授权界面， 引导用户授权.")]),s._v("\n            wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("openSetting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.1 如果二次授权允许了 userLocation 权限， 就再次执行获取位置的接口")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("authSetting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scope.userLocation"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                         wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getLocation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置")]),s._v("\n                                console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n                                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址")]),s._v("\n                                vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("blockquote",[n("p",[s._v("上面的代码的逻辑是: 当页面加载完成后， 1. 先获取用户授权列表。 并判断是否有 "),n("code",[s._v("scope.userLocation")]),s._v(" 的权限.")]),s._v(" "),n("ol",[n("li",[s._v("如果有权限， 直接调用 "),n("code",[s._v("wx.getLocation")]),s._v(" 获取用户的位置。 将获取的经纬度位置传递给 "),n("code",[s._v("getAddress")]),s._v("。 在 "),n("code",[s._v("getAddress")]),s._v(" 方法中将会把 经纬度位置转换成实际的 "),n("code",[s._v("国家 省份 市")]),s._v(" 格式的地址；")]),s._v(" "),n("li",[s._v("如果没有权限，就使用 "),n("code",[s._v("wx.openSetting")]),s._v(" 接口代开权限设置界面， 让用户进行二次授权。授权成功后执行 "),n("code",[s._v("wx.getLocation")]),s._v(" --\x3e "),n("code",[s._v("getAddress")]),s._v(" 的方法。")])])]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意 注意 注意：")]),s._v(" "),n("code",[s._v("wx.openSetting")]),s._v(" 接口在 2018年10月1号起用法已经改变， 像代码中直接使用 "),n("code",[s._v("wx.openSetting")]),s._v(" 来打开授权页面已经不能使用了， 新版本的使用方法参考 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008",target:"_blank",rel:"noopener noreferrer"}},[s._v("打开小程序设置页（wx.openSetting）接口调整"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"转化经纬度信息为-国家-省份-市"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转化经纬度信息为-国家-省份-市"}},[s._v("#")]),s._v(" 转化经纬度信息为 "),n("code",[s._v("国家 省份 市")])]),s._v(" "),n("p",[s._v("在第二步， 已经拿到了经纬度的信息之后， 使用了一个  "),n("code",[s._v("getAddress")]),s._v(" 的方法，来转化经纬度。在这个方法中需要使用 "),n("a",{attrs:{href:"https://lbs.qq.com/qqmap_wx_jssdk/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信小程序JavaScript SDK"),n("OutboundLink")],1),s._v(" 来作为工具。")]),s._v(" "),n("blockquote",[n("p",[s._v("在使用 "),n("code",[s._v("微信小程序JavaScript SDK")]),s._v(" 的时候需要先在 "),n("a",{attrs:{href:"https://lbs.qq.com/qqmap_wx_jssdk/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信小程序JavaScript SDK"),n("OutboundLink")],1),s._v(" 中注册账号， 并申请一个 "),n("code",[s._v("key")]),s._v(", "),n("strong",[s._v("要想在小程序中使用这个 "),n("code",[s._v("key")]),s._v(" 还需要 把这个 "),n("code",[s._v("key")]),s._v(" 的 "),n("code",[s._v("WebServiceAPI")]),s._v(" 勾选上")])])]),s._v(" "),n("blockquote",[n("p",[s._v("使用 '微信小程序 JavaScriptSDK'  需要"),n("a",{attrs:{href:"http://3gimg.qq.com/lightmap/xcx/jssdk/qqmap-wx-jssdk1.2.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载微信小程序 JavaScriptSDK v1.2 文件"),n("OutboundLink")],1),s._v("。 然后将 "),n("code",[s._v("微信小程序 JavaScriptSDK")]),s._v(" 文件引入到当前页面的 "),n("code",[s._v("xx.js")]),s._v(" 中。")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// xx.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" QQMapWX "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../utils/qqmap-wx-jssdk.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("最后实现 "),n("code",[s._v("getAddress")]),s._v(" 方法:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" longitude")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成 QQMapWX 实例")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" qqmapsdk "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QQMapWX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx-xxxxx'")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// reverseGeocoder 为 QQMapWX 解析 经纬度的方法")]),s._v("\n        qqmapsdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseGeocoder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            location"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'success'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ad_info: res.result.ad_info")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// city： res.result.ad_info")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("blockquote",[n("p",[s._v("关于 reverseGeocoder 返回的详细信息可以查看 "),n("a",{attrs:{href:"https://lbs.qq.com/qqmap_wx_jssdk/method-reverseGeocoder.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("reverseGeocoder 返回信息"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);