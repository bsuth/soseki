// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-components-study-guide-js": () => import("/home/bsuth/soseki/src/components/StudyGuide.js" /* webpackChunkName: "component---src-components-study-guide-js" */),
  "component---src-components-chapter-text-js": () => import("/home/bsuth/soseki/src/components/ChapterText.js" /* webpackChunkName: "component---src-components-chapter-text-js" */),
  "component---cache-dev-404-page-js": () => import("/home/bsuth/soseki/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/home/bsuth/soseki/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-botchan-js": () => import("/home/bsuth/soseki/src/pages/botchan.js" /* webpackChunkName: "component---src-pages-botchan-js" */),
  "component---src-pages-contact-js": () => import("/home/bsuth/soseki/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-features-js": () => import("/home/bsuth/soseki/src/pages/features.js" /* webpackChunkName: "component---src-pages-features-js" */),
  "component---src-pages-index-js": () => import("/home/bsuth/soseki/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-kokoro-js": () => import("/home/bsuth/soseki/src/pages/kokoro.js" /* webpackChunkName: "component---src-pages-kokoro-js" */),
  "component---src-pages-links-js": () => import("/home/bsuth/soseki/src/pages/links.js" /* webpackChunkName: "component---src-pages-links-js" */),
  "component---src-pages-media-js": () => import("/home/bsuth/soseki/src/pages/media.js" /* webpackChunkName: "component---src-pages-media-js" */),
  "component---src-pages-sanshiro-js": () => import("/home/bsuth/soseki/src/pages/sanshiro.js" /* webpackChunkName: "component---src-pages-sanshiro-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/bsuth/soseki/.cache/data.json")

