"""""
 * @param {number} x
 * @return {boolean}
"""
def isPalindrome(self, x):
    num = str(x)
    return True if num[::-1] == num else False