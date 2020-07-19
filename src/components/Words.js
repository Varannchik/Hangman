let types_beer = [
    'pilsner',
    'lager',
    'bock',
    'ale',
    'porter',
    'stout',
    'wheat',
    'sour',
    'gueuze',
    'lambic',
    'helles',
    'schwarzbier',
    'quadrupel',
    'tripel',
    'dubbel',
    'saison',
    'witbier',
    'weisse'
]

function randomWord(){
    return types_beer[Math.floor(Math.random() * types_beer.length)]
}

export {randomWord}