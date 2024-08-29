import { RoundsPlayed } from 'src/infra/entities';
import roundsPlayedRepository from 'src/infra/repositories/roundsPlayedRepository';


const create = async (
    roundsPlayed:
        RoundsPlayed
): Promise<RoundsPlayed> => {
    const result = await roundsPlayedRepository
        .create(
            roundsPlayed
        );
    return result
}

const list = async (): Promise<RoundsPlayed[]> => {
    const result = await roundsPlayedRepository.list();
    return result
}

export default { create, list }