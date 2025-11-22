// src/pages/LogsViewer.tsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Search, Download, Share2, AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { BrutalButton } from '@/components/ui/brutal-button';
import { Badge } from '@/components/ui/badge';

const LogsViewer = () => {
    const navigate = useNavigate();
    const { projectId, deployId } = useParams();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Layout showSidebar={false}>
            <div className="h-screen flex flex-col bg-black text-[#00FF00] font-mono">
                {/* Header */}
                <div className="bg-gray-900 border-b-4 border-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(`/app/projects/${projectId}`)}
                            className="text-white hover:text-[#FFD700] flex items-center gap-2 font-bold"
                        >
                            <ArrowLeft size={20} />
                            <span className="hidden sm:inline">Back to Project</span>
                        </button>
                        <div className="border-l-2 border-gray-700 pl-4">
                            <h1 className="text-white font-bold text-lg sm:text-xl">Deploy #{deployId}</h1>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <Badge status="failed">✗ Failed</Badge>
                                <span className="text-gray-400 text-xs">main → production</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        <button className="border border-gray-600 px-3 py-2 text-xs hover:bg-gray-800 text-white flex items-center gap-2">
                            <Download size={14} />
                            <span className="hidden sm:inline">Download</span>
                        </button>
                        <button className="border border-gray-600 px-3 py-2 text-xs hover:bg-gray-800 text-white flex items-center gap-2">
                            <Share2 size={14} />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-gray-900 border-b border-gray-800 p-4">
                    <div className="flex items-center gap-2 bg-black border-2 border-gray-700 px-3 py-2">
                        <Search size={16} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search in logs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-600 text-sm"
                        />
                    </div>
                </div>

                {/* Logs Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-1 text-sm">
                    <div className="opacity-50">1 [14:23:01] Starting deployment...</div>
                    <div className="opacity-50">2 [14:23:02] Cloning repository from github.com/user/my-api</div>
                    <div>3 [14:23:14] ✓ Repository cloned (12s)</div>
                    <div>4 [14:23:14] Installing dependencies...</div>
                    <div className="pl-4">5 [14:23:15] → pip install -r requirements.txt</div>
                    <div>6 [14:24:49] ✓ Dependencies installed (1m 34s)</div>
                    <div>7 [14:24:50] Running tests...</div>
                    <div className="text-white bg-red-900/30 border-l-4 border-red-500 pl-4 py-1 my-1">
                        8 [14:25:40] ✗ FAILED test_auth.py::test_login
                        <br />
                        9 [14:25:40] AssertionError: Expected 200, got 401
                    </div>
                    <div className="text-red-500 font-bold">10 [14:25:40] ✗ Tests failed</div>
                    <div className="animate-pulse mt-2">_</div>
                </div>

                {/* Error Summary */}
                <div className="m-4 p-4 bg-gray-900 border-4 border-red-500">
                    <h4 className="text-red-500 font-bold mb-2 flex items-center gap-2">
                        <AlertTriangle size={16} />
                        Build Failed
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                        Tests failed on line 8. Expected 200, got 401.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <BrutalButton
                            size="sm"
                            variant="destructive"
                            className="text-xs"
                        >
                            Debug with AI
                        </BrutalButton>
                        <BrutalButton
                            size="sm"
                            variant="secondary"
                            className="text-xs"
                        >
                            View Source
                        </BrutalButton>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LogsViewer;