(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{379:function(s,n,t){"use strict";t.r(n);var a=t(42),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"windows-查看端口并-kill-某个进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-查看端口并-kill-某个进程"}},[s._v("#")]),s._v(" windows 查看端口并 kill 某个进程")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前系统所有端口使用情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个端口被那个应用占用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用某个 pid 对应的进程应用名称")]),s._v("\ntasklist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2124")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除某个 pid 对应的进程")]),s._v("\ntaskkill -pid "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2124")]),s._v(" -f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);