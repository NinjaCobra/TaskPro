import { useState } from 'react';
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { CardForm } from 'components/forms/CardForm/CardForm';
import { ModalColumn } from './ModalColumn';
import css from './Column.module.css';
const tasks = [
  {
    title: 'Task1',
    description: 'Lorem Ipsum Lorem Ipsum',
    lableColor: '#8FA0CF',
    deadline: '26.06.2023',
  },
  {
    title: 'Task2',
    description: 'Lorem Ipsum Lorem Ipsum',
    lableColor: '#E09CB5',
    deadline: '26.06.2023',
  },
  {
    title: 'Task3',
    description: 'Lorem Ipsum Lorem Ipsum',
    lableColor: '#8FA0CF',
    deadline: '27.06.2023',
  },
];
export const Column = () => {
  const [title, setTitle] = useState('To Do');
  const [listTask, setListTask] = useState(tasks);
  const [showModalEditColumnName, setShowModalEditColumnName] = useState(false);
  const [showModalCreateTasks, setShowModalCreateTasks] = useState(false);

  const toggleModalEditColumnName = () => {
    setShowModalEditColumnName(!showModalEditColumnName);
  };

  const toggleModalCreateTasks = () => {
    setShowModalCreateTasks(!showModalCreateTasks);
  };
  const makeTask = task => {
    setListTask(prevTasks => {
      return [...prevTasks, task];
    });
  };
  return (
    <section className={css.containerColumn}>
      <div className={css.wrapperTitleColumn}>
        <h3 className={css.titleColumn}>{title}</h3>
        <div>
          <button
            className={css.buttonColumn}
            type="button"
            onClick={toggleModalEditColumnName}
          >
            Edit
            {/* <Icon
              name={'#pencil-icon'}
              width={16}
              height={16}
              fill={'currentColor'}
              sprite={2}
            /> */}
          </button>
          <button className={css.buttonColumn}>Delete</button>
        </div>
        {showModalEditColumnName && (
          <ModalColumn onClose={toggleModalEditColumnName}>
            <ColumnForm
              setTitle={setTitle}
              onClose={toggleModalEditColumnName}
              title={title}
            />
          </ModalColumn>
        )}
        {showModalCreateTasks && (
          <ModalColumn onClose={toggleModalCreateTasks}>
            <CardForm makeTask={makeTask} onClose={toggleModalCreateTasks} />
          </ModalColumn>
        )}
      </div>

      <ul className={css.listTask}>
        {listTask.map(task => {
          return (
            <li key={task.title} className={css.task}>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <p>{task.lableColor}</p>
              <p>{task.deadline.toString()}</p>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={css.addCardButton}
        onClick={toggleModalCreateTasks}
      >
        Add another card
      </button>
    </section>
  );
};
