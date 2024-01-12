import React from 'react';
import './Ingredient.css';
import del from '../../assets/del.png';

interface Props {
  name: string;
  count: number;
  image: string;
  addClick: React.MouseEventHandler;
  removeClick: React.MouseEventHandler;
}

const Ingredient: React.FC<Props> = ({
                                       name,
                                       count,
                                       image,
                                       addClick,
                                       removeClick
                                     }) => {

  if (count) {
    return (
      <div className="ingredient-container">
        <div className="ingredient-clicked-block" onClick={addClick}>
          <img className="ingredient-img" src={image} alt={name}/>
          <h3>{name}</h3>
        </div>
        <span>x{count}</span>
        <img src={del} alt="Delete" onClick={removeClick}/>
      </div>
    );
  } else {
    return (
      <div className="ingredient-container">
        <div className="ingredient-clicked-block" onClick={addClick}>
          <img className="ingredient-img" src={image} alt={name}/>
          <h3>{name}</h3>
        </div>
        <span>x{count}</span>
      </div>
    );
  }
};

export default Ingredient;