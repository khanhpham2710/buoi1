import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";


function App(){
  const name = "khanh"

  return (
    <div>
      <Header name={name}/>
      <div>New line</div>
      <Footer />
    </div>
  )
}

export default App;