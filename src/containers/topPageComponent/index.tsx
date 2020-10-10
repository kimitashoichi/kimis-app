import React, { FC, useState } from  'react';

// material ui
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import GoodCountIdeaComponent from './goodCountIdeaComponent';
import LatestIdeaComponent from './latestIdeaContainer';
import * as Styles from '../../utils/style';

const TopIndexComponent: FC = ({}) => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={Styles.useStyles().root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="最新投稿アイディア" {...Styles.a11yProps(0)} />
            <Tab label="いいね順" {...Styles.a11yProps(1)} />
            <Tab label="フォロー中" {...Styles.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <Styles.TabPanel value={value} index={0}>
          <LatestIdeaComponent />
        </Styles.TabPanel>
        <Styles.TabPanel value={value} index={1}>
          <GoodCountIdeaComponent />
        </Styles.TabPanel>
      </div>
    </>
  );
};

  export default TopIndexComponent;