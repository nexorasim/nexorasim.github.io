#!/bin/bash

echo "======================================"
echo "NEXORASIM DEPLOYMENT SYSTEM"
echo "======================================"
echo ""

# Function to run command with status
run_command() {
    echo "Running: $1"
    if eval "$2"; then
        echo "SUCCESS: $1"
        echo ""
        return 0
    else
        echo "FAILED: $1"
        echo ""
        return 1
    fi
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "ERROR: package.json not found. Please run from project root."
    exit 1
fi

# Parse command line arguments
OPERATION="${1:-help}"

case "$OPERATION" in
    install)
        echo "Installing dependencies..."
        run_command "Install Dependencies" "npm install"
        ;;
        
    dev)
        echo "Starting development server..."
        run_command "Development Server" "npm run dev"
        ;;
        
    build)
        echo "Building for production..."
        run_command "Production Build" "npm run build"
        ;;
        
    validate)
        echo "Running validation tests..."
        run_command "Error Check" "npm run error:check"
        run_command "System Validation" "npm run validate:all"
        run_command "API Validation" "npm run api:validate"
        ;;
        
    test)
        echo "Running all tests..."
        run_command "Complete Test Suite" "npm run test:all"
        ;;
        
    create)
        echo "Creating profile operations..."
        echo "Profile lifecycle: install > register > download > run > enable"
        echo "See API documentation at /#/developers"
        ;;
        
    download)
        echo "Profile download operation..."
        echo "POST /v2/profiles/{profile_id}/download"
        echo "See API documentation for details"
        ;;
        
    register)
        echo "Profile registration operation..."
        echo "POST /v2/profiles/{profile_id}/register"
        echo "See API documentation for details"
        ;;
        
    enable)
        echo "Profile enable operation..."
        echo "PUT /v2/profiles/{profile_id}/enable"
        echo "See API documentation for details"
        ;;
        
    deploy)
        echo "Deploying to GitHub Pages..."
        run_command "Build Production" "npm run build"
        run_command "Deploy to GitHub" "npm run deploy"
        echo ""
        echo "Deployment complete!"
        echo "Visit: https://nexorasim.github.io"
        ;;
        
    all)
        echo "Running complete deployment pipeline..."
        run_command "Install Dependencies" "npm install"
        run_command "Error Check" "npm run error:check"
        run_command "System Validation" "npm run validate:all"
        run_command "API Validation" "npm run api:validate"
        run_command "Production Build" "npm run build"
        echo ""
        echo "======================================"
        echo "ALL OPERATIONS COMPLETE"
        echo "======================================"
        echo ""
        echo "Ready for deployment!"
        echo "Run: ./deploy.sh deploy"
        ;;
        
    help|*)
        echo "NEXORASIM Deployment Commands"
        echo ""
        echo "Usage: ./deploy.sh [command]"
        echo ""
        echo "Available commands:"
        echo "  install   - Install dependencies"
        echo "  dev       - Start development server"
        echo "  build     - Build for production"
        echo "  validate  - Run all validation tests"
        echo "  test      - Run complete test suite"
        echo "  create    - Profile creation info"
        echo "  download  - Profile download info"
        echo "  register  - Profile registration info"
        echo "  enable    - Profile enable info"
        echo "  deploy    - Deploy to GitHub Pages"
        echo "  all       - Run complete pipeline"
        echo "  help      - Show this help message"
        echo ""
        echo "Quick deployment:"
        echo "  ./deploy.sh all      # Prepare everything"
        echo "  ./deploy.sh deploy   # Deploy to GitHub"
        echo ""
        ;;
esac

exit 0
