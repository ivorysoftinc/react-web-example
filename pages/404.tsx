import Link from 'next/link';

import styled from 'styled-components';
import colors from '../utils/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  color: ${colors.redAccent};
  text-decoration: none;
`;

const Def = () => {
  return (
    <Container>
      <h1>Oops, 404 page...</h1>
      <Link href="/" passHref>
        <StyledLink>Return to the homepage</StyledLink>
      </Link>
    </Container>
  );
};

export default Def;
