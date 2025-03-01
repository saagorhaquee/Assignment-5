const btns = document.querySelectorAll(".complate-btn")
for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];

    btn.addEventListener('click', function () {
        const assignNumber = document.getElementById('assign-number').innerText
        const convertAssignNumber = parseInt(assignNumber)
        const navNumber = document.getElementById('nav-number').innerText
        const convertNum = parseInt(navNumber)
        btn.disabled = true;
        alert('Board updated successfully')
        const remainCourse = convertAssignNumber - 1;
        const totalNavNum = convertNum + 1;
        document.getElementById('nav-number').innerText = totalNavNum

        document.getElementById('assign-number').innerText = remainCourse

        // add history 
        const history = document.getElementById('history');
        const time = document.getElementById('time').innerText
        const p = document.createElement("p");
        p.innerText = `
        you have completed the task at ${time}
        `
        history.appendChild(p);




    })
}
// time 

let now = new Date(); 
document.getElementById("time").innerText = now.toDateString();
// discover btn 
const discoverNew = document.getElementById('discover-new').addEventListener('click', function () {
    window.location.href="discover.html"
})
