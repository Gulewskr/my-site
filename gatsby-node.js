const fs = require("fs-extra")
const path = require("path")
exports.onPostBuild = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/locales"),
    path.join(__dirname, "/public/locales")
  )
}