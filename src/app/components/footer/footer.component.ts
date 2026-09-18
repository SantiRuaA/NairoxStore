import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="w-full bg-[#0a0409] border-t border-red-500/20 mt-20 pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div class="max-w-6xl mx-auto space-y-10">
        
        <!-- Main Footer Row -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Col 1: Brand Info -->
          <div class="md:col-span-2 space-y-3">
            <h3 class="text-2xl font-black font-display text-white tracking-wide">
              NAIROX<span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">STORE</span><span class="text-amber-400">FF</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-medium">
              Tu tienda gamer #1 de confianza en Free Fire. Venta de cuentas veteranas verificadas, recargas rápidas de diamantes por ID y soporte personalizado 24/7.
            </p>
            <div class="flex items-center gap-3 pt-2">
              <a [href]="store.tiktokUrl" target="_blank" rel="noopener noreferrer"
                 class="w-9 h-9 rounded-xl bg-[#1a0c16] hover:bg-red-600 hover:text-white text-slate-300 border border-red-500/30 flex items-center justify-center transition-all text-xs font-bold shadow-sm">
                TikTok
              </a>
              <a [href]="store.instagramUrl" target="_blank" rel="noopener noreferrer"
                 class="w-9 h-9 rounded-xl bg-[#1a0c16] hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-500 hover:text-black text-slate-300 border border-red-500/30 flex items-center justify-center transition-all text-xs font-bold shadow-sm">
                IG
              </a>
              <a [href]="store.getWhatsAppDirectLink()" target="_blank" rel="noopener noreferrer"
                 class="w-9 h-9 rounded-xl bg-[#1a0c16] hover:bg-emerald-500 hover:text-black text-slate-300 border border-emerald-500/30 flex items-center justify-center transition-all text-xs font-bold shadow-sm">
                WA
              </a>
            </div>
          </div>

          <!-- Col 2: Navigation Links -->
          <div class="space-y-3">
            <h4 class="text-sm font-black text-white uppercase tracking-wider">Navegación</h4>
            <ul class="space-y-2 text-xs font-medium">
              <li>
                <button (click)="store.setTab('info')" class="hover:text-amber-300 transition-colors">🔥 Información General</button>
              </li>
              <li>
                <button (click)="store.setTab('accounts')" class="hover:text-amber-300 transition-colors">📁 Cuentas Disponibles</button>
              </li>
              <li>
                <button (click)="store.setTab('diamonds')" class="hover:text-amber-300 transition-colors">💎 Recarga de Diamantes</button>
              </li>
              <li>
                <button (click)="store.setTab('reviews')" class="hover:text-amber-300 transition-colors">⭐ Reseñas de Clientes</button>
              </li>
            </ul>
          </div>

          <!-- Col 3: Support & Security -->
          <div class="space-y-3">
            <h4 class="text-sm font-black text-white uppercase tracking-wider">Soporte & Garantía</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li class="flex items-center gap-1.5 text-emerald-400">
                <span>🛡️</span> 100% Anti-recuperación
              </li>
              <li class="flex items-center gap-1.5 text-amber-300">
                <span>⚡</span> Entrega en 1 a 3 min
              </li>
              <li class="flex items-center gap-1.5 text-red-400">
                <span>🟢</span> Asesores en Línea 24/7
              </li>
            </ul>
          </div>

        </div>

        <!-- Disclaimer & Copyright -->
        <div class="pt-8 border-t border-red-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
          <p>© 2026 Nairoxstoreff. Todos los derechos reservados.</p>
          <p class="max-w-md">
            Aviso: Free Fire es una marca registrada de Garena. Nairoxstoreff es un servicio comercial independiente dedicado a la comunidad gamer.
          </p>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  store = inject(StoreService);
}
