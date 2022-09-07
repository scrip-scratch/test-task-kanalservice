import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const OutImage = styled.Image`
  width: 62px;
  height: 55px;
`

const OutButton = () => {
  return (
    <TouchableOpacity>
      <OutImage source={require("../assets/logout-icon.png")} />
    </TouchableOpacity>  
  )
}

export default OutButton;