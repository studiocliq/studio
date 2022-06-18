import styled from 'styled-components';

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 8px;
  border-radius: 4px;
  background-color: #ef2c5a;

  font-size: 12px;
  color: #fff;
`;

function Badge({ text }: {
  text: string;
}) {
  return (
    <Container>{ text }</Container>
  );
}

export default Badge;
