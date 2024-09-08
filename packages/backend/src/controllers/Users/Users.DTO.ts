/**
 * Стандартная DTO пользователя
 * @tsoaModel
 */
export interface UsersDTO {
  /**
   * @isInt
   * @example 1
   */
  id: number;
  /**
   * @example "Иван"
   */
  firstName: string;
  /**
   * @example "Иванов"
   */
  lastName: string;
  /**
   * @example "ivan.ivanov@gmail.com"
   * @pattern ^(.+)@(.+)$
   */
  email: string;
}

/**
 * Данные для создания или редактирования пользователя
 * @tsoaModel
 */
export interface UserCreationParams extends Pick<UsersDTO, 'firstName' | 'lastName' | 'email'> {}
