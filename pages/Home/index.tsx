import Image from "next/image";

import InstagramIcon from "../../public/assets/instagram-icon.svg";
import TwitterIcon from "../../public/assets/twitter-icon.svg";
import FacebookIcon from "../../public/assets/facebook-icon.svg";
import GlobalIcon from "../../public/assets/global-icon.svg";

import {
  Container,
  RowContainer,
  RowList,
  CommonListContainer,
  ListItem,
  MainLinksContainer,
  RowContainerEnd,
  Divider,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <MainLinksContainer>
        <section>
          <div>
            <h3>Atendimento</h3>
          </div>
          <CommonListContainer>
            <ListItem>
              <a href="/">Central de Ajuda</a>
            </ListItem>
            <ListItem>
              <a href="/">Informações de segurança</a>
            </ListItem>
            <ListItem>
              <a href="/">Opções de cancelamento</a>
            </ListItem>
            <ListItem>
              <a href="/">Nossa resposta à pandemia de COVID-19</a>
            </ListItem>
            <ListItem>
              <a href="/">Apoie pessoas com deficiência</a>
            </ListItem>
            <ListItem>
              <a href="/">Denuncie um problema do bairro</a>
            </ListItem>
          </CommonListContainer>
        </section>

        <section>
          <div>
            <h3>Comunidade</h3>
          </div>
          <CommonListContainer>
            <ListItem>
              <a href="/">Airbnb.org: ajuda em desastres</a>
            </ListItem>
            <ListItem>
              <a href="/">Apoie refugiados afegãos</a>
            </ListItem>
            <ListItem>
              <a href="/">Diversidade e pertencimento</a>
            </ListItem>
            <ListItem>
              <a href="/">Combate à discriminação</a>
            </ListItem>
          </CommonListContainer>
        </section>

        <section>
          <div>
            <h3>Hospedagem</h3>
          </div>
          <CommonListContainer>
            <ListItem>
              <a href="/">Experimente hospedar</a>
            </ListItem>
            <ListItem>
              <a href="/">AirCover: proteção ao hospedar</a>
            </ListItem>
            <ListItem>
              <a href="/">Explore recursos para hospedar</a>
            </ListItem>
            <ListItem>
              <a href="/">Visite o fórum da comunidade</a>
            </ListItem>
            <ListItem>
              <a href="/">Hospede de forma responsável</a>
            </ListItem>
          </CommonListContainer>
        </section>

        <section>
          <div>
            <h3>Sobre</h3>
          </div>
          <CommonListContainer>
            <ListItem>
              <a href="/">Newsroom</a>
            </ListItem>
            <ListItem>
              <a href="/">Descubra os novos recursos</a>
            </ListItem>
            <ListItem>
              <a href="/">Carta dos nossos fundadores</a>
            </ListItem>
            <ListItem>
              <a href="/">Carreiras</a>
            </ListItem>
            <ListItem>
              <a href="/">Investidores</a>
            </ListItem>
            <ListItem>
              <a href="/">Airbnb Luxe</a>
            </ListItem>
          </CommonListContainer>
        </section>
      </MainLinksContainer>

      <MainLinksContainer>
        <RowContainer>
          <span>© 2021 Airbnb, Inc.</span>
          <div>
            <Divider>·</Divider>

            <a href="/">Privacidade</a>
            <Divider>·</Divider>
            <a href="/">Termos</a>
            <Divider>·</Divider>
            <a href="/">Mapa do site</a>
            <Divider>·</Divider>
            <a href="/">Informações da empresa</a>
          </div>
        </RowContainer>

        <RowContainerEnd>
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

          <RowList>
            <li>
              <Image src={FacebookIcon} width="18" height="18" />
            </li>
            <li>
              <Image src={InstagramIcon} width="18" height="18" />
            </li>
            <li>
              <Image src={TwitterIcon} width="18" height="18" />
            </li>
          </RowList>
        </RowContainerEnd>
      </MainLinksContainer>
    </Container>
  );
}
