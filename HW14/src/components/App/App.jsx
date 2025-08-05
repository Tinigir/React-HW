import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import User from '../User/User.jsx';
import UserForm from '../UserForm/UserForm.jsx';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Управление пользователем</h1>
        <UserForm />
        <User />
      </div>
    </Provider>
  );
}

export default App;