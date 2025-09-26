#!/bin/bash
echo "Starting NexoraSIM Developer Portal..."

# Check prerequisites
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Please install Node.js 18+"
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    echo "Python3 not found. Please install Python 3.9+"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install
cd backend && pip3 install -r requirements.txt && cd ..

# Start backend server
echo "Starting backend server..."
cd backend && python3 app/app.py &

# Start frontend development server
echo "Starting frontend server..."
npm run dev &

echo "NexoraSIM Developer Portal started successfully!"
echo "Frontend: http://localhost:8080"
echo "Backend API: http://localhost:5000"