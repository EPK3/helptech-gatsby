/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `HelpTech`,
    siteUrl: `http://helptech.local/`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://helptech.local/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-prettier-eslint",
    options: {
      prettier: {
        patterns: [
          // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
          "**/*.{css,scss,less}",
          "**/*.{json,json5}",
          "**/*.{graphql}",
          "**/*.{md,mdx}",
          "**/*.{html}",
          "**/*.{yaml,yml}",
        ],
      },
      eslint: {
        patterns: "**/*.{js,jsx,ts,tsx}",
        customOptions: {
          fix: true,
          cache: true,
        },
      },
    },
  },]
};
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `HelpTech`,
    siteUrl: `http://helptech.local/`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://helptech.local/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap"]
};