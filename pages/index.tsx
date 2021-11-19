import Image from "next/image";

import InstagramIcon from "../public/assets/instagram-icon.svg";
import TwitterIcon from "../public/assets/twitter-icon.svg";
import FacebookIcon from "../public/assets/facebook-icon.svg";
import GlobalIcon from "../public/assets/global-icon.svg";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h3>Atendimento</h3>
        </div>
        <ul>
          <li>
            <a href="/">Central de Ajuda</a>
          </li>
          <li>
            <a href="/">Informações de segurança</a>
          </li>
          <li>
            <a href="/">Opções de cancelamento</a>
          </li>
          <li>
            <a href="/">Nossa resposta à pandemia de COVID-19</a>
          </li>
          <li>
            <a href="/">Apoie pessoas com deficiência</a>
          </li>
          <li>
            <a href="/">Denuncie um problema do bairro</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Comunidade</h3>
        </div>
        <ul>
          <li>
            <a href="/">Airbnb.org: ajuda em desastres</a>
          </li>
          <li>
            <a href="/">Apoie refugiados afegãos</a>
          </li>
          <li>
            <a href="/">Diversidade e pertencimento</a>
          </li>
          <li>
            <a href="/">Combate à discriminação</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Hospedagem</h3>
        </div>
        <ul>
          <li>
            <a href="/">Experimente hospedar</a>
          </li>
          <li>
            <a href="/">AirCover: proteção ao hospedar</a>
          </li>
          <li>
            <a href="/">Explore recursos para hospedar</a>
          </li>
          <li>
            <a href="/">Visite o fórum da comunidade</a>
          </li>
          <li>
            <a href="/">Hospede de forma responsável</a>
          </li>
        </ul>
      </section>

      <section>
        <div>
          <h3>Sobre</h3>
        </div>
        <ul>
          <li>
            <a href="/">Newsroom</a>
          </li>
          <li>
            <a href="/">Descubra os novos recursos</a>
          </li>
          <li>
            <a href="/">Carta dos nossos fundadores</a>
          </li>
          <li>
            <a href="/">Carreiras</a>
          </li>
          <li>
            <a href="/">Investidores</a>
          </li>
          <li>
            <a href="/">Airbnb Luxe</a>
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
            <a href="/">Privacidade</a>
            <span>·</span>
            <a href="/">Termos</a>
            <span>·</span>
            <a href="/">Mapa do site</a>
            <span>·</span>
            <a href="/">Informações da empresa</a>
          </div>
        </div>

        <div>
          <div>
            <span>
              <button type="button">
                <span>
                  <Image src={GlobalIcon} width="18" height="18" />
                </span>
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
