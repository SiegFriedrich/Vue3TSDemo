import { JSONSchemaType } from 'ajv';
export { JSONSchemaType };
export * from './article.model';
export * from './common.model';
export * from './contract.model';
export * from './error.model';
export * from './goods.model';
export * from './user.model';

/**
 * This syntax in TypeScript defines a type alias called Record.
 * The Record type is an object type that has a key of type string and a value of type any. 
 * The square bracket syntax [key: string] defines that any valid string can be used as a key to 
 * access the value in this object. The any type means that the value can be of any type.
 * 
 *                                                      ---by ChatGPT
 */
export type Record = {
    [key: string]: any
};