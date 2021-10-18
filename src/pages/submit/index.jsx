import { useForm } from "react-hook-form";
import { ReactComponent as CheckboxIconSvg } from "../../assets/svg/checkbox.svg";
import useRatio from "../../hooks/useRatio";
import {
  StyledSubmit,
  StyledRoundContainer,
  StyledLitenLottie,
  StyledSubmitContainer,
  StyledSubmitContent,
  StyledSubmitWaveSurfer,
  StyledSubmitBg,
  StyledSubmitTextMobile,
  StyledSubmitTextTablet,
  StyledSubmitTextDesktop,
  StyledSubmitForm,
  StyledSubmitInput,
  StyledSubmitCheckboxContainer,
  StyledSubmitCheckbox,
  StyledSubmitCheckboxLabel,
  StyledSubmitCheckboxText,
  StyledSubmitError,
  StyledSubmitLink,
  StyledSubmitButton,
  StyledSubmitFooterText,
  StyledSubmitInputGroup,
} from "./styled";
import litenSubmitAnimation from "../../assets/animation/liten_submit.json";
import thereminMp3 from "../../assets/audio/theremin.mp3";
import { StyledCircles } from "../info/info_1/styled";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useStore } from "../../store";
import { observer } from "mobx-react";
import { MusicToggle } from "../../components/MusicToggle";
export const Submit = observer(() => {
  const { game } = useStore();
  const ratio = useRatio();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    control,
  } = useForm();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    game.changeBgMusic("finalMusic");
  }, []);

  const onSubmit = ({ email }) => {
    axios
      .create({ transformRequest: [(data, _headers) => JSON.stringify(data)] })
      .post("https://hooks.zapier.com/hooks/catch/11093500/bt0zhpf/", {
        email: email,
      })
      .then((res) => res.status === 200 && history.push("/shares"))
      .catch((err) => console.log(err));
  };
  return (
    <StyledSubmit ratio={ratio}>
      <MusicToggle />
      <StyledCircles>
        <div></div>
        <div></div>
      </StyledCircles>
      <StyledRoundContainer>
        <StyledLitenLottie animationData={litenSubmitAnimation} />
      </StyledRoundContainer>
      <StyledSubmitContainer>
        <StyledSubmitContent>
          <StyledSubmitWaveSurfer url={game.choosenTrack} />
          <StyledSubmitTextMobile
            dangerouslySetInnerHTML={{
              __html:
                "И это звучало… <strong>фантастически!</strong><br /> Заслушались, честно! А тем временем<br /> маленькую нейросеть Ото<br /> официально зачислили в штат<br /> музыкальных алгоритмов <strong>СберЗвук<br /> Бизнес.</strong> Благодарим вас за помощь!<br /> И, конечно, не оставим без <strong>подарка!</strong>",
            }}
          />
          <StyledSubmitTextTablet
            dangerouslySetInnerHTML={{
              __html:
                "И это звучало… <strong>фантастически!</strong><br /> Заслушались, честно!<br /><br /> А тем временем маленькую<br /> нейросеть Ото официально<br /> зачислили в штат музыкальных<br /> алгоритмов <strong>СберЗвук Бизнес.</strong><br /> Благодарим вас за помощь!<br /> И, конечно, не оставим без<br /> <strong>подарка!</strong>",
            }}
          />
          <StyledSubmitTextDesktop
            dangerouslySetInnerHTML={{
              __html:
                "И это звучало… <strong>фантастически!</strong><br /> Заслушались, честно!<br /><br /> А тем временем маленькую нейросеть<br /> Ото официально зачислили в штат<br /> музыкальных алгоритмов <strong>СберЗвук<br /> Бизнес.</strong> Благодарим вас за помощь!<br /> И, конечно, не оставим без <strong>подарка!</strong>",
            }}
          />
          <StyledSubmitForm onSubmit={handleSubmit(onSubmit)}>
            <StyledSubmitInputGroup>
              <StyledSubmitInput
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                placeholder="E-mail"
              />
              <StyledSubmitButton>Получить награду</StyledSubmitButton>
              {errors.email && (
                <StyledSubmitError>
                  Пожалуйста, введите свой e-mail
                </StyledSubmitError>
              )}
              {/* {errors.acceptTerms && <StyledSubmitError></StyledSubmitError>} */}
            </StyledSubmitInputGroup>
            <StyledSubmitCheckboxContainer>
              <StyledSubmitCheckbox
                id="acceptTerms"
                checked={checked}
                {...register("acceptTerms", { required: true })}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
              <StyledSubmitCheckboxLabel
                htmlFor="acceptTerms"
                onClick={() => setChecked(!checked)}
              >
                <CheckboxIconSvg />
                <StyledSubmitCheckboxText>
                  Я ознакомлен(а) с{" "}
                  <StyledSubmitLink href="" target="_blank" rel="noreferrer">
                    Политикой обработки персональных данных
                  </StyledSubmitLink>{" "}
                  и даю согласие на{" "}
                  <StyledSubmitLink href="" target="_blank" rel="norefferer">
                    обработку моих персональных данных.
                  </StyledSubmitLink>
                </StyledSubmitCheckboxText>
              </StyledSubmitCheckboxLabel>
            </StyledSubmitCheckboxContainer>
          </StyledSubmitForm>
          <StyledSubmitFooterText>
            Все авторские права на текст принадлежат ООО «Центр рекламных
            коммуникаций и технологий». Нарушение авторских прав может влечь
            гражданско-правовую, административную и/или уголовную
            ответственность
          </StyledSubmitFooterText>
        </StyledSubmitContent>
      </StyledSubmitContainer>
    </StyledSubmit>
  );
});
