import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-info-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      
      <!-- Main Welcome Card (Fiery Red & Gold Redesign) -->
      <div class="glass-panel rounded-3xl p-6 sm:p-10 border border-red-500/30 bg-[#12080e]/90 shadow-2xl relative overflow-hidden text-center">
        <!-- Ambient fire glow behind -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[450px] h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-20 right-1/4 w-72 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="inline-flex items-center justify-center gap-2 mb-3">
          <span class="text-3xl sm:text-4xl animate-bounce">🔥</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black font-display text-white tracking-wide">
            Bienvenido a <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">Nairoxstoreff</span>
          </h2>
        </div>

        <p class="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium">
          Aquí encontrarás cuentas de Free Fire listas para jugar, con skins exclusivas, buen nivel, armas evolutivas al máximo y acceso completo asegurado.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button (click)="store.setTab('accounts')"
                  class="px-6 py-3.5 rounded-xl font-black text-sm sm:text-base text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-white shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-yellow-200">
            <span>📁 Explorar Cuentas Disponibles</span>
          </button>
          
          <button (click)="store.setTab('diamonds')"
                  class="px-6 py-3.5 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-[#200c14] to-[#30121b] border border-red-500/50 hover:border-red-400 hover:bg-[#381620] shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
            <span>💎 Recargar Diamantes por ID</span>
          </button>
        </div>
      </div>

      <!-- 3-Step Simple Purchase Guide -->
      <div class="glass-card rounded-2xl p-6 sm:p-8 border border-red-500/20 bg-[#120a12]/80">
        <div class="text-center mb-8">
          <span class="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-500/15 px-3.5 py-1 rounded-full border border-amber-500/30">
            FÁCIL & RÁPIDO
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-white mt-2 font-display">¿Cómo Comprar en Nairoxstoreff?</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Step 1 -->
          <div class="relative p-5 rounded-2xl bg-[#180e18]/80 border border-red-500/30 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white font-display font-black text-lg flex items-center justify-center mb-3 shadow-md">
              01
            </div>
            <h4 class="text-base font-bold text-white mb-1">Elige tu Cuenta o Pack</h4>
            <p class="text-xs sm:text-sm text-slate-300">
              Revisa nuestro catálogo con fotos reales, skins, armas evolutivas y nivel, o selecciona tu paquete de diamantes.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="relative p-5 rounded-2xl bg-[#180e18]/80 border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 text-black font-display font-black text-lg flex items-center justify-center mb-3 shadow-md">
              02
            </div>
            <h4 class="text-base font-bold text-white mb-1">Contacta por WhatsApp</h4>
            <p class="text-xs sm:text-sm text-slate-300">
              Haz clic en "Comprar por WhatsApp". Te atenderá un asesor oficial con el resumen exacto de tu pedido y datos de pago.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative p-5 rounded-2xl bg-[#180e18]/80 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white font-display font-black text-lg flex items-center justify-center mb-3 shadow-md">
              03
            </div>
            <h4 class="text-base font-bold text-white mb-1">Entrega & Traspaso Guiado</h4>
            <p class="text-xs sm:text-sm text-slate-300">
              Recibes las credenciales al instante y te acompañamos paso a paso en el cambio de correo, número y contraseña.
            </p>
          </div>
        </div>
      </div>

      <!-- Payment Methods Accepted -->
      <div class="glass-card rounded-2xl p-6 sm:p-8 border border-red-500/20 bg-[#120a12]/80 text-center">
        <span class="text-xs font-black uppercase tracking-widest text-yellow-400 bg-yellow-500/10 px-3.5 py-1 rounded-full border border-yellow-500/30">
          SIN COMISIONES OCULTAS
        </span>
        <h3 class="text-xl sm:text-2xl font-black text-white mt-2 mb-6 font-display">Métodos de Pago Disponibles</h3>

        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <!-- Remitly -->
          <div class="px-4 py-2.5 rounded-xl bg-[#0047FF]/20 border border-[#0047FF]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">💸</span>
            <span class="text-sm font-bold text-white">Remitly</span>
          </div>

          <!-- Intermex -->
          <div class="px-4 py-2.5 rounded-xl bg-[#006F39]/20 border border-[#006F39]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">💱</span>
            <span class="text-sm font-bold text-white">Intermex</span>
          </div>

          <!-- Ría -->
          <div class="px-4 py-2.5 rounded-xl bg-[#F47920]/20 border border-[#F47920]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">🟠</span>
            <span class="text-sm font-bold text-white">Ría</span>
          </div>

          <!-- Zelle -->
          <div class="px-4 py-2.5 rounded-xl bg-[#7411E2]/20 border border-[#7411E2]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">🟣</span>
            <span class="text-sm font-bold text-white">Zelle</span>
          </div>

          <!-- Banrural -->
          <div class="px-4 py-2.5 rounded-xl bg-[#005128]/20 border border-[#005128]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">🌾</span>
            <span class="text-sm font-bold text-white">Banrural</span>
          </div>

          <!-- Nequi -->
          <div class="px-4 py-2.5 rounded-xl bg-[#200030]/80 border border-purple-500/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">💜</span>
            <span class="text-sm font-bold text-white">Nequi</span>
          </div>

          <!-- Binance -->
          <div class="px-4 py-2.5 rounded-xl bg-[#f0b90b]/20 border border-[#f0b90b]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">🟡</span>
            <span class="text-sm font-extrabold text-yellow-300">Binance</span>
          </div>

          <!-- Transferencia mx -->
          <div class="px-4 py-2.5 rounded-xl bg-[#1e293b]/70 border border-slate-700 flex items-center gap-2 shadow-sm">
            <span class="text-base">🏦</span>
            <span class="text-sm font-bold text-slate-200">Transferencia mx</span>
          </div>

          <!-- Oxxo -->
          <div class="px-4 py-2.5 rounded-xl bg-[#e02020]/20 border border-red-500/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">🏪</span>
            <span class="text-sm font-bold text-white">Oxxo</span>
          </div>

          <!-- Pichincha -->
          <div class="px-4 py-2.5 rounded-xl bg-[#FFDD00]/20 border border-[#FFDD00]/50 flex items-center gap-2 shadow-sm">
            <span class="text-base">🇪🇨</span>
            <span class="text-sm font-bold text-yellow-100">Pichincha</span>
          </div>
        </div>
      </div>

      <!-- Interactive FAQ Accordion -->
      <div class="glass-card rounded-2xl p-6 sm:p-8 border border-red-500/20 bg-[#120a12]/80">
        <div class="text-center mb-6">
          <span class="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30">
            RESOLVEMOS TUS DUDAS
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-white mt-2 font-display">Preguntas Frecuentes (FAQ)</h3>
        </div>

        <div class="space-y-3 max-w-3xl mx-auto">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="rounded-xl border border-red-500/20 bg-[#170e18]/80 overflow-hidden transition-all">
              <button (click)="toggleFaq(i)"
                      class="w-full px-5 py-4 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-3 hover:text-amber-300 transition-colors">
                <span>{{ faq.question }}</span>
                <span class="text-amber-400 transform transition-transform duration-200 text-lg font-bold"
                      [class.rotate-180]="openFaqIndex() === i">
                  ▼
                </span>
              </button>
              
              @if (openFaqIndex() === i) {
                <div class="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-red-500/20 bg-[#0f070e]/80">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>
      </div>

      <!-- Trust Guarantee Banner (Fiery Crimson to Amber) -->
      <div class="rounded-3xl p-6 sm:p-8 border-2 border-red-500/50 bg-gradient-to-r from-[#240810] via-[#350d18] to-[#251008] shadow-[0_0_35px_rgba(239,68,68,0.25)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="space-y-1.5 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start gap-2">
            <span class="text-2xl">🛡️</span>
            <h4 class="text-lg sm:text-xl font-black text-white font-display">Garantía de Satisfacción 100%</h4>
          </div>
          <p class="text-xs sm:text-sm text-amber-100/80 max-w-xl leading-relaxed">
            Todas nuestras cuentas y recargas son verificadas antes de la entrega. Ofrecemos asistencia personalizada en vivo durante todo el proceso de cambio de datos.
          </p>
        </div>

        <a [href]="store.getWhatsAppDirectLink()" target="_blank" rel="noopener noreferrer"
           class="px-6 py-3.5 rounded-xl font-extrabold text-sm text-black bg-gradient-to-r from-emerald-400 to-green-300 hover:from-emerald-300 hover:to-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 whitespace-nowrap flex-shrink-0">
          <span>💬 Hablar con Asesor</span>
        </a>
      </div>

    </div>
  `
})
export class InfoTabComponent {
  store = inject(StoreService);
  openFaqIndex = signal<number | null>(0);

  faqs: FAQ[] = [
    {
      category: 'Cuentas',
      question: '¿Cómo se entregan las cuentas y el cambio de datos?',
      answer: 'Una vez confirmado tu pago por WhatsApp, te entregamos las credenciales de acceso (Gmail o Facebook nuevo y exclusivo). Un asesor te guía en directo para que vincules tu propio número telefónico, cambies la contraseña y actives la verificación en 2 pasos de tu propiedad absoluta.'
    },
    {
      category: 'Seguridad',
      question: '¿Las cuentas tienen riesgo de ser recuperadas?',
      answer: 'No. En Nairoxstoreff solo trabajamos con cuentas 100% desvinculadas de cualquier dueño anterior y creadas/limpiadas en correos nuevos sin números de recuperación antiguos. El control total pasa a ti.'
    },
    {
      category: 'Diamantes',
      question: '¿Cómo funciona la recarga de diamantes por ID?',
      answer: 'Solo necesitas proporcionar tu ID de jugador de Free Fire (y tu región). No requerimos contraseñas para las recargas de diamantes. La acreditación toma entre 1 y 3 minutos.'
    },
    {
      category: 'Pagos',
      question: '¿Qué monedas y métodos de pago aceptan?',
      answer: 'Aceptamos pagos en moneda local de Perú (Yape, Plin, BCP, BBVA, Interbank), Colombia (Nequi, Daviplata, Bancolombia), México (OXXO, SPEI, BBVA), Chile, Ecuador, Argentina, así como pagos internacionales vía Binance Pay (USDT) y PayPal.'
    },
    {
      category: 'Tiempo',
      question: '¿Cuánto tiempo tarda la entrega?',
      answer: 'La entrega de cuentas y recargas es inmediata. Nuestro tiempo promedio de respuesta y entrega por WhatsApp es menor a 1 a 3 minutos una vez verificado el comprobante.'
    }
  ];

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => (current === index ? null : index));
  }
}
