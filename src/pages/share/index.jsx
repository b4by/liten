import { Link } from "react-router-dom";
import {
  StyledShare,
  StyledCircles,
  StyledShareContainer,
  ShareScreenLottieContainer,
  ShareScreenLottie,
  StyledShareTextMobile,
  StyledShareTextTablet,
  StyledShareTextDesktop,
  StyledShareGroup,
  StyledShareImg,
} from "./styled";

import tgIconImg from "../../assets/img/icons/tg-icon@2x.png";
import okIconImg from "../../assets/img/icons/ok-icon@2x.png";
import twIconImg from "../../assets/img/icons/tw-icon@2x.png";
import waIconImg from "../../assets/img/icons/wa-icon@2x.png";
import vkIconImg from "../../assets/img/icons/vk-icon@2x.png";
import fbIconImg from "../../assets/img/icons/fb-icon@2x.png";
import ShareAnimationLottie from "../../assets/animation/liten_screen_1.json";

const shares = [
  {
    id: 0,
    img: tgIconImg,
    url: "https://t.me/share/url?url=https://muziq.sberzvuk-b2b.ru/share",
  },
  {
    id: 1,
    img: okIconImg,
    url: "https://connect.ok.ru/offer?url=https://muziq.sberzvuk-b2b.ru/share",
  },
  {
    id: 2,
    img: twIconImg,
    url: "https://twitter.com/intent/tweet?url=https://muziq.sberzvuk-b2b.ru/share",
  },
  {
    id: 3,
    img: waIconImg,
    url: "https://api.whatsapp.com/send?text=https://muziq.sberzvuk-b2b.ru/share",
  },
  {
    id: 4,
    img: vkIconImg,
    url: "https://vk.com/share.php?url=https://zadacha.online/share&title=Помогите маленькой нейросети и получите большой приз от СберЗвук Бизнес&image=https://muziq.sberzvuk-b2b.ru/share/share-2.jpg&noparse=true",
  },
  {
    id: 5,
    img: fbIconImg,
    url: "https://www.facebook.com/sharer.php?u=https://muziq.sberzvuk-b2b.ru/share",
  },
];

export const Share = () => {
  return (
    <StyledShare>
      <StyledCircles>
        <div></div>
        <div></div>
        <div></div>
      </StyledCircles>
      <ShareScreenLottieContainer>
        <ShareScreenLottie animationData={ShareAnimationLottie} />
      </ShareScreenLottieContainer>
      <StyledShareContainer>
        <StyledShareTextMobile>
          <p>
            <strong>Письмо с подарком</strong> уже летит
            <br /> на вашу почту!
          </p>
          <p>
            {" "}
            А пока вы можете рассказать
            <br /> о Ото вашим друзьям.
            <br /> Она будет рада!
          </p>
        </StyledShareTextMobile>
        <StyledShareTextTablet>
          <p>
            <strong>Письмо с подарком</strong> уже летит на вашу почту!
          </p>
          <p>
            {" "}
            А пока вы можете рассказать о Ото вашим друзьям.
            <br /> Она будет рада!
          </p>
        </StyledShareTextTablet>
        <StyledShareTextDesktop>
          <p>
            <strong>Письмо с подарком</strong> уже летит на вашу почту!
          </p>
          <p>
            {" "}
            А пока вы можете рассказать о Ото вашим друзьям.
            <br /> Она будет рада!
          </p>
        </StyledShareTextDesktop>
        <StyledShareGroup>
          {shares.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer">
              <StyledShareImg src={item.img} alt="social" />
            </a>
          ))}
        </StyledShareGroup>
      </StyledShareContainer>
    </StyledShare>
  );
};
