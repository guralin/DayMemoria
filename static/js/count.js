var count = 0;
function countUp(){
    let count_space = document.getElementById('count_up');
    console.log(count);
    count++;
    count_space.innerHTML = String(count);
}
