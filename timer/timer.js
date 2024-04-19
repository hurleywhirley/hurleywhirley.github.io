function timer() {
	Notification.requestPermission().then(function (result) {
	                if (result === 'granted') {
	                    new Notification('Notification Title', {
	                        body: 'Notification Body'
	                    });
	                }
	            }); 

const audio = new Audio('chime.mp3');
const text = document.getElementById('text');

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Heel Cord Strech (right)';
}, 0);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Heel Cord Strech (left)';
}, 30000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Heel Cord Strech (right)';
}, 60000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Heel Cord Strech (left)';
}, 90000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Standing Quadriceps Stretch (right)';
}, 120000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Standing Quadriceps Stretch (left)';
}, 150000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Standing Quadriceps Stretch (right)';
}, 180000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Standing Quadriceps Stretch (left)';
}, 210000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'transition';
}, 240000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Supine Hamstring Stretch (right)';
}, 250000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Supine Hamstring Stretch (left)';
}, 280000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Supine Hamstring Stretch (right)';
}, 310000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Supine Hamstring Stretch (left)';
}, 340000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Bridge';
}, 370000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Bird Dog';
}, 490000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'transition';
}, 590000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Squats';
}, 600000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Calf Raises (right)';
}, 670000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Calf Raises (left)';
}, 720000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'transition';
}, 770000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Leg Extensions';
}, 790000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'transition';
}, 940000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Straight-Leg Raises (right)';
}, 955000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Straight-Leg Raises (left)';
}, 1025000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'transition';
}, 1095000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Straight-Leg Raises (prone)';
}, 1100000);

setTimeout(() => {
audio.currentTime = 0;
audio.play();
text.textContent = 'Done';
}, 1200000);

}
