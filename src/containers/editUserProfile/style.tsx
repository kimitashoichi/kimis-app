import styled from 'styled-components';

// material ui
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


// editUserProfileCOontainer
export const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 20px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
`;

export const StyledTextField = styled(TextareaAutosize)`
  width: 100%;
  height: 60%;
`;

export const TitleLabel = styled.div`
  text-align: left;
`;