const commonSkills = [
  { icon: '🏗️', namePt: 'Revit / BIM', nameEn: 'Revit / BIM', pt: 'Avançado', en: 'Advanced' },
  { icon: '☀️', namePt: 'Aurora Solar', nameEn: 'Aurora Solar', pt: 'Avançado', en: 'Advanced' },
  { icon: '📐', namePt: 'AutoCAD', nameEn: 'AutoCAD', pt: 'Avançado', en: 'Advanced' },
  { icon: '🧊', namePt: 'SolidWorks', nameEn: 'SolidWorks', pt: 'Intermediário', en: 'Intermediate' },
  { icon: '📊', namePt: 'MS Project', nameEn: 'MS Project', pt: 'Intermediário', en: 'Intermediate' },
  { icon: '🌐', namePt: 'Inglês', nameEn: 'English', pt: 'Fluente', en: 'Fluent' },
  { icon: '🔧', namePt: 'VRF / VRV', nameEn: 'VRF / VRV', pt: 'Especialista', en: 'Specialist' },
  { icon: '💻', namePt: 'Lógica / Código', nameEn: 'Programming Logic', pt: 'Em desenvolvimento', en: 'In development' },
]

export const skillsData = {
  pt: {
    eyebrow: '03 — Habilidades',
    title: 'FERRAMENTAS & EXPERTISE',
    items: commonSkills.map(({ namePt, pt, icon }) => ({ icon, name: namePt, level: pt })),
  },
  en: {
    eyebrow: '03 — Skills',
    title: 'TOOLS & EXPERTISE',
    items: commonSkills.map(({ nameEn, en, icon }) => ({ icon, name: nameEn, level: en })),
  },
}
