/*
 * The Alluxio Open Foundation licenses this work under the Apache License, version 2.0
 * (the "License"). You may not use this work except in compliance with the License, which is
 * available at www.apache.org/licenses/LICENSE-2.0
 *
 * This software is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied, as more fully set forth in the License.
 *
 * See the NOTICE file distributed with this work for information regarding copyright ownership.
 */

import { IFileBlockInfo } from '..';

export interface IFileInfo {
  absolutePath: string;
  blockSizeBytes: string;
  blocksOnTier: {
    [tierAlias: string]: IFileBlockInfo[];
  };
  creationTime: string;
  fileLocations: string[];
  group: string;
  id: number;
  inAlluxio: boolean;
  inAlluxioPercentage: number;
  isDirectory: boolean;
  mode: string;
  modificationTime: string;
  name: string;
  owner: string;
  persistenceState: string;
  pinned: boolean;
  size: string;
}