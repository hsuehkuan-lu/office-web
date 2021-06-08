module.exports = {
    publicPath: '/',
    transpileDependencies: [
        'vuetify'
    ],
    css: {
    loaderOptions: {
      scss: {
        additionalData: `
           @import "@/assets/styles/global.scss";
        `
      }
    }
  }
}


