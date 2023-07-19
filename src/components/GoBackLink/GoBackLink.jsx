import { HiArrowLeft } from 'react-icons/hi';
import { GoBackLinkStyled } from './GoBackLink.styled';

export default function GoBackLink({ to }) {
  return (
    <GoBackLinkStyled to={to}>
      <HiArrowLeft size="18" />
      Go back
    </GoBackLinkStyled>
  );
}
