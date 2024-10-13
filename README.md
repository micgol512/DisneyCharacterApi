Treść zadania:
Celem pracy domowej jest wykonanie prostej aplikacji, która pobierze dane z API i wyświetli je w postaci kafelków na stronie. Klikniecie w odpowiednim miejscu w kafelek spowoduje otwarcie modala posiadającego więcej informacji na temat danej postaci. Strona będzie posiadać paginację oraz zmianę motywu z jasnego na ciemny.

Wytyczne:

1. Do ostylowania aplikacji używamy styled-components

2. Sugeruję zapoznać się z biblioteką material-ui, nie jest to element obowiązkowy, jednak może przyspieszyć prace developerskie.

3. Theming można rozwiązać na na jeden z dwóch sposobów:

   - Poprzez samodzielnie stworzony context oraz obiekt przechowujący wartości CSS.
   - Sposób opisany w dokumentacji styled-components.

4. Strona główna
   Switch do zmiany motywu umieszczamy w prawym górnym rogu aplikacji.

   - Wyświetlane karty powinny być responsywne i wypełniać dostępną przestrzeń.
   - Karta zawiera zdjęcie postaci, nazwę oraz przycisk który obsłuży otwarcie modala.
   - Paginację umieszczamy na dole strony.
   - Elementy powinny zostać wykonane estetycznie.

5. Pobieranie i wyświetlanie danych.

   - Dane pobieramy z publicznego API https://disneyapi.dev/docs
   - Cała logika biznesowa powinna zostać umieszczona w custom hookach.
   - Podczas pobierania danych dbamy o obsługę błędów.
   - W czasie gdy czekamy na dane wyświetlamy stosowny loader.

6. Paginacja

   - Paginacja powinna wyświetlać prawdziwą ilość dostępnych stron.
   - Paginacja powinna zostać wykonana w sposób estetyczny.
   - Na paginacji powinna być zaznaczona strona na której się znajdujemy.

7. Modal
   - Modal tworzymy za pomoc react portal
   - Po otwarciu modala pobieramy dane danej postaci na podstawie id.
   - Na modalu wyświetlamy więcej informacji na temat danej postaci takie jak: films, shortFilms, videoGames, tvShows. Warto zwrócić uwagę że poszczególne postaci będą znacząco różniły się od siebie ilością posiadanych informacji.
   - Wyświetlamy tylko te informacje które posiada dana postać.
   - Zdjęcie postaci na modalu powinno być okrągłe.
   - Modal zamykamy za pomocą przycisku lub klikając poza nim.
   - Modal również polega zmianie motywu
