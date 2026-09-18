import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="w-full max-w-4xl mx-auto px-4 mt-8">
      <!-- Centered Pill Nav Bar (Fiery Red & Amber Theme) -->
      <div class="bg-[#12080f]/95 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
        
        <!-- Tab 1: INFORMACIÓN -->
        <button (click)="store.setTab('info')"
                [ngClass]="{
                  'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-extrabold shadow-[0_0_20px_rgba(239,68,68,0.45)] border-amber-400/50': store.activeTab() === 'info',
                  'text-slate-400 hover:text-amber-300 hover:bg-red-950/30 border-transparent': store.activeTab() !== 'info'
                }"
                class="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border transition-all duration-200 select-none whitespace-nowrap">
          <span>🔥</span>
          <span>INFORMACIÓN</span>
        </button>

        <!-- Tab 2: DISPONIBLES -->
        <button (click)="store.setTab('accounts')"
                [ngClass]="{
                  'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-extrabold shadow-[0_0_20px_rgba(239,68,68,0.45)] border-amber-400/50': store.activeTab() === 'accounts',
                  'text-slate-400 hover:text-amber-300 hover:bg-red-950/30 border-transparent': store.activeTab() !== 'accounts'
                }"
                class="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border transition-all duration-200 select-none whitespace-nowrap">
          <span>📁</span>
          <span>DISPONIBLES</span>
          <span class="px-1.5 py-0.2 text-[10px] rounded-full bg-amber-400/20 text-yellow-300 font-mono font-bold hidden md:inline-block border border-amber-400/30">
            {{ store.accounts().length }}
          </span>
        </button>

        <!-- Tab 3: DIAMANTES -->
        <button (click)="store.setTab('diamonds')"
                [ngClass]="{
                  'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-extrabold shadow-[0_0_20px_rgba(239,68,68,0.45)] border-amber-400/50': store.activeTab() === 'diamonds',
                  'text-slate-400 hover:text-amber-300 hover:bg-red-950/30 border-transparent': store.activeTab() !== 'diamonds'
                }"
                class="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border transition-all duration-200 select-none whitespace-nowrap">
          <span>💎</span>
          <span>DIAMANTES</span>
          <span class="px-1.5 py-0.2 text-[9px] rounded-full bg-yellow-400/30 text-yellow-200 font-extrabold hidden md:inline-block animate-pulse border border-yellow-300/40">
            +10% BONO
          </span>
        </button>

        <!-- Tab 4: RESEÑAS -->
        <button (click)="store.setTab('reviews')"
                [ngClass]="{
                  'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-extrabold shadow-[0_0_20px_rgba(239,68,68,0.45)] border-amber-400/50': store.activeTab() === 'reviews',
                  'text-slate-400 hover:text-amber-300 hover:bg-red-950/30 border-transparent': store.activeTab() !== 'reviews'
                }"
                class="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border transition-all duration-200 select-none whitespace-nowrap">
          <span>⭐</span>
          <span>RESEÑAS</span>
          <span class="px-1.5 py-0.2 text-[10px] rounded-full bg-amber-500/25 text-amber-300 font-bold hidden md:inline-block border border-amber-500/30">
            5.0 ★
          </span>
        </button>

      </div>
    </nav>
  `
})
export class NavigationTabsComponent {
  store = inject(StoreService);
}
