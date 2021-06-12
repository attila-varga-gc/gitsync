import {LoggerProxy} from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';

import {CreateProps, DelProps, FetchProps, GitSyncJob} from '../gitSyncAPI';

export const create = async (props: CreateProps, logger: LoggerProxy): Promise<GitSyncJob> => {
  return {
    jobID: String(Math.floor(Math.random() * 1000000)),
    deployKey: 'ssh-rsa 1234',
    webhookURL: 'https://example.com',
    webhookSecret: '1234',
    syncStatusURL: 'https://example.com',
  };
};

export const fetch = async (props: FetchProps, logger: LoggerProxy): Promise<GitSyncJob> => {
  return {
    jobID: String(Math.floor(Math.random() * 1000000)),
    deployKey: 'ssh-rsa 1234',
    webhookURL: 'https://example.com',
    webhookSecret: '1234',
    syncStatusURL: 'https://example.com',
  };
};

export const del = async (props: DelProps, logger: LoggerProxy): Promise<void> => {};
