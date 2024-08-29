import { Team } from '../entities'
import { AppDataSource } from '../ormconfig';
const teamRepository = AppDataSource.getRepository(
    Team
)

const create = async (team: Team): Promise<Team> => {
    const result = await teamRepository.save(team);
    return result
}

const list = async (): Promise<Team[]> => {
    const result = await teamRepository.find()
    return result
}

export default { create, list }