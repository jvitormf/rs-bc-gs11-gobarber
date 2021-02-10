import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 12px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 100px;
`;

export const UserAvatar = styled.Image`
  width: 176px;
  height: 176px;
  border-radius: 98px;

  align-self: center;
`;
