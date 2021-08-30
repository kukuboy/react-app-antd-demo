/*
 * @Description: 
 * @Author: 水印红枫
 * @Editor: 水印红枫
 * @Date: 2021-08-30 11:15:00
 * @LastEditors: 水印红枫
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};