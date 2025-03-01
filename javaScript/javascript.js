const btns = document.querySelectorAll(".complate-btn")
for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    // console.log(card)
    btn.addEventListener('click', function () {
        const assignNumber = document.getElementById('assign-number').innerText
        const convertAssignNumber= parseInt(assignNumber)
        const navNumber = document.getElementById('nav-number').innerText
        const convertNum= parseInt(navNumber)
        btn.disabled = true;
        alert('well Done')
        const remainCourse = convertAssignNumber - 1;
        const totalNavNum = convertNum + 1;
        document.getElementById('nav-number').innerText = totalNavNum

        document.getElementById('assign-number').innerText = remainCourse
        console.log(typeof convertAssignNumber)




    })
}