import styled from 'styled-components';

const Icon = styled.img`
    width: 20px;
    margin-right: 15px;
`;

const TargetBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

interface Props {
    icon: string;
    alt: string;
    text: string;
}

const TargetBlockComponent = ({ icon, alt, text }:Props) => (
  <TargetBlock>
    <Icon
      src={icon}
      alt={alt}
    />
    {text}
  </TargetBlock>
);

export default TargetBlockComponent;
