import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import "reflect-metadata"
import { AppDataSource } from 'src/infra/ormconfig';
import schema from './schema';
import { Player } from 'src/infra/entities';
import playerUsecase from 'src/use-cases/player';

const divisionsCreate: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  await AppDataSource.initialize()

  const player = new Player()
  const { borrowing, matches_played, name, team } = event.body

  player.borrowing = borrowing
  player.matches_played = parseInt(matches_played)
  player.name = name
  player.team = team

  const result = await playerUsecase.create(player);
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
    result
  });
};

export const main = middyfy(divisionsCreate);
