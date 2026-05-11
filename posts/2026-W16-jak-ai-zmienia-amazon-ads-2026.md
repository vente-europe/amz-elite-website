---
title: Jak AI rozbiera Amazon Ads na części pierwsze (i co z tym zrobić w 2026)
slug: jak-ai-zmienia-amazon-ads-2026
category: Amazon PPC
excerpt: Performance+, AI Creative Studio, Rufus Sponsored Prompts, ROAS auto-bidding. Sześć frontów, na których AI w jeden rok przestawiło reklamę na Amazonie i konkretne dane, które mówią, gdzie warto się temu poddać, a gdzie absolutnie nie.
read_time: 10 min
source_url: https://www.ppcninja.com/blog/ai-amazon-advertising-2025.html
draft_date: 2026-04-15
status: draft
---

# Jak AI rozbiera Amazon Ads na części pierwsze (i co z tym zrobić w 2026)

Jeszcze osiemnaście miesięcy temu dobry specjalista od Amazon Ads był osobą, która umiała ręcznie żonglować bidami, czytać raporty Search Term Report, znała na pamięć logikę Top of Search i potrafiła w piątkowy wieczór wytłumaczyć, dlaczego ACoS skoczył w środę o trzy punkty. To była zawodowa wiedza, której nie dawało się sklonować z YouTube'a w jeden weekend, i właśnie dlatego dobrzy ludzie od PPC zarabiali tak, jak zarabiali.

Dziś ta sama wiedza zaczyna powoli przypominać umiejętność prowadzenia samochodu z manualną skrzynią biegów. Wciąż piękna, wciąż użyteczna, wciąż chętnie kupowana przez koneserów, ale coraz częściej zbędna w samochodzie, który sam zna trasę i sam zna kierowcę. Amazon w ciągu jednego roku, mniej więcej między CES 2025 a Cannes Lions 2025, przestawił swój ekosystem reklamowy na zupełnie inny silnik. Nie pisze się o tym w komunikatach prasowych krzyczących wielką czcionką, bo Amazon zwykle nie lubi wielkich ogłoszeń, woli zmieniać świat pod osłoną ciszy. Ale jeśli zerkniesz na to, co rzeczywiście dzieje się w Ad Console, w Performance+, w kreacjach generowanych przez Project Nova i w nowych Sponsored Prompts wbitych w paseczek czatu Rufusa, dostaniesz obraz reklamowego marketplace'u, który w niczym już nie przypomina tego, w którym pracowaliśmy w 2023.

To nie jest tekst na cześć AI. Jest raczej próbą inwentaryzacji: co się właściwie zmieniło, ile to kosztuje, jakie liczby już mamy z pola walki, i co z tym wszystkim ma teraz zrobić sprzedawca w Polsce, który ma dziesięć ASIN-ów w Niemczech i jeden czerwony alert na koncie, że jutro koniec budżetu.

## Sześć frontów, na których AI rozmontowało reklamę

Zamiast jednej rewolucji dostaliśmy sześć równoległych. Kilka z nich jest oczywistych nawet dla kogoś, kto loguje się do Ad Console raz w tygodniu, kilka jest na tyle subtelnych, że można je przeoczyć i potem się dziwić, dlaczego budżet zachowuje się dziwnie. Idąc po kolei: Amazon AI Creative Studio z całą rodziną generatorów, Performance+ dla brandów na DSP, Sponsored Brands Product Collections w nowej, automatycznej odsłonie, beta budgetowego auto-bidu w Sponsored Products, Rufus Sponsored Prompts jako nowy płatny format CPC w samym czacie, i wreszcie cały AMC z Ads Agentem, który pozwala dziś budować audiencje pisząc do AI po angielsku, a nie składając SQL z dokumentacji.

Każdy z tych frontów rządzi się swoją logiką, swoimi kosztami i swoimi pułapkami. I niemal każdy ma już pierwsze twarde dane z 2025 roku, które albo go ratują, albo pogrzebały, zanim zdążyliśmy go polubić.

## AI Creative Studio, czyli koniec drogich sesji zdjęciowych

