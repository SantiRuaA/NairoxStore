import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Announcement Bar (Fiery Dark Red / Gold) -->
    <div class="w-full bg-[#12080a] border-b border-red-500/30 py-1.5 px-4 text-center text-xs sm:text-sm text-amber-300 font-medium flex items-center justify-center gap-2 shadow-md">
      <span class="text-base animate-bounce">🔥</span>
      <span class="font-extrabold tracking-wide text-white">Nairoxstoreff</span>
      <span class="text-red-500">•</span>
      <span class="text-slate-200">Tu tienda gamer #1 en Cuentas y Diamantes Free Fire</span>
      <span class="hidden md:inline-block px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-500 text-black rounded-full shadow-sm">
        100% OFICIAL
      </span>
    </div>

    <header class="relative pt-8 pb-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
      <!-- Glow ambient lights behind title (Fiery Crimson & Warm Amber) -->
      <div class="absolute top-8 w-[420px] h-36 bg-red-600/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div class="absolute top-12 w-80 h-32 bg-amber-500/15 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <!-- Main Logo (Fiery Red & Golden Yellow Aesthetic) -->
      <div class="text-center group cursor-pointer" (click)="store.setTab('info')">
        <div class="inline-flex items-center justify-center gap-1 mb-1">
          <span class="text-2xl sm:text-3xl filter drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]">🔥</span>
          <span class="text-[11px] sm:text-xs font-black tracking-[0.3em] uppercase text-amber-400 bg-amber-500/10 px-3 py-0.5 rounded-full border border-amber-500/30">
            TIENDA PREMIUM GAMER
          </span>
          <span class="text-2xl sm:text-3xl filter drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]">⚡</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-display uppercase select-none transition-transform duration-300 group-hover:scale-105">
          <span class="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">NAIROX</span><span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 drop-shadow-[0_0_30px_rgba(239,68,68,0.7)]">STORE</span><span class="text-amber-400 text-3xl sm:text-4xl md:text-5xl ml-1 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]">FF</span>
        </h1>
        <p class="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] text-slate-300 font-bold uppercase mt-2">
          CUENTAS PREMIUM & DIAMANTES FREE FIRE
        </p>
      </div>

      <!-- 4 Trust Badges in 2x2 Grid (Revamped with Fiery Red / Amber Gold Styling) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl mt-8">
        <!-- Feature 1: Cuentas premium verificadas -->
        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-4 border border-red-500/30 bg-[#140c12]/85 shadow-[0_0_20px_rgba(239,68,68,0.12)] hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500/25 to-amber-500/20 border border-red-500/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
            💎
          </div>
          <div>
            <span class="text-sm sm:text-base font-extrabold text-white tracking-wide block">Cuentas premium verificadas</span>
            <span class="text-[11px] text-amber-200/70 block">Acceso completo & 100% legales</span>
          </div>
        </div>

        <!-- Feature 2: Entrega inmediata -->
        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-4 border border-amber-500/30 bg-[#16100c]/85 shadow-[0_0_20px_rgba(245,158,11,0.12)] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/25 to-yellow-500/20 border border-amber-500/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
            ⚡
          </div>
          <div>
            <span class="text-sm sm:text-base font-extrabold text-white tracking-wide block">Entrega inmediata</span>
            <span class="text-[11px] text-amber-200/70 block">En menos de 1 a 3 minutos</span>
          </div>
        </div>

        <!-- Feature 3: Cambio de datos al momento -->
        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-4 border border-red-500/30 bg-[#140c12]/85 shadow-[0_0_20px_rgba(239,68,68,0.12)] hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600/25 to-rose-500/20 border border-red-500/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
            🛡️
          </div>
          <div>
            <span class="text-sm sm:text-base font-extrabold text-white tracking-wide block">Cambio de datos al momento</span>
            <span class="text-[11px] text-amber-200/70 block">Traspaso seguro con asesor en vivo</span>
          </div>
        </div>

        <!-- Feature 4: Atención directa por WhatsApp -->
        <div class="glass-card rounded-2xl px-5 py-4 flex items-center gap-4 border border-amber-500/30 bg-[#16100c]/85 shadow-[0_0_20px_rgba(245,158,11,0.12)] hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-500/25 to-emerald-500/20 border border-yellow-500/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
            📱
          </div>
          <div>
            <span class="text-sm sm:text-base font-extrabold text-white tracking-wide block">Atención directa por WhatsApp</span>
            <span class="text-[11px] text-amber-200/70 block">Soporte humano 24/7 disponible</span>
          </div>
        </div>
      </div>

      <!-- Counter Card (720+ CUENTAS VENDIDAS) - Styled with Red/Amber Magma Border -->
      <div class="mt-7 w-full max-w-xs sm:max-w-md">
        <div class="rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500/60 via-amber-500/60 to-yellow-400/60 p-[2px] shadow-[0_0_35px_rgba(239,68,68,0.3)] hover:shadow-[0_0_45px_rgba(245,158,11,0.45)] transition-all transform hover:scale-102">
          <div class="rounded-[22px] bg-[#120a10]/95 backdrop-blur-md px-6 py-4 text-center">
            <div class="flex items-center justify-center gap-2">
              <span class="text-amber-400 text-2xl">🔥</span>
              <div class="text-4xl sm:text-5xl font-black font-display tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]">
                {{ store.accountsSold() }}+
              </div>
              <span class="text-red-500 text-2xl">⚡</span>
            </div>
            <div class="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 uppercase mt-1">
              CUENTAS VENDIDAS & ENTREGADAS
            </div>
            <div class="flex items-center justify-center gap-3 mt-2 text-[11px] text-slate-400">
              <span class="text-yellow-400 font-bold">★ 4.9/5.0 Reseñas</span>
              <span>•</span>
              <span class="text-emerald-400 font-bold">✓ 100% Confiable</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Social & Status Buttons Bar (TikTok, Instagram, En línea) -->
      <div class="flex flex-wrap items-center justify-center gap-3 mt-6">
        <!-- TikTok Button -->
        <a [href]="store.tiktokUrl" target="_blank" rel="noopener noreferrer"
           class="px-5 py-2.5 rounded-xl font-bold text-sm text-white flex items-center gap-2 bg-gradient-to-r from-[#1e0e14] via-[#2d1219] to-[#1e0e14] border border-red-500/50 hover:border-red-400 shadow-md hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5">
          <svg class="w-4 h-4 fill-red-400" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.32a6.33 6.33 0 0 0-.84-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.41a8.28 8.28 0 0 0 4.77 1.48V6.44a4.84 4.84 0 0 1-1-.25z"/>
          </svg>
          <span class="text-white">TikTok</span>
        </a>

        <!-- Instagram Button (Fiery Sunset Gradient) -->
        <a [href]="store.instagramUrl" target="_blank" rel="noopener noreferrer"
           class="px-5 py-2.5 rounded-xl font-bold text-sm text-white flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 border border-amber-500/40 hover:border-amber-300 shadow-md hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span class="text-white">Instagram</span>
        </a>

        <!-- Online Status Badge (Matching Red/Green/Gold Gamer Style) -->
        <div class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-300 bg-[#120a10]/90 border border-emerald-500/40 flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>En línea</span>
          <span class="text-[11px] text-amber-300 font-normal hidden sm:inline">(Respuesta &lt; 2 min)</span>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  store = inject(StoreService);
}
