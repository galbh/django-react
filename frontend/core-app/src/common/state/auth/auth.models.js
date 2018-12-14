import propTypes from 'prop-types';

const userModel = {
  email: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  utilityId: propTypes.string,
  utilityName: propTypes.string
};

export default userModel;
