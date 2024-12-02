// services/substrateService.ts
import { ApiPromise, WsProvider } from '@polkadot/api';

export default class SubstrateService {
  private api: ApiPromise | null = null;
  private apip: ApiPromise | null = null; // people
  private chainId: string = 'kusama';
  private readonly WS_URL = 'wss://rpc.metaspan.io/'; // 'wss://rpc.ibp.network/';

  // Connect to the rpc server
  async connect(chainId: string): Promise<void> {
    if (!import.meta.client) {
      console.warn('SubstrateService is only available in the browser');
      return;
    }
    // if (this.api) {
    //   console.debug(`${chainId} API is already connected`);
    //   return;
    // }

    let provider = new WsProvider(this.WS_URL + chainId);
    this.api = await ApiPromise.create({ provider, noInitWarn: true });
    await this.api.isReady;

    provider = new WsProvider(this.WS_URL + 'people-' + chainId);
    this.apip = await ApiPromise.create({ provider, noInitWarn: true });
    await this.apip.isReady;

    // Handle api open event
    this.api.on('connected', (event) => {
      console.log('Connected to api', chainId);
    });
    // Handle api error event
    this.api.on('error', (event) => {
      console.log('api error', chainId, event);
    });
    // Handle api error event
    this.api.on('disconnected', (event) => {
      console.log('api disconnected', chainId, event);
    });
  }

  // Disconnect the API
  disconnect(): void {
    if (this.api) {
      this.api.disconnect();
      this.api = null;
    }
  }

  async getApi(chainId: string): Promise<ApiPromise | null> {
    if (this.api && this.chainId === chainId) {
      return this.api;
    } else {
      await this.connect(chainId);
      this.chainId = chainId;
      return this.api;
    }
  }
  async getApip(chainId: string): Promise<ApiPromise | null> {
    if (this.apip && this.chainId === chainId) {
      return this.apip;
    } else {
      await this.connect(chainId);
      this.chainId = chainId;
      return this.apip;
    }
  }

}
