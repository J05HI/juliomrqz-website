const { createNowBeginHandler } = require('netlify-cms-oauth-provider-node')

module.exports = createNowBeginHandler(
  { oauthProvider: 'github' },
  { useEnv: true }
)
