
import React, { useState } from 'react';
import type { Position } from '../types';
import { Icon } from './Icons';

interface PositionCardProps {
  position: Position;
  areaColor: string;
  isExpandedDefault?: boolean;
}

const DetailItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div>
    <h4 className="font-semibold text-gray-600">{label}</h4>
    <div className="pl-2 mt-1 text-gray-700">{children}</div>
  </div>
);

const PositionCard: React.FC<PositionCardProps> = ({ position, areaColor, isExpandedDefault = false }) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedDefault);

  const statusColors = {
    'Activo': 'bg-green-100 text-green-800',
    'Proyectado': 'bg-blue-100 text-blue-800',
    'Vacante': 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 border-l-4" style={{ borderColor: areaColor }}>
      <div className="p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-start">
            <div className="flex-1">
                 <div className="flex items-center space-x-3">
                    <div style={{ color: areaColor }}><Icon name={position.icon} className="w-8 h-8"/></div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">{position.title}</h3>
                        <p className="text-sm text-gray-500 font-mono">{position.code}</p>
                    </div>
                 </div>
                 {position.incumbents && (
                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                        <Icon name="UserCircle" className="w-5 h-5"/>
                        <span>{position.incumbents.join(', ')}</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-end space-y-2 ml-4">
                 <div className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <Icon name="Users" className="w-4 h-4" />
                    <span>{position.quantity}</span>
                </div>
                {position.status && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[position.status]}`}>
                        {position.status}
                    </span>
                )}
            </div>
        </div>
      </div>
      
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 pb-4 pt-2 border-t border-gray-200 space-y-4">
          <DetailItem label="Propósito Principal">
            <p className="text-sm">{position.purpose}</p>
          </DetailItem>
          <DetailItem label="Funciones Esenciales">
            <ul className="list-disc list-inside text-sm space-y-1">
              {position.functions.map((func, i) => <li key={i}>{func}</li>)}
            </ul>
          </DetailItem>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <DetailItem label="Reporta a">
                <p className="text-sm">{position.reportsTo}</p>
             </DetailItem>
             <DetailItem label="Personal a su cargo">
                <p className="text-sm">{position.subordinates.length > 0 ? position.subordinates.join(', ') : 'Ninguno'}</p>
             </DetailItem>
           </div>
          <DetailItem label="Requisitos Principales">
            <ul className="list-disc list-inside text-sm space-y-1">
              {position.requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>
          </DetailItem>
          <DetailItem label="Competencias Clave">
             <div className="flex flex-wrap gap-2">
                {position.competencies.map((comp, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{comp}</span>
                ))}
            </div>
          </DetailItem>
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
