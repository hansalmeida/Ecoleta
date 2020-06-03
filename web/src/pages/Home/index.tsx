import React from "react"
import "./styles.scss"
import logo from "../../assets/logo.svg"
import { FiLogIn } from "react-icons/fi"
import { Link } from "react-router-dom"

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

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}
export default Home
