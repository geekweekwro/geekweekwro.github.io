(function () {
    var geekWeekApp = angular.module('geekWeekApp', []);

    geekWeekApp.controller('GeekWeekCtrl', function ($scope) {
        $scope.groups = [
            {
                'name': 'Women in Technology',
                'description': 'Women In Technology to społeczność Kobiet, które łączy jedna wspólna cecha – technologia. Celem grupy jest budowanie opinii, że Kobieta może być pasjonatką i wybitną specjalistką w swojej dziedzinie. Women In Technology to niezależna polska grupa, która powstała w 2009 roku, zrzesza Kobiety o zainteresowaniach technicznych i informatycznych, pomaga im osiągać swoje cele, organizuje warsztaty i szkolenia zwiększające kreatywność. Women In Technology liczy już ponad 130 aktywnych uczestników oraz dziesiątki wolnych słuchaczy, także mężczyzn. Każdy z nas słyszał o sytuacjach, w których Kobieta dostała mniejsze szanse zawodowe ze względu na kwestie pozamerytoryczne. Women In Technology przełamuje stereotypy, jest także niezależną grupą cenioną przede wszystkim za wiedzę.',
                'logo': 'content/witLOGO.png',
                'url': 'http://www.womenintechnology.pl',
                'age': 1
        },
            {
                'name': 'Wroc.NET',
                'description': 'Wrocławska Grupa .Net jest inicjatywą pasjonatów technologii .NET z Wrocławia i okolic. Celem grupy jest pogłębienie szeroko pojętego rozwoju własnej osoby poprzez wymianę doświadczeń, zdobywanie nowej wiedzy jak i umocnienie tej już istniejącej związanej z technologiami firmy Microsoft. Spotkania grupy są otwarte dla wszystkich, bezpłatne i odbywają się raz w miesiącu. W ramach spotkań odbywają się prelekcje, dyskusje oraz warsztaty',
                'logo': 'content/wrocnetLogo.jpg',
                'url': 'http://www.meetup.com/wrocnet/',
                'age': 2
            }
    ];

        $scope.orderGroup = 'age';

    });


}());