setup: ## Install packages and polis codebase
	git submodule update --init
	npm install

run: ## Run storybook development environment
	npm run storybook

build: ## Build static storybook for deploy
	npm run build-storybook

build-all-branches: ## Build static storybook for all PR branches (requires GITHUB_TOKEN)
	npm run build-storybook
	npx sb-branch-switch --config .storybook/.branches.json

%:
	@true

.PHONY: help

help:
	@echo 'Usage: make <command>'
	@echo
	@echo 'where <command> is one of the following:'
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
