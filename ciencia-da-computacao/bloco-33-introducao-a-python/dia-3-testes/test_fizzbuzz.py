from fizzbuzz import fizzbuzz


def test_fizzbuzz_when_given_20():
    expected = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
        16,
        17,
        "Fizz",
        19,
        "Buzz",
    ]
    actual = fizzbuzz(20)
    assert actual == expected