Najbardziej spektakularna i jednocześnie najbardziej namacalna zmiana ze wszystkich. Amazon AI Creative Studio wyszedł z bety w drugiej połowie 2025 roku, jest darmowy, wbudowany wprost w Ad Console i napędzany rodziną modeli **Project Nova** - własnych foundation models Amazona, mającymi konkurować z OpenAI. Nazywanie go "kolejnym generatorem obrazów" jest tu trochę nie na miejscu, bo Nova nie generuje generycznych ładnych zdjęć, tylko kreacje wytrenowane na bilionach sygnałów zakupowych z wnętrza Amazona. Innymi słowy - to nie jest narzędzie do robienia "obrazków pasujących do brandu", to jest narzędzie do robienia obrazków, które konwertują, bo model wie, co konwertuje.

[ZDJĘCIE 1: AI Creative Studio, czyli koniec drogich sesji zdjęciowych]

Andy Jassy przy okazji Cannes Lions 2025 opisał tę magię w jednym zdaniu: zamiast pokazywać zegarek leżący na biurku, możesz wziąć zwykłe zdjęcie produktu i pozwolić AI animować je tak, żeby zegarek pojawił się na czyimś nadgarstku w ruchu. Nie jest to przy tym tylko marketingowa demonstracja - agencje takie jak Sequence Commerce raportują, że kreacje generowane w Studio osiągają nawet o **czterdzieści procent wyższy CTR** niż ich ręcznie produkowane odpowiedniki, i pozwalają brandom uruchamiać o osiemdziesiąt osiem procent więcej kampanii w tym samym czasie i budżecie.

[ZDJĘCIE 2: Andy Jassy]

Do tego doszedł w pierwszym kwartale 2026 roku **Creative Agent**, czyli zwykły czat, do którego mówisz: *"Zrób mi premium piętnastosekundowe wideo Sponsored Brand do moich karm dla psów, celowane w właścicieli zdrowotnie świadomych"* i Agent składa ci kampanię od koncepcji do gotowych assetów. Brzmi jak demo z konferencji, jest niestety codziennością, w której właśnie żyjemy. Przekonujący wniosek z tego wszystkiego jest taki, że jeśli wciąż płacisz agencji tysiąc euro za pojedynczy lifestyle shot, w którym dziewczyna trzyma w dłoni twoje serum, to płacisz za wartość, którą Amazon oddaje dziś za darmo. To nie znaczy, że agencje są zbędne. To znaczy, że ich rola przesuwa się z produkcji w stronę kuratorstwa.

## Performance+, czyli kiedy AI naprawdę umie targetować lepiej od ciebie

To nowy format kampanii dla brandów korzystających z Amazon DSP, który Amazon nazywa "predykcyjnym" i opisuje jako swoje najlepsze AI w aktualnej generacji. Działa to w sposób, który dla starego optymalizatora brzmi jak kapitulacja: nie ustalasz żadnych szczegółów, nie tworzysz audiencji, nie definiujesz okien czasowych. Wrzucasz cel biznesowy i własne sygnały, a Performance+ miksuje je z ekskluzywnymi danymi konsumenckimi Amazona i samodzielnie buduje to, co Amazon nazywa "bespoke predictive audiences". W praktyce algorytm scoruje każdą bid w czasie rzeczywistym, próbując oszacować, czy konkretny człowiek na Prime Video albo na amazon.com kupi w najbliższych dniach to, co reklamujesz.

[ZDJĘCIE 3: Performance+, czyli kiedy AI naprawdę umie targetować lepiej od ciebie]

To wszystko brzmiałoby jak kolejne PR-owe obietnice, gdyby nie Fiverr. Fiverr testował Performance+ jako jeden z pierwszych dużych brandów spoza klasycznego e-commerce'u i opublikował wyniki, które warto sobie zapisać: **sześćdziesiąt sześć procent niższe CPA**, siedemdziesiąt dwa procent wyższy CTR, a w skali całego portfolio Amazonu Ads agencja raportuje średnio pięćdziesiąt jeden procent poprawy w koszcie pozyskania klienta dla brandów, które przeszły na Performance+. To są liczby, które kasują dyskusję o tym, czy AI dobrze targetuje. Tak, dobrze. Nie zawsze, nie w każdej kategorii, ale w średniej z wystarczająco dużej próby - lepiej niż ręczna konfiguracja w narzędziu, w którym mamy do dyspozycji kilkanaście pól.

