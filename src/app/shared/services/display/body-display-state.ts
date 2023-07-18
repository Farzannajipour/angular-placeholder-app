import { DisplayStateStrategy } from '../../interfaces/display-state-strategy.interface';

export class BodyDisplayStateStrategy implements DisplayStateStrategy {
  getNextDisplayState(): string {
    return 'title';
  }
}
