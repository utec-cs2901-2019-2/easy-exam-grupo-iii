## Definition

A description of a set of sequences of actions, including variants, that a system performs to yield an observable result of value to an actor.

## Our use cases (textual form)

System: EasyExam

Actors: Teacher, Student

Preconditions: User is logged in.

- UC01 Generate exam
	- Teacher chooses to generate exam.
	- EasyExam requests for details of the exam.
	- Teacher enters the requested details.
	- EasyExam requests contribution from the Teacher.
	- Teacher contributes.
	- EasyExam gives three questions and asks for validation.
	- Teacher validates the questions.
	- EasyExam generates the exam.
- UC02 Practice exam
	- Student chooses to generate exam.
	- EasyExam request the topic of the exam.
	- EasyExam request the difficulty of the exam.
	- Student is given a question.
	- Student solves the question.
	- EasyExam request a feedback of the question.
- UC03
- UC04
- UC05

