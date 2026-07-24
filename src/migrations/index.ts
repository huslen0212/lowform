import * as migration_20260724_072625 from './20260724_072625';

export const migrations = [
  {
    up: migration_20260724_072625.up,
    down: migration_20260724_072625.down,
    name: '20260724_072625'
  },
];
