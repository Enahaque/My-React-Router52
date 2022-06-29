import {Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Countries from './components/Countries/Countries';
import CountriesDetail from './components/CountriesDetail/CountriesDetail';


function App() {
  return (
    <div className="App">
        <Header></Header>
       <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Friends" element={<Friends/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/CountriesDetail" element={<CountriesDetail></CountriesDetail>}></Route>
        <Route path="*" element={<NotFound/>}></Route>

       </Routes>

        
    </div>
  );
}

export default App;
