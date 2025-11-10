
import type { OrganizationData } from './types';

export const organizationData: OrganizationData = {
  companyName: "Comercializadora Avícola del Istmo (CAI)",
  mission: "Proporcionar soluciones alimentarias de calidad superior a las familias y negocios del Istmo de Tehuantepec, mediante la comercialización de productos avícolas confiables, accesibles y sostenibles, que fortalezcan la economía local y mejoren la calidad de vida de nuestra comunidad.",
  vision: "Ser la empresa avícola más confiable y preferida del Istmo de Tehuantepec para 2030, reconocida como sinónimo de calidad, honradez y compromiso social, siendo un motor de desarrollo económico regional y un ejemplo de negocio familiar sostenible que deja un legado positivo para las futuras generaciones.",
  values: [
    { title: "Honradez y Palabra Dada", description: '"En el Istmo, la palabra empeñada vale más que cualquier contrato"', detail: "Cumplir siempre lo que prometemos." },
    { title: "Respeto a la Tierra y a la Vida", description: '"Respetamos de donde viene nuestro sustento"', detail: "Operar con responsabilidad ambiental y buen trato a los animales." },
    { title: "Familia y Comunidad", description: '"Somos una familia que sirve a su comunidad"', detail: "Valorar los lazos familiares y comunitarios del Istmo." },
    { title: "Calidad e Innovación", description: '"Siempre podemos hacerlo mejor"', detail: "Buscar constantemente mejorar productos, procesos y servicios." },
    { title: "Desarrollo Humano", description: '"Creemos en el potencial de cada persona"', detail: "Promover el crecimiento profesional y personal de los colaboradores." },
    { title: "Empatía y Solidaridad", description: '"Nos ponemos en los zapatos del otro"', detail: "Ser sensibles a las necesidades de la comunidad y colaboradores." },
    { title: "Lealtad y Compromiso", description: '"Relaciones para toda la vida"', detail: "Cultivar relaciones duraderas basadas en confianza mutua." },
    { title: "Pasión por lo que Hacemos", description: '"Amamos nuestro trabajo"', detail: "Hacer el trabajo con entusiasmo, orgullo y dedicación." },
    { title: "Trabajo en Equipo", description: '"Juntos llegamos más lejos"', detail: "Colaborar activamente para alcanzar objetivos comunes." },
    { title: "Sustentabilidad", description: '"Pensamos en el mañana"', detail: "Integrar la sostenibilidad en todas las operaciones." },
  ],
  areas: [
    {
      id: 'dg',
      name: 'Dirección General',
      color: '#1E40AF',
      icon: 'Crown',
      coordinator: 'Antonio Ruiz Palacios, Gloria de la Cruz Santiago',
      personnelCount: '2',
      rootPositionId: 'dg-001',
      positions: [
        {
          id: 'dg-001', code: 'DG-001', title: 'Director General', incumbents: ['Antonio Ruiz Palacios', 'Gloria de la Cruz Santiago'], quantity: '2', icon: 'Crown', status: 'Activo',
          purpose: 'Dirigir estratégicamente CAI, estableciendo la visión de largo plazo, tomando decisiones de alto nivel, representando legalmente a la empresa y garantizando que todas las operaciones se alineen con la misión, visión y valores organizacionales.',
          functions: ['Definir y comunicar la visión, misión y valores de CAI', 'Establecer objetivos estratégicos anuales y plurianuales', 'Representar legalmente a CAI ante autoridades, proveedores y terceros', 'Mantener y fortalecer la relación comercial estratégica con Grupo Bachoco', 'Supervisar el desempeño de todas las áreas funcionales', 'Aprobar presupuestos, inversiones y contrataciones clave', 'Ser guardianes y ejemplo vivo de los valores de CAI'],
          reportsTo: 'Propietarios / Consejo Familiar', subordinates: ['adm-001', 'vta-001', 'grj-001', 'rh-001'],
          requirements: ['Deseable: Licenciatura en Administración, Contaduría o afín (se valora experiencia práctica)', 'Mínimo 10 años de experiencia en dirección/gerencia', 'Conocimiento sólido del sector avícola y mercado del Istmo'],
          competencies: ['Liderazgo visionario', 'Integridad absoluta', 'Orientación a resultados', 'Habilidades de negociación', 'Compromiso con la comunidad']
        }
      ]
    },
    {
      id: 'adm',
      name: 'Área Administrativa y Contable',
      color: '#059669',
      icon: 'Briefcase',
      coordinator: 'Griselda Ruiz de la Cruz',
      personnelCount: '3-4',
      rootPositionId: 'adm-001',
      positions: [
        {
          id: 'adm-001', code: 'ADM-001', title: 'Coordinador(a) Administrativo y Contable', incumbents: ['Griselda Ruiz de la Cruz'], quantity: '1', icon: 'Calculator', status: 'Activo',
          purpose: 'Gestionar eficientemente todos los recursos financieros, contables y administrativos de CAI, garantizando el control interno, el cumplimiento de obligaciones fiscales y laborales, y la generación de información oportuna para la toma de decisiones.',
          functions: ['Llevar la contabilidad general y elaborar estados financieros mensuales', 'Calcular y presentar declaraciones fiscales (ISR, IVA, retenciones)', 'Administrar el flujo de efectivo y autorizar pagos', 'Gestionar la cobranza a clientes con crédito', 'Elaborar la nómina semanal de todos los colaboradores', 'Gestionar altas, bajas y obligaciones ante IMSS e Infonavit', 'Implementar controles internos y elaborar reportes para Dirección'],
          reportsTo: 'DG-001', subordinates: ['adm-002', 'adm-003'],
          requirements: ['Requerido: Licenciatura en Contaduría Pública o Finanzas', 'Mínimo 3 años de experiencia en puestos similares', 'Dominio de contabilidad general y normatividad fiscal mexicana'],
          competencies: ['Integridad y ética', 'Atención al detalle', 'Organización', 'Proactividad', 'Liderazgo de equipo']
        },
        {
          id: 'adm-002', code: 'ADM-002', title: 'Auxiliar Administrativo', quantity: '2', icon: 'Clipboard', status: 'Proyectado',
          purpose: 'Apoyar al Coordinador Administrativo en tareas administrativas, contables y operativas del área, realizando registro de información, elaboración de documentos, archivo y control de documentación.',
          functions: ['Registrar operaciones contables básicas y capturar facturas', 'Elaborar pólizas de egresos e ingresos', 'Atender llamadas, correos y correspondencia del área', 'Realizar trámites externos (bancos, SAT, IMSS, proveedores)', 'Capturar información para elaboración de nómina', 'Llevar control de asistencia del personal', 'Controlar inventario de papelería y materiales'],
          reportsTo: 'ADM-001', subordinates: [],
          requirements: ['Requerido: Bachillerato concluido o carrera técnica en Contabilidad', 'Deseable: 1 año de experiencia en puestos administrativos', 'Conocimientos básicos de contabilidad y manejo de Office'],
          competencies: ['Responsabilidad', 'Atención al detalle', 'Organización', 'Discreción', 'Actitud de servicio']
        },
        {
          id: 'adm-003', code: 'ADM-003', title: 'Contador(a) Adicional', quantity: '1', icon: 'FileText', status: 'Vacante',
          purpose: 'Reforzar el área contable apoyando en la contabilidad general, análisis financieros, cumplimiento fiscal y proyectos especiales del área administrativa.',
          functions: ['Apoyar en registro contable y elaboración de estados financieros', 'Realizar análisis financieros y de rentabilidad', 'Apoyar en preparación de declaraciones fiscales', 'Elaborar reportes especiales para Dirección', 'Apoyar en auditorías internas y externas', 'Desarrollar e implementar mejoras en procesos contables'],
          reportsTo: 'ADM-001', subordinates: [],
          requirements: ['Requerido: Licenciatura en Contaduría Pública', 'Deseable: 2-3 años de experiencia en contabilidad empresarial', 'Conocimiento de normatividad fiscal y sistemas contables'],
          competencies: ['Conocimientos técnicos contables sólidos', 'Capacidad analítica', 'Proactividad', 'Trabajo en equipo', 'Orientación al cumplimiento']
        }
      ]
    },
    {
      id: 'vta',
      name: 'Área Comercial y Ventas',
      color: '#EA580C',
      icon: 'TrendingUp',
      coordinator: 'Griselda Ruiz de la Cruz (funcional)',
      personnelCount: '10-15',
      rootPositionId: 'vta-001',
      positions: [
        {
          id: 'vta-001', code: 'VTA-001', title: 'Coordinador(a) Comercial y Ventas', incumbents: ['Griselda Ruiz de la Cruz'], quantity: '1', icon: 'Target', status: 'Activo',
          purpose: 'Maximizar las ventas, la rentabilidad y la satisfacción del cliente mediante la gestión eficiente de las operaciones comerciales (compra a proveedor, ventas en ruta, atención de pedidos), coordinando al equipo de ventas y garantizando el cumplimiento de objetivos.',
          functions: ['Proyectar demanda y realizar pedidos a Grupo Bachoco', 'Planificar rutas comerciales matutinas y asignar recursos', 'Supervisar la ejecución de ventas en ambos turnos', 'Recibir y planificar logística de pedidos vespertinos', 'Gestionar cartera de clientes y créditos otorgados', 'Controlar inventarios y registrar mermas/mortalidad', 'Supervisar y motivar al equipo de ventas'],
          reportsTo: 'DG-001', subordinates: ['vta-002', 'vta-003', 'vta-004'],
          requirements: ['Deseable: Licenciatura en Administración o Mercadotecnia', 'Mínimo 3 años en gestión comercial o ventas', 'Experiencia en sector avícola o productos perecederos (deseable)'],
          competencies: ['Orientación a resultados', 'Liderazgo de equipo', 'Orientación al cliente', 'Capacidad de negociación', 'Resolución de problemas']
        },
        {
          id: 'vta-002', code: 'VTA-002', title: 'Vendedor Avícola - Turno Matutino', quantity: '4-6', icon: 'Sunrise', status: 'Activo',
          purpose: 'Comercializar pollos vivos en ruta matutina preestablecida, visitando clientes recurrentes y potenciales, garantizando servicio de calidad y construyendo relaciones de largo plazo.',
          functions: ['Presentarse puntualmente en granja y cargar producto asignado', 'Seguir ruta preestablecida visitando clientes en orden', 'Ofrecer activamente el producto y negociar ventas', 'Cobrar en efectivo y proporcionar comprobantes', 'Registrar cada operación (cliente, cantidad, precio)', 'Identificar oportunidades de venta adicional', 'Entregar efectivo y reportar ventas al final del turno'],
          reportsTo: 'VTA-001', subordinates: ['vta-004'],
          requirements: ['Deseable: Secundaria o bachillerato', 'Deseable: 1 año de experiencia en ventas', 'Licencia de conducir vigente tipo A o B'],
          competencies: ['Orientación al cliente', 'Honradez (manejo de dinero y producto)', 'Comunicación', 'Proactividad', 'Resiliencia']
        },
        {
          id: 'vta-003', code: 'VTA-003', title: 'Repartidor Avícola - Turno Vespertino', quantity: '2-3', icon: 'Truck', status: 'Activo',
          purpose: 'Entregar pedidos de pollos vivos previamente solicitados en turno vespertino, garantizando entregas puntuales, cantidades exactas y servicio de calidad.',
          functions: ['Revisar listado de pedidos del día', 'Cargar producto verificando cantidades exactas por pedido', 'Planificar ruta óptima de entregas para cumplir horarios', 'Realizar entregas en horarios y lugares acordados', 'Cobrar monto acordado y confirmar satisfacción del cliente', 'Mantener comunicación con Coordinación sobre avances', 'Entregar efectivo y reportar entregas realizadas'],
          reportsTo: 'VTA-001', subordinates: ['vta-004'],
          requirements: ['Deseable: Secundaria o bachillerato', 'Deseable: 1 año en reparto o distribución', 'Licencia de conducir vigente tipo A o B'],
          competencies: ['Puntualidad', 'Honradez', 'Orientación al servicio', 'Organización', 'Confiabilidad']
        },
        {
          id: 'vta-004', code: 'VTA-004', title: 'Auxiliar de Ventas', quantity: '3-5', icon: 'Users', status: 'Activo',
          purpose: 'Apoyar al vendedor o repartidor en actividades de venta y distribución, facilitando la carga y descarga de producto, manejo de jaulas y tareas operativas de la ruta.',
          functions: ['Apoyar en carga de producto al inicio de jornada', 'Acompañar al vendedor/repartidor durante la ruta', 'Bajar y cargar jaulas con producto en cada parada', 'Manejar con cuidado las aves para minimizar estrés', 'Apoyar en conteo de aves entregadas', 'Mantener orden y limpieza en el vehículo', 'Limpiar jaulas y vehículo al finalizar la jornada'],
          reportsTo: 'VTA-002, VTA-003', subordinates: [],
          requirements: ['Deseable: Secundaria concluida', 'No se requiere experiencia previa', 'Capacidad de realizar esfuerzo físico'],
          competencies: ['Actitud de servicio', 'Responsabilidad', 'Trabajo en equipo', 'Honradez', 'Buena actitud']
        }
      ]
    },
     {
      id: 'ope',
      name: 'Área Operativa y Logística',
      color: '#4B5563',
      icon: 'Settings',
      personnelCount: 'TBD',
      rootPositionId: 'ope-001',
      positions: [
        {
          id: 'ope-001', code: 'OPE-001', title: 'Coordinador Operativo y Logística', quantity: '1', icon: 'Clipboard', status: 'Proyectado',
          purpose: 'Planificar, dirigir y coordinar las operaciones logísticas para asegurar la eficiencia y efectividad de la cadena de suministro.',
          functions: ['Gestionar inventario', 'Coordinar transporte y distribución', 'Optimizar rutas', 'Supervisar al personal de logística', 'Asegurar el cumplimiento de normativas'],
          reportsTo: 'DG-001', subordinates: [],
          requirements: ['Experiencia en logística', 'Conocimiento de la industria avícola'],
          competencies: ['Planificación', 'Organización', 'Liderazgo']
        }
      ]
    },
    {
      id: 'grj',
      name: 'Área de Granja',
      color: '#10B981',
      icon: 'Feather',
      coordinator: 'Benjamín Luis Juárez Fabián',
      personnelCount: '3-4',
      rootPositionId: 'grj-001',
      positions: [
        {
          id: 'grj-001', code: 'GRJ-001', title: 'Coordinador(a) de Granja', incumbents: ['Benjamín Luis Juárez Fabián'], quantity: '1', icon: 'Shield', status: 'Activo',
          purpose: 'Recibir, resguardar y mantener en óptimas condiciones el inventario de pollos vivos, garantizando su bienestar, minimizando mortalidad y mermas, y coordinando la entrega de producto a las rutas de venta.',
          functions: ['Recibir embarques de pollos de Grupo Bachoco y verificar cantidad/calidad', 'Distribuir aves en corrales y proporcionar alimentación/agua constantemente', 'Monitorear comportamiento y estado de salud de las aves', 'Llevar registro diario de mermas y mortalidad', 'Investigar y reportar causas de mortalidad elevada', 'Preparar producto para carga en vehículos de distribución', 'Mantener limpias las instalaciones de granja'],
          reportsTo: 'DG-001', subordinates: ['grj-002'],
          requirements: ['Deseable: Secundaria o bachillerato', 'Mínimo 2 años de experiencia en manejo de aves de corral', 'Conocimiento práctico del comportamiento y necesidades de pollos'],
          competencies: ['Responsabilidad', 'Atención al detalle', 'Proactividad', 'Organización', 'Resistencia física']
        },
        {
          id: 'grj-002', code: 'GRJ-002', title: 'Auxiliar de Granja', quantity: '2-3', icon: 'Tool', status: 'Activo',
          purpose: 'Apoyar al Coordinador de Granja en actividades de recepción, cuidado, alimentación y resguardo de pollos vivos, así como en mantenimiento de instalaciones.',
          functions: ['Apoyar en descarga de pollos de camiones del proveedor', 'Proporcionar alimento a las aves según indicaciones', 'Mantener llenos y limpios los bebederos de agua', 'Monitorear estado de las aves y reportar problemas', 'Retirar aves muertas y reportarlas al coordinador', 'Limpiar pisos, corrales y áreas de resguardo diariamente', 'Apoyar en carga de aves en vehículos de distribución'],
          reportsTo: 'GRJ-001', subordinates: [],
          requirements: ['Deseable: Primaria o secundaria', 'Deseable: Experiencia en manejo de aves o animales de granja', 'Capacidad de realizar trabajo físico demandante'],
          competencies: ['Responsabilidad', 'Trabajo en equipo', 'Resistencia física', 'Honradez', 'Disposición']
        }
      ]
    },
    {
      id: 'rh',
      name: 'Área de Recursos Humanos',
      color: '#7C3AED',
      icon: 'UsersGroup',
      coordinator: 'José Antonio Ruiz de la Cruz',
      personnelCount: '1',
      rootPositionId: 'rh-001',
      positions: [
        {
          id: 'rh-001', code: 'RH-001', title: 'Coordinador(a) de Recursos Humanos', incumbents: ['José Antonio Ruiz de la Cruz'], quantity: '1', icon: 'UserCircle', status: 'Activo',
          purpose: 'Gestionar el ciclo completo del talento humano en CAI (atracción, selección, inducción, desarrollo, administración y desvinculación), fomentando un ambiente de trabajo positivo alineado con los valores de la empresa.',
          functions: ['Identificar necesidades de personal y realizar procesos de selección', 'Elaborar contratos y gestionar altas ante IMSS e Infonavit', 'Diseñar e implementar programas de inducción para nuevos colaboradores', 'Detectar necesidades de capacitación y desarrollo', 'Mantener expedientes actualizados de colaboradores', 'Fomentar ambiente de trabajo positivo y resolver conflictos laborales', 'Promover la vivencia de los valores de CAI'],
          reportsTo: 'DG-001', subordinates: [],
          requirements: ['Deseable: Licenciatura en Psicología, Administración de RH o afín', 'Deseable: 2-3 años de experiencia en gestión de RH', 'Conocimiento de Ley Federal del Trabajo y obligaciones laborales'],
          competencies: ['Empatía e inteligencia emocional', 'Comunicación efectiva', 'Mediación de conflictos', 'Orientación al desarrollo humano', 'Conocimientos legales laborales']
        }
      ]
    }
  ]
};
