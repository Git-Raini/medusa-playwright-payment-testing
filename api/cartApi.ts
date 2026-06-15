import { APIRequestContext } from '@playwright/test';

export class CartApi {

  constructor(private request: APIRequestContext) {}

  async createCart() {
    return await this.request.post('/store/carts');
  }

  async getCart(cartId: string) {
    return await this.request.get(`/store/carts/${cartId}`);
  }
}