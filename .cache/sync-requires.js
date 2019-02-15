const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-components-study-guide-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/components/StudyGuide.js"))),
  "component---src-components-chapter-text-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/components/ChapterText.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/about.js"))),
  "component---src-pages-botchan-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/botchan.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/contact.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/features.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/index.js"))),
  "component---src-pages-kokoro-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/kokoro.js"))),
  "component---src-pages-links-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/links.js"))),
  "component---src-pages-media-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/media.js"))),
  "component---src-pages-sanshiro-js": hot(preferDefault(require("/home/bsuth/tempSoseki/soseki/src/pages/sanshiro.js")))
}

