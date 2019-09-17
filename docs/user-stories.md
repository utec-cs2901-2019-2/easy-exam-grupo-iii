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

### General stories [Student, Teacher, Administrator]

[Epic] As a registered user, I can login to the EasyExam Application.
- As a forgetful user, I can recover my password.

[Epic] As a user I can register to the system.
- As a teacher I can ask the university administrator to grant me access to a teacher account.
- As a student I can register using my university email handle.

### Teacher's stories

[Epic] As a Teacher, I can create an exam.
- As a Teacher, I can specify the title, subject, date and keywords that correspond to the exam, so that it's easier to manage them.
- As a Teacher, I can add new questions to fill an exam.
- As a Teacher, I can accept a suggested question.
- As a Teacher, I can reject a suggestion and be prompt a new question
- As a Teacher, I can download my generated exam.
- As a Teacher, I can access all the exams I have generated so that I can keep history of previous evaluations.

[Epic] As a Teacher, I can contribute to the EasyExam Application.
- As a Teacher, I can solve problems to contribute.
- As a Teacher, I can rate problems correctness and relevance to contribute.
- As a Teacher, I can rate problems based on their difficulty.
- As a Teacher, I can add new problems to contribute.

### Administrator's stories

[Epic] As an Administrator, I can register an educational institute. 
- As an Administrator, I can register a teacher of an educational institute.
- As an Administrator, I can remove a teacher from of an educational institutes access.
- As an Administrator, I can apply a punishment to malicious users.

### Student's stories

[Epic] As a Student, I can register to EasyExam 
- As a Student, My educational institution will provide all the personal information for my profile
- As a Student, I can use my institutional email address to register
- As a Student, I can recover my password using my email

[Epic] As a Student, I can access the EasyExam
- As a Student, I can login with my institutional address and password

[Epic] As a Student, I can generate problem sets.
- As a Student, I can select questions to fill a problem set.
- As a Student, I can randomly generate a problem set according to my specifications.
- As a Student, I can download a group of questions to practice.

[Epic] As a Student, I can validate and comment on problems and exercises.
- As a Student, I can rate problems based on their difficulty
- As a Student, I can comment on problems for other users to see

As a Student, I can view my current courses so that I can access them separately.

[Epic] As a Student, I can add new courses so that I can manage my EasyExam account easily.
- As a Student, I can specify the keywords that describe my courses so that the service can accurately recommend me new questions.

[Epic] As a Student I can view new suggested problems and exercises so that I can solve them.
- As a Student, I can view recent solved/tried problems so that I can try them again or review my solution.
