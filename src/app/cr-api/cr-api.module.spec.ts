import { CrApiModule } from './cr-api.module';

describe('CrApiModule', () => {
  let crApiModule: CrApiModule;

  beforeEach(() => {
    crApiModule = new CrApiModule();
  });

  it('should create an instance', () => {
    expect(crApiModule).toBeTruthy();
  });
});
