import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SearchProvider } from './context/SearchContext';
import colors from './assets/color/colors';
import DetailView from './views/DetailView';
import MainView from './views/MainView';
import MyPageView from './views/MyPageView';
import SignInUpView from './views/SignInUpView';

function App() {
  return (
    <SearchProvider>
      <ThemeProvider theme={colors}>
        <Routes>
          <Route path='/' element={<SignInUpView />}></Route>
          <Route path='/main' element={<MainView />}></Route>
          <Route path='/mypage' element={<MyPageView />}></Route>
          <Route path='/detail/*' element={<DetailView />}></Route>
        </Routes>
      </ThemeProvider>
    </SearchProvider>
  );
}

export default App;
