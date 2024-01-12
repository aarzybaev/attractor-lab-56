import {useState} from 'react';
import {INGREDIENTS} from '../../constants';
import Ingredient from '../../componets/Ingredient/Ingredient';
import './App.css';
import '../../componets/Ingredient/Burger.css';

function App() {
  const [ingredients, setIngredients] = useState(
    [
      {name: 'Salad', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Bacon', count: 0},
      {name: 'Meat', count: 0},
    ]);
  const addClickHandle = (name: string) => {
    const index = ingredients.findIndex(item => name === item.name);
    const newArr = [...ingredients];
    const newObj = {...ingredients[index]};
    newObj.count = newObj.count + 1;
    newArr[index] = newObj;
    setIngredients(newArr);
  };

  const removeClickHandle = (name: string) => {
    const index = ingredients.findIndex(item => name === item.name);

    if (ingredients[index].count) {
      const newArr = [...ingredients];
      const newObj = {...ingredients[index]};
      newObj.count = newObj.count - 1;
      newArr[index] = newObj;
      setIngredients(newArr);
    }
  };

  const getCount = (name: string): number => {
    const index = ingredients.findIndex((item: { name: string; count: number }) => item.name === name);
    return ingredients[index].count;
  };

  const getPrice = ():number => {
    let amount = 0;
    ingredients.forEach((item : {name: string; count: number}) => {
      const name = item.name;
      const count = item.count;
      const index = INGREDIENTS.findIndex(item => item.name === name);
      const price = INGREDIENTS[index].price;
      amount += count * price;
    });

    return amount;
  };

  const salad: string[] = new Array(ingredients[ingredients.findIndex(item => item.name === 'Salad')].count).fill('salad');
  const cheese: string[] = new Array(ingredients[ingredients.findIndex(item => item.name === 'Cheese')].count).fill('Cheese');
  const meat: string[] = new Array(ingredients[ingredients.findIndex(item => item.name === 'Meat')].count).fill('Meat');
  const bacon: string[] = new Array(ingredients[ingredients.findIndex(item => item.name === 'Bacon')].count).fill('Bacon');

  return (
    <div className="burger-container">
      <fieldset>
        <legend>Ingredients</legend>
      <div className="burger-ingredients">
        {INGREDIENTS.map(ingredient => (
          <Ingredient
            key={ingredient.name}
            name={ingredient.name}
            count={getCount(ingredient.name)}
            image={ingredient.image}
            addClick={() => addClickHandle(ingredient.name)}
            removeClick={() => removeClickHandle(ingredient.name)}
          />
        ))}
      </div>
      </fieldset>
      <div className="burger-model">
        <fieldset>
          <legend>Burger</legend>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>

            {
              salad.map(() => (
                <div key={Math.random()} className="Salad"></div>
              ))
            }

            {
              cheese.map(() => (
                <div key={Math.random()} className="Cheese"></div>
              ))
            }

            {
              bacon.map(() => (
                <div key={Math.random()} className="Bacon"></div>
              ))
            }

            {
              meat.map(() => (
                <div key={Math.random()} className="Meat"></div>
              ))
            }

            <div className="BreadBottom"></div>
            <span>Price: {getPrice()}</span>
          </div>

        </fieldset>
      </div>

    </div>
  );
}

export default App;
