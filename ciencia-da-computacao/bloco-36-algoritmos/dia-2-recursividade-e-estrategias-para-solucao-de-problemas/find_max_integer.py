def find_max_integer(numbers):
    if len(numbers) == 1:
        return numbers[0]
    max_integer = find_max_integer(numbers[1:])
    if numbers[0] > max_integer:
        return numbers[0]
    else:
        return max_integer


if __name__ == "__main__":
    print(find_max_integer([1, 3, 1, 5, 9, 3, 1]))  # 9
