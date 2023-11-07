class ToDoPage {

    constructor() {
        this.toDoInputFieldLocator = "input.new-todo";
        this.toDoItemLocator = "ul.todo-list > li";
        this.filterButton = "ul.filters > li";
    }

    open() {    
        cy.visit("/");
    }

    createNewToDo(toDoName) {
        cy.get(this.toDoInputFieldLocator).type(toDoName);
        cy.get(this.toDoInputFieldLocator).type("{enter}");
    }

    markToDoAsCompleted(toDoName) {
        cy.get('ul.todo-list > li')
            .contains(toDoName)
            .parent()
            .find(".toggle")
            .click();
    }

    deleteToDo(toDoName) {
        cy.get(this.toDoItemLocator)
            .contains(toDoName)
            .get(".destroy")
            .click({ force: true });
    }

    showActive() {
        cy.get(this.filterButton)
            .contains("Active")
            .click();
    }

    showCompleted() {
        cy.get(this.filterButton)
            .contains("Completed")
            .click();
    }

    toDoShouldBeVisible(toDoName) {
        cy.get(this.toDoItemLocator)
            .filter(`:contains("${toDoName}")`)
            .should("be.visible");
    }

    toDoShoudNotBeVisisble(toDoName) {
        cy.contains(toDoName).should("not.exist");
    }

    toDoShouldBeCompleted(toDoName) {
        cy.get(this.toDoItemLocator)
            .filter(`:contains("${toDoName}")`)
            .should("have.class", "completed");
    }

}

export default ToDoPage;