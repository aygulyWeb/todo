'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notes = function () {
	function Notes(tasks) {
		_classCallCheck(this, Notes);

		this.initElements();
		this.tasks = tasks;
	}

	_createClass(Notes, [{
		key: 'initMethods',
		value: function initMethods() {
			// this.getChecked();
			this.getLocal();
		}

		// getChecked() {
		// 	const tableRound = document.querySelector('.table-round');
		// 	this.addBtn.addEventListener('change', function () {
		// 		this.checkInput.checked ? tableRound.style.backgroundColor = "red" : tableRound.style.backgroundColor = "yellow";

		// 	})
		// }

	}, {
		key: 'getLocal',
		value: function getLocal(tasks) {

			!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

			function Task(date, description) {
				this.date = date;
				this.description = description;
				this.complited = false;
			}

			var now = new Date();

			this.tableForm.addEventListener('submit', function (e) {
				e.preventDefault();
				tasks.push(new Task(dateValue.value, addNote.value));
				localStorage.setItem('tasks', JSON.stringify(tasks));
				tableRow.innerHTML = '';
				this.dateValue.value = '';
				this.addNote.value = '';

				tasks.forEach(function (element) {
					return tableRow.innerHTML += '\n\t\t\t\t\t<div class="table-column">\n\t\t\t\t\t\t<div class="table-text">\n\t\t\t\t\t\t\t<span class="table-round"></span>\n\t\t\t\t\t\t\t<span class="input-note">' + element.description + '</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t\t' + element.date + '\n\t\t\t\t\t\t\t' + now.toLocaleTimeString() + '\n\t\t\t\t\t\t\t<button class="table-delete">Delete</button>\n\t\t\t\t\t\t\t<button class="table-edit">Edit</button>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t</div>';
				});
			});
		}
	}, {
		key: 'initElements',
		value: function initElements() {
			this.tableForm = document.querySelector('#table-form');
			this.dateValue = document.querySelector('#dateValue');
			this.addNote = document.querySelector('#addNote');
			this.checkInput = document.querySelector('.form-check-input');
			this.addBtn = document.querySelector('#addBtn');
			this.tableRow = document.querySelector('#tableRow');
		}
	}]);

	return Notes;
}();

var noteInfo = new Notes();
noteInfo.initMethods();