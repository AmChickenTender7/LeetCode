""" This is more of a math challenge than a coding challenge. The solution itself
    is not intense coding wise, but in order to understand the solution you must
    take prior known mathmatical formulas into account """
def findDuplicateAndMissing(nums):
    n = len(nums)
    
    """ Math """
    expectedSum = n * (n + 1) // 2
    expectedSquareSum = n * (n + 1) * (2 * n + 1) // 6
    
    """ More Math """
    actualSum = sum(nums)
    actualSquareSum = sum(x**2 for x in nums)
    
    """ More Math """
    diffSum = expectedSum - actualSum
    diffSquareSum = expectedSquareSum - actualSquareSum
    
    """ More Math """
    missingNumber = (diffSum + (diffSquareSum // diffSum)) // 2
    duplicateNumber = missingNumber - diffSum
    
    return duplicateNumber, missingNumber
