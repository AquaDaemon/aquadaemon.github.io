#!/bin/bash
set -e

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT

curl -fsSL \
  https://raw.githubusercontent.com/aqualinkd/AquachemD/main/release/remote-install.sh \
  -o "$tmp"

bash "$tmp" "$@"