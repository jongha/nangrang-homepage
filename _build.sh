#!/bin/bash
# set -e

# Build the _site/ contents with Jekyll
jekyll build

# Remove the App Engine config file (see step #6)
# rm _site/app.yaml

#appcfg.py --oauth2 --noauth_local_webserver -A nangrang-1366 -V v1 update ./_site
/Applications/GoogleAppEngineLauncher.app/Contents/Resources/GoogleAppEngine-default.bundle/Contents/Resources/google_appengine/appcfg.py --oauth2 --noauth_local_webserver -A nangrang-1366 -V v1 update ./_site