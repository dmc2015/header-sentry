'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { HeaderResultType, HeaderInfo } from "@/types/security-headers";

interface HeaderResultProps extends HeaderResultType {
  isPresent: boolean;
  info: HeaderInfo;
}

export default function HeaderResult({ info, isPresent }: HeaderResultProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-grow">
            {isPresent ? (
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
            )}
            <div className="flex-grow">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="font-semibold text-lg text-gray-900">{info.name}</span>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${getImportanceColor(info.importance)}`}>
                  {info.importance.charAt(0).toUpperCase() + info.importance.slice(1)}
                </span>
                {info.situational && (
                  <span className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    Situational
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-700">{info.description}</div>
              
              <div className="mt-3">
                <span className="font-medium text-red-600">Risk: </span>
                <span className="text-gray-700">{info.vulnerability}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 p-2 hover:bg-gray-100 rounded text-gray-600"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        <div className={`mt-4 space-y-4 ${isExpanded ? 'block' : 'hidden'}`}>
          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">When to Implement:</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {info.applicability.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Implementation Guide:</h4>
            <pre className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg overflow-x-auto font-mono">
              {info.remediation}
            </pre>
          </div>

          {!isPresent && (
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-red-700 mb-1">Missing Header Alert</h4>
              <p className="text-sm text-red-600">
                This security header is {info.importance === 'critical' ? 'critically ' : ''}
                important for your website's security. Consider implementing it based on the guide above.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}