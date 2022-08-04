def validate_email(email):
    if "@" not in email:
        raise ValueError("invalid email format")

    user, domain = email.split("@")
    if len(user) == 0 or not user[0].isalpha() or "." not in domain:
        raise ValueError("invalid email format")

    for char in user:
        if not char.isalnum() and char not in "-_":
            raise ValueError("invalid email format")

    domain_name, domain_extension = domain.split(".")
    if (
        len(domain_name) == 0
        or not domain_name.isalnum()
        or len(domain_extension) == 0
        or len(domain_extension) > 3
    ):
        raise ValueError("invalid email format")
