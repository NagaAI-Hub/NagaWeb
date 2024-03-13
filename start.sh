#!/bin/bash

pnpm install
pnpm run build
pnpm run start --port 10000
