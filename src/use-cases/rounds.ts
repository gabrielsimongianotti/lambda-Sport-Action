import { Rounds } from 'src/infra/entities';
import roundsRepository from 'src/infra/repositories/roundsRepository';


const create = async (
    rounds: Rounds
): Promise<Rounds> => {
    const result = await roundsRepository
        .create(
            rounds
        );
    return result
}

const list = async (): Promise<Rounds[]> => {
    const result = await roundsRepository.list();
    return result
}

export default { create, list }