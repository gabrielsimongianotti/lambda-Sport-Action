import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import "reflect-metadata"
import { AppDataSource } from 'src/infra/ormconfig';
import schema from './schema';
import { Divisions } from 'src/infra/entities';
import divisionsUsecase from 'src/use-cases/divisions';

const divisionsCreate: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  await AppDataSource.initialize()

  const division = new Divisions()
  const { rules } = event.body

  division.rules = rules

  const result = await divisionsUsecase.create(division);
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
    result
  });
};

export const main = middyfy(divisionsCreate);