W listopadzie 2025 Amazon dorzucił do tego coś, co nazywa "glass-box AI" - czyli przejrzyste karty Insightów, które tłumaczą, dlaczego algorytm podjął konkretną decyzję optymalizacyjną. Z jakiej cechy demograficznej, z jakim historycznym time-to-convert, z jakim wyborem kanału. To nie jest kosmetyczna zmiana, to jest istotny ukłon w stronę advertiserów, którzy przez rok narzekali, że nie wiedzą, co algorytm robi z ich pieniędzmi. Z perspektywy zaufania - ważniejsze niż same liczby Fiverra.

## Sponsored Products na auto-bidzie, czyli pułapka, która wygląda jak prezent

Tu robi się ciekawiej, bo nie wszystko, co Amazon podaje pod sztandarem AI, jest dobre dla wszystkich. Na początku 2026 roku Amazon zaczął betatestować nową opcję bidowania w Sponsored Products, którą można nazwać **"automatyczna optymalizacja ROAS w ramach budżetu"**. W praktyce wygląda to tak, że przestajesz ustawiać bidy. Przestajesz ustawiać target ROAS. Przestajesz ustawiać multiplikatory placementów. Ustawiasz wyłącznie dzienny budżet, a algorytm Amazona w stu procentach przejmuje decyzje cenowe w czasie rzeczywistym, na każdej aukcji z osobna.

Dla dojrzałych ASIN-ów z głęboką historią konwersji, stabilnym performance i przewidywalną sezonowością - rzecz wygodna i wydajna, oszczędza tygodnie ręcznej pracy i potrafi wygrzebać marżę w miejscach, w których człowiek nie miałby cierpliwości szukać. Dla wszystkiego nowego - klasyczna pułapka. Bo skoro algorytm dyktuje bid, to ty tracisz możliwość wymuszenia placementu Top of Search, który jest absolutnie kluczowy w pierwszych tygodniach launchu, kiedy musisz zbudować ranking organiczny i zalać produkt impressions za każdą cenę. Algorytm tej logiki jeszcze nie rozumie, bo myśli wyłącznie kategoriami efektywności, a launch nie jest efektywny - launch jest inwestycją.

Praktyczna zasada brzmi więc tak: zostaw ROAS auto-bidding dla starszych, ustabilizowanych produktów, gdzie chcesz po prostu wycisnąć maksimum efficiency z dojrzałego portfela. Dla wszystkiego, co ma mniej niż sześć miesięcy historii, trzymaj się manualnych ustawień. To jedna z tych sytuacji, w których zaufanie AI dosłownie kosztuje rankingi, a rankingów nie odzyska się żadną optymalizacją po fakcie.

## Sponsored Brands Product Collections, czyli koniec ręcznej kuracji

Po cichu, bez specjalnego ogłoszenia, w styczniu 2026 Amazon przebudował format Sponsored Brands Product Collections, który dotąd był jedną z ostatnich oaz ręcznego rzemiosła reklamowego. Sprzedawcy używali go do precyzyjnego dobierania produktów do kampanii i pisania własnych nagłówków odpowiadających konkretnej grupie szukających. Po przebudowie wymagane jest minimum trzech do dziesięciu ASIN-ów w jednej kreacji, a o tym, które z nich faktycznie zobaczy konkretny shopper, decyduje już AI, na podstawie predykcji jego zachowań zakupowych. Nie ty, nie twój manager, nie agencja. Algorytm.

Reakcje branży są podzielone i, szczerze mówiąc, słusznie. Dla brandów z szerokim portfolio i wieloma wariantami ten sposób może działać świetnie, bo pozwala dynamicznie dopasowywać ofertę do różnych segmentów bez konieczności klonowania kampanii. Dla brandów z wąskim portfolio i precyzyjnie skonstruowanym storytellingiem - to jak wpuszczenie kogoś obcego do twojego storefrontu, żeby przesuwał meble. Tu naprawdę warto zrobić własny test, zanim cokolwiek się powie, bo wynik zależy od kategorii, kraju i konkretnego produktu, a nie od ogólnej teorii.

