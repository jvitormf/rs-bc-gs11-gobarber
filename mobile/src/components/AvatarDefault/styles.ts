import styled from 'styled-components/native';

interface ContainerProps {
  size: number;
  fontSize: number;
}

export const Container = styled.Text<ContainerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #ff9;
  border-radius: ${({ size }) => size / 2}px;

  justify-content: center;
  align-items: center;

  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: ${({ fontSize }) => fontSize}px;
  text-transform: uppercase;
  text-align: center;
`;
