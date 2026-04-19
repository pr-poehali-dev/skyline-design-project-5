export function MiniAppArt() {
  const items = [
    { title: "Бандаж «Судорогам — Стоп»", medium: "Прототип устройства", year: "2025" },
    { title: "Приложение управления", medium: "UI/UX концепт", year: "2025" },
    { title: "Режим электростимуляции", medium: "Схема работы", year: "2025" },
    { title: "Режим прогревания", medium: "Схема работы", year: "2025" },
    { title: "Компрессионная стабилизация", medium: "Схема работы", year: "2025" },
    { title: "Целевая аудитория", medium: "Инфографика", year: "2025" },
  ]

  const colors = [
    "from-[#FF2E63] to-[#FF6B9D]",
    "from-[#08D9D6] to-[#00B4D8]",
    "from-[#FF2E63] to-[#FF9A3C]",
    "from-[#6C63FF] to-[#FF2E63]",
    "from-[#08D9D6] to-[#6C63FF]",
    "from-[#FF9A3C] to-[#FF2E63]",
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Галерея</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className={`aspect-square bg-gradient-to-br ${colors[i]} border-b-[3px] border-black flex items-center justify-center`}>
              <span className="text-white font-black text-4xl">💪</span>
            </div>
            <div className="p-4">
              <h3 className="text-base font-black mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{item.medium}</p>
              <p className="text-sm font-bold">{item.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 border-[3px] border-black text-center">
        <p className="font-bold text-gray-600">Здесь появятся фотографии прототипа и схемы устройства</p>
      </div>
    </div>
  )
}
