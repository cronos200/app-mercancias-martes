//Igual para las imagenes importar nombre cualquiera fron y donde este el archivo
import imagen from './assets/2149214306.jpg'
function MenuLateral (){
    return(
        <aside className="panel-control-aside">
        <div>
          <img src={imagen} alt="" /> 
        </div>
        <nav>
          <ul>
            <li>Hola mundo</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </aside>
    )
}

export default MenuLateral;