const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'dotenv-webpack': {
      path: '.env'
    }
  }
})
