import { Player } from 'src/infra/entities';
import playerRepository from 'src/infra/repositories/playerRepository';


const create = async (
    player:
        Player
): Promise<Player> => {
    const result = await playerRepository
        .create(
            player
        );
    return result
}

const list = async (): Promise<Player[]> => {
    const result = await playerRepository.list();
    return result
}

export default { create, list }