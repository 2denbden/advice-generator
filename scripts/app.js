const dice = document.querySelector('.dice');
const adviceNumber = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');

const getAdvice = () => {
    const req = new XMLHttpRequest();
    const src = `https://api.adviceslip.com/advice?timestamp=${Date.now()}`

    req.addEventListener('readystatechange', () => {

        if (req.readyState === 4 && req.status === 200) {
            
            const res = JSON.parse(req.response);
            console.log(res.slip);

            adviceNumber.textContent = `Advice #${res.slip.id}`;
            advice.textContent = `${res.slip.advice}`;
        
        }else if (req.readyState === 4) {
            console.log('Could not get the data!');
        }
        })

    req.open('GET', src);
    req.send();
}

dice.addEventListener('click', getAdvice);