import { Injectable } from '@angular/core';
import { DisplayStateStrategy } from '../../interfaces/display-state-strategy.interface';
import { BodyDisplayStateStrategy } from './body-display-state';
import { IdDisplayStateStrategy } from './id-display-state';
import { TitleDisplayStateStrategy } from './title-display-state';
import { UserIdDisplayStateStrategy } from './user-id-display-state';

@Injectable({
  providedIn: 'root',
})

// This service is used to determine the next display state for an item, based on the strategy pattern
export class DisplayStateService {
  private strategies: { [key: string]: DisplayStateStrategy } = {
    title: new TitleDisplayStateStrategy(),
    userId: new UserIdDisplayStateStrategy(),
    id: new IdDisplayStateStrategy(),
    body: new BodyDisplayStateStrategy(),
  };

  getNextDisplayState(currentState: string): string {
    const strategy = this.strategies[currentState];
    return strategy.getNextDisplayState();
  }
}
