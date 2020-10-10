import styled from 'styled-components';

// material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

// index
export const ShowPageWarpper = styled.div`
  width: 50%
  margin: 0 auto;
`;


// createCommentContainer
export const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export const StyledTextField = styled(TextField)`
  height: 60%;
  width: 100%;
  margin: 0 auto;
`;

export const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 45%;
`;

export const TextFieldLabel = styled.h3`
  text-align: left;
`;

export const ButtonWapper = styled.div`
  padding-top: 20px;
  text-align: right;
`;


// showCommentContainer
export const CommentContent = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
`;

export const CommentCard = styled(Card)`
  min-width: 600px;
  max-width: 800px;
  min-height: 70px;
  margin: 20px 0px;
`;

export const DeleteButton = styled(Button)`
  margin-left: 85%;
`;


// showIdeaContainer
export const IdeaContent = styled.div`
  width: 60%;
  margin: 0 auto;
`
export const ShowIdeaSubmitButton = styled(Button)`
  background: linear-gradient(45deg, #6babfe 30%, #6b6dfe 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(0,153,255, .3);
`;

export const IdeaBox = styled(Card)`
  min-width: 200px;
  min-height: 200px;
`;


// showIdeauserProfile
export const UserProf = styled.div`
  width: 60%;
  margin: 0 auto;
`;