import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { db } from '@/libs/DB';
import { logger } from '@/libs/Logger';
import { counterSchema } from '@/models/Schema';

export const CurrentCount = async () => {
  // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
  // The default value is 0 when there is no `x-e2e-random-id` header
  const id = Number((await headers()).get('x-e2e-random-id')) ?? 0;
  const result = await db.query.counterSchema.findMany({
    where: eq(counterSchema.id, id),
  });
  const count = result[0]?.count ?? 0;

  logger.info('Counter fetched successfully');

  return (
    <div>
      {count}
    </div>
  );
};
