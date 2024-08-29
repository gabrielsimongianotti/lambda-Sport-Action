import { Team } from 'src/infra/entities';
import teamRepository from 'src/infra/repositories/teamRepository';


const create = async (
    team: Team
): Promise<Team> => {
    const result = await teamRepository
        .create(team);
    return result
}

const list = async (): Promise<Team[]> => {
    const result = await teamRepository.list();
    return result
}

export default { create, list }