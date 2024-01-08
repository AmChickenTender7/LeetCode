""" 
    In this implementation of a solution to the Two Sum problem we iterate over an array while
    looking for possible combinations of the numbers in the array whose sum equate to the target.
    We can do this by taking the value of each value, finding the number that complements the
    value to equate to the target, and then looking for the compliment in the array. This question
    will only input arrays that have one solution so we can stop as soon as we find the answer.
    
    To solve we iterate over the array, find the complement, and search the array for this compliment
    With this implementation, however, we will be cutting the search down time by looking through a
    dictionary that we create as we search for the solution. This means that the worst case scenario
    will be the same as if we search the whole array each time, but if the target and complement are
    found earlier in the list we save time and space.
"""
def two_sum(nums, target):
    """ Create dictionary that we will add to while searching """
    num_dict = {}

    """ Iterate over the aray and find the complement of the interation """
    for i, num in enumerate(nums):
        complement = target - num

        """ Check the dictionary for the complement """
        if complement in num_dict:
            """ If the dicitonary contains the complement then we are done """
            """ Return the indices of the complement and the original number """
            return [num_dict[complement], i]

        """ If the complement doesn't exist then add the value and it's index to the dictionary """
        num_dict[num] = i

    """ If not found, return empty string """
    return []

""" Test """
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(result)

