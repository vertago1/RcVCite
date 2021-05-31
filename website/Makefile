#PAGES=$(shell find . -iname "*.php"  -and -not -path './includes/*' | sed 's/php$$/html/' | xargs)
#TEMPLATES=$(shell find ./includes -iname "*.php" | xargs)

include ../common.mk

PREFIX := ./html
REALPREFIX := $(realpath .)/$(PREFIX)


.PHONY: default
default: php_pages staticstuff sitemap

.PHONY: pre_php_pages
pre_php_pages:
	@ if [ -e "$(PREFIX)" ]; then \
		mkdir -p $(REALPREFIX); \
	else \
		mkdir -p $(PREFIX); \
	fi
	@echo -e $(GREEN)Building html files...$(NC)

.PHONY: php_pages
php_pages: pre_php_pages \
	$(REALPREFIX)/contact_us.html \
	$(REALPREFIX)/index.html \
	$(REALPREFIX)/for_websites.html \
	$(REALPREFIX)/for_browsers.html \
	$(REALPREFIX)/preview.html \
	$(REALPREFIX)/rss.xml \
	$(REALPREFIX)/updates.html

$(REALPREFIX)/%.html: %.php includes/functions.php includes/head.php includes/foot.php
	@cd `dirname $<`; $(PHP) `basename $<` > $@
	@echo $@

$(REALPREFIX)/rss.xml: rss.php includes/updates.php
	@cd `dirname $<`; $(PHP) `basename $<` > $@
	@echo $@

.PHONY: staticstuff
staticstuff:
	@echo -e $(GREEN)Syncing other files...$(NC)
	cp -Ru --preserve \
	    ../core \
	    img \
	    .htaccess \
	    *.css \
	    $(wildcard *.html) \
	    $(wildcard *.xml) \
	    $(REALPREFIX)/

.PHONY: sitemap
sitemap: staticstuff
	@echo -e $(GREEN)Generating sitemap.xml.gz...$(NC)
	@if [ -z `which $(SITEMAP_GENERATOR)` ]; then \
		echo $(RED)$(SITEMAP_GENERATOR) missing$(NC); \
		echo $(RED)to install dependencies run:; \
		echo "    "sudo npm -g install sitemap-generator-cli$(NC); \
		exit 1; \
	fi
	cd ./html; \
	    sitemap-generator 'https://rcvcite.net' sitemap.xml; \
	    cat sitemap.xml | gzip > sitemap.xml.gz

.PHONY: plugins
plugins:
	cd ../wordpress_/wp-content/plugins; \
	    zip -r ../../../site_builder/files/wp-RcVCite.zip ./rcvcite
	cd ../wordpress_/wp-content/plugins/rcvcite; \
	    zip -r ../../../../site_builder/files/RcVCite.zip \
	        ./RcVCite.css ./RcVCite.js ./versification.js

.PHONY: clean
clean:
	rm -r $(REALPREFIX)/*

.PHONY: perm-check
perm-check:
	find $(REALPREFIX) -type f ! -perm -o+r -exec ls -l {} \;
	#-perm '+r'

.PHONY: sync
sync: perm-check
	rsync -rtpzv -Lk --progress ./html/ vertago1@rcvcite.net:/home/vertago1/www/
