import { Divisions } from '../entities'
import { AppDataSource } from '../ormconfig';
const divisionRepository = AppDataSource.getRepository(Divisions)

const create = async (division: Divisions) => {
    const result = await divisionRepository.save(division);
    return result
}

const list = async (): Promise<Divisions[]> => {
    const result = await divisionRepository.find()
    return result
}

export default { create, list }