import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";


function App(){
  const name = "khanh"

  return (
    <div>
      <Header name={name}/>
      <Footer />
    </div>
  )
}

export default App;