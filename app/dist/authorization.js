'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authorization = function () {
	function Authorization() {
		_classCallCheck(this, Authorization);

		this.initElements();
	}

	_createClass(Authorization, [{
		key: 'initMethods',
		value: function initMethods() {
			this.validLogin();
			this.validPassword();
			this.getAuth();
		}
	}, {
		key: 'validLogin',
		value: function validLogin(login) {
			var re = /^[a-z0-9_-]{5,10}$/;
			return re.test(String(login).toLowerCase());
		}
	}, {
		key: 'validPassword',
		value: function validPassword(password) {
			var rePass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;
			return rePass.test(String(password));
		}
	}, {
		key: 'getAuth',
		value: function getAuth() {
			var _this = this;

			this.form.addEventListener('submit', function (e) {
				e.preventDefault();
				_this.checkInputs();
				_this.getLocal();
			});
		}
	}, {
		key: 'getLocal',
		value: function getLocal() {
			var loginInput = this.login.value;
			var pass = this.password.value;

			var user = {
				login: loginInput,
				password: pass
			};

			var arr = JSON.parse(localStorage.getItem('users')) || [];
			arr.push(user);
			localStorage.setItem('users', JSON.stringify(arr));

			if (localStorage.getItem('users') !== null) {
				this.render('index.html');
			}
		}
	}, {
		key: 'render',
		value: function render(link) {
			window.location.href = link;
		}
	}, {
		key: 'checkInputs',
		value: function checkInputs() {
			var emptyInputs = Array.from(this.input).filter(function (item) {
				return item.value === '';
			});

			this.input.forEach(function (elem) {
				elem.value === '' ? elem.classList.add('error') : elem.classList.remove('error');
			});

			if (emptyInputs.length !== 0) {
				console.log('inputs not field');
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
		}
	}, {
		key: 'initElements',
		value: function initElements() {
			this.form = document.querySelector('.reg-form');
			this.input = document.querySelectorAll('input');
			this.regFormAuth = document.querySelector('#reg-form-auth');
			this.login = document.querySelector('#reg-login');
			this.password = document.querySelector('#reg-password');
			this.btnSubmit = document.querySelector('#reg-submit');
			this.regLinkAuth = document.querySelector('#reg-link-acc');
		}
	}]);

	return Authorization;
}();

exports.Authorization = Authorization;