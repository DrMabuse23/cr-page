
export class CrApiBase {
  private protocol = 'https://';
  private host = 'api.cr-api.com';
  public clanId = '8CVPP8';

  public get baseUrl() {
    return `${this.protocol}${this.host}`;
  }
}
