import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemService } from './shared/services/item.service';
import { ItemEffects } from './shared/state/item.effects';
import { itemReducer } from './shared/state/item.reducers';
import { DisplayStateService } from './shared/services/display/display-state.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ items: itemReducer }),
    EffectsModule.forRoot([ItemEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ ItemService, DisplayStateService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
