var blacklist = {
    sites : {
        '(^|\.)twitter\.com$' : [
            '.tweet' // tweet
        ],
        '(^|\.)google\.\w*$' : [
            'li.g' // vysledok vyhladavania
        ],
        'plus.google.com' : [
            '.Tg.Sb' // post
        ]
    },
    keywords : [
        '#lastfm', '#4sq', '4sq.com', '#nikeplus', // automaticke tweety
        '\.w3schools\.com', // W3 Schools vo vysledkoch vyhladavania
        '#\w*poetry', // Hassmanove basnicky
        'hung out with' // ukoncene hangouty
    ]
}
