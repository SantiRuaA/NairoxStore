import { Account } from '../models/account.model';

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 'NX-892',
    title: '🔥 SAKURA + HIP HOP OG + 8 EVOLUTIVAS AL MÁXIMO',
    price: 85.00,
    originalPrice: 120.00,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 78,
    likes: 18450,
    loginType: 'Google',
    badge: 'MÁXIMO NIVEL',
    badgeColor: 'pink',
    status: 'available',
    rank: 'Gran Maestro ★★★',
    passesCount: 42,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/1.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Pase Sakura (S1)', 'Pase Hip Hop (S2)', 'MP40 Cobra Max', 'AK47 Dragón Max', 'M1014 Dragón Max', 'Criminal Rojo'],
    evoWeapons: [
      { name: 'MP40 - Cobra Depredadora', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'AK47 - Dragón Llama Azul', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'M1014 - Dragón Esmeralda', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'SCAR - Megalodón Alfa', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'XM8 - Destino Guardián', level: 'Nivel 6', maxLevel: 7, currentLevel: 6 },
      { name: 'UMP - Día Booyah', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
    ],
    exclusiveSkins: [
      'Set Sakura Completo S1',
      'Set Hip Hop Completo S2',
      'Criminal Rojo & Criminal Azul',
      'Sombra Marina & Pantalones Jazz',
      'Barba de Viejo (Barba Santa)',
      'Zapatillas Angelicales Azules y Blancas',
      'Pantalón Angelical Azul Masculino y Femenino'
    ],
    description: 'Cuenta ultra veterana 100% limpia sin vinculaciones compartidas. Correo Gmail nuevo listo para traspaso inmediato con verificación en 2 pasos de tu propiedad. Incluye emotes exclusivos de pase S1 a S10 y banderas.'
  },
  {
    id: 'NX-741',
    title: '⚡ CRIMINAL ROJO + BARBA DE VIEJO + ANGELICALES AZULES',
    price: 49.99,
    originalPrice: 75.00,
    currency: 'USD',
    region: 'Sudamérica (SAC)',
    level: 72,
    likes: 12200,
    loginType: 'Facebook',
    badge: 'OFERTA FLASH',
    badgeColor: 'amber',
    status: 'available',
    rank: 'Maestro ★',
    passesCount: 28,
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/2.mp4',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Criminal Rojo', 'Barba Santa', 'Angelical Azul', 'MP40 Cobra', 'M1887 Incendio'],
    evoWeapons: [
      { name: 'MP40 - Cobra Depredadora', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'M1014 - Dragón Verde', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 },
      { name: 'M1887 - Furia Abrasadora', level: 'Nivel 4', maxLevel: 7, currentLevel: 4 },
    ],
    exclusiveSkins: [
      'Criminal Rojo Legendario',
      'Pantalón Angelical Azul Masculino',
      'Barba de Viejo Clásica',
      'Camiseta de Cuello Alto Negro',
      'Chaqueta Galaxy'
    ],
    description: 'Cuenta veterana de la región Sudamérica, lista para jugar torneos y subir a Gran Maestro. Todos los datos se entregan al instante y te guiamos en la vinculación limpia.'
  },
  {
    id: 'NX-650',
    title: '👑 FULL EVOLUTIVAS 12 ARMAS AL MÁXIMO + PASE SHADOW',
    price: 110.00,
    originalPrice: 150.00,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 81,
    likes: 24900,
    loginType: 'Google',
    badge: 'COLECCIONISTA',
    badgeColor: 'cyan',
    status: 'available',
    rank: 'Gran Maestro ★★★★★',
    passesCount: 55,
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/3.mp4',
    images: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['12 Evolutivas MAX', 'Angelicales Rojos y Amarillos', 'Pase S3 a S20', 'Emote Bandera', 'Emote Trono'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'AK47 Dragón', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'SCAR Megalodón', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'M1014 Dragón Verde', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'XM8 Destino Guardián', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'FAMAS Sonrisa Infernal', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'M4A1 Dragón Infernal', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'AN94 Huracán Dorado', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
    ],
    exclusiveSkins: [
      'Pantalones Angelicales Rojos y Amarillos',
      'Dino Amarillo & Dino Vaca',
      'Set Guerrero Sombrío',
      'Set Criminal Neón',
      'Emote de Entrada Legendaria Dragón'
    ],
    description: 'La cuenta definitiva para creadores de contenido o jugadores competitivos. Cuenta con todas las evolutivas activas con emotes de disparo y remate.'
  },
  {
    id: 'NX-512',
    title: '💎 CUENTA SMURF HEROICA + MP40 COBRA + 3000 DIAMANTES',
    price: 28.50,
    originalPrice: 40.00,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 56,
    likes: 6400,
    loginType: 'Google',
    badge: 'ECONÓMICA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ★★★',
    passesCount: 14,
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/4.mp4',
    images: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['MP40 Cobra Nivel 5', 'Pase Booyah Actual', '3000 Diamantes en cuenta', 'KD 4.5'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 },
      { name: 'AK47 Dragón', level: 'Nivel 4', maxLevel: 7, currentLevel: 4 },
    ],
    exclusiveSkins: [
      'Set Sombra Táctica',
      'Pantalón Jazz Clásico',
      'Máscara Calavera Antigua'
    ],
    description: 'Cuenta ideal para empezar con buen equipamiento y saldo de diamantes listo para gastar en ruletas o eventos actuales.'
  },
  {
    id: 'NX-409',
    title: '⭐ PASE LOCOS DE LA CIUDAD + ANGELICAL BLANCO + REGION SAC',
    price: 36.00,
    originalPrice: 50.00,
    currency: 'USD',
    region: 'Sudamérica (SAC)',
    level: 66,
    likes: 8900,
    loginType: 'VK',
    badge: 'RECOMENDADA',
    badgeColor: 'cyan',
    status: 'available',
    rank: 'Heroico ★★★★',
    passesCount: 22,
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/5.mp4',
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Angelical Blanco', 'M1014 Dragón', 'Pase Ciudad', 'Skins Femeninas'],
    evoWeapons: [
      { name: 'M1014 Dragón Esmeralda', level: 'Nivel 6', maxLevel: 7, currentLevel: 6 },
      { name: 'SCAR Megalodón', level: 'Nivel 4', maxLevel: 7, currentLevel: 4 },
    ],
    exclusiveSkins: [
      'Pantalón Angelical Blanco Femenino y Masculino',
      'Set Médico Peste',
      'Set Cazador de Sombras'
    ],
    description: 'Cuenta muy cuidada, cuenta con skins masculinas y femeninas exclusivas y buena tasa de tiros a la cabeza.'
  },
  {
    id: 'NX-304',
    title: '🏆 PASE SAKURA S1 + CRIMINAL MORADO + EMOTES ANTIGUOS',
    price: 95.00,
    originalPrice: 135.00,
    currency: 'USD',
    region: 'Europa (EU)',
    level: 75,
    likes: 14300,
    loginType: 'Google',
    badge: 'VETERANA EU',
    badgeColor: 'pink',
    status: 'available',
    rank: 'Gran Maestro',
    passesCount: 38,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/6.mp4',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Pase Sakura S1', 'Criminal Morado', 'Región Europa', 'Emote Bandera'],
    evoWeapons: [
      { name: 'AK47 Dragón Azul', level: 'Nivel 7 (MAX)', maxLevel: 7, currentLevel: 7 },
      { name: 'MP40 Cobra', level: 'Nivel 6', maxLevel: 7, currentLevel: 6 },
    ],
    exclusiveSkins: [
      'Set Sakura S1 Original',
      'Criminal Morado Exclusivo',
      'Chaqueta Veterana Beta'
    ],
    description: 'Cuenta especial para servidores de Europa. Totalmente verificada con traspaso rápido garantizado.'
  },
  {
    id: 'NX-107',
    title: '?? CUENTA EXCLUSIVA #7 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 7,
    originalPrice: 70.00 + 7,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 7,
    likes: 5000 + (7 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 7,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/7.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #7'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-108',
    title: '?? CUENTA EXCLUSIVA #8 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 8,
    originalPrice: 70.00 + 8,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 8,
    likes: 5000 + (8 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 8,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/8.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #8'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-109',
    title: '?? CUENTA EXCLUSIVA #9 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 9,
    originalPrice: 70.00 + 9,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 9,
    likes: 5000 + (9 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 9,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/9.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #9'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1010',
    title: '?? CUENTA EXCLUSIVA #10 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 10,
    originalPrice: 70.00 + 10,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 10,
    likes: 5000 + (10 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 10,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/10.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #10'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1011',
    title: '?? CUENTA EXCLUSIVA #11 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 11,
    originalPrice: 70.00 + 11,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 11,
    likes: 5000 + (11 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 11,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/11.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #11'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1012',
    title: '?? CUENTA EXCLUSIVA #12 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 12,
    originalPrice: 70.00 + 12,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 12,
    likes: 5000 + (12 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 12,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/12.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #12'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1013',
    title: '?? CUENTA EXCLUSIVA #13 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 13,
    originalPrice: 70.00 + 13,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 13,
    likes: 5000 + (13 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 13,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/13.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #13'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1014',
    title: '?? CUENTA EXCLUSIVA #14 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 14,
    originalPrice: 70.00 + 14,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 14,
    likes: 5000 + (14 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 14,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/14.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #14'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1015',
    title: '?? CUENTA EXCLUSIVA #15 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 15,
    originalPrice: 70.00 + 15,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 15,
    likes: 5000 + (15 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 15,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/15.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #15'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1016',
    title: '?? CUENTA EXCLUSIVA #16 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 16,
    originalPrice: 70.00 + 16,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 16,
    likes: 5000 + (16 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 16,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/16.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #16'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  },
  {
    id: 'NX-1017',
    title: '?? CUENTA EXCLUSIVA #17 CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + 17,
    originalPrice: 70.00 + 17,
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + 17,
    likes: 5000 + (17 * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + 17,
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/17.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      { name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }
    ],
    exclusiveSkins: [
      'Set Exclusivo #17'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  }
];