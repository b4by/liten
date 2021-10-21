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
  const [tasks, setTasks] = useState([...game.task3]);
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log(tasks);
  }, [checked, tasks]);
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
            {tasks?.map((item) => {
              return (
                <StyledTaskListItem
                  key={item.id}
                  hidden={tasks[item.id].hidden}
                >
                  <StyledTaskQuestion>{item.title}</StyledTaskQuestion>
                  <StyledTaskCheckbox
                    checked={checked.checkedId === item.id}
                    onClick={() => {
                      let newTasks = [...tasks];
                      setChecked({ ...checked, checkedId: item.id });
                      setTimeout(() => {
                        if (item.id === 3) {
                          return;
                        }
                        newTasks.find((el) => el.id === item.id).hidden = true;
                        setTasks([...newTasks]);
                      }, 5000);
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
