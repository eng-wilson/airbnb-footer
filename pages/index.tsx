import Image from "next/image";

import InstagramIcon from "../public/assets/instagram-icon.svg";
import TwitterIcon from "../public/assets/twitter-icon.svg";
import FacebookIcon from "../public/assets/facebook-icon.svg";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h3>Atendimento</h3>
        </div>
        <ul>
          <li>
            <a>Central de Ajuda</a>
          </li>
          <li>
            <a>Informações de segurança</a>
          </li>
          <li>
            <a>Opções de cancelamento</a>
          </li>
          <li>
            <a>Nossa resposta à pandemia de COVID-19</a>
          </li>
          <li>
            <a>Apoie pessoas com deficiência</a>
          </li>
          <li>
            <a>Denuncie um problema do bairro</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Comunidade</h3>
        </div>
        <ul>
          <li>
            <a>Airbnb.org: ajuda em desastres</a>
          </li>
          <li>
            <a>Apoie refugiados afegãos</a>
          </li>
          <li>
            <a>Diversidade e pertencimento</a>
          </li>
          <li>
            <a>Combate à discriminação</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Hospedagem</h3>
        </div>
        <ul>
          <li>
            <a>Experimente hospedar</a>
          </li>
          <li>
            <a>AirCover: proteção ao hospedar</a>
          </li>
          <li>
            <a>Explore recursos para hospedar</a>
          </li>
          <li>
            <a>Visite o fórum da comunidade</a>
          </li>
          <li>
            <a>Hospede de forma responsável</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Sobre</h3>
        </div>
        <ul>
          <li>
            <a>Newsroom</a>
          </li>
          <li>
            <a>Descubra os novos recursos</a>
          </li>
          <li>
            <a>Carta dos nossos fundadores</a>
          </li>
          <li>
            <a>Carreiras</a>
          </li>
          <li>
            <a>Investidores</a>
          </li>
          <li>
            <a>Airbnb Luxe</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <div>© 2021 Airbnb, Inc.</div>
          <div>
            <span>
              <span>·</span>
            </span>
            <a>Privacidade</a>
            <span>·</span>
            <a>Termos</a>
            <span>·</span>
            <a>Mapa do site</a>
            <span>·</span>
            <a>Informações da empresa</a>
          </div>
        </div>

        <div>
          <div>
            <span>
              <button type="button">
                <span>Português (BR)</span>
              </button>
            </span>
            <span>
              <button type="button">
                <span>R$</span>
                <span>BRL</span>
              </button>
            </span>
          </div>
          <div>
            <ul>
              <li>
                <Image src={InstagramIcon} width="18" height="18" />
              </li>
              <li>
                <Image src={TwitterIcon} width="18" height="18" />
              </li>
              <li>
                <Image src={FacebookIcon} width="18" height="18" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
