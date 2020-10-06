import React, { FC, useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import UserMyPageDraftedIdeas from './userMyPageDrafedIdeaComponent';
import UserMyPagePostedIdeas from './userMyPagePostedIdeaComponent';
import IdeaShowUserProfile from '../showIdea/showIdeaUserProfile';
import * as Styles from '../../utils/style';
import LinkComponent from '../../components/LinkComponest';
import { AppState } from '../../models';
import { Dispatch, bindActionCreators } from 'redux';
import { alreadyLoginUserAction } from '../../actions/userAction';
import { connect } from 'react-redux';
import * as UModels from '../../models/userModels';

interface StateProps {
  isLoading?: boolean;
  userInfo: UModels.LoginUser;
}

interface DispatchProps {
  alreadyLogin: () => void;
}

type DefaultProps = StateProps & DispatchProps;

const UserMyPage: FC<DefaultProps> = ({
  children,
  alreadyLogin,
  isLoading,
  userInfo
}) => {
  const [value, setValue] = useState<number>(0);
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    alreadyLogin()
  }, [])

  return (
    <>
      <IdeaShowUserProfile />
      <div className={Styles.useStyles().root}>
      <LinkComponent src={`/useredit/${userInfo.userId}`}>Edit</LinkComponent>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="投稿アイディア" {...Styles.a11yProps(0)} />
            <Tab label="下書きアイディア" {...Styles.a11yProps(1)} />
            <Tab label="作りたいアイディア" {...Styles.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Styles.TabPanel value={value} index={0}>
          <UserMyPagePostedIdeas />
        </Styles.TabPanel>
        <Styles.TabPanel value={value} index={1}>
          <UserMyPageDraftedIdeas />
        </Styles.TabPanel>
        <Styles.TabPanel value={value} index={2}>
          Item Three
        </Styles.TabPanel>
      </div>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userInfromation.loginUser,
  isLoading: state.userInfromation.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    alreadyLogin: () => alreadyLoginUserAction.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMyPage);