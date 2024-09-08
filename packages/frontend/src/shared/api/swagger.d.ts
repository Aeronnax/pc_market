declare namespace Components {
    namespace Schemas {
        export interface FieldErrors {
            [name: string]: {
                value?: any;
                message: string;
            };
        }
        export interface NotFoundErrorJSON {
            message: string;
        }
        /**
         * Данные для создания или редактирования пользователя
         */
        export interface UserCreationParams {
            /**
             * example:
             * Иван
             */
            firstName: string;
            /**
             * example:
             * Иванов
             */
            lastName: string;
            /**
             * example:
             * ivan.ivanov@gmail.com
             */
            email: string; // ^(.+)@(.+)$
        }
        /**
         * Стандартная DTO пользователя
         */
        export interface UsersDTO {
            /**
             * example:
             * 1
             */
            id: number; // int32
            /**
             * example:
             * Иван
             */
            firstName: string;
            /**
             * example:
             * Иванов
             */
            lastName: string;
            /**
             * example:
             * ivan.ivanov@gmail.com
             */
            email: string; // ^(.+)@(.+)$
        }
        export interface ValidateErrorJSON {
            message: "Validation failed";
            details: FieldErrors;
        }
    }
}
declare namespace Paths {
    namespace CreateUser {
        /**
         * Данные для нового пользователя
         */
        export type RequestBody = /* Данные для создания или редактирования пользователя */ Components.Schemas.UserCreationParams;
        namespace Responses {
            export type $201 = /* Стандартная DTO пользователя */ Components.Schemas.UsersDTO;
            export type $422 = Components.Schemas.ValidateErrorJSON;
        }
    }
    namespace DeleteUser {
        namespace Parameters {
            export type UserId = number; // double
        }
        export interface PathParameters {
            userId: Parameters.UserId /* double */;
        }
        namespace Responses {
            export interface $204 {
            }
            export type $404 = Components.Schemas.NotFoundErrorJSON;
        }
    }
    namespace GetUser {
        namespace Parameters {
            export type UserId = number; // double
        }
        export interface PathParameters {
            userId: Parameters.UserId /* double */;
        }
        namespace Responses {
            export type $200 = /* Стандартная DTO пользователя */ Components.Schemas.UsersDTO;
            export type $404 = Components.Schemas.NotFoundErrorJSON;
        }
    }
    namespace ListUsers {
        namespace Responses {
            export type $200 = /* Стандартная DTO пользователя */ Components.Schemas.UsersDTO[];
        }
    }
    namespace UpdateUser {
        namespace Parameters {
            export type UserId = number; // double
        }
        export interface PathParameters {
            userId: Parameters.UserId /* double */;
        }
        /**
         * Новые данные пользователя
         */
        export type RequestBody = /* Данные для создания или редактирования пользователя */ Components.Schemas.UserCreationParams;
        namespace Responses {
            export type $200 = /* Стандартная DTO пользователя */ Components.Schemas.UsersDTO;
            export type $404 = Components.Schemas.NotFoundErrorJSON;
            export type $422 = Components.Schemas.ValidateErrorJSON;
        }
    }
}
