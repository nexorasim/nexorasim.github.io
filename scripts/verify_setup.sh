#!/bin/bash
# Verification script for Nexora AI Agent Mode deployment

set -e

echo "========================================="
echo "Nexora AI Agent Mode - Setup Verification"
echo "========================================="
echo ""

# Check Python version
echo "Checking Python version..."
python_version=$(python --version 2>&1 | awk '{print $2}')
echo "Python version: $python_version"

# Check Node.js version
echo ""
echo "Checking Node.js version..."
node_version=$(node --version 2>&1)
echo "Node.js version: $node_version"

# Check directory structure
echo ""
echo "Verifying directory structure..."
required_dirs=("agent" "gui" "web" "docs" ".github/workflows")
for dir in "${required_dirs[@]}"; do
    if [ -d "/app/$dir" ]; then
        echo "[OK] /$dir exists"
    else
        echo "[MISSING] /$dir missing"
        exit 1
    fi
done

# Check key files
echo ""
echo "Verifying key files..."
required_files=(
    "agent/nexora_agent/__init__.py"
    "agent/nexora_agent/cli.py"
    "agent/requirements.txt"
    "gui/main.py"
    "gui/nexora_agent.spec"
    "web/package.json"
    "web/next.config.js"
    "docs/architecture.md"
    "docs/deployment.md"
    ".github/workflows/deploy-web.yml"
    ".github/workflows/build-agent.yml"
    "README.md"
    "DEPLOYMENT_BLUEPRINT.md"
)

for file in "${required_files[@]}"; do
    if [ -f "/app/$file" ]; then
        echo "[OK] $file exists"
    else
        echo "[MISSING] $file missing"
        exit 1
    fi
done

# Check agent installation
echo ""
echo "Checking agent installation..."
cd /app/agent
if [ -f "requirements.txt" ]; then
    echo "[OK] Agent requirements.txt found"
else
    echo "[MISSING] Agent requirements.txt missing"
    exit 1
fi

# Check web dependencies
echo ""
echo "Checking web installation..."
cd /app/web
if [ -f "package.json" ]; then
    echo "[OK] Web package.json found"
    if [ -d "node_modules" ]; then
        echo "[OK] Node modules installed"
    else
        echo "[WARNING] Node modules not installed (run: npm install)"
    fi
else
    echo "[MISSING] Web package.json missing"
    exit 1
fi

# Check documentation
echo ""
echo "Verifying documentation..."
doc_files=("architecture.md" "deployment.md" "agent-mode.md" "providers.md" "changelog.md")
for doc in "${doc_files[@]}"; do
    if [ -f "/app/docs/$doc" ]; then
        echo "[OK] docs/$doc exists"
    else
        echo "[MISSING] docs/$doc missing"
        exit 1
    fi
done

# Check GitHub workflows
echo ""
echo "Verifying GitHub workflows..."
workflow_files=("deploy-web.yml" "build-agent.yml" "ci.yml")
for workflow in "${workflow_files[@]}"; do
    if [ -f "/app/.github/workflows/$workflow" ]; then
        echo "[OK] .github/workflows/$workflow exists"
    else
        echo "[MISSING] .github/workflows/$workflow missing"
        exit 1
    fi
done

# Summary
echo ""
echo "========================================="
echo "Verification Complete!"
echo "========================================="
echo ""
echo "All required components are in place."
echo ""
echo "Next steps:"
echo "1. Configure API keys in agent/.env"
echo "2. Test agent: cd agent && python -m nexora_agent.cli status"
echo "3. Run web dev: cd web && npm run dev"
echo "4. Read documentation in docs/"
echo ""
echo "For deployment, see DEPLOYMENT_BLUEPRINT.md"
echo ""
