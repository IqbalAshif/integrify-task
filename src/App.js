import { BrowserRouter, Route } from 'react-router-dom';
import DetailPost from './views/DetailPost';
import Posts from './views/Posts';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Route exact path='/' component={Posts} />
        <Route path='/users/:id' component={DetailPost} />
      </BrowserRouter>
    </div>
  );
};

export default App;
