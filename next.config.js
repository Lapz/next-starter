const withSize = require("next-size")
const withCss = require("@zeit/next-css")
const withImages = require("next-images")
const withPurgeCss = require("next-purgecss")
const withPlugins = require("next-compose-plugins")
module.exports = withPlugins([
  [withSize],
  [withImages],
  [withCss(withPurgeCss())]
])
