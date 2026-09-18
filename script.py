import json
import re

with open('src/app/data/accounts.data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# I will just write a simple logic to duplicate the last account multiple times and assign different videoUrls.
# Actually it's easier to just match the array of objects, but parsing TS in Python without a library is tricky.
# Instead, let's just do text replacement.

def generate_extra_accounts():
    accounts = []
    for i in range(7, 18):
        acc = f'''  {{
    id: 'NX-10{i}',
    title: '?? CUENTA EXCLUSIVA #{i} CON PASE ELITE Y ARMAS EVOLUTIVAS',
    price: 45.00 + {i},
    originalPrice: 70.00 + {i},
    currency: 'USD',
    region: 'EE.UU. (US)',
    level: 60 + {i},
    likes: 5000 + ({i} * 100),
    loginType: 'Google',
    badge: 'OFERTA',
    badgeColor: 'emerald',
    status: 'available',
    rank: 'Heroico ?',
    passesCount: 15 + {i},
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'vid/{i}.mp4',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Cuenta Verificada', 'Pase Elite', 'Armas Evolutivas'],
    evoWeapons: [
      {{ name: 'MP40 Cobra', level: 'Nivel 5', maxLevel: 7, currentLevel: 5 }}
    ],
    exclusiveSkins: [
      'Set Exclusivo #{i}'
    ],
    description: 'Cuenta en oferta con garant&iacute;a de entrega. El video muestra el contenido exacto de la cuenta.'
  }}'''
        accounts.append(acc)
    return ',\n'.join(accounts)

extra_accounts = ',\n' + generate_extra_accounts() + '\n];'
new_content = content.replace('\\n];', extra_accounts)

# Fallback if replace fails because of regex / spaces
if '\\n];' not in content:
    new_content = content[:-4] + extra_accounts

with open('src/app/data/accounts.data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
