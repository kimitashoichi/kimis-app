import styled from 'styled-components';

// material ui
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField/TextField';

// hederContainer
export const HeaderBox = styled.div`
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const LoginInfo = styled.ul`
  display: flex;
`;

export const LoginInfoNav = styled.li`
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-right: 30px;
  margin-left: 20px;
  display: inline-block;
`;

export const SessionButton = styled(Button)`
  margin-left: auto;
  margin-right: 200px;
`;

export const Navli = styled.li`
  margin: 10px;
  display: inline-block;
`;

export const SearchFiled = styled(TextField)`
  margin-left: 30px;
`;