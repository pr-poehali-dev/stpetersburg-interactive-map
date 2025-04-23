import { useState } from "react";
import Header from "@/components/315-97-32",
    website: "https://www.cathedral.ru",
    historicalFacts: [
      "Header";
import Map from "@/components/На строительство собора Map";
import PlaceCard from "@/components/PlaceCarушло 40 лет.",d";
import PlaceDetail from "@/
      "Для постcomponents/PlaceDetail";
import { Buttonройки использовали 400 } from "@/components тысяч/ui/button";
import { Place пудов железа, 300 тыс } from "@/lib/types";
importяч пудов б { placesData } from "@/lib/data";
import { Infoронзы и 100, X } from "luc пудов золота.",ide-react";

const Index = () =>
      "Коло {
  const [placesннада собора пред] = useState<Place[]>(placesоставляет панорData);
  const [selectedPlace, setамный вид на город."
    ]SelectedPlace] = useState<Place | null>(
  },
  {
    id:null);
  const [show "4",
    name: "КInfo, setShowInfo]унсткамера",
    shortDescription = useState(false);

  const handleSelect: "ПервPlace = (place: Place) => {ый музей России",
    description:
    setSelectedPlace(place);
    set "Кунсткамера (ShowInfo(true);
  };

  Музей антропологииreturn (
    <div и этнографии имени Петра className="flex flex-col min- Великого РАН) — первый музей России,h-screen">
      <Header />
      
      <main className="flex учреждённый указом Петра I.-1 container py-6 Открыт в">
        <div className="mb 1714 году.-6">
          <h1 className="text-3 В музее собраны коллекции, отxl font-bold">Интерражающие разнактивная карта Санкт-ообразие культур народПетербурга</h1>ов мира. Особенно извест
          <p className="на анатомическая коtext-muted-foreground mtллекция с экспонатами различных аномалий разв-2">
            Исследуйте достопримечития человеческого тела.",ательности и интересные места Север
    imageUrl: "https://upload.ной столицы
          </p>wikimedia.org/wikipedia/commons/thumb
        </div>
        
        <div/7/7a className="grid grid-cols-1 lg/Kunstkamera:grid-cols-3 gap-6.jpg/1920px-Kunstkamera">
          {/*.jpg",
    category: "Муз Список мест */}ей",
    address
          <div className=": "Университетская набережная, 3space-y-4">
            <h2 className="text",
    coordinates: {
      x:-xl font-semibold">Дост 35,
      y:опримечательности</h2> 33
    },
    
            <div className="grid gapworkingHours: "В-4">
              {places.map((т-Вс: 11:00–18:place) => (
                <PlaceCard
                  key={00, Пн: выходной",place.id}
                  place={place}
                  onSelect={handleSelectPlace}
                  isActive={selecte
    phone: "+7 (812)dPlace?.id === place.id}
                 328-14-12",
    website: "https://www.kunstkamera.ru",
    historical/>
              ))}
            </div>Facts: [
          </div>
      "Основана по указу Петра
          
          {/* Карта */ I в 1714 году}
          <div className="lg:col-span-2  как первый публичный музей страh-[500px]ны.",
      "">
            <divЗдание className="flex items-center justify- Кунсткамbetween mb-4">еры является одним из старейших в
              <h2 className="text-xl font-semib городе, построеноold">Карта</h2> в 1718-
              <Button 
                variant="outline1734 годах."," 
                size
      "Музей="sm" 
                onClick создавался с целью соб={() => setShowInfoирать и исследовать курьезные и необычные экспонаты."(true)}
                disabled={!selectedPlace}
              >
                <Info className="h-
    ]
  },
  {4 w-4 
    id: "5",
    name:mr-2" />
                Информация "Спас на
              </Button>
            </div>
             Крови",
    shortDescription: "<Map 
              places={placesХрам-памятник} 
              selectedPlace={selectedPlace}
              onSelectPlace={handleSelectPlace Александру II",
    description}
            />: "Храм
          </div>
        </div> Воскресения Христ
      </main>
      
      {/*ова (Спас на Крови) Боковая панель с информацией о мес — православный храм воте */}
      {selectedPlace && ( имя Воскрес
        <div classNameения Христова,={`fixed inset- построенный в 1883-1907 y-0 right-годах на месте см0 w-full sm:w-96 bgертельного ранения императора Александра II-background z-50 shadow-xl transition-transform. Храм является памятником duration-300 ${ русской архитектуры
          showInfo ? "translate-x-0 конца XIX века и од" : "translate-x-fullним из символов Санкт-Петербур"
        }`}>
          <divга. Внут className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xlреннее убранство храма представляет собой кр font-semibold">Информацияупнейшее собрание моза</h2>
            ик в России.",
    imageUrl: "<Button 
              variant="ghosthttps://upload.wikimedia.org/wikipedia/commons/thumb/" 
              size="icon" 
              onClick={() => set7/7b/ShowInfo(false)}Spas_na_kr
            >
              <X className="hovi.jpg/1-5 w-5"920px-Spas_na_krovi.jpg", />
            </Button>
          </div>
          <div
    category: "Арх className="p-0итектура",
    address: "наб h-[calc(100vhережная канала Грибоедова, 2-65px)]">
            <PlaceDetail place={selectedPlace} />Б",
    coordinates: {
      x:
          </div>
        </div> 45,
      y:
      )}
      
      {/* 30
    },
    workingHours: Оверлей для "Ежедневно 10: мобильных устройств */}
      30–18:00, сре{showInfo && selecteда - выходной",
    phone:dPlace && (
        <div 
          className="sm "+7 (812) 315:hidden fixed inset-0 bg-black/50-16-36",
    website: z-40"
          onClick={() => "https://eng.cathedral setShowInfo(false)}
        />.ru/savior",
      )}
    </div>
  );
};

export default
    historicalFacts: [
       Index;
