# User stories

## Definition

User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system.

## Brainstorming

### Teacher's View

1. Login
    + Teacher's institutional address must have been previously registered.
        + IDEA: assume that it wasn't registered by mistake and its address ends with the appropriate domain.
            + "You don't seem to have been registered, click here to issue a report to the institution"
            + Institution administrator gets notified and proceeds to register/validate the teacher manually.
    + Teacher writes institutional address and password to log in. `[goto 2]`.
2. Home page
    + View current course. `[goto 3]`
    + Add new course. `[goto 6]`
3. Course page
    + View recent exams.
    + Create new exam. `[goto 4]`
    + Propose question. `[goto 5]`
4. Create-new-exam page
    + modal
        + title
        + keywords
        + time and date
        + course code, course name, etc should be meta-attributes of the course page.
        + -- modal completed --
        + -- n questions are suggested --
        + user can remove/replace questions
            + Must indicate reason. Why wasn't the question appropriate? To difficult/easy? Incorrect?
        + User can add new questions to fill exam.
5. Propose-question page
    + Indicate attributes/metadata: keywords


## Textual form

### Teacher's stories

[Epic] As a Teacher, I can create an exam.
- As a Teacher, I can specify what title, date and keywords correspond to such exam.
- As a Teacher, I can add new questions to fill an exam.
- As a Teacher, I can accept a suggested question.

[Epic] As a Teacher, I can login to the EasyExam Application.
- As a Teacher, I can request the system administrator to be registered if my account hasn't been created.


### Administrator's stories



### Student's stories



