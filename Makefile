.DEFAULT_GOAL := help
.PHONY: build test
.SILENT:

YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

identifier = com.rebelinblue.PawExtensions.FakerDynamicValue
extensions_dir = $(HOME)/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions/

## Build the extension
build:
	npm install
	npm run build
	cp README.md LICENSE.md ./build/$(identifier)/

## Clean up the build directory
clean:
	rm -Rf ./build/

## Install the extension
install: clean build
	mkdir -p "$(extensions_dir)$(identifier)/"
	cp -r ./build/$(identifier)/* "$(extensions_dir)$(identifier)/"

## Run tests
test:
	npm run test

## Run eslint
lint:
	npm run lint

## Generate code coverage
coverage:
	npm run test:coverage

## Create an archive for the extension
archive:
ifndef TRAVIS_TAG
	cd ./build/; zip -r FakerDynamicValue.zip "$(identifier)/"
else
	cd ./build/; zip -r FakerDynamicValue-$(TRAVIS_TAG).zip "$(identifier)/"
endif

## Prints this help
help:
	@echo "\nUsage: make ${YELLOW}<target>${RESET}\n\nThe following targets are available:\n";
	@awk -v skip=1 \
		'/^##/ { sub(/^[#[:blank:]]*/, "", $$0); doc_h=$$0; doc=""; skip=0; next } \
		 skip  { next } \
		 /^#/  { doc=doc "\n" substr($$0, 2); next } \
		 /:/   { sub(/:.*/, "", $$0); printf "\033[34m%-30s\033[0m\033[1m%s\033[0m %s\n", $$0, doc_h, doc; skip=1 }' \
		$(MAKEFILE_LIST)
