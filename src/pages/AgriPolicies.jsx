import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp, FaFilter } from 'react-icons/fa';
import policies from '../data/agriculturalPolicies';

export default function AgriPolicies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPolicy, setExpandedPolicy] = useState(null);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredPolicies = policies.filter(policy => {
    const matchesSearch = 
      policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (policy.state && policy.state.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === 'All' || policy.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || policy.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Get unique states for filtering
  const states = [...new Set(policies.filter(p => p.state).map(p => p.state))].sort();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Indian Agricultural Policies</h1>

      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by policy name, short name, state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType('All')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'All'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Types
          </button>
          <button
            onClick={() => setSelectedType('National')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'National'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            National
          </button>
          <button
            onClick={() => setSelectedType('State')}
            className={`px-4 py-2 rounded-lg ${
              selectedType === 'State'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            State
          </button>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedStatus('All')}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Status
          </button>
          <button
            onClick={() => setSelectedStatus('Active')}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === 'Active'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setSelectedStatus('Under Review')}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === 'Under Review'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Under Review
          </button>
        </div>
      </div>

      {/* Policies List */}
      <div className="space-y-6">
        {filteredPolicies.map(policy => (
          <div
            key={policy.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => setExpandedPolicy(expandedPolicy === policy.id ? null : policy.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-xl font-semibold">{policy.name}</h2>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        policy.type === 'National'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {policy.type === 'National' ? 'National' : policy.state}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        policy.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {policy.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">{policy.description}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Implemented: {new Date(policy.implementationDate).toLocaleDateString()}
                  </p>
                </div>
                {expandedPolicy === policy.id ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>
            </div>

            {expandedPolicy === policy.id && (
              <div className="px-6 pb-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Details</h3>
                  <p className="text-gray-600">{policy.details}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {policy.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Drawbacks</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {policy.drawbacks.map((drawback, index) => (
                      <li key={index} className="text-gray-600">{drawback}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Eligibility</h3>
                  <p className="text-gray-600">{policy.eligibility}</p>
                </div>

                <div>
                  <a
                    href={policy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-green-500 hover:text-green-600 font-medium"
                  >
                    Visit Official Website →
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
