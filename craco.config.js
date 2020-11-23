const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              /*
              * https://ant.design/docs/react/customize-theme-cn
              * Ant Design 的样式变量
              * */
              '@primary-color': '#cbab61',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
