'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateAccaunt = function () {
	function CreateAccaunt() {
		_classCallCheck(this, CreateAccaunt);

		this.initElements();
	}

	_createClass(CreateAccaunt, [{
		key: 'initMethods',
		value: function initMethods() {
			this.createAcc();
			this.checkInputs();
			this.validLogin();
			this.validPassword();
		}
	}, {
		key: 'validLogin',
		value: function validLogin(login) {
			var re = /^[a-z0-9_-]{5,16}$/;
			return re.test(String(login).toLowerCase());
		}
	}, {
		key: 'validPassword',
		value: function validPassword(password) {
			var rePass = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
			return rePass.test(String(password));
		}
	}, {
		key: 'createAcc',
		value: function createAcc() {
			var _this = this;

			this.form.addEventListener('submit', function (e) {
				e.preventDefault();

				_this.checkInputs();

				if (_this.createPass.value !== _this.passwordConfirm.value) {
					_this.passwordConfirm.classList.add('error');
					return false;
				}

				_this.showPassword();

				window.location.href = "index.html";
			});
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
		key: 'showPassword',
		value: function showPassword() {
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
	}, {
		key: 'initElements',
		value: function initElements() {
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
	}]);

	return CreateAccaunt;
}();

exports.CreateAccaunt = CreateAccaunt;