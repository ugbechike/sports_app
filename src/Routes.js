import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from './Component/Home/Home';
import LatestPost from './Component/LatestPostScreen/LatestPost';
import Fixture from './Component/fixture/fixture';
import HighLights from './Component/highlights/highlights';
import MatchDetailCommentry from './Component/matchDetail(commentry)/matchDetail(commentry)';
import NewsContent from './Component/NewsContent/NewsContent';
import TopLeagues from './Component/TopLeagues/TopLeagues';
import ExploreLeagues from './Component/ExploreLeagues/ExploreLeagues';
import Competition from './Component/Competitons/Competition';
import DynamicComp from './Component/DynamicComp/DynamicComp';
import Transfer from './Component/Transfer/Transfer';
import MoreTransferNews from './Component/MoreTransferNews/MoreTransferNews';
import MatchPreview from './Component/MatchPreview/MatchPreview';
import ExploreTeams from './Component/ExploreTeams/ExploreTeams';
import CompetitionTeams from './Component/Competition(teams)/Competition(teams)';
import DynamicCompTeams from './Component/DynamicComp(teams)/DynamicComp(teams)';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import socialAuth from './Component/socialAuthRedirect/socialAuthRedirect';
import AuthVerifyPage from './Component/authVerifyPage/authVerifyPage';
import ErrorPage from './Component/errorPage/errorpage';



// WORK ON PROTECTING TH ROUTES
const AppRoute = ({ Component, path, ...rest }) => {
  var storedItem = localStorage.getItem('user');
  return <Route exact {...rest} path={path} render={props => {
      if ( storedItem.token !== '') {
          return <Component {...props} />
      }

      else {
          return <Redirect to="/" />
      }
  }
  } />
}

const Routes = () => {
    return (
      <Router>
        <Switch>
          {/* <Route path="/home" component={Home} exact /> */}
          <AppRoute path="/fixture" component={Fixture}/>
          <AppRoute path="/match-detail-commentry" component={MatchDetailCommentry}/>
          <AppRoute path="/home" component={Home} exact />
          <AppRoute path="/latest" component={LatestPost} exact />
          <AppRoute path="/comp-news/:id" component={DynamicComp} exact />
          <AppRoute path="/fixtures" component={Fixture} exact/>
          <AppRoute path="/comp-fixture" component={Fixture} exact/>
          <AppRoute path="/transfer" component={Transfer} exact/>
          <AppRoute path="/highlights" component={HighLights} exact/>
          <AppRoute path='/news-content' component={NewsContent} exact />
          <AppRoute path="/explore-league/:id" component={ExploreLeagues} exact />
          <AppRoute path="/competitions" component={Competition} exact />
          <AppRoute path="/more" component={MoreTransferNews} exact />
          <AppRoute path="/preview" component={MatchPreview} exact />
          <AppRoute path="/competion-teams" component={CompetitionTeams}/>
          <AppRoute path="/explore-teams" component={ExploreTeams}/>
          <AppRoute path="/team-news/:id" component={DynamicCompTeams}/>
          <AppRoute path="/social-auth" component={socialAuth}/>
          <AppRoute path="/login" component={Login} exact/>
          <AppRoute path="/auth-verify" component={AuthVerifyPage}/>
          <AppRoute path="/" component={Signup} exact/>
          <AppRoute  component={ErrorPage} exact/>
        </Switch>
      </Router>
    );
}

export default Routes;