
.PHONY: default
default: website

.PHONY: website
website:
	make -C ./website

.PHONY:
test:
	npm run test

.PHONY: clean
clean:
	make -C ./website clean
