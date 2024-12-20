import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Interval, Cron } from '@nestjs/schedule';

export type NodeStatus = 'Active' | 'Graduated' | 'Pending' | 'Removed';
export type ChainTerm = 'start' | 'end';

export interface INodeBase {
  identity: string;
  stash: string;
}

export interface INode extends INodeBase {
  status: NodeStatus;
}

export interface ITerm {
  start: string;
  end: string;
}

export interface ICohortData {
  backups: INodeBase[];
  nominators: string[];
  selected: INode[];
  statuses: Record<NodeStatus, string>;
  term: ITerm;
}

// export interface IChainData {
//   [cohortId: number]: ICohortData;
// }
export type TChainData = Record<number, ICohortData>;

const BASE_URL = 'https://nodes.web3.foundation/api/cohort/COHORT_ID/CHAIN_ID';

const cohorts = [1];

@Injectable()
export class NodesService implements OnModuleInit, OnModuleDestroy {
  private polkadotWS: WebSocket | null = null;
  private kusamaWS: WebSocket | null = null;

  private chains: Record<string, string> = {
    kusama: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    polkadot: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
  };

  private dataStore: Record<string, TChainData> = {
    polkadot: {} as TChainData,
    kusama: {} as TChainData,
  };

  async onModuleInit() {
    for (const cohortId of cohorts) {
      console.log('Fetching chain data for cohort', cohortId);
      await this.fetchChainData('polkadot', cohortId);
      await this.fetchChainData('kusama', cohortId);
    }
  }

  // Schedule a task to run every 5 minutes
  // @Cron('*/1 * * * * *')
  @Interval(5 * 60 * 1000) // Every 5 minutes
  async handleInterval() {
    console.log('Running scheduled task to fetch chain data');
    for (const cohortId of cohorts) {
      await this.fetchChainData('polkadot', cohortId);
      await this.fetchChainData('kusama', cohortId);
    }
  }

  onModuleDestroy() {
    // this.disconnect();
  }

  private async fetchChainData(chainId: string, cohortId: number) {
    console.log('fetchChainData', chainId);
    try {
      const url = BASE_URL.replace('COHORT_ID', '1')
        .replace('CHAIN_ID', chainId)
        .replace('COHORT_ID', cohortId.toString());
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ICohortData = await response.json();
      console.log('Data fetched:', data);
      this.dataStore[chainId][cohortId] = data;
      console.log(`Data updated for ${chainId}`);
    } catch (error) {
      console.error(`Failed to fetch data for ${chainId}:`, error.message);
    }
  }

  getSelected(chainId: string, cohortId: number): INode[] {
    console.log('getNodes', chainId);
    const ret = Array.from(this.dataStore[chainId][cohortId].selected);
    return ret;
  }

  getBackups(chainId: string, cohortId: number): INodeBase[] {
    console.log('getNodes', chainId);
    const ret = Array.from(this.dataStore[chainId][cohortId].backups);
    return ret;
  }

  getNominators(chainId: string, cohortId: number): string[] {
    console.log('getNodes', chainId);
    const ret = Array.from(this.dataStore[chainId][cohortId].nominators);
    return ret;
  }

  getTerm(chainId: string, cohortId): ITerm {
    console.log('getNodes', chainId);
    return this.dataStore[chainId][cohortId].term;
  }

  findNodeByName(chainId: string, cohortId: number, name: string): INode | INodeBase {
    console.log('findNodeByName', chainId, name);
    let node: INode | INodeBase;
    node = this.dataStore[chainId][cohortId].selected.find((node) => node.identity === name);
    if (!node) {
      node = this.dataStore[chainId][cohortId].backups.find((node) => node.identity === name);
    }
    return node;
  }

  findNodeByStash(chainId: string, cohortId: number, stash: string): INode | INodeBase {
    console.log('findNodeByStash', chainId, stash);
    let node: INode | INodeBase;
    node = this.dataStore[chainId][cohortId].selected.find((node) => node.stash === stash);
    if (!node) {
      node = this.dataStore[chainId][cohortId].backups.find((node) => node.stash === stash);
    }
    return node;
  }
}
