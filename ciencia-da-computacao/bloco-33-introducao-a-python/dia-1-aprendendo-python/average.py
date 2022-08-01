def average(numbers):
    """calculate the average of a list of numbers"""
    sum = 0
    for number in numbers:
        sum += number
    return sum / len(numbers)


numbers = [1, 2, 3, 4, 5]
print(average(numbers))
