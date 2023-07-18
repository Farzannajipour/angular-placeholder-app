import { DisplayStateStrategy } from '../../interfaces/display-state-strategy.interface';

export class IdDisplayStateStrategy implements DisplayStateStrategy {
  getNextDisplayState(): string {
    return 'body';
  }
}
