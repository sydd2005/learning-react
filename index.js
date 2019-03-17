var items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];

const IngredientsList = ({items}) => {
        return React.createElement("ul",
            {"className": "ingredients"},
            items.map((ingredient, i) => 
                React.createElement("li", {key: i}, ingredient)
            )
        );
}

const list = React.createElement(IngredientsList, {items}, null);

ReactDOM.render(list, document.querySelector('#react-container'))
