import styled from 'styled-components';

const SectionTitle = styled.h2`
  letter-spacing: 2px;
  color: #292929;
  margin-bottom: 30px;

  &::after {
    content: "";

    display: block;

    width: 68px;
    height: 1px;
    margin-top: 8px;

    background-color: #292929;
  }
`;

export default SectionTitle;
