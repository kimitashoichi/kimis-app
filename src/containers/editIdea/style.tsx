import styled from 'styled-components';

//  material-ui
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// index
export const IdeaEditWarapper = styled.div`
  width: 60%
  margin: 0 auto;
`;

// editIdeaContainer
export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #808080 30%, #a9a9a9 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 20px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;

export const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 20px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export const StyledTextField = styled(TextareaAutosize)`
  width: 100%;
  height: 60%;
`;

export const StyledTitleField = styled(TextareaAutosize)`
  width: 100%;
  height: 30%;
`;

export const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
`;

export const ButtonWapper = styled.div`
  padding-top: 20px;
  text-align: right;
`;

export const TitleLabel = styled.h3`
  text-align: left;
`;

export const ContentLabel = styled.h4`
  text-align: left;
`;