// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
};

export class AppSettings {
  public static readonly API_ENDPOINT = 'http://localhost:3000/api/';
  public static readonly HOME_CONTENT = '599776b7bfa5ed9093e67eb4';
  public static readonly ARTICLE_CATEGORY_NAV = '599775d2bfa5ed9093e67eb1';
  // Auth0
  public static readonly CALLBACK_URL = 'http://localhost:4200/callback/';
}
