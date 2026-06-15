import { APIRequestContext } from '@playwright/test';

export class MedusaApiClient {
  constructor(private request: APIRequestContext) {}

  async getCart(cartId: string) {
    return await this.request.get(`/store/carts/${cartId}`);
  }
}