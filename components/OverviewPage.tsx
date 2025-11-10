
import React from 'react';
import { organizationData } from '../data';
import type { Area } from '../types';
import { Icon } from './Icons';

interface OverviewPageProps {
  onSelectArea: (areaId: string) => void;
}

const AreaCard: React.FC<{ area: Area; onSelect: () => void }> = ({ area, onSelect }) => (
  <div
    onClick={onSelect}
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border-b-8"
    style={{ borderBottomColor: area.color }}
  >
    <div className="mb-4" style={{ color: area.color }}>
        <Icon name={area.icon} className="w-16 h-16" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.name}</h3>
    <p className="text-gray-500 mb-4">{area.coordinator}</p>
    <div className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
      <Icon name="Users" className="w-4 h-4" />
      <span>{area.personnelCount} personas</span>
    </div>
  </div>
);

const OverviewPage: React.FC<OverviewPageProps> = ({ onSelectArea }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Panorama General</h2>
        <p className="text-lg text-gray-600 mt-2">Estructura principal de CAI. Haz clic en un área para ver los detalles.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {organizationData.areas.map((area) => (
          <AreaCard key={area.id} area={area} onSelect={() => onSelectArea(area.id)} />
        ))}
      </div>
    </div>
  );
};

export default OverviewPage;
