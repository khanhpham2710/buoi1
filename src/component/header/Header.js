import "./header.css"

function Header(props){
    // const {name1} = props
    const list = [
        {
            name: "khanh",
            age: 26
        },
        {
            name: "oha",
            age: 13
        }
    ]
    return (
        <div>
            <h1 className="header" style={{ color: "pink" }}>Header component</h1>
            <ul>
                {
                    list&&list.map((user,index) => (<li key={index}>Tên: {user.name} Tuổi: {user.age}</li>))
                }
            </ul>
        </div>
    )
}

export default Header;

