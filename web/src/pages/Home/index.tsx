import React from "react"
import "./styles.scss"
import logo from "../../assets/logo.svg"
import { FiLogIn } from "react-icons/fi"

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu marketplace para coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <a href="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  )
}
export default Home
