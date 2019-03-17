var items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];

const IngredientsList = ({items}) =>
    React.createElement("ul",
        null,
        items.map((ingredient, key) =>
            React.createElement("li", {key}, ingredient)
        )
    )

const Ingredients = React.createFactory(IngredientsList);

ReactDOM.render(
    Ingredients({items}),
    document.querySelector('#react-container'))
