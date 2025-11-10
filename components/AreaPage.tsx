
import React, { useMemo } from 'react';
import type { Area, Position } from '../types';
import PositionCard from './PositionCard';
import Breadcrumbs from './Breadcrumbs';

interface AreaPageProps {
  area: Area;
  searchQuery: string;
}

const AreaPage: React.FC<AreaPageProps> = ({ area, searchQuery }) => {
  const positionMap = useMemo(() => 
    new Map(area.positions.map(p => [p.id, p])),
    [area.positions]
  );
  
  const filteredPositions = useMemo(() => {
      if (!searchQuery) return area.positions;
      const lowercasedQuery = searchQuery.toLowerCase();
      return area.positions.filter(p => 
          p.title.toLowerCase().includes(lowercasedQuery) ||
          p.code.toLowerCase().includes(lowercasedQuery) ||
          (p.incumbents && p.incumbents.some(i => i.toLowerCase().includes(lowercasedQuery)))
      );
  }, [searchQuery, area.positions]);


  const renderPositionTree = (positionId: string, level: number = 0) => {
    const position = positionMap.get(positionId);
    if (!position) return null;

    // Hide position if it doesn't match search query
    if (searchQuery && !filteredPositions.some(p => p.id === position.id)) {
        return null;
    }
    
    // In search mode, don't render subordinates if parent doesn't match
    const subordinates = searchQuery ? [] : position.subordinates.map(subId => renderPositionTree(subId, level + 1)).filter(Boolean);

    return (
      <div key={position.id} className="relative">
        <PositionCard position={position} areaColor={area.color} />
        {subordinates.length > 0 && (
          <div className="pl-6 md:pl-12 mt-4 border-l-2" style={{ borderColor: area.color }}>
            {subordinates}
          </div>
        )}
      </div>
    );
  };
  
  const renderFilteredList = () => (
    <div className="space-y-4">
        {filteredPositions.map(position => (
            <PositionCard key={position.id} position={position} areaColor={area.color} isExpandedDefault={true} />
        ))}
    </div>
  );


  return (
    <div className="space-y-6">
        <Breadcrumbs crumbs={['Inicio', 'Panorama General', area.name]} />
      <div className="text-left pb-6 border-b-2" style={{ borderColor: area.color }}>
        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: area.color }}>
          {area.name}
        </h2>
        {area.coordinator && <p className="text-lg text-gray-600 mt-2">Coordinador: {area.coordinator}</p>}
      </div>

      <div className="space-y-4">
         {searchQuery 
          ? renderFilteredList()
          : renderPositionTree(area.rootPositionId)
        }
      </div>
    </div>
  );
};

export default AreaPage;
