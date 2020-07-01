import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transacionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transacionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist.');
    }

    await transacionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
