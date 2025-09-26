#!/bin/bash

# Configure Git user for NexoraSIM deployment
git config --global user.name "NexoraSIM Developer"
git config --global user.email "developer@nexorasim.com"

# Verify configuration
echo "Git configuration:"
git config --global user.name
git config --global user.email

# Initialize repository if needed
if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "Initial NexoraSIM deployment"
fi