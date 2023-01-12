import Link from "../../Layout/Link"

export function Navbar(){

  return(
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#s">Pedidos</a> */}
        <Link classe="navbar-brand" destino="Pag-inicial" texto="Pedidos"/>
        <div className=" " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-link active" aria-current="page" href="#ss">Faça seu pedido</a> */}
            <Link classe="nav-link active" destino="Pag-inicial" texto="Faça seu pedido"/>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}


