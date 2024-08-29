import { RoundsPlayed } from '../entities'
import { AppDataSource } from '../ormconfig';
const roundsPlayedRepository = AppDataSource.getRepository(
    RoundsPlayed
)

const create = async (roundsPlayed: RoundsPlayed): Promise<RoundsPlayed> => {
    const result = await roundsPlayedRepository.save(roundsPlayed);
    return result
}

const list = async (): Promise<RoundsPlayed[]> => {
    const result = await roundsPlayedRepository.find()
    return result
}

export default { create, list }