import { AppSettings } from '../../app.settings';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '7zKXLj195a0BfXJy7hHEVkqClMfx6hvI',
  domain: 'icws-tournament.eu.auth0.com',
  callbackURL: AppSettings.CALLBACK_URL
};
