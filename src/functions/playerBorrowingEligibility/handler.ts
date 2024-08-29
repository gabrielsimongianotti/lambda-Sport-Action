import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import "reflect-metadata"
import { AppDataSource } from 'src/infra/ormconfig';
import schema from './schema';
import { PlayerBorrowingEligibility } from 'src/infra/entities';
import playerBorrowingEligibilityUseCases from 'src/use-cases/playerBorrowingEligibility';

const playerBorrowingEligibilityCreate: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  await AppDataSource.initialize()

  const playerBorrowingEligibility = new PlayerBorrowingEligibility()
  const { started } = event.body

  playerBorrowingEligibility.started = started == "true"

  const result = await playerBorrowingEligibilityUseCases
    .create(playerBorrowingEligibility);

  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
    result
  });
};

export const main = middyfy(playerBorrowingEligibilityCreate);
