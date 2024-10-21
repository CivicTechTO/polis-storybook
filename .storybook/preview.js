/** @type { import('@storybook/react').Preview } */
import "./style.css"
import { getMath, getComments } from "./utils";

// Needed at the very least for Graph component stories of UT-HAI client-deliberation.
import jquery from 'jquery';
global.$ = jquery;
global.jQuery =  jquery;

import * as d3scale from 'd3-scale';
import * as d3geo from 'd3-geo';
global.d3 = {
  ...d3scale,
  ...d3geo,
};

// This is where we mock responses for PolisNet endpoints.
// TODO: Create a storybook plugin to do this dynamically.
function ajax_responses(responses) {
  return function (params) {
    const mockedPathname = new URL(params.url).pathname
    const mockResponse = responses[mockedPathname]
    var deferred = global.$.Deferred().resolve(mockResponse)
    return deferred
  };
}

global.$.ajax = ajax_responses({
  '/api/v3/math/pca2': getMath(),
  '/api/v3/comments': [getComments()],
  '/api/v3/votes': [],
  '/api/v3/votes/famous': [],
})

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
