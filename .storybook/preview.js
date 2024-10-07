/** @type { import('@storybook/react').Preview } */
const isGithubBuild = !!process.env["GITHUB_REPOSITORY"]
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

if (true) {
  const [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/")
  preview.parameters["branches"] = {
    hostname: `${owner}.github.io/${repo}`,
  }
}

export default preview;
