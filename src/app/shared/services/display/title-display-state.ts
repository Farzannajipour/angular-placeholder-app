import { DisplayStateStrategy } from "../../interfaces/display-state-strategy.interface";

export class TitleDisplayStateStrategy implements DisplayStateStrategy {
  getNextDisplayState(): string {
    return 'userId';
  }
}
