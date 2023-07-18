import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { ItemCardComponent } from './item/item-card/item-card.component';

@NgModule({
  declarations: [ItemComponent, ItemCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemComponent }]),
  ],
})
export class ItemModule {}
