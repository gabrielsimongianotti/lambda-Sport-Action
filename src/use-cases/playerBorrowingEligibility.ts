import { PlayerBorrowingEligibility } from 'src/infra/entities';
import playerBorrowingEligibilityRepository from 'src/infra/repositories/playerBorrowingEligibilityRepository';


const create = async (
    playerBorrowingEligibility:
        PlayerBorrowingEligibility
): Promise<PlayerBorrowingEligibility> => {
    const result = await playerBorrowingEligibilityRepository
        .create(
            playerBorrowingEligibility
        );
    return result
}

const list = async (): Promise<PlayerBorrowingEligibility[]> => {
    const result = await playerBorrowingEligibilityRepository.list();
    return result
}

export default { create, list }