import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CraftyrolAppComponent } from '../app/craftyrol.component';

beforeEachProviders(() => [CraftyrolAppComponent]);

describe('App: Craftyrol', () => {
  it('should create the app',
      inject([CraftyrolAppComponent], (app: CraftyrolAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'craftyrol works!\'',
      inject([CraftyrolAppComponent], (app: CraftyrolAppComponent) => {
    expect(app.title).toEqual('craftyrol works!');
  }));
});
