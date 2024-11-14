function HelloBinhMinh() {
    const hiAll = () => {
        alert("Hello everyone");
    };

    const hiYou = (name) => {
        alert("Hello " + name);
    };

    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou("You")}>Hi you</button>
        </span>
    );
}

export default HelloBinhMinh;
