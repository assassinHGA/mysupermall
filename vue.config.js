module.exports = {      
    //   配置别名，方便寻找文件;
    //   import 文件时，可以直接使用 别名 作为前缀
    configureWebpack: {
        resolve: {
            alias: {
                'assets'    :    '@/assets',
                'common'    :   '@/common',
                'components'    :   '@/components',
                'network'   :   '@/network',
                'views'    :   '@/views',

            }
        }
    }

}