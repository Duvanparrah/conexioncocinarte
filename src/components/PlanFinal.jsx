import React from "react";

export default function Planfinal() {
  // Card Component
  const Card = ({ children, className = "" }) => {
    return (
      <div className={`bg-white shadow-md rounded-2xl ${className}`}>
        {children}
      </div>
    );
  };

  // CardContent Component
  const CardContent = ({ children, className = "" }) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
  };

  // Progress Component
  const Progress = ({ value, className = "" }) => {
    return (
      <div className={`relative w-full h-2 bg-gray-200 rounded-full ${className}`}>
        <div
          className="absolute h-full bg-green-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="p-4 grid gap-4">
      {/* Daily Summary */}
      <Card className="p-4">
        <CardContent>
          <div className="grid grid-cols-3 text-center gap-4">
            <div>
              <p className="font-bold">Carbohidratos</p>
              <p>202 g</p>
            </div>
            <div>
              <p className="font-bold">Proteínas</p>
              <p>144 g</p>
            </div>
            <div>
              <p className="font-bold">Grasas</p>
              <p>68 g</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>Consumo diario de agua: 2.8 litros por día</p>
          </div>
        </CardContent>
      </Card>

      {/* Meal Plan for Breakfast */}
      <Card className="p-4">
        <CardContent>
          <h2 className="text-xl font-bold text-center">Desayuno</h2>
          <div className="flex justify-between items-center my-4">
            <div>
              <p className="font-bold">495 kcal</p>
              <p>20 P</p>
              <p>52.5 C</p>
              <p>14.5 G</p>
            </div>
            <div className="flex-1 px-4">
              <Progress value={30} className="h-2 bg-gray-200" />
            </div>
          </div>
          <div>
            <p>Puedes consumir:</p>
            <ul className="list-disc list-inside">
              <li>Pan integral (2 rebanadas)</li>
              <li>Aguacate (1/4 pieza, aproximadamente 50 g)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Progress Circles */}
      <div className="flex justify-around items-center py-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
              index === 4 ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}