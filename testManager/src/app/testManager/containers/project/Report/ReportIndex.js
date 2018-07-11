import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { asyncRouter, nomatch } from 'choerodon-front-boot';


const ReportHome = asyncRouter(() => import('./ReportHome'))
const CycleIndex = ({ match }) => (
    <Switch>
        <Route exact path={match.url} component={ReportHome} />
        <Route path={'*'} component={nomatch} />
    </Switch>
);

export default CycleIndex;
