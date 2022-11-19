import './style.css';

import { Observable } from 'rxjs';

/**
 * Using RxJs, create a countdown timer that is started or reset 
 * every time the cursor hovers over the red panel.  Show the countdown
 * time in the black panel.
 */
const timerEl = document.getElementById('countdown');
const resetEl = document.getElementById('reset');
timerEl.innerHTML = '100';