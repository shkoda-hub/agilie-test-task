import ToDoPage from "../pages/ToDo.page";

describe('to-do tests', () => {
  const toDoPage = new ToDoPage();

  beforeEach(() => {
    toDoPage.open();
  })

  it("should be possible create new to-do", () => {
    let toDoName = "myToDo";

    toDoPage.createNewToDo(toDoName);
    toDoPage.toDoShouldBeVisible(toDoName);
  })

  it("should be possible to mark to-do as completed", () => {
    let toDoName = "completed to-do";

    toDoPage.createNewToDo(toDoName);
    toDoPage.markToDoAsCompleted(toDoName);
    toDoPage.toDoShouldBeCompleted(toDoName);
  })

  it("should be possible to delete to-do", () => {
    let toDoName = "to do to delete";

    toDoPage.createNewToDo(toDoName);
    toDoPage.deleteToDo(toDoName);
    toDoPage.toDoShoudNotBeVisisble(toDoName);
  })

  it("should be possible to filter", () => {
    let firstToDo = "I am first to do";
    let secondToDo = "I am second to do";

    toDoPage.createNewToDo(firstToDo);
    toDoPage.createNewToDo(secondToDo);

    toDoPage.markToDoAsCompleted(firstToDo);

    toDoPage.showActive();
    toDoPage.toDoShoudNotBeVisisble(firstToDo);
    toDoPage.toDoShouldBeVisible(secondToDo);

    toDoPage.showCompleted();
    toDoPage.toDoShoudNotBeVisisble(secondToDo);
    toDoPage.toDoShouldBeVisible(firstToDo);
  })
})