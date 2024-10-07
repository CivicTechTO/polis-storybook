/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    branches: {
      hostname: "127.0.0.1:8080/storybook-bundle",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
