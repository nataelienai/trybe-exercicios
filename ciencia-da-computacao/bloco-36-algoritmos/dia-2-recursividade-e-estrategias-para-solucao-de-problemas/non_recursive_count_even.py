def count_even_until(number):
    count = 0
    for current_number in range(1, number + 1):
        if current_number % 2 == 0:
            count += 1
    return count


if __name__ == "__main__":
    print(count_even_until(9))  # 4
