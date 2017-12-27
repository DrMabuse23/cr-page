import { ClanModule } from './clan.module';

describe('ClanModule', () => {
  let clanModule: ClanModule;

  beforeEach(() => {
    clanModule = new ClanModule();
  });

  it('should create an instance', () => {
    expect(clanModule).toBeTruthy();
  });
});
