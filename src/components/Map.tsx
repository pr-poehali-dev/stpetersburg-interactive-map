import { useEffect, useRef } from "react";
import { Place } from "@/lib/types";
import { MapPin } from "lucide-react";

interface MapProps {
  places: Place[];
  selectedPlace: Place | null;
  onSelectPlace: (place: Place) => void;
}

const Map = ({ places, selectedPlace, onSelectPlace }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // В реальном проекте здесь был бы код для инициализации карты
  // например с использованием Leaflet, Google Maps API и т.д.
  
  // Это эмуляция карты для демонстрации
  useEffect(() => {
    if (selectedPlace) {
      // Здесь бы происходило центрирование карты на выбранной достопримечательности
      console.log(`Центрирование карты на: ${selectedPlace.name}`);
    }
  }, [selectedPlace]);

  return (
    <div 
      ref={mapRef} 
      className="relative h-full w-full bg-accent overflow-hidden rounded-lg border border-border"
      style={{ backgroundImage: "url('/spb-map.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Плейсхолдер для карты */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4 bg-background/80 rounded-md backdrop-blur-sm max-w-md">
          <h3 className="text-lg font-medium">Интерактивная карта Санкт-Петербурга</h3>
          <p className="text-sm text-muted-foreground mt-2">
            В реальном приложении здесь была бы встроена карта с использованием Leaflet, 
            Google Maps API или другой подобной технологии.
          </p>
        </div>
      </div>
      
      {/* Маркеры на карте */}
      {places.map((place) => (
        <button
          key={place.id}
          className={`absolute group transform -translate-x-1/2 -translate-y-1/2 transition-all ${
            selectedPlace?.id === place.id ? "z-10" : "z-0"
          }`}
          style={{ 
            left: `${place.coordinates.x}%`, 
            top: `${place.coordinates.y}%`
          }}
          onClick={() => onSelectPlace(place)}
          aria-label={`Показать информацию о ${place.name}`}
        >
          <div 
            className={`flex flex-col items-center transition-all ${
              selectedPlace?.id === place.id 
                ? "scale-125" 
                : "scale-100 hover:scale-110"
            }`}
          >
            <MapPin 
              className={`h-8 w-8 ${
                selectedPlace?.id === place.id 
                  ? "text-primary" 
                  : "text-secondary group-hover:text-primary"
              }`} 
              fill={selectedPlace?.id === place.id ? "currentColor" : "none"}
            />
            {selectedPlace?.id === place.id && (
              <span className="bg-background px-2 py-1 rounded-md text-xs font-medium shadow-sm">
                {place.name}
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Map;
