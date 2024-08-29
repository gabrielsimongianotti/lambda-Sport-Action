import { PlayerBorrowingEligibility } from '../entities'
import { AppDataSource } from '../ormconfig';
const playerBorrowingEligibilityRepository = AppDataSource.getRepository(
    PlayerBorrowingEligibility
)

const create = async (
    playerBorrowingEligibility:
        PlayerBorrowingEligibility
): Promise<PlayerBorrowingEligibility> => {
    const result =
        await playerBorrowingEligibilityRepository
            .save(playerBorrowingEligibility);
    return result
}

const list = async (): Promise<PlayerBorrowingEligibility[]> => {
    const result = await playerBorrowingEligibilityRepository.find()
    return result
}

export default { create, list }