import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Login = lazy(() => import('./pages/login/login'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const NewRequest = lazy(() => import('./request_creation/new-request'));
const Myreqwuest = lazy(() => import('./request_creation/my-request'));
const ApprovalView = lazy(() => import('./request_creation/approvel_view'));
const MyreqwuestView = lazy(() => import('./request_creation/my_view'));
const FeasibleView = lazy(() => import('./approval_view/feasiblity_view'));

const HodComponent = lazy(() => import('./approval/hodapproval'));
const FeasComponent = lazy(() => import('./approval/feasibility'));
const ITHodComponent = lazy(() => import('./approval/itheadapproval'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));



const Mdi = lazy(() => import('./icons/Mdi'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

// const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));



const AppRoutes = () => {

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new_request" component={NewRequest} />
        <Route path="/my_request" component={Myreqwuest} />
        <Route path="/view_request/:id" component={MyreqwuestView} />
        <Route path="/hodapproval" component={HodComponent} />
        <Route path="/feasiblity_study" component={FeasComponent} />
        <Route path="/view_approval/:id" component={ApprovalView} />
        <Route path="/feasibilty_view_request/:id" component={FeasibleView} />
        <Route path="/itheadapproval" component={ITHodComponent} />


        <Route path="/form-Elements/basic-elements" component={BasicElements} />

        <Route path="/tables/basic-table" component={BasicTable} />


        <Route path="/icons/mdi" component={Mdi} />


        <Route path="/charts/chart-js" component={ChartJs} />


        <Route path="/login" component={Login} />
        <Route path="/user-pages/register-1" component={Register1} />
        <Route path="/user-pages/lockscreen" component={Lockscreen} />

        <Route path="/error-pages/error-404" component={Error404} />
        <Route path="/error-pages/error-500" component={Error500} />

        <Route path="/general-pages/blank-page" component={BlankPage} />


        <Redirect to="/login" />
      </Switch>
    </Suspense>
  );
}


export default AppRoutes;