## Rufus Sponsored Prompts, czyli najtańszy CPC w internecie i prawie zero wolumenu

Najbardziej intrygujący ze wszystkich nowych formatów wyszedł z bety **25 marca 2026 roku** i działa już dziś jako pełnoprawny kanał reklamowy. Rufus Sponsored Prompts to płatne podpowiedzi, które pojawiają się w samym czacie z asystentem - kupujący widzi sugerowany prompt w stylu *"Czy [twój brand] ma opcję bez cukru?"*, klika i trafia w kontekst rozmowy z Rufusem, gdzie twój produkt jest częścią odpowiedzi. Wszystkie aktywne kampanie SP i SB zostały automatycznie zapisane do tego formatu, więc nawet jeśli nie wiedziałeś, że istnieje, prawdopodobnie już z niego korzystasz.

I tu dopiero zaczyna się ciekawie. Brytyjski brand Paladone, który był jednym z pierwszych poważnych testerów, opublikował dane z pierwszego kwartału 2026 i są one tak skrajne, że trzeba je przeczytać dwa razy. Paladone w tym samym czasie, na tych samych produktach, zarobił **pięćset tysięcy** kliknięć z klasycznych kampanii Sponsored Products i zaledwie **osiemdziesiąt osiem** kliknięć z Rufus Sponsored Prompts. Wolumen jest więc, jak by to powiedzieć dyplomatycznie, śladowy. Ale jest jeszcze druga strona równania: średni CPC w Rufus Sponsored Prompts wynosił u Paladone'a około **trzydzieści jeden centów**, podczas gdy klasyczny CPC bił w siedemdziesiąt centów. Konwersja? Te osiemdziesiąt osiem kliknięć konwertowało się dramatycznie wyżej, bo użytkownik, który już rozmawia z Rufusem, jest o sześćdziesiąt procent bardziej skłonny do zakupu niż użytkownik z klasycznego search.

Co z tego wynika dla zwykłego sprzedawcy? Nie chodzi tu jeszcze o wolumen, tylko o dane. Rufus Sponsored Prompts to dziś najtańsza, najszybsza i najbardziej legalna metoda dowiedzenia się, jakie pytania kupujący zadają o twój produkt w naturalnym języku. Wydaj na nie pięćset dolarów na pięciu top ASIN-ach, ściągnij Search Query Report, zobacz dokładnie, jakie konwersacyjne pytania wyzwoliły twoje reklamy - i wykorzystaj te zdania jako materiał wsadowy do przepisania bullet pointów, A+ Content i sekcji Q&A. To jest w gruncie rzeczy najtańsze badanie zachowań kupujących, jakie kiedykolwiek było dostępne na Amazonie.

## A co z polskim sprzedawcą w tym całym karnawale

Tu jest bardzo dobra wiadomość, której na ogół nie spodziewamy się od Amazona, kiedy tematem jest Polska. Po raz pierwszy od wielu lat Amazon nie traktuje rynku polskiego jak rynku drugiej kategorii, do którego nowości docierają z dwunastomiesięcznym opóźnieniem. **Performance+, AMC z Ads Agentem, glass-box reporting i Unified Conversion Path** są w Polsce dostępne od pierwszego dnia, na tych samych warunkach co w Niemczech czy Wielkiej Brytanii. To kolosalna zmiana, bo oznacza, że polscy sprzedawcy mogą dziś korzystać z enterprise'owych narzędzi, na które wcześniej trzeba było zatrudniać data analystów ze znajomością SQL.

Jest jednak druga strona medalu. **AI Creative Studio jest na rynku polskim w trybie ograniczonego dostępu**, w jednym koszyku z Holandią i Belgią. Polscy sprzedawcy mają dziś dostęp do podstawowych funkcji generowania obrazów, ale zaawansowane multi-format Creative Agent funkcje wciąż są dla rynku PL w fazie beta. Praktyczne workaroundy, jeśli sprzedajesz cross-border, to logowanie się do narzędzia przez portal niemiecki albo brytyjski - tam masz pełną wersję, a wyniki możesz wykorzystywać na wszystkich rynkach.

