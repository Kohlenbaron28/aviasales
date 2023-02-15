import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component } from 'react';

import apiServise from './store/service';
import * as actions from './store/actions';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import CardList from './components/CardList/CardList';
import classes from './App.module.scss';

class App extends Component {
  componentDidMount() {
    const { updateSearchId, getTicketsById, ticketsError } = this.props;
    apiServise
      .getKey()
      .then((searchId) => {
        console.log(searchId);
        updateSearchId(searchId);
        getTicketsById(searchId);
      })
      .catch((err) => ticketsError(err));
  }
  componentDidUpdate(prevProps) {
    const { id, getTicketsById, isStop, tickets } = this.props;
    if (prevProps.tickets !== tickets && isStop === false) {
      getTicketsById(id);
    }
  }
  render() {
    const { loading, error } = this.props;
    return (
      <div className={classes.app}>
        <Header />
        <div className={classes['app__div']}>
          <SideBar />
          {loading || error ? (
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
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    loading: state.loading,
    id: state.id,
    isStop: state.isStop,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTicketsById, updateSearchId, ticketsError } = bindActionCreators(actions, dispatch);
  return {
    getTicketsById,
    updateSearchId,
    ticketsError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
