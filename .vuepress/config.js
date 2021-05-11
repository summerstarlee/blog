const fs = require('fs')

/**
 * 根据路径返回该目录下的文件名称数组
 * @param {*} basePath 
 */
 const getSidebars = basePath => {
    const ll = fs.readdirSync(basePath)
    return ll.map(l => l.replace(/(README)*\.md/, '')).sort()
}

module.exports = {
    dest: 'dist',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            {
                text: '计算机网络基础',
                link: '/computer_network/'
            }
        ],
        sidebar: {
            '/computer_network/': getSidebars('computer_network')
        }
    }
}