Druga rzecz, o której wstydliwie się milczy, ale która jest istotna dla każdego, kto produkuje reklamy w języku polskim. AI generujące copy w językach Tier 1 - niemieckim, francuskim, hiszpańskim, włoskim - jest dziś świetne. Produkuje teksty, które brzmią jak napisane przez native speakera z dobrym wyczuciem branży. AI generujące copy w języku polskim, niestety, nadal kuleje - polskie deklinacje, koniugacje, aspekty czasowników i ogólna gramatyczna karuzela są dla modelu po prostu trudniejsze do okiełznania niż prosta angielska składnia. Praktycznie oznacza to, że jeśli generujesz polskie nagłówki Sponsored Brands przez AI, **musisz je przeczytać i poprawić ręcznie**, zanim opublikujesz. Nie ma tu jeszcze drogi na skróty.

## Co właściwie z tym wszystkim zrobić w tym miesiącu

Jeśli chcesz wyjść z tego tekstu z konkretnym planem działania, a nie tylko z listą nowych terminów do wyguglowania, weź ten:

- **Włącz Performance+** dla wszystkich brandów, które mają dostęp do DSP i jakikolwiek sensowny budżet mediowy. Liczby Fiverra są na tyle przekonujące, a fakt, że Polska ma pełen dostęp od dnia pierwszego, na tyle wyjątkowy, że nieskorzystanie z tego okna jest dziś po prostu marnowaniem przewagi konkurencyjnej.
- **Wejdź do AI Creative Studio** nawet jeśli nie masz w planach wymiany całej grafiki. Wygeneruj sobie pięć lifestyle wariantów dla swoich top 3 ASIN-ów, wrzuć je w A/B test ze starymi kreacjami, zobacz różnicę. Jeśli okaże się, że nowe konwertują lepiej, masz darmowy upgrade. Jeśli starsze zostały, masz pewność, że twój zespół kreatywny wciąż dowozi.
- **Zostaw nową betę ROAS auto-bidu w spokoju przy launchu nowych produktów.**
  Używaj jej tylko dla dojrzałych ASIN-ów z głęboką historią, nigdy w pierwszych trzech do sześciu miesięcy życia produktu. To jest pułapka, która nie wygląda na pułapkę, dopóki nie stracisz rankingu.
- **Wydaj kontrolowane pięćset dolarów na Rufus Sponsored Prompts** na swoich pięciu najmocniejszych ASIN-ach. Nie chodzi o wolumen, chodzi o to, żeby zobaczyć w Search Query Report, jakimi pytaniami konwersacyjnymi kupujący docierają do twojego produktu. To jest najtańsza ankieta klientów, na jaką kiedykolwiek wpadniesz.
- **Jeśli masz ogarnięty zespół data,** wejdź w AMC Ads Agent i zacznij budować audiencje przez język naturalny. Pierwsze, co zrób: użytkownicy, którzy widzieli twoją reklamę DSP w ostatnich trzydziestu dniach, ale nie kupili. Druga: kupujący twojego konkurenta, którzy ostatnio przeglądali twoją kategorię. Te dwie grupy pokażą ci, jak działa nowy AMC, i prawie zawsze są mocno niedopalonym potencjałem.
- **Polskie copy generowane przez AI - zawsze przepuszczaj przez ludzkie oko.** Niemieckie, francuskie, włoskie, hiszpańskie zwykle nie wymagają poprawek poza drobnymi szlifami. Polskie wymagają redakcji. Dopóki Amazon tego nie naprawi, traktuj generator jako szybki pierwszy draft, nie jako gotowy produkt do publikacji.

Najtrudniejsze w tym wszystkim nie jest poznanie nowych narzędzi - bo każde z nich ma już setki tutoriali na YouTubie i ćwierć miliona postów na LinkedIn. Najtrudniejsze jest pogodzenie się z tym, że logika, którą doszlifowałeś przez ostatnie pięć lat, przestaje być twoją przewagą konkurencyjną. Performance+ targetuje lepiej niż ty, AI Creative Studio robi grafiki szybciej niż ty, ROAS auto-bidding optymalizuje ASIN-y, których nie ruszałbyś pewnie z lenistwa. Nie ma sensu z tym walczyć, bo to jest walka, której nie da się wygrać.

