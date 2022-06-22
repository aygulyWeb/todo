class CreateAccaunt {
	constructor() {
		this.initElements();
	}

	initMethods() {
		this.createAcc();
		this.checkInputs();
		this.validLogin();
		this.validPassword();
	}

	validLogin(login) {
		let re = /^[a-z0-9_-]{5,16}$/;
		return re.test(String(login).toLowerCase());
	}
	validPassword(password) {
		let rePass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
		return rePass.test(String(password));
	}

	createAcc() {
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();

			this.checkInputs();

			if (this.createPass.value !== this.passwordConfirm.value) {
				this.passwordConfirm.classList.add('error');
				return false;
			}

			this.showPassword();

			window.location.href = "index.html";


		})
	};

	checkInputs() {
		let emptyInputs = Array.from(this.input).filter(item => item.value === '');

		this.input.forEach(function (elem) { (elem.value === '') ? elem.classList.add('error') : elem.classList.remove('error') })

		if (emptyInputs.length !== 0) {
			console.log('inputs not field')
			return false;
		}

		if (!this.validLogin(this.login.value)) {
			this.login.classList.add('error');
			return false;
		};

		if (!this.validPassword(this.password.value)) {
			this.password.classList.add('error');
			return false;
		};
	};

	showPassword() {
		this.checkPass.addEventListener('click', function () {

			if (this.createPass.getAttribute('type') === 'password' && this.passwordConfirm.getAttribute('type') === 'password') {
				this.createPass.setAttribute('type', 'text');
				this.passwordConfirm.setAttribute('type', 'text');
			} else {
				this.createPass.setAttribute('type', 'password');
				this.passwordConfirm.setAttribute('type', 'password');

			}
		});
	}


	initElements() {
		this.login = document.querySelector('#reg-login');
		this.password = document.querySelector('#reg-password');

		this.form = document.querySelector('.reg-form');
		this.input = document.querySelectorAll('input');
		this.createFormAcc = document.querySelector('#create-form-acc');
		this.createPass = document.querySelector('#create-password');
		this.passwordConfirm = document.querySelector('#create-confirm');
		this.checkPass = document.querySelector('#create-check');
		this.btnCreate = document.querySelector('#create-create-btn');
		this.createLinkAcc = document.querySelector('#create-link-acc');
	}
}


export { CreateAccaunt };

