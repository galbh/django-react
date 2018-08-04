import propTypes from 'prop-types';

const userModel = {
  id: propTypes.number.isRequired,
  username: propTypes.string.isRequired,
  phone_number: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  full_name: propTypes.string,
  is_superuser: propTypes.bool,
  is_staff: propTypes.bool
};

export default userModel;
