
include ./common.mk

.PHONY: default
default: extensions website

.PHONY: extensions
extensions:
	make -C ./extensions

.PHONY: website
website:
	make -C ./website

.PHONY:
test:
	npm run test

CIRCLECI_JOBS := extensions tests website
CIRCLECI_CACHE_DIR := $(realpath .)/.cache

.PHONY:
circleci-local:
	@echo -e $(GREEN)Running circleci local configuration...$(NC)
	@if [ -z `which $(CIRCLECI)` ]; then \
		echo $(RED)$(CIRCLECI) missing$(NC); \
		echo $(RED)to install use the following script:; \
		echo "    "https://github.com/CircleCI-Public/circleci-cli/blob/master/install.sh$(NC); \
		exit 1; \
	fi
	@if [ -n "`git diff-index HEAD`" ]; then \
		echo $(RED)Uncommited change detected.$(NC); \
		echo $(RED)Please resolve before checking the circleci workflow.$(NC); \
		exit 1; \
	fi
	@mkdir -p $(CIRCLECI_CACHE_DIR)
	@for job in $(CIRCLECI_JOBS); do \
		circleci local execute \
		    -v "$(CIRCLECI_CACHE_DIR):/home/circleci/.npm" \
		    --job "$${job}"; \
	done

.PHONY: clean
clean:
	make -C ./extensions clean
	make -C ./website clean
