import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { GoBackLinkStyled } from './GoBackLink.styled';

export default function GoBackLink({ to }) {
  // console.log(to);
  return (
    <GoBackLinkStyled to={to}>
      <HiArrowLeft size="18" />
      Go back
    </GoBackLinkStyled>
  );
}

GoBackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
