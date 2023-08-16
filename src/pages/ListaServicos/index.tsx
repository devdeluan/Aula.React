import { useState } from "react";
import "../ListaServicos/style.css"
import CardServ from "../../components/CardServ";
import Logo from "../../assets/img/logo.svg";
import Face from "../../assets/img/facebook.svg";
import Insta from "../../assets/img/instagram.svg";
import Linkedin from "../../assets/img/linkedin.svg";

export default function ListaServicos() {
  
    
  const [serv, setDevs] = useState<any[]>([

    {
      img_perfil: "https://github.com/Thiago-Nascimento.png",
      projeto: "Desenvolvimento de site institucional - Gateway de Pagamento/ Fintech",
      valor: "R$ 1300,00",
      skills: ["HTML", "CSS", "REACT"]
    },

]);

const [skillDigitada, setSkillDigitada] = useState<string>("");

const [listaServFiltrados, setListaServFiltrados] = useState<any[]>(serv);


function buscarPorSkill(event: any){
    event.preventDefault();

    const ServFiltrados = serv.filter((dev: any) => dev.skills.includes(skillDigitada.toLocaleUpperCase()));

    if(ServFiltrados.length === 0){
        alert("Nenhum serviço com essa skill")
    }else{
        setListaServFiltrados(ServFiltrados)
    }
}

function retornoServGeral(event: any){
    if(event.target.value === ""){
        setListaServFiltrados(serv)
    }
    setSkillDigitada(event.target.value)
}

  function MostraMenu() {

    let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
    let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID        
    let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)
    
    if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
        menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
        sombra.style.right = "-10vw"; // Move a sombra para a direita
        menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
        menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
        body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
        menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
        sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
        menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
        menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
        body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
    }
    menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu

}



return (
<>
  <main>
    <div className="container container_lista_servicos">
      <div className="lista_servicos_conteudo">
        <h1>Lista de Serviços</h1>
        <hr />
        <form method="post" onSubmit={buscarPorSkill}>
          <div className="wrapper_form">
            <label htmlFor="busca">Procurar serviços</label>
            <div className="campo-label">
              <input
                type="search"
                name="campo-busca"
                id="busca"
                placeholder="Buscar serviços por tecnologias..." onChange={retornoServGeral}/>
              <button type="submit">Buscar</button>
            </div>
          </div>
        </form>
        <div className="wrapper_lista">
          <ul>
          {listaServFiltrados.map((dev: any, index: number) => {
            
                                    return <li>
                                    <CardServ 
                                    foto={dev.img_perfil}
                                    nome={dev.nome}
                                    email={dev.email}
                                    techs={dev.skills}
                                     />
                              </li>
          }
          )}
            <li>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div className="container rodape">
      <div className="rodape_conteudo">
        <div className="rodape_conteudo_paginas">
          <h2>Páginas</h2>
          <ul>
            <li>Login</li>
            <li>Home</li>
            <li>Listar Serviços</li>
            <li>Cadastrar Cliente</li>
            <li>Cadastrar Desenvolvedor</li>
          </ul>
        </div>
        <img src={Logo} alt="" />
        <div className="rodape_conteudo_contatos">
          <h2>Contatos</h2>
          <div>
            <a href="#">
              <img src={Face} alt="" />
            </a>
            <a href="#">
              <img src={Insta} alt="" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="" />
            </a>
          </div>
          <a href="mailto:">contato@vsconnect.com</a>
        </div>
      </div>
      <p>todos os direitos reservados ©.</p>
    </div>
  </footer>
</>
   )
}