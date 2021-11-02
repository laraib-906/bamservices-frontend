import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer"
import { routerArray } from "../../../src/routing/route";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { IRouters } from "../../types/routes";
import { IUser } from "../../types/user";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";

interface Props {
  userData: IUser;
}

function App(props: Props) {
  
  const routes: IRouters[] = routerArray;

  const mapRouteToJSX = (routeItem: any, index: number) => {
    if (routeItem.type === "Route") {
      return (
        <Route
          key={index}
          path={routeItem.route}
          component={routeItem.component}
          {...routeItem.options}
        />
      );
    } else if (routeItem.type === "Redirect") {
      return <Redirect exact key={index} to={routeItem.route} strict={true} />;
    } else if (routeItem.type === "Link") {
      return <Link key={index} to={routeItem.route} />;
    }
  };

  return (
    <div className="App">
      <Header routes={routes} user={props.userData} />
      <div style={{ minHeight: 'calc(100vh - 267px)', overflow: 'auto' }}>
        <Switch>{routes.map((item, index) => mapRouteToJSX(item, index))}</Switch>
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = (store: any) => {
  const { user } = store;

  return { userData: user };
};

export default process.env.NODE_ENV === "development"
  ? hot(module)(connect(mapStateToProps)(App))
  : connect(mapStateToProps)(App);
