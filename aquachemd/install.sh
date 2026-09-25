#!/bin/bash
set -e

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT

curl -fsSL \
  https://raw.githubusercontent.com/AquaDaemon/AquachemD/master/release/remote_install.sh \
  -o "$tmp"

bash "$tmp" "$@"
