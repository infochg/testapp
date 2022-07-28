import { rest, setupWorker } from 'msw'

import { COLLECTIONITEMS } from './data/collectionItems'

export const worker = setupWorker(
  rest.get(
    'http://localhost:3000/getNftList',
    (req: any, res: any, ctx: any) => res(ctx.json(COLLECTIONITEMS)),
  ),
)
