import "./style.css"

export default function CardServ(props: any) {

    return (

        <div className="servico">
        <div className="topo_servico">
          <h3>Desenvolvimento de site institucional - Gateway de Pagamento/ Fintech</h3>
          <span>R$ 1300,00</span>
        </div>
        <p>Desenvolver um site responsivo que seja utilizado como uma
          plataforma de apresentação do nosso gateway de pagamento. O
          objetivo principal deste projeto é criar um site atraente e
          informativo, que demonstre as funcionalidades e benefícios do
          nosso gateway de pagamento para potenciais clientes.</p>
        <div className="techs">
            {
                props.techs.map ((tech: string, index: number) => {
                    return <span key={index}>{tech}</span>
                })
            }
            </div>
            </div>
    )
}
