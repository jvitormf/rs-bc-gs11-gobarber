import React from 'react';

import { Container } from './styles';

interface AvatarProps {
  name: string;
  size: number;
  fontSize: number;
}

const AvatarDefault: React.FC<AvatarProps> = ({
  name,
  size,
  fontSize,
  ...rest
}) => {
  const userFullName = name.split(' ');
  const userInitials =
    userFullName[0].charAt(0) + userFullName[userFullName.length - 1].charAt(0);

  return (
    <Container
      style={{ textAlignVertical: 'center' }}
      size={size}
      fontSize={fontSize}
      {...rest}
    >
      {userInitials}
    </Container>
  );
};

export default AvatarDefault;
