import Parameters from './parameters'

export default {
  core: {
    authUrl: () => Parameters.coreAuthUrl,
    apiUrl: () => Parameters.coreApiUrl,
    apiTimeout: 15
  },
  fixedLayout: false,
  hideLogoOnMobile: false,
  defaults: {
    list: {
      limit: 10
    }
  },
  article: {
    list: {
      limit: 10
    }
  }
}
