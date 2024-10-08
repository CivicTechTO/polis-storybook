/** @type { import('@storybook/react').Preview } */
const isGithubBuild = !!process.env["GITHUB_REPOSITORY"]
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

if (isGithubBuild) {
  const [owner, repo] = process.env["GITHUB_REPOSITORY"].split("/")
  preview.parameters["branches"] = {
    hostname: `${owner}.github.io/${repo}`,
  }
}

export default preview;
