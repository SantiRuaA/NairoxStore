import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { DiamondPackage } from '../../models/diamond.model';

@Component({
  selector: 'app-diamonds-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      
      <!-- Diamonds Hero Banner (Fiery Red & Golden Yellow) -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-red-500/30 bg-[#12080f]/90 shadow-2xl relative overflow-hidden">
        <!-- Ambient Glow -->
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-black text-amber-300">
              <span>💎</span> RECARGAS OFICIALES POR ID FREE FIRE
            </div>
            <h2 class="text-2xl sm:text-3xl font-black font-display text-white">
              Recarga Diamantes al <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]">Instante</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-200 max-w-xl font-medium">
              Entrega directa a tu cuenta en 1 a 3 minutos solo con tu ID. ¡Sin necesidad de contraseñas ni accesos!
            </p>
          </div>

          <!-- Quick Trust Badge -->
          <div class="p-4 rounded-2xl bg-[#1a0e18] border border-amber-500/40 text-center flex-shrink-0 shadow-lg">
            <span class="text-xs text-amber-200/80 block font-semibold">Tiempo de Acreditación</span>
            <span class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 font-display">⚡ 1 - 3 MIN</span>
            <span class="text-[10px] text-emerald-400 block mt-0.5 font-bold">🟢 Sistema Automático Activo</span>
          </div>
        </div>

        <!-- Player ID & Server Form -->
        <div class="mt-8 p-5 rounded-2xl bg-[#190e18]/90 border border-red-500/25 space-y-4">
          <h3 class="text-sm font-extrabold text-amber-300 flex items-center gap-2">
            <span>🎮</span> Ingresa tus datos de Jugador:
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- ID Input -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">ID de Free Fire:</label>
              <div class="relative">
                <input type="text"
                       [ngModel]="store.playerId()"
                       (ngModelChange)="store.playerId.set($event)"
                       placeholder="Ejemplo: 2849182391"
                       class="w-full bg-[#110710] border border-red-500/30 focus:border-amber-400 rounded-xl px-4 py-2.5 pl-10 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 transition-all">
                <span class="absolute left-3.5 top-3 text-amber-400 text-sm">🆔</span>
              </div>
            </div>

            <!-- Server Selector -->
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Región / Servidor:</label>
              <select [ngModel]="store.playerServer()"
                      (ngModelChange)="store.playerServer.set($event)"
                      class="w-full bg-[#110710] border border-red-500/30 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all">
                <option value="Sudamérica (SAC)">Sudamérica (SAC)</option>
                <option value="EE.UU. / Norteamérica (US)">EE.UU. / Norteamérica (US)</option>
                <option value="Europa (EU)">Europa (EU)</option>
                <option value="Brasil (BR)">Brasil (BR)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Diamond Filter Category Tabs -->
      <div class="flex items-center justify-center gap-2">
        <button (click)="selectedCategory.set('all')"
                [ngClass]="selectedCategory() === 'all' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#180e18] text-slate-300 hover:bg-[#251220] border-transparent'"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border">
          Todos los Paquetes
        </button>
        <button (click)="selectedCategory.set('diamonds')"
                [ngClass]="selectedCategory() === 'diamonds' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#180e18] text-slate-300 hover:bg-[#251220] border-transparent'"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border">
          💎 Diamantes por ID
        </button>
        <button (click)="selectedCategory.set('membership')"
                [ngClass]="selectedCategory() === 'membership' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#180e18] text-slate-300 hover:bg-[#251220] border-transparent'"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border">
          ⭐ Membresías & Pase
        </button>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        @for (pack of filteredPacks(); track pack.id) {
          <div class="glass-card rounded-2xl p-5 border border-red-500/25 bg-[#130a13]/90 hover:border-amber-400 transition-all flex flex-col justify-between relative group shadow-lg"
               [class.ring-1]="pack.isPopular"
               [class.ring-amber-400]="pack.isPopular">
            
            <!-- Popular / Special Badge -->
            @if (pack.badge) {
              <div class="absolute -top-3 right-4 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 text-black shadow-md border border-yellow-200">
                {{ pack.badge }}
              </div>
            }

            <div>
              <!-- Pack Header -->
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {{ pack.icon }}
                </div>
                <div>
                  <h3 class="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {{ pack.name }}
                  </h3>
                  <span class="text-xs text-amber-200/70">Entrega en {{ pack.deliveryTime }}</span>
                </div>
              </div>

              <!-- Diamonds Amount Display -->
              @if (pack.category === 'diamonds') {
                <div class="py-3 px-4 rounded-xl bg-[#1a0e18] border border-red-500/20 my-3 flex items-center justify-between">
                  <div>
                    <span class="text-xl font-black text-amber-300 font-display">{{ pack.diamonds }} 💎</span>
                    @if (pack.bonus > 0) {
                      <span class="text-xs text-red-400 font-extrabold ml-1.5">+{{ pack.bonus }} extra</span>
                    }
                  </div>
                  <span class="text-[11px] font-extrabold text-yellow-200/80 font-mono">
                    Total: {{ pack.diamonds + pack.bonus }}💎
                  </span>
                </div>
              } @else {
                <div class="py-3 px-4 rounded-xl bg-[#1a0e18] border border-red-500/20 my-3">
                  <span class="text-sm font-extrabold text-amber-300">
                    {{ pack.category === 'pass' ? 'Desbloqueo Inmediato' : 'Recibe diamantes diarios' }}
                  </span>
                </div>
              }
            </div>

            <!-- Price & Buy Button -->
            <div class="pt-3 border-t border-red-500/20 mt-2 space-y-3">
              <div class="flex items-baseline justify-between">
                <div>
                  <span class="text-[11px] text-amber-200/70 block font-semibold">Precio especial:</span>
                  <div class="flex items-baseline gap-2">
                    <span class="text-2xl font-black font-display text-white drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                      $&#123;&#123; pack.price &#125;&#125; <span class="text-xs font-sans text-amber-400">USD</span>
                    </span>
                    @if (pack.originalPrice) {
                      <span class="text-xs text-slate-500 line-through">
                        $&#123;&#123; pack.originalPrice &#125;&#125;
                      </span>
                    }
                  </div>
                </div>

                <span class="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Stock Disponible
                </span>
              </div>

              <a [href]="store.getWhatsAppLinkForDiamonds(pack, store.playerId())" target="_blank" rel="noopener noreferrer"
                 class="w-full py-2.5 rounded-xl font-black text-xs sm:text-sm text-black bg-gradient-to-r from-emerald-400 to-green-300 hover:from-emerald-300 hover:to-white shadow-md hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
                <span>💬 Recargar por WhatsApp</span>
              </a>
            </div>

          </div>
        }
      </div>

    </div>
  `
})
export class DiamondsTabComponent {
  store = inject(StoreService);
  selectedCategory = signal<'all' | 'diamonds' | 'membership'>('all');

  filteredPacks() {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.store.diamondPackages();
    if (cat === 'membership') {
      return this.store.diamondPackages().filter(p => p.category === 'membership' || p.category === 'pass');
    }
    return this.store.diamondPackages().filter(p => p.category === cat);
  }
}
