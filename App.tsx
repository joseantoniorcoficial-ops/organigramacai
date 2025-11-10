
import React, { useState, useMemo } from 'react';
import HomePage from './components/HomePage';
import OverviewPage from './components/OverviewPage';
import AreaPage from './components/AreaPage';
import { organizationData } from './data';
import type { View, Area } from './types';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToHome = () => {
    setView('home');
    setSelectedAreaId(null);
    setSearchQuery('');
  };

  const navigateToOverview = () => {
    setView('overview');
    setSelectedAreaId(null);
    setSearchQuery('');
  };

  const navigateToArea = (areaId: string) => {
    setSelectedAreaId(areaId);
    setView('area');
    setSearchQuery('');
  };
  
  const selectedArea = useMemo(() => {
    if (view === 'area' && selectedAreaId) {
      return organizationData.areas.find(a => a.id === selectedAreaId) || null;
    }
    return null;
  }, [view, selectedAreaId]);

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <HomePage onNavigateToOverview={navigateToOverview} />;
      case 'overview':
        return <OverviewPage onSelectArea={navigateToArea} />;
      case 'area':
        if (selectedArea) {
          return <AreaPage area={selectedArea} searchQuery={searchQuery} />;
        }
        return <div className="text-center p-8">Area not found.</div>;
      default:
        return <HomePage onNavigateToOverview={navigateToOverview} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={navigateToHome}>
             <svg className="w-10 h-10 text-[#1E40AF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h1 className="text-xl md:text-2xl font-bold text-gray-700">{organizationData.companyName}</h1>
          </div>
          {view !== 'home' && (
            <div className="flex items-center space-x-4">
              {view === 'area' && <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
              <button onClick={navigateToHome} className="text-sm font-medium text-gray-600 hover:text-[#1E40AF] transition-colors">Inicio</button>
              {view === 'area' && <button onClick={navigateToOverview} className="text-sm font-medium text-gray-600 hover:text-[#1E40AF] transition-colors">Panorama General</button>}
            </div>
          )}
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
