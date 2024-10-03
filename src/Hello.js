function Hello() {
    const person = {
        name: "Peter",
        theme: {
            backgroundColor: "green",
            color: "white",
        },
    };

    return (
        <div
            style={{
                textAlign: "center",
                backgroundColor: person.theme.backgroundColor,
                color: person.theme.color,
            }}
        >
            <h1>Xin chào: {person.name}</h1>
        </div>
    );
}

function HelloPerson(props) {
    return <h1 style={{ textAlign: "center" }}>Xin chào bạn: {props.name}</h1>;
}

export { Hello, HelloPerson };
