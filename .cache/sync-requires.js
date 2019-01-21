const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-study-guide-js": hot(preferDefault(require("/home/bsuth/soseki/src/components/StudyGuide.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bsuth/soseki/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bsuth/soseki/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/bsuth/soseki/src/pages/contact.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("/home/bsuth/soseki/src/pages/features.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bsuth/soseki/src/pages/index.js"))),
  "component---src-pages-links-js": hot(preferDefault(require("/home/bsuth/soseki/src/pages/links.js"))),
  "component---src-pages-media-js": hot(preferDefault(require("/home/bsuth/soseki/src/pages/media.js")))
}

