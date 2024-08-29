import { Player } from '../entities'
import { AppDataSource } from '../ormconfig';
const playeRepository = AppDataSource.getRepository(Player)

const create = async (player: Player): Promise<Player> => {
    const result = await playeRepository.save(player);
    return result
}

const list = async (): Promise<Player[]> => {
    const result = await playeRepository.find()
    return result
}

export default { create, list }