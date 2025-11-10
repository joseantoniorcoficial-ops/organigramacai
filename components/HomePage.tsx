
import React from 'react';
import { organizationData } from '../data';
import type { ValuePillar } from '../types';

interface HomePageProps {
  onNavigateToOverview: () => void;
}

const ValueCard: React.FC<{ value: ValuePillar; index: number }> = ({ value, index }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1E40AF]">
    <h3 className="text-lg font-bold text-gray-800 mb-2">
      <span className="text-[#1E40AF] mr-2">{index + 1}.</span>{value.title}
    </h3>
    <p className="text-gray-600 italic mb-3">"{value.description}"</p>
    <p className="text-sm text-gray-500">{value.detail}</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigateToOverview }) => {
  return (
    <div className="space-y-12">
      <section className="text-center bg-white p-8 md:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E40AF] mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">{organizationData.mission}</p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#059669] mb-4">Nuestra Visión</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">{organizationData.vision}</p>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">Nuestros 10 Pilares (Valores)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationData.values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <button
          onClick={onNavigateToOverview}
          className="bg-[#EA580C] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Ver Organigrama Interactivo
        </button>
      </section>
    </div>
  );
};

export default HomePage;
