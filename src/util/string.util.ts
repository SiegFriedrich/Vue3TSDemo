/**
 * underscore is not a package in npm, but it is a popular JavaScript library 
 * that provides a collection of utility functions for common programming tasks.
 * 
 * Underscore provides many useful functions that can simplify tasks such as manipulating arrays and objects, 
 * working with functions and iteration, and performing utility tasks such as data validation, error handling, and more.
 * 
 * Note that there are many other utility libraries available in JavaScript, such as Lodash and Ramda, 
 * that provide similar functionality to Underscore.
 * 
 * underscore.string is a separate library that provides additional string manipulation functions 
 * on top of the Underscore library. It is not included in the core Underscore library and needs to be installed separately.
 */
import * as underscore from 'underscore.string'

class StringUtil {
    /**
     * The || operator in the expression underscore.isBlank(content || '') is used to provide a default value of 
     * an empty string '' when content is falsy.
     * 
     * If the content variable is truthy (i.e., it is not null, undefined, 0, false, NaN, or an empty string), 
     * then the || operator will return its value (content) and the isBlank function will be called with the value of content.
     * 
     * However, if content is falsy (i.e., it is null, undefined, 0, false, NaN, or an empty string), 
     * then the || operator will return the second operand (''), which is an empty string. 
     * The isBlank function will be called with an empty string as its argument, ensuring that the function will not 
     * throw an error due to an undefined or null argument.
     * 
     * In other words, the expression underscore.isBlank(content || '') is checking whether the content variable 
     * is blank or empty, but it also ensures that the isBlank function will receive a string argument, 
     * even if content is undefined or null. If content is truthy, its value will be used as the argument for the isBlank function. 
     * If content is falsy, an empty string will be used instead.
     * 
     */
    public isBlank(content: string | undefined){
        return underscore.isBlank(content || '');
    }

    public notBlank(content: string | undefined){
        return !this.isBlank(content);
    }
}

export const stringUtil = new StringUtil();