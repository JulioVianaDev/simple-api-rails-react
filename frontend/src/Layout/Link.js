function Link(props) {
  // console.log(props)
  return (
    <a className={props.classe} href={props.destino}>
      {props.texto}
    </a>
  )
}

export default Link