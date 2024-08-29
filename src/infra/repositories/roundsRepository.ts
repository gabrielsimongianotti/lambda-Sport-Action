import { Rounds } from '../entities'
import { AppDataSource } from '../ormconfig';
const roundsRepository = AppDataSource.getRepository(
    Rounds
)

const create = async (rounds: Rounds): Promise<Rounds> => {
    const result = await roundsRepository.save(rounds);
    return result
}

const list = async (): Promise<Rounds[]> => {
    const result = await roundsRepository.find()
    return result
}

export default { create, list }