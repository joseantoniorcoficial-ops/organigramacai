
import React from 'react';
import { Icon } from './Icons';

interface BreadcrumbsProps {
  crumbs: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {crumbs.map((crumb, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <Icon name="ChevronRight" className="w-4 h-4 mx-1" />}
            <span className={index === crumbs.length - 1 ? "font-semibold text-gray-700" : ""}>
              {crumb}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
