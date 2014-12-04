(function () {
    var geekWeekApp = angular.module('geekWeekApp', []);

    geekWeekApp.controller('GeekWeekCtrl', function ($scope) {
        $scope.groups = [
            {
                'name': 'Women in Technology, WiT',
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
            },
            {
                'name': 'Wrocław Symfony Group, WSG',
                'description': 'Wrocław Symfony Group to cykliczne spotkania dla osób zainteresowanych frameworkiem Symfony. Praktycy dla praktyków oraz osób chcących zacząć swoją przygodę z Symfony. ',
                'logo': 'content/wsgLogo.png',
                'url': 'http://wsg.wroclaw.pl',
                'age': 3
            },
            {
                'name': 'Polish SQL Server User Group, PLSSUG',
                'description': 'Polish SQL Server User Group (PLSSUG) jest grupą pasjonatów systemu Microsoft SQL Server. Głównym celem jest umożliwienie jak najszerszemu gronu ludzi poznawania jednego z lepszych systemów zarządzania bazami danych oraz dzielenia się z innymi wiedzą i doświadczeniem. PLSSUG jest oficjalnym chapterem organizacji PASS (Professional Association for SQL Server) w Polsce. Nie reprezentuje firmy Microsoft, a jedynie z nią współpracuje.',
                'logo': 'content/plssugLogo.png',
                'url': 'http://plssug.org.pl/',
                'age': 4
            },
            {
                'name': 'DDD, Domian Driven Design',
                'description': 'Grupa DDD to grupa osób zainteresowana nauką oraz adaptacją Domain-Driven Design. Jej celem jest dzielenie się wiedzą, pomysłami czy doświadczeniem oraz wypromowaniem DDD we Wrocławiu.',
                'logo': 'content/DDDLogo.jpeg',
                'url': 'http://www.meetup.com/DDD-WRO/',
                'age': 5
            }
    ];

        $scope.orderGroup = 'age';
        
        $scope.partners = [
            {
                'name': 'IdeaPlace',
                'description': 'IdeaPlace to pierwsza we Wrocławiu profesjonalna przestrzeń coworkingowa dla osób przedsiębiorczych, dynamicznych i niezależnych. To biuro dla freelancerów działających w terenie. Daje możliwość wykorzystania wszystkich zalet pracy biurowej przy jednoczesnym braku zobowiązań. Dzięki profesjonalnemu sekretariatowi, nowoczesnemu zapleczu technicznemu i unikalnej, twórczej atmosferze doskonale nadaje się do indywidualnej pracy oraz korzystania z zalet pracy w zespole. IdeaPlace wykorzystuje ideę coworkingu, pozwalając tym samym w towarzystwie innych coworkerów swobodnie rozwijać każdą ideę.',
                'logo': 'content/ideaplaceLogo.png',
                'url': 'http://ideaplace.pl/'
            }
        ];

    });
    

}());