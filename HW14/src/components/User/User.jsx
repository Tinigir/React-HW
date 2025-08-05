import React from 'react';
import { connect } from 'react-redux';

const User = ({ name, status }) => {
  return (
    <div>
      <h2>Имя: {name}</h2>
      <p>Статус: {status}</p>
    </div>
  );
};

// Функция для получения данных из store
const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

// Подключаем компонент к Redux
export default connect(mapStateToProps)(User);