Sens jest w czymś innym. Sens jest w tym, żeby przesunąć siebie samego z roli operatora w rolę reżysera. AI nie wie, czy twoja marka chce być postrzegana jako premium czy jako value-for-money. AI nie wie, że twój launch zaplanowany na czerwiec musi koniecznie wyprzedzić launch konkurenta zaplanowany na maj. AI nie wie, że masz na magazynie sześć tysięcy sztuk, które trzeba sprzedać do sierpnia, bo inaczej pójdą jako stranded inventory. To wszystko wciąż siedzi w głowie sprzedawcy, i w 2026 roku to właśnie ta wiedza jest tym, co dzieli marki, które rosną od tych, które stoją w miejscu.

[CTA]

---

## 🎨 Nano Banana thumbnail prompt

```
Photorealistic editorial illustration for a blog post about AI transforming Amazon advertising and PPC management.
16:9 aspect ratio. Modern, clean, professional.
Color palette dominated by deep navy (#0f172a), warm red accent (#dc2626), and clean white space.
A minimalist dark desk with a glowing semi-transparent dashboard floating above it, showing abstract bid graphs and chart curves rising upward. Several smaller holographic creative-asset cards (suggesting product images) orbit gently around the central dashboard, all bathed in warm red rim light from one side. Hints of conversational chat bubbles dissolving into data nodes at the edge of the frame.
Soft natural lighting, shallow depth of field, crisp detail.
No text, no logos, no watermarks, no people's faces in foreground.
Magazine-cover quality, shot on 50mm lens.
```

## 🖼️ In-article image suggestions

Source has only one thumbnail (`blog1.webp`) - nothing to download. Run these Google Images queries and grab what fits:

1. `"Amazon AI Creative Studio" interface screenshot 2025 2026` - actual screenshot of the Creative Studio UI to anchor section 1
2. `"Amazon Performance+" Insight Cards dashboard screenshot` - the glass-box reporting visual for section on Performance+
3. `"Rufus Sponsored Prompts" Amazon ad example mobile` - to illustrate what the new Rufus CPC ads actually look like
4. `Amazon Sponsored Brands Product Collections new format 2026` - for the SB section
5. `Andy Jassy Cannes Lions 2025 AI advertising` - press photo for the Jassy quote anchor

Save as `assets/img/blog/jak-ai-zmienia-amazon-ads-2026-[1..5].jpg` if found.

## 📋 Ready-to-publish checklist

- [x] Review draft in Obsidian, tweak Polityka voice where it reads stiff
- [x] Decide on final title (current proposal above - open to alternatives)
- [x] Generate thumbnail with Nano Banana using the prompt above
- [x] Save thumbnail as `assets/img/blog/jak-ai-zmienia-amazon-ads-2026.png`
- [x] Optionally add 2-3 in-article images from the search queries above
- [ ] Say "opublikuj post jak-ai-zmienia-amazon-ads-2026" to hand off to `/new-blog-post`

## 📚 Research sources used (beyond the PPC Ninja article)

- sequencecommerce.com - AI Creative Studio 40% CTR data, Project Nova background
- youtube.com (Amazon Ads channel) - Creative Agent demo, Andy Jassy Cannes quote on watch animation
- novadata.io - Sponsored Brands Product Collections overhaul Jan 2026, ROAS auto-bidding beta analysis
- billiondollarsellers.com, noticemesenpai.com - Paladone case study (88 vs 500k clicks, $0.31 vs $0.70 CPC)
- ppc.land - Performance+ glass-box reporting Nov 2025, Fiverr 66% CPA case
- amazon.com (advertising blog) - official Performance+ rollout, Ads Agent on AMC, Sponsored TV unified reporting
- forbes.com, indiatimes.com - Doug Herrington NRF "biggest tech revolution since internet" quote
- innels.com, sequencecommerce.com (EU rollout posts) - regional availability matrix for Performance+, AMC, Creative Studio across UK/DE/FR/IT/ES/PL
- stape.io - Sponsored Display AI bidding EU coverage
