import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-reviews-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      
      <!-- Reviews Header & Score Card (Fiery Red & Golden Yellow) -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-red-500/30 bg-[#12080f]/90 shadow-2xl relative overflow-hidden">
        <!-- Ambient background glows -->
        <div class="absolute -top-16 -right-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-16 -left-16 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div class="space-y-2 text-center md:text-left">
            <span class="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-black text-amber-300">
              ⭐ COMPROBANTES & OPINIONES VERIFICADAS
            </span>
            <h2 class="text-2xl sm:text-3xl font-black font-display text-white">
              Testimonios de Clientes <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]">Satisfechos</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-200 max-w-xl font-medium">
              Capturas reales de entregas, traspasos de cuentas y recargas inmediatas de diamantes realizadas por WhatsApp.
            </p>
          </div>

          <!-- Overall Rating Widget -->
          <div class="p-5 rounded-2xl bg-[#190e18] border border-amber-500/40 text-center flex-shrink-0 shadow-xl">
            <div class="text-4xl font-black text-amber-300 font-display drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">4.9 / 5.0</div>
            <div class="text-yellow-400 text-lg mt-1 tracking-wider drop-shadow-sm">★★★★★</div>
            <span class="text-[11px] text-amber-200/80 block mt-1 font-semibold">Más de 720+ entregas verificadas</span>
          </div>
        </div>

        <!-- Trust Stats Bar -->
        <div class="mt-6 pt-5 border-t border-red-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div class="p-2.5 rounded-xl bg-[#180d16]/80 border border-red-500/20">
            <span class="text-lg font-black text-amber-300 block font-display">100%</span>
            <span class="text-[11px] text-slate-300 font-medium">Entregas Exitosas</span>
          </div>
          <div class="p-2.5 rounded-xl bg-[#180d16]/80 border border-red-500/20">
            <span class="text-lg font-black text-amber-300 block font-display">&lt; 3 MIN</span>
            <span class="text-[11px] text-slate-300 font-medium">Tiempo de Traspaso</span>
          </div>
          <div class="p-2.5 rounded-xl bg-[#180d16]/80 border border-red-500/20">
            <span class="text-lg font-black text-amber-300 block font-display">24/7</span>
            <span class="text-[11px] text-slate-300 font-medium">Soporte WhatsApp</span>
          </div>
          <div class="p-2.5 rounded-xl bg-[#180d16]/80 border border-red-500/20">
            <span class="text-lg font-black text-amber-300 block font-display">0 RIESGO</span>
            <span class="text-[11px] text-slate-300 font-medium">Anti-recuperación</span>
          </div>
        </div>
      </div>

      <!-- Reviews & Proof Screenshots Grid (From 2.4 down to 1.1) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (rev of store.reviews(); track rev.id) {
          <div class="glass-card rounded-2xl p-5 border border-red-500/25 bg-[#130a13]/90 hover:border-amber-400/60 transition-all flex flex-col justify-between space-y-4 shadow-xl group">
            
            <!-- User Info & Rating Header -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <!-- Name Initial Badge Avatar (Fiery Red to Gold) -->
                <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 via-amber-500 to-yellow-400 p-[1.5px] shadow-md flex-shrink-0">
                  <div class="w-full h-full rounded-[14px] bg-[#1a0c16] flex items-center justify-center font-display font-black text-lg text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                    {{ rev.author.charAt(0) }}
                  </div>
                </div>
                <div>
                  <div class="flex items-center gap-1.5">
                    <h4 class="text-sm font-black text-white group-hover:text-amber-300 transition-colors">{{ rev.author }}</h4>
                    @if (rev.verified) {
                      <span class="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded-full border border-emerald-500/30" title="Compra Verificada">
                        ✓ Verificado
                      </span>
                    }
                  </div>
                  <span class="text-[11px] text-amber-200/70">{{ rev.country || 'Cliente Verificado' }} • <span class="text-slate-400 font-medium">{{ rev.date }}</span></span>
                </div>
              </div>

              <!-- Rating Stars -->
              <div class="text-yellow-400 text-sm font-bold tracking-wider drop-shadow-sm">
                ★★★★★
              </div>
            </div>

            <!-- Customer Comment -->
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed italic bg-[#180e18]/80 p-3 rounded-xl border border-red-500/15">
              "{{ rev.comment }}"
            </p>

            <!-- Proof Screenshot Frame (Click to Zoom) -->
            @if (rev.proofImage) {
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-[11px] font-bold text-amber-300 px-1">
                  <span class="flex items-center gap-1">📸 Comprobante de Entrega:</span>
                  <span class="text-[10px] text-slate-400 font-normal">Clic para agrandar 🔍</span>
                </div>

                <div class="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-black/90 border border-red-500/30 hover:border-amber-400 cursor-pointer transition-all shadow-inner group/img"
                     (click)="openProofModal(rev)">
                  <img [src]="rev.proofImage"
                       [alt]="'Comprobante ' + rev.author"
                       class="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300">
                  
                  <!-- Hover overlay badge -->
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="px-3 py-1.5 rounded-xl bg-black/80 text-amber-300 text-xs font-bold border border-amber-400 shadow-lg">
                      🔍 Ver Captura Completa
                    </span>
                  </div>
                </div>
              </div>
            }

            <!-- Product Purchased Tag & Status Footer -->
            <div class="pt-3 border-t border-red-500/20 flex items-center justify-between text-xs text-slate-400">
              <span class="truncate pr-2">
                Adquirió: <span class="text-amber-300 font-extrabold">{{ rev.productPurchased }}</span>
              </span>
              <span class="text-emerald-400 font-black flex items-center gap-1 text-[11px] flex-shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                <span>🛡️</span> Pago & Entrega OK
              </span>
            </div>

          </div>
        }
      </div>

    </div>

    <!-- Image Lightbox Modal for Zooming Proof Screenshots -->
    @if (selectedProof(); as proof) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
           (click)="selectedProof.set(null)">
        <div class="relative max-w-3xl max-h-[90vh] bg-[#140810] border-2 border-amber-400/70 rounded-3xl p-4 sm:p-5 shadow-[0_0_50px_rgba(245,158,11,0.4)] flex flex-col overflow-hidden"
             (click)="$event.stopPropagation()">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between pb-3 border-b border-red-500/30">
            <div class="flex items-center gap-2">
              <span class="text-amber-400 text-lg">📸</span>
              <div>
                <h4 class="text-sm font-black text-white">Comprobante de {{ proof.author }}</h4>
                <span class="text-[11px] text-amber-300">{{ proof.productPurchased }} • {{ proof.date }}</span>
              </div>
            </div>

            <button (click)="selectedProof.set(null)"
                    class="w-8 h-8 rounded-full bg-red-950/80 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold border border-red-500/40">
              ✕
            </button>
          </div>

          <!-- Proof Image Display -->
          <div class="overflow-auto py-3 flex items-center justify-center max-h-[75vh]">
            <img [src]="proof.proofImage"
                 [alt]="'Comprobante ' + proof.author"
                 class="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-red-500/20">
          </div>

          <!-- Modal Footer -->
          <div class="pt-3 border-t border-red-500/30 flex items-center justify-between text-xs text-slate-300">
            <span class="italic text-slate-300">"{{ proof.comment }}"</span>
            <span class="text-emerald-400 font-bold flex items-center gap-1 flex-shrink-0 ml-2">
              <span>✓</span> Verificado por Nairoxstoreff
            </span>
          </div>

        </div>
      </div>
    }
  `
})
export class ReviewsTabComponent {
  store = inject(StoreService);
  selectedProof = signal<Review | null>(null);

  openProofModal(review: Review) {
    this.selectedProof.set(review);
  }
}
