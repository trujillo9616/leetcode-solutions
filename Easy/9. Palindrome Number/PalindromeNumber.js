/*
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    num = x.toString();
    return num == num.split("").reverse().join("") ? true : false;
};