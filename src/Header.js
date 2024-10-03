function Item(props) {
    return (
        <li>
            <a href={props.link}>{props.content}</a>
        </li>
    );
}

function Menu({ list }) {
    return (
        <ul>
            {list.map((item) => (
                <Item key={item.url} link={item.url} content={item.text} />
            ))}
        </ul>
    );
}

function Header() {
    const list = [
        { url: "/", text: "Trang chủ" },
        { url: "/about", text: "Giới thiệu" },
        { url: "/contact", text: "Liên hệ" },
    ];

    return (
        <header>
            <Menu list={list} />
        </header>
    );
}

export default Header;
