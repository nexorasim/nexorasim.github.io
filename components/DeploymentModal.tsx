
import React, { useState, useEffect, useRef } from 'react';

interface DeploymentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DEPLOYMENT_SCRIPT = `#!/bin/bash
# === NexoraSIM Google Cloud Deployment Script ===

# Step 1: Set project
echo "Setting project to nexorasims..."
gcloud config set project nexorasims

# Step 2: Enable required APIs
echo "Enabling required APIs..."
gcloud services enable run.googleapis.com \\
                        cloudbuild.googleapis.com \\
                        firestore.googleapis.com \\
                        storage.googleapis.com

# Step 3: Clone GitHub repository
echo "Cloning GitHub repository..."
git clone https://github.com/NexoraSIM/NexoraSIM.github.io.git
cd NexoraSIM.github.io

# Step 4: Install dependencies
echo "Installing dependencies..."
npm install

# Step 5: Build the project
echo "Building project..."
npm run build

# Step 6: Build Docker image
echo "Building Docker image..."
docker build -t gcr.io/nexorasims/nexorasim:latest .

# Step 7: Push Docker image
echo "Pushing Docker image to Google Container Registry..."
docker push gcr.io/nexorasims/nexorasim:latest

# Step 8: Deploy to Cloud Run
echo "Deploying to Google Cloud Run..."
gcloud run deploy nexorasim-app \\
    --image gcr.io/nexorasims/nexorasim:latest \\
    --platform managed \\
    --region asia-southeast1 \\
    --allow-unauthenticated

echo "Deployment complete! Visit your Cloud Run URL."
`;

const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
    const [output, setOutput] = useState<string[]>([]);
    const [isCopying, setIsCopying] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);
    
    const scriptLines = DEPLOYMENT_SCRIPT.split('\n');

    useEffect(() => {
        if (isOpen) {
            setOutput([]);
            let i = 0;
            const interval = setInterval(() => {
                if (i < scriptLines.length) {
                    setOutput(prev => [...prev, scriptLines[i]]);
                    i++;
                } else {
                    clearInterval(interval);
                    setOutput(prev => [...prev, '<span class="text-green-400">Deployment successful! Your app is now live on Google Cloud Run.</span>']);
                }
            }, 100);

            return () => clearInterval(interval);
        }
    }, [isOpen]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [output]);

    const handleCopy = () => {
        navigator.clipboard.writeText(DEPLOYMENT_SCRIPT);
        setIsCopying(true);
        setTimeout(() => setIsCopying(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1B1B1B] border border-[#8D77CC] rounded-lg p-6 max-w-4xl w-full max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Google Cloud Deployment</h2>
                    <button onClick={onClose} className="text-2xl text-white">&times;</button>
                </div>
                <div ref={terminalRef} className="bg-black text-green-400 p-4 rounded-md h-96 font-mono overflow-y-auto text-sm flex-grow">
                    {output.map((line, index) => (
                        <div key={index} dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />
                    ))}
                </div>
                <div className="mt-4">
                    <button 
                        onClick={handleCopy}
                        className="bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
                    >
                        {isCopying ? 'Copied!' : 'Copy Script'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeploymentModal;