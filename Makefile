NODE_BIN := node
NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN_DIR := $(NPM_MOD_DIR)/.bin

.PHONY: format
format: ## Format to pretty code
	$(NPM_BIN_DIR)/prettier --config ./prettier.config.js --write './src/**/*.+(js|jsx)'
