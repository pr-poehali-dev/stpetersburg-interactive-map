import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Place } from "@/lib/types";
import { ArrowUpRight, MapPin } from "lucide-react";

interface PlaceCardProps {
  place: Place;
  onSelect: (place: Place) => void;
  isActive: boolean;
}

const PlaceCard = ({ place, onSelect, isActive }: PlaceCardProps) => {
  return (
    <Card 
      className={`overflow-hidden transition-all hover:shadow-md ${
        isActive ? "ring-2 ring-primary shadow-lg" : ""
      }`}
    >
      <div className="aspect-video w-full relative overflow-hidden">
        <img 
          src={place.imageUrl || "/placeholder.svg"} 
          alt={place.name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        {place.category && (
          <Badge className="absolute top-2 right-2" variant="secondary">
            {place.category}
          </Badge>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="flex items-start justify-between">
          <span>{place.name}</span>
        </CardTitle>
        <CardDescription>{place.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{place.address}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => onSelect(place)}
          variant={isActive ? "default" : "outline"}
        >
          {isActive ? "Выбрано" : "Подробнее"}
          {!isActive && <ArrowUpRight className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlaceCard;
