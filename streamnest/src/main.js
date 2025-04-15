import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupLoginModal } from './loginModal.js' // ✅ import modal setup

document.querySelector('main.js').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <section id="cta">
      <h2>Join StreamNest</h2>
      <p>Create an account to start saving favorites, leaving reviews, and getting personalized recommendations.</p>
      <button>Login / Register</button>
    </section>

    <!-- Modal HTML directly in main.js for now -->
    <div id="loginModal" class="modal hidden">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h3>Login / Register</h3>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password" />
        <button>Login</button>
        <p>Don’t have an account? <a href="#">Register here</a></p>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupLoginModal() // ✅ run the modal setup after DOM is loaded
