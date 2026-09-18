import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-accounts-tab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-full max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fadeIn">
      
      <!-- Catalog Header & Search/Filter Controls (Red & Gold Theme) -->
      <div class="glass-panel rounded-2xl p-4 sm:p-6 border border-red-500/30 bg-[#12080f]/90">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black font-display text-white flex items-center gap-2">
              <span class="text-amber-400 text-2xl">🔥</span> Catálogo de Cuentas Disponibles
            </h2>
            <p class="text-xs sm:text-sm text-slate-300">
              Todas las cuentas cuentan con garantía de entrega, datos limpios y traspaso guiado en vivo.
            </p>
          </div>

          <!-- Search Input -->
          <div class="relative w-full md:w-80">
            <input type="text"
                   [ngModel]="store.searchQuery()"
                   (ngModelChange)="store.searchQuery.set($event)"
                   placeholder="Buscar por Sakura, Evo, ID, etc..."
                   class="w-full bg-[#180e18] border border-red-500/30 focus:border-amber-400 rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 transition-all">
            <span class="absolute left-3.5 top-3 text-amber-400 text-sm">🔍</span>
            @if (store.searchQuery()) {
              <button (click)="store.searchQuery.set('')" class="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white">
                ✕
              </button>
            }
          </div>
        </div>

        <!-- Filters & Regions Bar -->
        <div class="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-red-500/20">
          
          <!-- Region Filter Pills -->
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span class="text-xs font-bold text-amber-300 mr-1 hidden sm:inline">Región:</span>
            
            <button (click)="store.selectedRegion.set('all')"
                    [ngClass]="store.selectedRegion() === 'all' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#1a0e18] text-slate-300 hover:bg-[#281425] border-transparent'"
                    class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border">
              Todas ({{ store.accounts().length }})
            </button>
            <button (click)="store.selectedRegion.set('EE.UU.')"
                    [ngClass]="store.selectedRegion() === 'EE.UU.' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#1a0e18] text-slate-300 hover:bg-[#281425] border-transparent'"
                    class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border">
              🇺🇸 EE.UU. (US)
            </button>
            <button (click)="store.selectedRegion.set('Sudamérica')"
                    [ngClass]="store.selectedRegion() === 'Sudamérica' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#1a0e18] text-slate-300 hover:bg-[#281425] border-transparent'"
                    class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border">
              🌎 Sudamérica (SAC)
            </button>
            <button (click)="store.selectedRegion.set('Europa')"
                    [ngClass]="store.selectedRegion() === 'Europa' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black font-black shadow-md border-amber-300' : 'bg-[#1a0e18] text-slate-300 hover:bg-[#281425] border-transparent'"
                    class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border">
              🇪🇺 Europa (EU)
            </button>
          </div>

          <!-- Sort Select -->
          <div class="flex items-center gap-2">
            <span class="text-xs text-amber-300 font-bold hidden sm:inline">Ordenar:</span>
            <select [ngModel]="store.selectedSort()"
                    (ngModelChange)="store.selectedSort.set($event)"
                    class="bg-[#1a0e18] border border-red-500/30 rounded-xl px-3 py-1.5 text-xs text-slate-100 font-semibold focus:outline-none focus:border-amber-400">
              <option value="popular">Más Populares</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="level">Mayor Nivel</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Accounts Grid -->
      @if (store.filteredAccounts().length === 0) {
        <div class="glass-card rounded-2xl p-12 text-center border border-red-500/20">
          <span class="text-4xl">🔍</span>
          <h3 class="text-lg font-bold text-white mt-3">No se encontraron cuentas</h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Prueba con otros términos de búsqueda o cambia la región seleccionada.</p>
          <button (click)="store.searchQuery.set(''); store.selectedRegion.set('all')"
                  class="mt-4 px-5 py-2 rounded-xl bg-amber-400 text-black font-black text-xs">
            Restablecer Filtros
          </button>
        </div>
      } @else {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (acc of store.filteredAccounts(); track acc.id) {
            <div class="glass-card rounded-2xl overflow-hidden border border-red-500/30 hover:border-amber-400 transition-all flex flex-col group bg-[#130a13]/90 shadow-xl">
              
              <!-- Cover Image & Badges -->
              <div class="relative h-48 w-full overflow-hidden bg-slate-950 cursor-pointer"
                   (click)="store.openAccountModal(acc)">
                @if (acc.videoUrl) {
                  <video [src]="acc.videoUrl"
                         autoplay loop [muted]="true" playsinline
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                  </video>
                } @else {
                  <img [src]="acc.coverImage"
                       [alt]="acc.title"
                       class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                }
                
                <!-- Overlay gradient (Fiery Dark) -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#130a13] via-transparent to-black/60"></div>

                <!-- Top Left Badge (Red / Yellow / Amber) -->
                @if (acc.badge) {
                  <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg"
                       [ngClass]="{
                         'bg-gradient-to-r from-red-600 to-rose-600 text-white border border-red-400/40': acc.badgeColor === 'pink' || acc.badgeColor === 'amber',
                         'bg-gradient-to-r from-amber-500 to-yellow-400 text-black border border-yellow-200': acc.badgeColor === 'cyan' || acc.badgeColor === 'emerald'
                       }">
                    {{ acc.badge }}
                  </div>
                }

                <!-- Top Right Region & ID -->
                <div class="absolute top-3 right-3 flex items-center gap-1.5">
                  <span class="px-2 py-1 rounded-md text-[11px] font-extrabold bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 shadow-sm">
                    {{ acc.id }}
                  </span>
                </div>

                <!-- Bottom stats bar over image -->
                <div class="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span class="font-black flex items-center gap-1 bg-black/75 px-2.5 py-0.5 rounded-md backdrop-blur-sm text-yellow-300 border border-yellow-500/30">
                    ⭐ Nvl. {{ acc.level }}
                  </span>
                  <span class="font-extrabold bg-black/75 px-2.5 py-0.5 rounded-md backdrop-blur-sm text-amber-300 border border-amber-500/30">
                    {{ acc.region }}
                  </span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <!-- Title & Tags -->
                <div>
                  <h3 class="text-base font-extrabold text-white line-clamp-2 group-hover:text-amber-300 transition-colors cursor-pointer"
                      (click)="store.openAccountModal(acc)">
                    {{ acc.title }}
                  </h3>

                  <!-- Rank & Passes snippet -->
                  <div class="flex items-center gap-2 mt-2 text-xs text-slate-300 font-medium">
                    <span class="text-yellow-400 font-bold">🏆 {{ acc.rank }}</span>
                    <span>•</span>
                    <span class="text-amber-200">🎫 {{ acc.passesCount }} Pases</span>
                  </div>

                  <!-- Evolutive Weapons Badges Preview -->
                  <div class="flex flex-wrap gap-1.5 mt-3">
                    @for (evo of acc.evoWeapons.slice(0, 3); track evo.name) {
                      <span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-[#220e17] text-amber-300 border border-red-500/30">
                        ⚡ {{ evo.name }} ({{ evo.level }})
                      </span>
                    }
                    @if (acc.evoWeapons.length > 3) {
                      <span class="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-[#1e101a] text-slate-400 border border-slate-700">
                        +{{ acc.evoWeapons.length - 3 }} más
                      </span>
                    }
                  </div>
                </div>

                <!-- Price & Action Buttons -->
                <div class="pt-3 border-t border-red-500/20 space-y-3">
                  <div class="flex items-baseline justify-between">
                    <div>
                      <span class="text-[11px] text-amber-200/70 block font-semibold">Precio de oferta:</span>
                      <div class="flex items-baseline gap-2">
                        <span class="text-2xl font-black font-display text-white tracking-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                          $&#123;&#123; acc.price &#125;&#125; <span class="text-xs font-sans text-amber-400">USD</span>
                        </span>
                        @if (acc.originalPrice) {
                          <span class="text-xs text-slate-500 line-through">
                            $&#123;&#123; acc.originalPrice &#125;&#125;
                          </span>
                        }
                      </div>
                    </div>

                    <div class="text-right text-[11px] text-emerald-400 font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Disponible
                    </div>
                  </div>

                  <!-- 1 Button: WhatsApp -->
                  <div class="pt-1">
                    <a [href]="store.getWhatsAppLinkForAccount(acc)" target="_blank" rel="noopener noreferrer"
                       class="w-full px-3 py-2.5 rounded-xl text-sm font-black text-black bg-gradient-to-r from-emerald-400 to-green-300 hover:from-emerald-300 hover:to-white shadow-md hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-1.5">
                      <span>💬 Comprar por WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          }
        </div>
      }

    </div>
  `
})
export class AccountsTabComponent {
  store = inject(StoreService);
}
