"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DashboardPage() {
  const router = useRouter();

  // Funções para navegar para cada seção
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Logo no topo */}
      <div className="mb-10">
        <Image
          src="/LogoNutrana.svg" // Substitua pelo caminho correto da sua logo
          alt="NutriPlan Logo"
          width={150}
          height={150}
          className="rounded-full bg-green-500 p-4 shadow-lg"
        />
      </div>

      {/* Grade de opções */}
      <div className="grid grid-cols-2 gap-5 w-full max-w-md">
        {/* Dashboard */}
        <button 
          onClick={() => navigateTo('/dashboard')}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="text-green-500 text-3xl mb-2">
            <i className="fas fa-chart-line"></i>
          </div>
          <span className="font-semibold text-gray-700">Dashboard</span>
        </button>

        {/* Plan de Comidas */}
        <button 
          onClick={() => navigateTo('/meal-plan')}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="text-green-500 text-3xl mb-2">
            <i className="fas fa-utensils"></i>
          </div>
          <span className="font-semibold text-gray-700">Plan de Comidas</span>
        </button>

        {/* Progreso */}
        <button 
          onClick={() => navigateTo('/progress')}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="text-green-500 text-3xl mb-2">
            <i className="fas fa-chart-bar"></i>
          </div>
          <span className="font-semibold text-gray-700">Progreso</span>
        </button>

        {/* Actividad Física */}
        <button 
          onClick={() => navigateTo('/physical-activity')}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="text-green-500 text-3xl mb-2">
            <i className="fas fa-running"></i>
          </div>
          <span className="font-semibold text-gray-700">Actividad Física</span>
        </button>

        {/* Logros */}
        <button 
          onClick={() => navigateTo('/achievements')}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="text-green-500 text-3xl mb-2">
            <i className="fas fa-trophy"></i>
          </div>
          <span className="font-semibold text-gray-700">Logros</span>
        </button>

        {/* Perfil */}
        <button 
          onClick={() => navigateTo('/profile')}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="text-green-500 text-3xl mb-2">
            <i className="fas fa-user"></i>
          </div>
          <span className="font-semibold text-gray-700">Perfil</span>
        </button>
      </div>

      {/* Rodapé opcional */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>NutriPlan © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
