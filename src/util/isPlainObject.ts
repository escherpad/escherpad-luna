/*
 https://github.com/gaearon/redux/blob/breaking-changes-1.0/src/utils/isPlainObject.js
 */

function fnToString(fn:any):string {
    return Function.prototype.toString.call(fn);
}

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
export default function isPlainObject(obj:any):boolean {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    const proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

    if (proto === null) {
        return true;
    }

    const constructor = proto.constructor;

    return (
        typeof constructor === 'function'
        && constructor instanceof constructor
        && fnToString(constructor) === fnToString(Object)
    );
}

