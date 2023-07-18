import { DisplayStateStrategy } from '../../interfaces/display-state-strategy.interface';

export class UserIdDisplayStateStrategy implements DisplayStateStrategy {
  getNextDisplayState(): string {
    return 'id';
  }
}
