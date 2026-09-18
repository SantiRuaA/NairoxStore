import { Injectable, signal, computed } from '@angular/core';
import { Account } from '../models/account.model';
import { DiamondPackage } from '../models/diamond.model';
import { Review } from '../models/review.model';
import { MOCK_ACCOUNTS } from '../data/accounts.data';
import { MOCK_DIAMOND_PACKAGES } from '../data/diamonds.data';
import { MOCK_REVIEWS } from '../data/reviews.data';

export type StoreTab = 'info' | 'accounts' | 'diamonds' | 'reviews';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // Store Settings
  readonly storeName = 'Nairoxstoreff';
  readonly whatsappNumber = '51999999999'; // Modificable
  readonly tiktokUrl = 'https://www.tiktok.com/@nairoxstoreff';
  readonly instagramUrl = 'https://www.instagram.com/nairoxstoreff';

  // Navigation State
  readonly activeTab = signal<StoreTab>('info');

  // Accounts Catalog & Filter States
  readonly accounts = signal<Account[]>(MOCK_ACCOUNTS);
  readonly searchQuery = signal<string>('');
  readonly selectedRegion = signal<string>('all');
  readonly selectedSort = signal<'popular' | 'price-asc' | 'price-desc' | 'level'>('popular');
  readonly selectedAccount = signal<Account | null>(null);
  readonly isAccountModalOpen = signal<boolean>(false);

  // Diamonds Catalog
  readonly diamondPackages = signal<DiamondPackage[]>(MOCK_DIAMOND_PACKAGES);
  readonly playerId = signal<string>('');
  readonly playerServer = signal<string>('Sudamérica / EE.UU.');

  // Reviews State
  readonly reviews = signal<Review[]>(MOCK_REVIEWS);
  readonly isReviewModalOpen = signal<boolean>(false);

  // Live Stats Counter
  readonly accountsSold = signal<number>(720);
  readonly positiveRating = signal<string>('99.9%');
  readonly responseTime = signal<string>('< 2 min');

  // Support Chat Widget State
  readonly isChatOpen = signal<boolean>(false);
  readonly unreadChatCount = signal<number>(3);

  // Roulette / Flash Discount State
  readonly isRouletteOpen = signal<boolean>(false);
  readonly wonDiscount = signal<string | null>(null);

  // Live Toast Notification
  readonly liveToast = signal<{ title: string; text: string; time: string; image?: string } | null>(null);

  // Computed Filtered Accounts
  readonly filteredAccounts = computed(() => {
    let list = this.accounts();
    const query = this.searchQuery().toLowerCase().trim();
    const region = this.selectedRegion();
    const sort = this.selectedSort();

    if (query) {
      list = list.filter(acc => 
        acc.title.toLowerCase().includes(query) ||
        acc.id.toLowerCase().includes(query) ||
        acc.tags.some(tag => tag.toLowerCase().includes(query)) ||
        acc.exclusiveSkins.some(skin => skin.toLowerCase().includes(query)) ||
        acc.evoWeapons.some(evo => evo.name.toLowerCase().includes(query))
      );
    }

    if (region !== 'all') {
      list = list.filter(acc => acc.region.toLowerCase().includes(region.toLowerCase()));
    }

    // Sort
    return [...list].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'level') return b.level - a.level;
      return b.likes - a.likes;
    });
  });

  constructor() {
    this.startLiveNotificationCycle();
  }

  setTab(tab: StoreTab) {
    this.activeTab.set(tab);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  }

  openAccountModal(account: Account) {
    this.selectedAccount.set(account);
    this.isAccountModalOpen.set(true);
  }

  closeAccountModal() {
    this.isAccountModalOpen.set(false);
  }

  toggleChat() {
    this.isChatOpen.update(v => !v);
    if (this.isChatOpen()) {
      this.unreadChatCount.set(0);
    }
  }

  toggleRoulette() {
    this.isRouletteOpen.update(v => !v);
  }

  addReview(newReview: Omit<Review, 'id' | 'date' | 'likesCount'>) {
    const review: Review = {
      ...newReview,
      id: `REV-${Date.now()}`,
      date: 'Hace un momento',
      likesCount: 1
    };
    this.reviews.update(prev => [review, ...prev]);
  }

  getWhatsAppLinkForAccount(account: Account): string {
    const text = `🎮 ¡Hola Nairoxstoreff! Deseo comprar la siguiente cuenta:%0A%0A` +
      `🆔 Código: *${account.id}*%0A` +
      `🏆 Título: *${account.title}*%0A` +
      `💵 Precio: *$${account.price} USD*%0A` +
      `🌎 Región: *${account.region}*%0A` +
      `⭐ Nivel: *${account.level}*%0A%0A` +
      `¿Sigue disponible y cuáles son los medios de pago?`;
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  getWhatsAppLinkForDiamonds(pack: DiamondPackage, idPlayer: string): string {
    const playerIdText = idPlayer ? `%0A🆔 ID de Jugador: *${idPlayer}* (${this.playerServer()})` : '';
    const text = `💎 ¡Hola Nairoxstoreff! Deseo recargar el siguiente paquete de Free Fire:%0A%0A` +
      `📦 Paquete: *${pack.name} - ${pack.diamonds}💎 ${pack.bonus ? '(+' + pack.bonus + ' bonus)' : ''}*%0A` +
      `💵 Precio: *$${pack.price} USD*` +
      `${playerIdText}%0A%0A` +
      `¿Me indicas los datos para transferir y recargar de inmediato?`;
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  getWhatsAppDirectLink(customMessage?: string): string {
    const msg = customMessage || '¡Hola Nairoxstoreff! Deseo información sobre cuentas disponibles y recargas de diamantes.';
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  private startLiveNotificationCycle() {
    const sampleEvents = [
      { buyer: 'Rodrigo M. (Perú)', item: 'Cuenta Sakura S1 (NX-892)', time: 'hace 3 min' },
      { buyer: 'Sebastián D. (Colombia)', item: 'Pack Gran Maestro 5600💎', time: 'hace 6 min' },
      { buyer: 'Emiliano V. (México)', item: 'Cuenta Criminal Rojo (NX-741)', time: 'hace 11 min' },
      { buyer: 'Lucas A. (Chile)', item: 'Membresía Semanal + 520💎', time: 'hace 14 min' },
      { buyer: 'Alejandro K. (Ecuador)', item: 'Cuenta 12 Evolutivas Max (NX-650)', time: 'hace 18 min' },
    ];

    let index = 0;
    setInterval(() => {
      const event = sampleEvents[index % sampleEvents.length];
      this.liveToast.set({
        title: '🔥 ¡Nueva Entrega Completada!',
        text: `${event.buyer} adquirió ${event.item}`,
        time: event.time
      });
      index++;

      setTimeout(() => {
        this.liveToast.set(null);
      }, 5000);
    }, 18000);
  }
}
