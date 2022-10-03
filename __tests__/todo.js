const todoList = require("../todo");
const {all, markAsComplete, add} = todoList();

describe("Todo List Test Suite", ()=> {
    beforeAll(()=> {
        add(
            {
                title: "Write Exam",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
    })
    test("Should add new Todo", ()=> {
        const count = all.length;
        add(
            {
                title: "Write Exam",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(count + 1);
    });
    test("Should mark as Complete", ()=> {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
})