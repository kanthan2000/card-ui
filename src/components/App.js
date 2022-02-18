import Singlecard  from "./Singlecard";
import data from './data';


function App() {
  
  return (
    <section className="py-4 container">
      <div style={{maxWidth: 345 }} className="row justify-content-center">
     {data.productData.map((item,index)=>
     {
      return(
        <Singlecard  img={item.img} name={item.name} words ={item.words} key={index} />
      )
     })
     }
    </div>
    </section>
  );
}

export default App;
