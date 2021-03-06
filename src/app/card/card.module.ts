import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardService } from './shared/card.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './component/card-list/card-list.component';

@NgModule({
  imports: [IonicModule, CommonModule, HttpClientModule],
  providers: [CardService],
  declarations: [CardDeckPage, CardListComponent]
})
export class CardPageModule {}
