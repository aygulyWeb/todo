class Notes {

	constructor(tasks) {
		this.initElements();
		this.tasks = tasks;
	}

	initMethods() {
		// this.getChecked();
		this.getLocal();

	}

	// getChecked() {
	// 	const tableRound = document.querySelector('.table-round');
	// 	this.addBtn.addEventListener('change', function () {
	// 		this.checkInput.checked ? tableRound.style.backgroundColor = "red" : tableRound.style.backgroundColor = "yellow";

	// 	})
	// }

	getLocal(tasks) {

		!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

		function Task(date, description) {
			this.date = date;
			this.description = description;
			this.complited = false;

		}

		let now = new Date();

		this.tableForm.addEventListener('submit', function (e) {
			e.preventDefault();
			tasks.push(new Task(dateValue.value, addNote.value));
			localStorage.setItem('tasks', JSON.stringify(tasks));
			tableRow.innerHTML = '';
			this.dateValue.value = '';
			this.addNote.value = '';

			tasks.forEach(element => {
				return tableRow.innerHTML += `
					<div class="table-column">
						<div class="table-text">
							<span class="table-round"></span>
							<span class="input-note">${element.description}</span>
						</div>
						<div class="column">
							${element.date}
							${now.toLocaleTimeString()}
							<button class="table-delete">Delete</button>
							<button class="table-edit">Edit</button>
						</div>						
					</div>`;
			})

		});

	}

	initElements() {
		this.tableForm = document.querySelector('#table-form');
		this.dateValue = document.querySelector('#dateValue');
		this.addNote = document.querySelector('#addNote');
		this.checkInput = document.querySelector('.form-check-input');
		this.addBtn = document.querySelector('#addBtn');
		this.tableRow = document.querySelector('#tableRow');

	}
}

const noteInfo = new Notes;
noteInfo.initMethods();



