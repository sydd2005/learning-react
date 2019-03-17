var items = [
    "1 lb Salmon",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
];

var card = React.createElement("div", null,
    React.createElement("h1", null, "Baked Salmon"),
    React.createElement("ul", {"className": "ingredients"},
        items.map((ingredient, i) =>
            React.createElement("li", {key: i}, ingredient)
        )
    )
);
ReactDOM.render(card, document.querySelector('#react-container'))
