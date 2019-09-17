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
- As a Teacher, I can choose which course my exam belongs to
- As a Teacher, I can add new questions to fill an exam.
- As a Teacher, I can accept a suggested question.
- As a Teacher, I can reject a suggestion and be prompt a new question
- As a Teacher, I can choose to download my generated exam

[Epic] As a Teacher, I can recover my password.
    - As a Teacher, I can request the webpage to send me an email with instructions to change my password
    - As a Teacher, I can request a new password using my security questions

[Epic] As a Teacher, I can login to the EasyExam Application.
- As a Teacher, I can request the system administrator to be registered if my account hasn't been created.

[Epic] As a Teacher, I can contribute to the EasyExam Application.
- As a Teacher, I can solve problems to contribute.
- As a Teacher, I can rate problems to contribute.
- As a Teacher, I can add new problems to contribute.

### Administrator's stories

[Epic] As an Administrator, I can register an educational institute. 
- As an Administrator, I can register a teacher of an educational institute.  

### Student's stories

[Epic] As a Student, I can generate problem sets.
- As a Student, I can select questions to fill a problem set.

[Epic] As a Student, I can validate and comment on problems and exercises.

