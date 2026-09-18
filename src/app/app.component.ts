import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavigationTabsComponent } from './components/navigation-tabs/navigation-tabs.component';
import { InfoTabComponent } from './components/info-tab/info-tab.component';
import { AccountsTabComponent } from './components/accounts-tab/accounts-tab.component';
import { DiamondsTabComponent } from './components/diamonds-tab/diamonds-tab.component';
import { ReviewsTabComponent } from './components/reviews-tab/reviews-tab.component';
import { AccountModalComponent } from './components/account-modal/account-modal.component';
import { FloatingWidgetsComponent } from './components/floating-widgets/floating-widgets.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationTabsComponent,
    InfoTabComponent,
    AccountsTabComponent,
    DiamondsTabComponent,
    ReviewsTabComponent,
    AccountModalComponent,
    FloatingWidgetsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  store = inject(StoreService);
}
