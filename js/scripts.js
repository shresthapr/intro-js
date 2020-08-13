



// 1. Programmatically, find out how many jobs they are having on offer
var jobs = document.querySelectorAll('.css-1vpclis.e8mreo00')
console.log('There are current ' + jobs.length + ' number of jobs on offer. ')


// 2. List all jobs on offer that contains the text Developer
jobs.forEach(function(item){
    if (item.innerText.includes('Developer')) {
        console.log(item.innerText);
    }
})

// 3. Change the color of offer that do not contain the text Developer to Red
jobs.forEach(function(item){
    if (!item.innerText.includes('Developer')) {
        item.style.color = 'red';
    }
})