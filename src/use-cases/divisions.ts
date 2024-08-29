import { Divisions } from 'src/infra/entities';
import divisionsRepository from 'src/infra/repositories/divisionsRepository';


const create = async (
    division:
        Divisions
): Promise<Divisions> => {
    const result = await divisionsRepository.create(division);
    return result
}

const list = async (): Promise<Divisions[]> => {
    const result = await divisionsRepository.list();
    return result
}

export default { create, list }