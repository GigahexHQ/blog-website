module.exports = {
  title: "Gigahex",
  tagline: "Engineerig Blog for Gigahex",
  url: "https://blog.gigahex.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Gigahex", // Usually your GitHub org/user name.
  projectName: "gigahex-blog", // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    prism: {
      //theme: require("prism-react-renderer/themes/github"),
      additionalLanguages: ["scala"],
    },
    navbar: {
      title: "Gigahex",
      logo: {
        alt: "Gigahex Logo",
        src: "img/logo.svg",
      },
      hideOnScroll: true,
      links: [
        {
          to: "/",
          label: "Blog",
          position: "left",
        },
        { href: "https://gigahex.com", label: "Gigahex.com", position: "left" },
        {
          href: "https://app.gigahex.com",
          label: "Login",
          position: "right",
        },
        {
          href: "https://gigahex.com",
          label: "Request Access",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              href: "https://docs.gigahex.com/docs/install",
            },
            {
              label: "Guide",
              href: "https://docs.gigahex.com/docs/deploy-spark-with-gigahex",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/GigahexApp",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Github",
              href: "https://github.com/gigahexHQ",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gigahex.com`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
