import pytest
from email_validator import validate_email


def test_validate_email_when_email_is_valid():
    validate_email("user@domain.com")


def test_validate_email_when_email_has_no_at_sign():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("userdomain.com")


def test_validate_email_when_email_has_no_user():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("@domain.com")


def test_validate_email_when_user_first_character_is_not_a_letter():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("1user@domain.com")


def test_validate_email_when_domain_has_no_dot():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("user@domaincom")


def test_validate_email_when_user_has_an_invalid_character():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("user.name@domain.com")


def test_validate_email_when_domain_has_an_empty_domain_name():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("user@.com")


def test_validate_email_when_domain_name_has_non_alphanumeric_characters():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("user@domain-name.com")


def test_validate_email_when_domain_has_an_empty_domain_extension():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("user@domain.")


def test_validate_email_when_domain_extension_is_longer_than_3_characters():
    with pytest.raises(ValueError, match="invalid email format"):
        validate_email("user@domain.comm")
