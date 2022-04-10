import React from "react";
import MealItem from "./MealItem";
import { useHistory } from "react-router-dom";
function MealList(props) {
  const { meals = [] } = props;
  const { goBack } = useHistory();
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go back
      </button>

      <div className="list">
        {meals.map((item) => (
          <MealItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
}
export default MealList;
