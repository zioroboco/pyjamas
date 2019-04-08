#!/bin/bash
set -eo pipefail

test ! -z $INIT_CWD || (echo "❌ Please run me via \`yarn reset\`" && exit 1)

root_dir=$(pwd)

echo "Resetting ${root_dir}"

clean() {
  xargs -I {} -- bash -c "echo ... {} && rm -rf {}"
}

find $root_dir -maxdepth 1 -name "node_modules" | clean
find $root_dir -maxdepth 3 -name "node_modules" | clean
find $root_dir -maxdepth 3 -name "elm-stuff" | clean
yarn
