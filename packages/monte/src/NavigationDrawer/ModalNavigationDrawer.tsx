import styled, { css } from 'styled-components';

const Container = styled.div<{ hide?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 256px;
  height: 100vh;

  background-color: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, .15);
  overflow: hidden;

  transition: .3s width ease-in-out;

  ${({ hide }) => hide && css`
    width: 0px;
  `};
`;

const Scrim = styled.div<{ hide?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: 100vh;
  
  background-color: rgba(0, 0, 0, .3);
  transition: .3s;

  ${({ hide }) => hide && css`
    opacity: 0;
    height: 0;
  `};
`;

const Head = styled.div`
  width: 100%;
  height: 3.25rem;
  border-bottom: 1px solid rgb(219, 219, 219);
`

const Menu = styled.ul`
  color: #757575;
`;

type Props = {
  isOpen: boolean;
  close: () => void;
  head: JSX.Element;
  items: JSX.Element | JSX.Element[];
};

function ModalNavigationDrawer({ isOpen, close, head, items }: Props) {
  return (
    <>
      <Scrim onClick={close} hide={!isOpen} />
      <Container hide={!isOpen}>
        <Head>{ head }</Head>
        <Menu>
          { items }
        </Menu>
      </Container>
    </>
  );
}

export default ModalNavigationDrawer;
