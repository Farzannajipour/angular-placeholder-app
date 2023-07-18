import { TestBed } from '@angular/core/testing';
import { DisplayStateService } from './display-state.service';

describe('DisplayStateService', () => {
  let service: DisplayStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayStateService],
    });
    service = TestBed.inject(DisplayStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the next display state for title strategy', () => {
    const strategyKey = 'title';
    const nextState = service.getNextDisplayState(strategyKey);

    expect(nextState).toBe('userId');
  });

  it('should return the next display state for userId strategy', () => {
    const strategyKey = 'userId';
    const nextState = service.getNextDisplayState(strategyKey);

    expect(nextState).toBe('id');
  });

  it('should return the next display state for id strategy', () => {
    const strategyKey = 'id';
    const nextState = service.getNextDisplayState(strategyKey);

    expect(nextState).toBe('body');
  });

  it('should return the next display state for body strategy', () => {
    const strategyKey = 'body';
    const nextState = service.getNextDisplayState(strategyKey);

    expect(nextState).toBe('title');
  });
});
