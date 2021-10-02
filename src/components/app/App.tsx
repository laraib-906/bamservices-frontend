import Header from '../../components/header';
import { getRoutes } from '../../../src/routing/route';
import { IRouters } from '../../types/routes';
import React, { useMemo } from 'react';
import { IUser } from '../../types/user';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';


interface Props {
  userData: IUser
}

function App(props: Props) {

  const routes: IRouters[] = useMemo(() => getRoutes(props.userData), [props.userData]);

  return (
    <div className="App">
      <Header routes={routes} user={props.userData} />
    </div>
  );
}

const mapStateToProps = (store: any) => {

  const { user } = store;

  return { userData: user };
}

export default process.env.NODE_ENV === 'development' ? hot(module)(connect(mapStateToProps)(App)) : connect(mapStateToProps)(App);
