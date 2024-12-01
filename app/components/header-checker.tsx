'use client';

import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { HeaderInfo, SECURITY_HEADERS } from '@/types/security-headers';
import HeaderResult from './header-result';

export default function HeaderChecker() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState<Record<string, boolean> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedHeader, setExpandedHeader] = useState<string | null>(null);

  const checkHeaders = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/check-headers?url=' + encodeURIComponent(url));
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to check headers');
      setResults(data.headers);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to check headers');
    }
    setLoading(false);
  };

  const getImportanceColor = (importance: HeaderInfo['importance']) => {
    switch (importance) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <Shield className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">HeaderSentry</h1>
        <p className="text-gray-600">Check and understand your website's security headers</p>
      </div>

      <div className="space-y-6">
        <form onSubmit={checkHeaders} className="space-y-4">
          <div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors disabled:bg-blue-300"
          >
            {loading ? 'Checking Headers...' : 'Check Headers'}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        {results && (
          <div className="space-y-4">
            {Object.entries(SECURITY_HEADERS).map(([headerKey, info]) => (
              <HeaderResult 
                key={headerKey} 
                headerKey={headerKey} 
                info={info}
                isPresent={results[headerKey] ?? false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}