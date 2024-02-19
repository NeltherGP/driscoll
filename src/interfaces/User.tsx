/**
 * Interface representing a user in the application.
 * @interface User
 */
export interface User{
    /**
   * The first name of the user.
   * @type {string}
   */
    FirstName: string,
    /**
    * The last name of the user.
    * @type {string}
    */
    LastName: string,
    /**
    * The email address of the user.
    * @type {string}
    */
    Email: string,
    /**
    * The creation date of the user.
    * @type {string}
    * 
    */
    Created: string
    /**
    * The Id  of the user in the database.
    * @type {string}
    * 
    */
    _id: string

}