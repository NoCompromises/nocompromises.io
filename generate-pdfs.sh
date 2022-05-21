#!/bin/bash

cat markdown/account-setup-aws.md | md-to-pdf > dist/resources/account-setup-aws.pdf
cat markdown/account-setup-cloudflare.md | md-to-pdf > dist/resources/account-setup-cloudflare.pdf
cat markdown/account-setup-github.md | md-to-pdf > dist/resources/account-setup-github.pdf
cat markdown/account-setup-google-cloud.md | md-to-pdf > dist/resources/account-setup-google-cloud.pdf
cat markdown/account-setup-heroku.md | md-to-pdf > dist/resources/account-setup-heroku.pdf
cat markdown/account-setup-wpengine.md | md-to-pdf > dist/resources/account-setup-wpengine.pdf
