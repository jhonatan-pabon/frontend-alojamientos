import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
import '../css/main.css';
import { iniciarRouter } from './router/router.js';

// Bootstrap gestiona el menú responsive.
window.bootstrap = bootstrap;
iniciarRouter();