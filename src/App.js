
import './App.css';
import  News from './Components/News/News.js';
import Header from './Components/Header/Header.js';
import TopHeadLine from './Components/TopHeadLine/TopHeadLine';
function App() {
  return (
    <div >
      <h2>React Bootstrap</h2>
      <Header></Header>
     <TopHeadLine></TopHeadLine>
      <News></News>
    </div>
  );
}

export default App;
