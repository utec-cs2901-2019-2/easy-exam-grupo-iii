## Definition

A description of a set of sequences of actions, including variants, that a system performs to yield an observable result of value to an actor.

## Our use cases (textual form)

System: EasyExam

Actors: Teacher, Student, Administrator

Preconditions: User is logged in.

- UC01 Generate exam
	- Teacher chooses to generate exam.
	- EasyExam requests for details of the exam.
	- Teacher enters the requested details.
	- EasyExam requests contribution from the Teacher.
	- Teacher contributes. (UC02)
	- EasyExam gives three questions.
	- EasyExam asks for validation.
	- Teacher validates the questions. (UC04)
	- EasyExam generates the exam.
- UC02 Contribute
	- Teacher accepts to contribute.
	- EasyExam gives X ways to contribute.
	- Teacher selects one.
	- EasyExam opens contribution form depending on the selected option.
	- Teacher fills contribution form.
	- Teacher sends contribution form.
	- EasyExam accepts contribution.  
- UC03 Register an educational institute
	- Administrator chooses to register an educational institute.
	- EasyExam requests for details of the educational institute.
	- Administrator enters the requested details.
	- EasyExam registers educational institute.
- UC04 Validate questions
	- Teacher/Student rates the questions.
	- Teacher/Student comments on the questions.
	- EasyExam accepts Teacher/Student feedback. 
- UC05 Practice exam
	- Student chooses to generate exam.
	- EasyExam requests the topic of the exam.
	- EasyExam requests the difficulty of the exam.
	- Student is given a question.
	- Student solves the question.
	- EasyExam requests a feedback of the question.

