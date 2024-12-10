/*

! ====================================================================================================//
!Tasks ====================================================================================================//
! ====================================================================================================//
Запрос
{
	"topicId": 5,
		"status": "published" // "draft", "deleted"
}
Ответ
[
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]
Ф - я
async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
 todo Anwer =================//
enum QuestionStatus {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted'
}

async function getFaqs(req: {
	topicId: number,
	status?: QuestionStatus
}): Promise<{
	question: string,
	answer: string,
	tags: string[],
	likes: number,
	status: string
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}

 ! Iv.Petr 41 ====================================================================================================//

https://github.com/yankovalenko94/TS_task_answers/blob/master/TS_step_5/index.ts
 Request
 {
		 animal: 'cat' | 'dog' | 'bird',
		 breed: string,
		 sterilized?: string
 }

 Response #1

 {
		 status: 'available',
		 data: {
				 animal: 'cat' | 'dog' | 'bird',
				 breed: string,
				 sterilized?: string,
				 location: string,
				 age?: number
		 }
 }

 Response #2

 {
		 status: 'not available',
		 data: {
				 message: string,
				 nextUpdateIn: Date
		 }
 }

function checkAnimalData(animal) {
	if ("available") {
		// Заменить условие!
		return animal.data;
	} else {
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

*/