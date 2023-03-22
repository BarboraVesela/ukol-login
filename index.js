console.log('funguju!');

const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

const formElm = document.querySelector('#login')

formElm.addEventListener('submit', (event) => {
    event.preventDefault()
    const emailInput = document.querySelector('#email')
	const email = emailInput.value

    const passwordInput = document.querySelector('#password')
	const password = passwordInput.value

    if (password === user.password && email === user.email) {
        formElm.innerHTML = user.name + `, you are now logged in!`;
    } else {
        formElm.innerHTML += `Incorrect login details`;
        email.value = user.email //tohle mi nechce fungovat, ale nevim proc?
        password = ''
    }

})
