import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import CardList from './components/CardList/CardList';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes['app__div']}>
        <SideBar />
        <CardList />
      </div>
    </div>
  );
}

export default App;
