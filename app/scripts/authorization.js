class Authorization {

	constructor() {
		this.initElements();
	}

	initMethods() {
		this.validLogin();
		this.validPassword();
		this.getAuth();


	}

	validLogin(login) {
		let re = /^[a-z0-9_-]{5,10}$/;
		return re.test(String(login).toLowerCase());
	}
	validPassword(password) {
		let rePass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;
		return rePass.test(String(password));
	}

	getAuth() {
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			this.checkInputs();
			this.getLocal();


		});

	};

	getLocal() {
		let loginInput = this.login.value;
		let pass = this.password.value;

		let user = {
			login: loginInput,
			password: pass
		}

		let arr = JSON.parse(localStorage.getItem('users')) || [];
		arr.push(user);
		localStorage.setItem('users', JSON.stringify(arr));

		if (localStorage.getItem('users') !== null) {
			this.render('index.html');

		}

	}

	render(link) {
		window.location.href = link;

	}

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

	initElements() {
		this.form = document.querySelector('.reg-form');
		this.input = document.querySelectorAll('input');
		this.regFormAuth = document.querySelector('#reg-form-auth');
		this.login = document.querySelector('#reg-login');
		this.password = document.querySelector('#reg-password');
		this.btnSubmit = document.querySelector('#reg-submit');
		this.regLinkAuth = document.querySelector('#reg-link-acc');
	};
}


export { Authorization };

