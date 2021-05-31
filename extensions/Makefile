
include ../common.mk

CORE_FILES := ./RcVCite.css ./RcVCite.js ./versification.js
CORE_ZIP := RcVCite.zip

WP_TEMP := $(shell mktemp -d)
WP_FILES := $(shell find ./wordpress) $(shell find ../core)
WP_ZIP := wp-RcVCite.zip

.PHONY: default
default: plugins

.PHONY: plugins
plugins: $(WP_ZIP) $(CORE_ZIP)

$(WP_ZIP): $(WP_FILES)
	@echo -e $(GREEN)Packaging wordpress plugin...$(NC)
	mkdir -p $(WP_TEMP)/rcvcite
	cp -Ru --preserve ../core/* ./wordpress/* $(WP_TEMP)/rcvcite
	cd $(WP_TEMP); \
	    zip -r $(CURDIR)/$(WP_ZIP) ./rcvcite

$(CORE_ZIP): $(addprefix ../core/,$(CORE_FILES))
	@echo -e $(GREEN)Packaging core files...$(NC)
	cd ../core; \
	    zip -r $(CURDIR)/$(CORE_ZIP) $(CORE_FILES)

clean:
	rm -rf $(WP_ZIP) $(CORE_ZIP)
