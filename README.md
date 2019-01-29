# Soseki Project

## Introduction

Welcome to the Sōseki Project Github page. This is where all of the source code for
Sōseki Project is stored and maintained. 

## Implementation
The site is written in [React](https://reactjs.org/)
and uses [Gatsby SSG](https://www.gatsbyjs.org/) with [MDX](https://mdxjs.com/) files to
generate all of the text pages. We use MDX for two reasons:
1. The section break that appears in each chapter is itself a React component. If we wish ever change the appearance of this then we will only ever have to change it in once place, namely the component code.
2. We need to use Gatsby's [\<Link\>](https://www.gatsbyjs.org/docs/gatsby-link/) component to link to the study guide page, so even if we were to hardcode the section break code in place of the component, we would still require an import from Gatsby, which would require MDX.

## About

Taken from the website: 

"The purpose of this site is to make the works of Natsume Sōseki more accessible to students of Japanese. These works date from the early 1900s, and the language can be challenging, but reading the original texts is well worth the effort.

The site provides a number of tools to assist the reader (explained in detail in the Features link). However, a solid understanding of Japanese grammar and mastery of basic vocabulary have been assumed in order keep the extent of vocabulary helps, explanations, and notes reasonable. A minimum of two or three years of college-level Japanese study (or equivalent) is recommended before starting on these works.

Many of Sōseki's works are available in English translation, but it is recommended that these translations be avoided. This advice is not meant as a criticism of the translators, but rather reflects the view that much of the flavor and character of the original text is inevitably lost when translating Japanese literature into English. Rough translations are available in the Study Guide pages, but these should only be referenced when the meaning of the Japanese text is unclear. After consulting the translations, the reader should return to any problematic Japanese text and work to understand the meaning.

This site is strictly non-commercial, with no advertisements or solicitations. The only request of site users is to provide comments or suggestions (through the Contacts link) for how the site could be improved. Also, a short note from any who find the site useful would be appreciated, as the site coding includes no scripts to track users or usage.

Any and all help is welcome, especially with the detailed text coding. The hope is that with improvements over time this site will evolve from a simple initial effort into a valued resource for fans of Natsume Sōseki."
