/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-addon-remix-react-router",
    "storybook-branch-switcher",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  env: (config) => ({
    ...config,
    GITHUB_REPOSITORY: process.env["GITHUB_REPOSITORY"] || null,
  }),
};
export default config;
