import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-account-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (store.isAccountModalOpen() && store.selectedAccount(); as acc) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-fadeIn"
           (click)="closeOnBackdrop($event)">
        
        <div class="relative w-full max-w-4xl max-h-[90vh] bg-[#12080f] border-2 border-red-500/50 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(239,68,68,0.3)] overflow-hidden flex flex-col"
             (click)="$event.stopPropagation()">
          
          <!-- Modal Top Header -->
          <div class="px-5 py-4 bg-[#1b0c16] border-b border-red-500/30 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="px-2.5 py-1 rounded-lg text-xs font-black bg-amber-400/20 text-yellow-300 border border-amber-400/40">
                {{ acc.id }}
              </span>
              <span class="text-xs sm:text-sm font-extrabold text-slate-200">
                Región: <span class="text-amber-400">{{ acc.region }}</span>
              </span>
            </div>

            <button (click)="store.closeAccountModal()"
                    class="w-8 h-8 rounded-full bg-red-950/80 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold border border-red-500/30">
              ✕
            </button>
          </div>

          <!-- Modal Scrollable Body -->
          <div class="overflow-y-auto p-5 sm:p-6 space-y-6">
            
            <!-- Image Gallery Carousel / Viewer -->
            <div class="space-y-3">
              <!-- Active Large Image or Video -->
              <div class="relative h-64 sm:h-[28rem] w-full rounded-2xl overflow-hidden bg-black/90 border border-red-500/30 shadow-inner flex items-center justify-center">
                @if (acc.videoUrl && activeImageIndex() === 0) {
                  <video [src]="acc.videoUrl"
                         controls autoplay loop playsinline
                         class="w-full h-full object-contain">
                  </video>
                } @else {
                  <img [src]="acc.images[activeImageIndex()] || acc.coverImage"
                       [alt]="acc.title"
                       class="w-full h-full object-contain">
                }
                
                <!-- Overlay badge -->
                <div class="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md text-xs font-bold text-white border border-amber-500/40">
                  @if (acc.videoUrl && activeImageIndex() === 0) {
                    🎥 Video de la Cuenta
                  } @else {
                    Foto {{ activeImageIndex() + 1 }} de {{ acc.images.length }}
                  }
                </div>
              </div>

              <!-- Thumbnails Selector -->
              @if (acc.images.length > 0 || acc.videoUrl) {
                <div class="flex items-center gap-2 overflow-x-auto pb-1">
                  @for (img of acc.images; track $index; let idx = $index) {
                    <button (click)="activeImageIndex.set(idx)"
                            [ngClass]="activeImageIndex() === idx ? 'border-amber-400 ring-2 ring-amber-400/50' : 'border-slate-800 opacity-60 hover:opacity-100'"
                            class="relative w-20 h-14 rounded-xl overflow-hidden border flex-shrink-0 transition-all bg-black flex items-center justify-center">
                      @if (acc.videoUrl && idx === 0) {
                        <div class="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                          <span class="text-white text-xl">▶</span>
                        </div>
                      }
                      <img [src]="img" class="w-full h-full object-cover">
                    </button>
                  }
                </div>
              }
            </div>

            <!-- Title & Main Info -->
            <div>
              <h2 class="text-xl sm:text-2xl font-black font-display text-white">
                {{ acc.title }}
              </h2>
              <div class="flex flex-wrap items-center gap-2.5 mt-3 text-xs sm:text-sm text-slate-200">
                <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-yellow-300 font-extrabold border border-amber-500/40">
                  🏆 {{ acc.rank }}
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-300 font-extrabold border border-red-500/40">
                  ⭐ Nivel {{ acc.level }}
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-yellow-500/20 text-yellow-300 font-extrabold border border-yellow-500/40">
                  ❤️ {{ acc.likes }} Likes
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-extrabold border border-rose-500/40">
                  🔐 Login: {{ acc.loginType }}
                </span>
              </div>
            </div>

            <!-- Evolutive Weapons Section -->
            @if (acc.evoWeapons && acc.evoWeapons.length > 0) {
              <div class="glass-card rounded-2xl p-4 sm:p-5 border border-red-500/20 bg-[#160c16]/80 space-y-3">
                <h3 class="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <span class="text-yellow-400">⚡</span> Armas Evolutivas en Cuenta:
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  @for (evo of acc.evoWeapons; track evo.name) {
                    <div class="p-3 rounded-xl bg-[#110710] border border-red-500/20 flex flex-col justify-between space-y-2">
                      <div class="flex items-center justify-between text-xs font-bold">
                        <span class="text-slate-200">{{ evo.name }}</span>
                        <span class="text-amber-300 font-black">{{ evo.level }}</span>
                      </div>
                      
                      <!-- Level Progress Bar (Fiery Red to Gold) -->
                      <div class="w-full bg-[#200d1a] rounded-full h-2.5 overflow-hidden border border-red-500/20">
                        <div class="h-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-300 rounded-full transition-all duration-500 shadow-sm"
                             [style.width.%]="(evo.currentLevel / evo.maxLevel) * 100"></div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Exclusive Skins / Sets Checklist -->
            @if (acc.exclusiveSkins && acc.exclusiveSkins.length > 0) {
              <div class="glass-card rounded-2xl p-4 sm:p-5 border border-red-500/20 bg-[#160c16]/80 space-y-3">
                <h3 class="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <span class="text-red-400">👕</span> Skins & Pases Exclusivos:
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  @for (skin of acc.exclusiveSkins; track skin) {
                    <div class="flex items-center gap-2 text-slate-200 font-medium">
                      <span class="text-amber-400 font-bold">✓</span>
                      <span>{{ skin }}</span>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Account Description & Guarantee -->
            <div class="p-4 rounded-xl bg-[#180d16] border border-red-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
              <p class="font-black text-amber-400 flex items-center gap-1.5">
                <span>🛡️</span> Garantía de Compra & Traspaso Limpio:
              </p>
              <p>{{ acc.description }}</p>
            </div>

          </div>

          <!-- Modal Bottom Action Footer -->
          <div class="p-4 sm:p-5 bg-[#170a13] border-t border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span class="text-xs text-amber-200/70 block font-semibold">Total a pagar:</span>
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-black font-display text-white drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]">
                  $&#123;&#123; acc.price &#125;&#125; <span class="text-xs font-sans text-amber-400">USD</span>
                </span>
                @if (acc.originalPrice) {
                  <span class="text-sm text-slate-500 line-through">
                    $&#123;&#123; acc.originalPrice &#125;&#125;
                  </span>
                }
              </div>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button (click)="store.closeAccountModal()"
                      class="flex-1 sm:flex-none px-5 py-3 rounded-xl font-bold text-xs text-slate-300 bg-[#220d1a] hover:bg-[#321326] border border-slate-700 transition-colors">
                Cerrar
              </button>

              <a [href]="store.getWhatsAppLinkForAccount(acc)" target="_blank" rel="noopener noreferrer"
                 class="flex-1 sm:flex-none px-6 py-3 rounded-xl font-black text-xs sm:text-sm text-black bg-gradient-to-r from-emerald-400 to-green-300 hover:from-emerald-300 hover:to-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2">
                <span>💬 Comprar por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    }
  `
})
export class AccountModalComponent {
  store = inject(StoreService);
  activeImageIndex = signal<number>(0);

  closeOnBackdrop(event: MouseEvent) {
    this.store.closeAccountModal();
  }
}
