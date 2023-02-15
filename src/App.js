import { connect } from 'react-redux';

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import CardList from './components/CardList/CardList';
import classes from './App.module.scss';

function App({ loading }) {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes['app__div']}>
        <SideBar />
        {loading ? (
          <div className={classes['loadingio-spinner-bean-eater-z8n7j3m410a']}>
            <div className={classes['ldio-bobuqsp2brc']}>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <CardList />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
