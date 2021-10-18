import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { MusicToggle } from "../../../components/MusicToggle";
import { useStore } from "../../../store";
import { StyledCircles } from "../../info/info_1/styled";
import {
  StyledTaskBg,
  StyledTaskContent,
  StyledTaskTitle,
  StyledTaskList,
  StyledTaskListItem,
  StyledTaskQuestion,
  StyledTaskCheckbox,
  StyledTaskDescription,
  StyledTaskDescriptionText,
  StyledTaskDescriptionButton,
} from "./styled";

export const Task3 = () => {
  const { game } = useStore();
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  useEffect(() => {}, [checked]);
  return (
    <>
      <StyledTaskBg />
      <StyledCircles>
        <div></div>
        <div></div>
      </StyledCircles>
      <MusicToggle />
      <div className="container">
        <StyledTaskContent>
          <StyledTaskTitle>
            Что вы сделаете, чтобы в кафе <strong>легально</strong> играла
            музыка?
          </StyledTaskTitle>
          <StyledTaskList>
            {game.task3.map((item) => {
              return (
                <StyledTaskListItem key={item.id}>
                  <StyledTaskQuestion>{item.title}</StyledTaskQuestion>
                  <StyledTaskCheckbox
                    checked={checked.checkedId === item.id}
                    onClick={() => {
                      setChecked({ ...checked, checkedId: item.id });
                    }}
                  />
                  <StyledTaskDescription show={checked.checkedId === item.id}>
                    <StyledTaskDescriptionText
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    {item.id === 3 && (
                      <StyledTaskDescriptionButton
                        onClick={() => history.push("/info/4")}
                      />
                    )}
                  </StyledTaskDescription>
                </StyledTaskListItem>
              );
            })}
          </StyledTaskList>
        </StyledTaskContent>
      </div>
    </>
  );
};
