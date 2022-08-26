def reverse(elements):
    if len(elements) <= 1:
        return elements
    return [elements[-1]] + reverse(elements[:-1])


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5]
    print(reverse(numbers))  # [5, 4, 3, 2, 1]
