import { View } from 'react-native';
import styled from 'styled-components/native';

const LogoImage = styled.Image`
  width: 63px;
  height: 63px;
  left: 0;
  align-self: flex-start;
`;

const HeaderLogo = () => {

  return (
    <View>
      <LogoImage source={require("../assets/logo_small.png")} />
      <View />
    </View>
  )
}

export default HeaderLogo;