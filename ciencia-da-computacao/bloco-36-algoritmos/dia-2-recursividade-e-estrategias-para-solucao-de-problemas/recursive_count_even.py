def count_even_until(number):
    if number == 0:
        return 0
    if number % 2 == 0:
        return 1 + count_even_until(number - 1)
    return count_even_until(number - 1)


if __name__ == "__main__":
    print(count_even_until(12))  # 6
