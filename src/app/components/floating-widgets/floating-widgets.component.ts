import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../../services/store.service';
import confetti from 'canvas-confetti';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  time: string;
  buttons?: { label: string; action: () => void }[];
}

@Component({
  selector: 'app-floating-widgets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Live Toast Purchase Notification (Bottom Left) -->
    @if (store.liveToast(); as toast) {
      <div class="fixed bottom-24 left-4 z-40 max-w-xs sm:max-w-sm p-3.5 rounded-2xl bg-[#170a13]/95 border-2 border-red-500/50 shadow-[0_0_25px_rgba(239,68,68,0.35)] backdrop-blur-md animate-bounce-short">
        <div class="flex items-start gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500/25 to-amber-500/20 border border-amber-500/40 flex items-center justify-center text-lg flex-shrink-0">
            🔥
          </div>
          <div class="space-y-0.5">
            <h5 class="text-xs font-black text-amber-300">{{ toast.title }}</h5>
            <p class="text-[11px] text-slate-200 leading-tight font-medium">{{ toast.text }}</p>
            <span class="text-[9px] text-amber-200/60 block">{{ toast.time }}</span>
          </div>
        </div>
      </div>
    }

    <!-- Floating Action Icons (Left/Bottom Stack) -->
    <div class="fixed bottom-6 left-4 sm:left-6 z-40 flex flex-col gap-3">
      
      <!-- 1. Flash Roulette Button (⚡) - Golden Yellow Theme -->
      <button (click)="openRoulette()"
              title="Gira la Ruleta Gamer y gana descuentos"
              class="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 text-black font-black text-xl shadow-[0_0_25px_rgba(245,158,11,0.6)] border-2 border-yellow-100 flex items-center justify-center transform hover:scale-110 transition-all hover:rotate-12 group">
        ⚡
        <span class="absolute left-14 px-3 py-1 bg-black/95 text-yellow-300 text-[11px] font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-yellow-500/40 shadow-md">
          Ruleta de Descuento
        </span>
      </button>

      <!-- 2. Support Bot Button with badge "3" (🤖) - Fiery Red Theme -->
      <button (click)="store.toggleChat()"
              title="Asistente Virtual Nairox"
              class="relative w-12 h-12 rounded-full bg-gradient-to-tr from-red-600 via-rose-600 to-amber-500 text-white text-xl shadow-[0_0_25px_rgba(239,68,68,0.5)] border-2 border-red-300 flex items-center justify-center transform hover:scale-110 transition-all group">
        🤖
        @if (store.unreadChatCount() > 0) {
          <span class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-yellow-400 text-black font-black text-[10px] flex items-center justify-center border-2 border-[#06060a] animate-pulse">
            {{ store.unreadChatCount() }}
          </span>
        }
        <span class="absolute left-14 px-3 py-1 bg-black/95 text-red-300 text-[11px] font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-red-500/40 shadow-md">
          Chat de Asistencia
        </span>
      </button>

      <!-- 3. WhatsApp Direct Glowing Button (💬) -->
      <a [href]="store.getWhatsAppDirectLink()" target="_blank" rel="noopener noreferrer"
         title="Chatear por WhatsApp con un Asesor"
         class="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 text-white text-2xl shadow-[0_0_25px_rgba(16,185,129,0.6)] border-2 border-emerald-200 flex items-center justify-center transform hover:scale-110 transition-all group">
        💬
        <span class="absolute left-14 px-3 py-1 bg-black/95 text-emerald-300 text-[11px] font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-500/40 shadow-md">
          WhatsApp Asesor 24/7
        </span>
      </a>
    </div>

    <!-- Interactive AI Support Chatbot Modal (Fiery Red/Amber Theme) -->
    @if (store.isChatOpen()) {
      <div class="fixed bottom-20 left-4 sm:left-6 z-50 w-[90vw] sm:w-96 max-h-[500px] bg-[#140a13] border-2 border-red-500/40 rounded-2xl shadow-[0_0_45px_rgba(239,68,68,0.3)] flex flex-col overflow-hidden animate-fadeIn">
        
        <!-- Chat Header -->
        <div class="p-3.5 bg-[#1e0d19] border-b border-red-500/30 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="relative">
              <span class="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/30 to-amber-500/30 border border-amber-400 flex items-center justify-center text-base">
                🤖
              </span>
              <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black"></span>
            </div>
            <div>
              <h4 class="text-xs font-black text-white">NairoxBot • Soporte Gamer</h4>
              <span class="text-[10px] text-amber-300 font-semibold">En línea para ayudarte</span>
            </div>
          </div>

          <button (click)="store.toggleChat()" class="text-slate-400 hover:text-white text-xs font-bold px-2 py-1">
            ✕
          </button>
        </div>

        <!-- Chat Messages Body -->
        <div class="flex-1 p-3.5 space-y-3 overflow-y-auto max-h-72 text-xs">
          @for (msg of chatMessages(); track $index) {
            <div class="flex flex-col" [class.items-end]="msg.sender === 'user'" [class.items-start]="msg.sender === 'bot'">
              <div class="max-w-[85%] p-3 rounded-xl space-y-1"
                   [ngClass]="msg.sender === 'user' ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-br-none shadow-md' : 'bg-[#1e0e1a] text-slate-200 border border-red-500/25 rounded-bl-none'">
                <p class="leading-relaxed">{{ msg.text }}</p>
                
                <!-- Quick Response Buttons inside Bot Message -->
                @if (msg.buttons && msg.buttons.length > 0) {
                  <div class="flex flex-wrap gap-1.5 pt-2 mt-1 border-t border-red-500/20">
                    @for (btn of msg.buttons; track btn.label) {
                      <button (click)="btn.action()"
                              class="px-2.5 py-1 rounded-lg bg-[#2a101f] hover:bg-[#38162b] border border-amber-500/40 text-amber-300 text-[10px] font-bold transition-all">
                        {{ btn.label }}
                      </button>
                    }
                  </div>
                }
              </div>
              <span class="text-[9px] text-amber-200/50 mt-0.5 px-1">{{ msg.time }}</span>
            </div>
          }
        </div>

        <!-- Quick Question Prompts -->
        <div class="p-2 bg-[#0e050d] border-t border-red-500/20 flex gap-1.5 overflow-x-auto no-scrollbar">
          <button (click)="askBot('¿Cómo comprar una cuenta?')" class="px-2.5 py-1 rounded-full bg-[#200d1a] hover:bg-[#301428] text-amber-200 text-[10px] whitespace-nowrap border border-red-500/20">
            🛒 ¿Cómo comprar?
          </button>
          <button (click)="askBot('¿Qué métodos de pago tienen?')" class="px-2.5 py-1 rounded-full bg-[#200d1a] hover:bg-[#301428] text-amber-200 text-[10px] whitespace-nowrap border border-red-500/20">
            💳 Métodos de Pago
          </button>
          <button (click)="askBot('¿Cómo recargo diamantes?')" class="px-2.5 py-1 rounded-full bg-[#200d1a] hover:bg-[#301428] text-amber-200 text-[10px] whitespace-nowrap border border-red-500/20">
            💎 Recargar Diamantes
          </button>
        </div>

        <!-- Chat Input Footer -->
        <div class="p-2.5 bg-[#170a13] border-t border-red-500/20 flex items-center gap-2">
          <input type="text" [(ngModel)]="userMessageInput"
                 (keyup.enter)="sendUserMessage()"
                 placeholder="Escribe tu consulta..."
                 class="flex-1 bg-[#0b040a] border border-red-500/30 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400">
          <button (click)="sendUserMessage()"
                  class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-black font-black text-xs hover:from-red-500 hover:to-yellow-300 transition-colors">
            ➤
          </button>
        </div>

      </div>
    }

    <!-- Discount Roulette Modal (Golden Yellow Theme) -->
    @if (isRouletteVisible()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
           (click)="isRouletteVisible.set(false)">
        <div class="relative w-full max-w-sm bg-[#140810] border-2 border-yellow-400/60 rounded-3xl p-6 shadow-[0_0_55px_rgba(245,158,11,0.4)] text-center space-y-4"
             (click)="$event.stopPropagation()">
          
          <button (click)="isRouletteVisible.set(false)" class="absolute top-4 right-4 text-slate-400 hover:text-white font-bold text-sm">
            ✕
          </button>

          <div class="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-yellow-400 mx-auto flex items-center justify-center text-3xl animate-bounce shadow-md">
            🎰
          </div>

          <h3 class="text-xl font-black font-display text-white">Ruleta de Descuento Gamer</h3>
          <p class="text-xs text-amber-200/90 font-medium">
            ¡Gira la ruleta y reclama tu cupón exclusivo para tu próxima cuenta o recarga!
          </p>

          <!-- Result Display -->
          @if (roulettePrize()) {
            <div class="p-4 rounded-2xl bg-amber-500/20 border border-yellow-400 space-y-1">
              <span class="text-[11px] uppercase font-black text-amber-300 block">¡Felicidades Ganaste!</span>
              <div class="text-xl font-black text-white font-display">{{ roulettePrize() }}</div>
              <span class="text-[10px] text-amber-200 block font-semibold">Menciona este código al comprar por WhatsApp</span>
            </div>

            <a [href]="store.getWhatsAppDirectLink('¡Hola Nairoxstoreff! Acabo de ganar en la ruleta el premio: ' + roulettePrize() + '. ¿Cómo lo reclamo en mi compra?')" target="_blank" rel="noopener noreferrer"
               class="w-full py-2.5 rounded-xl font-black text-xs text-black bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-white shadow-md block border border-yellow-200">
              💬 Reclamar en WhatsApp
            </a>
          } @else {
            <button (click)="spinRoulette()" [disabled]="isSpinning()"
                    class="w-full py-3.5 rounded-xl font-black text-sm text-black bg-gradient-to-r from-red-600 via-amber-400 to-yellow-300 hover:from-yellow-300 hover:to-white shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all border border-yellow-200">
              {{ isSpinning() ? 'GIRANDO RULETA... 🔥' : '🎲 ¡GIRAR AHORA!' }}
            </button>
          }

        </div>
      </div>
    }
  `
})
export class FloatingWidgetsComponent {
  store = inject(StoreService);
  isRouletteVisible = signal<boolean>(false);
  isSpinning = signal<boolean>(false);
  roulettePrize = signal<string | null>(null);

  userMessageInput = '';

  chatMessages = signal<ChatMessage[]>([
    {
      sender: 'bot',
      text: '¡Hola gamer! 🔥 Bienvenido a Nairoxstoreff. ¿En qué te puedo ayudar hoy?',
      time: '12:00',
      buttons: [
        { label: '📁 Ver Cuentas', action: () => this.store.setTab('accounts') },
        { label: '💎 Recargar Diamantes', action: () => this.store.setTab('diamonds') },
        { label: '📱 Hablar en WhatsApp', action: () => window.open(this.store.getWhatsAppDirectLink(), '_blank') }
      ]
    }
  ]);

  openRoulette() {
    this.roulettePrize.set(null);
    this.isRouletteVisible.set(true);
  }

  spinRoulette() {
    this.isSpinning.set(true);
    setTimeout(() => {
      const prizes = [
        '10% DE DESCUENTO EN CUENTAS (CÓDIGO: NAIROX10)',
        '100 DIAMANTES GRATIS EN RECARGAS (CÓDIGO: BOOYAH100)',
        '15% DE DESCUENTO EN CUENTA SAKURA (CÓDIGO: SAKURA15)',
        'PASE BOOYAH CON 20% OFF (CÓDIGO: BOOYAH20)'
      ];
      const selected = prizes[Math.floor(Math.random() * prizes.length)];
      this.roulettePrize.set(selected);
      this.isSpinning.set(false);

      // Trigger Confetti!
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }, 1500);
  }

  sendUserMessage() {
    if (!this.userMessageInput.trim()) return;
    const text = this.userMessageInput;
    this.userMessageInput = '';

    this.chatMessages.update(msgs => [
      ...msgs,
      { sender: 'user', text, time: 'Ahora' }
    ]);

    setTimeout(() => {
      this.botReply(text);
    }, 600);
  }

  askBot(question: string) {
    this.chatMessages.update(msgs => [
      ...msgs,
      { sender: 'user', text: question, time: 'Ahora' }
    ]);
    setTimeout(() => {
      this.botReply(question);
    }, 500);
  }

  private botReply(query: string) {
    const q = query.toLowerCase();
    let reply = '';
    let buttons: { label: string; action: () => void }[] = [];

    if (q.includes('cuenta') || q.includes('comprar')) {
      reply = 'Para comprar una cuenta, entra a la pestaña "DISPONIBLES", elige la que más te guste y dale clic a "Comprar por WhatsApp". Te entregaremos el Gmail con asesoría en vivo.';
      buttons = [
        { label: '📁 Ir al Catálogo de Cuentas', action: () => this.store.setTab('accounts') }
      ];
    } else if (q.includes('pago') || q.includes('metodo') || q.includes('moneda')) {
      reply = 'Aceptamos Yape, Plin, BCP, Nequi, Daviplata, Bancolombia, OXXO, Mercado Pago, Binance USDT y PayPal sin comisiones extras.';
      buttons = [
        { label: 'ℹ️ Ver Métodos de Pago', action: () => this.store.setTab('info') }
      ];
    } else if (q.includes('diamante') || q.includes('recarga') || q.includes('id')) {
      reply = 'Recargamos con solo tu ID de Free Fire en 1 a 3 minutos. Todos los paquetes cuentan con bono extra de diamantes.';
      buttons = [
        { label: '💎 Ver Paquetes de Diamantes', action: () => this.store.setTab('diamonds') }
      ];
    } else {
      reply = '¿Deseas una atención personalizada? Puedes escribirnos directamente a nuestro WhatsApp oficial y un asesor te responderá al instante.';
      buttons = [
        { label: '💬 Abrir WhatsApp Oficial', action: () => window.open(this.store.getWhatsAppDirectLink(), '_blank') }
      ];
    }

    this.chatMessages.update(msgs => [
      ...msgs,
      { sender: 'bot', text: reply, time: 'Ahora', buttons }
    ]);
  }
}
