/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from '../components/Calculator';
import Quotes from './Quotes';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const placeholderTextTwo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus efficitur lacus nec molestie. Aliquam a interdum massa. Ut in dictum sapien. Quisque ullamcorper consectetur tortor, vel luctus elit molestie quis. Aenean lacinia velit finibus, sollicitudin velit at, posuere lectus. Nulla ornare quam in sollicitudin molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pellentesque, erat vel porttitor lacinia, dolor orci tempus magna, vel vestibulum quam nisi vitae velit. Praesent efficitur ipsum et metus tincidunt sollicitudin quis a urna. Nam faucibus ipsum augue, non molestie velit volutpat sed. Cras ultrices turpis venenatis nulla lacinia, vitae venenatis urna venenatis. Nam rutrum, nulla vitae pretium volutpat, dui velit fringilla ante, et malesuada ex velit non turpis. Integer at efficitur lorem, sit amet pellentesque dolor. Sed suscipit neque magna, porttitor volutpat nunc porttitor ut. Integer molestie, leo sed mollis efficitur, lacus elit fringilla massa, ac auctor libero.';
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <section className="home">
              <h1 className="home-header">Welcome to our page!</h1>
              <div className="text-wrapper">
                <p>{placeholderText}</p>
                <p>{placeholderTextTwo}</p>
              </div>
            </section>
          )}
        />
        <Route
          path="/calculator"
          element={<Calculator />}
        />
        <Route path="/quote" element={<Quotes />} />
      </Routes>

    </>
  );
};

export default Home;
