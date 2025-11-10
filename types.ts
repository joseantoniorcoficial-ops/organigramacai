
export type View = 'home' | 'overview' | 'area';

export interface Position {
  id: string;
  code: string;
  title: string;
  incumbents?: string[];
  quantity: string; 
  status?: 'Activo' | 'Proyectado' | 'Vacante';
  icon: string;
  purpose: string;
  functions: string[];
  reportsTo: string;
  subordinates: string[];
  requirements: string[];
  competencies: string[];
}

export interface Area {
  id: string;
  name: string;
  color: string;
  icon: string;
  coordinator?: string;
  personnelCount: string;
  rootPositionId: string;
  positions: Position[];
}

export interface ValuePillar {
    title: string;
    description: string;
    detail: string;
}

export interface OrganizationData {
  companyName: string;
  mission: string;
  vision: string;
  values: ValuePillar[];
  areas: Area[];
}
