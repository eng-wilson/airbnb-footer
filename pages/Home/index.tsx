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
  ListTitle,
  ListLink,
  Button,
  DecoratedText,
  SimpleText,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <MainLinksContainer>
        <section>
          <div>
            <ListTitle>Atendimento</ListTitle>
          </div>
          <CommonListContainer>
            <ListItem>
              <ListLink href="/">Central de Ajuda</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Informações de segurança</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Opções de cancelamento</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">
                Nossa resposta à pandemia de COVID-19
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Apoie pessoas com deficiência</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Denuncie um problema do bairro</ListLink>
            </ListItem>
          </CommonListContainer>
        </section>

        <section>
          <div>
            <ListTitle>Comunidade</ListTitle>
          </div>
          <CommonListContainer>
            <ListItem>
              <ListLink href="/">Airbnb.org: ajuda em desastres</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Apoie refugiados afegãos</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Diversidade e pertencimento</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Combate à discriminação</ListLink>
            </ListItem>
          </CommonListContainer>
        </section>

        <section>
          <div>
            <ListTitle>Hospedagem</ListTitle>
          </div>
          <CommonListContainer>
            <ListItem>
              <ListLink href="/">Experimente hospedar</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">AirCover: proteção ao hospedar</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Explore recursos para hospedar</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Visite o fórum da comunidade</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Hospede de forma responsável</ListLink>
            </ListItem>
          </CommonListContainer>
        </section>

        <section>
          <div>
            <ListTitle>Sobre</ListTitle>
          </div>
          <CommonListContainer>
            <ListItem>
              <ListLink href="/">Newsroom</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Descubra os novos recursos</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Carta dos nossos fundadores</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Carreiras</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Investidores</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="/">Airbnb Luxe</ListLink>
            </ListItem>
          </CommonListContainer>
        </section>
      </MainLinksContainer>

      <MainLinksContainer>
        <RowContainer>
          <SimpleText>© 2021 Airbnb, Inc.</SimpleText>
          <div>
            <Divider>·</Divider>

            <ListLink href="/">Privacidade</ListLink>
            <Divider>·</Divider>
            <ListLink href="/">Termos</ListLink>
            <Divider>·</Divider>
            <ListLink href="/">Mapa do site</ListLink>
            <Divider>·</Divider>
            <ListLink href="/">Informações da empresa</ListLink>
          </div>
        </RowContainer>

        <RowContainerEnd>
          <RowList>
            <Button type="button">
              <span>
                <Image src={GlobalIcon} width="18" height="18" />
              </span>
              <DecoratedText>Português (BR)</DecoratedText>
            </Button>

            <Button type="button">
              <span>R$</span>
              <DecoratedText>BRL</DecoratedText>
            </Button>
          </RowList>

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
