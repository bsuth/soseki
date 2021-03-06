const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/bsuth/projects/soseki/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-components-study-guide-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/components/StudyGuide.js"))),
  "component---src-components-chapter-text-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/components/ChapterText.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/about.js"))),
  "component---src-pages-botchan-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/botchan.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/contact.js"))),
  "component---src-pages-depreciate-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/depreciate.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/features.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/index.js"))),
  "component---src-pages-kokoro-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/kokoro.js"))),
  "component---src-pages-links-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/links.js"))),
  "component---src-pages-media-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/media.js"))),
  "component---src-pages-sanshiro-js": hot(preferDefault(require("/home/bsuth/projects/soseki/src/pages/sanshiro.js")))
}

