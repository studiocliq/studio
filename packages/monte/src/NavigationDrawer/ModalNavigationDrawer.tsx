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
  box-sizing: border-box;
  width: 100%;
  /* height: 3.25rem; */
  border-bottom: 1px solid rgb(219, 219, 219);
  padding: 20px;
`

const Menu = styled.ul`
  padding: 30px 0 0;
`;

const Item = styled.li`
  color: #757575;

  padding: 24px 16px;
  font-size: .9rem;
  
  &:hover {
    color: rgba(0, 0, 0, .87);
    background-color: rgba(0, 0, 0, .04);
  }
`;

type Props = {
  isOpen: boolean;
  close: () => void;
  head: JSX.Element;
  links: JSX.Element[];
};

function ModalNavigationDrawer({ isOpen, close, head, links }: Props) {
  return (
    <>
      <Scrim onClick={close} hide={!isOpen} />
      <Container hide={!isOpen}>
        <Head>{ head }</Head>
        <Menu>
          { links.map((link) => (<Item>{ link }</Item>)) }
        </Menu>
      </Container>
    </>
  );
}

export default ModalNavigationDrawer;
