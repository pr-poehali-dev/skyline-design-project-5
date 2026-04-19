export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Изобретение</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">«Судорогам — Стоп»</h3>
          <p className="text-base leading-relaxed text-gray-700">
            Ортопедическое устройство в форме бандажа для профилактики и купирования мышечных судорог нижних конечностей.
            Управляется через мобильное приложение. Работает автономно от встроенного аккумулятора.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Три режима работы</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Режим 1 — Экстренная электростимуляция</h4>
              <p className="text-gray-600 font-medium text-sm mb-1">Используется при судороге</p>
              <p className="mt-1 text-sm leading-relaxed">
                Устройство подаёт слабый электрический импульс к больной мышце. Импульс вызывает
                управляемое сокращение, которое сбивает спазм и заставляет мышцу расслабиться.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Режим 2 — Прогревание</h4>
              <p className="text-gray-600 font-medium text-sm mb-1">Профилактика перед тренировкой</p>
              <p className="mt-1 text-sm leading-relaxed">
                Регулируемый нагрев (до 50°C) расширяет капилляры, улучшает приток кислорода
                и отток метаболитов. Снижает риск судорог и растяжений.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Режим 3 — Компрессионная стабилизация</h4>
              <p className="text-gray-600 font-medium text-sm mb-1">Только в период восстановления</p>
              <p className="mt-1 text-sm leading-relaxed">
                Эластичный бандаж создаёт дозированное давление, улучшает венозный и лимфооток,
                активирует проприоцепцию — помогает ЦНС лучше контролировать мышечный тонус.
                <span className="font-bold text-[#FF2E63]"> Не использовать во время судороги!</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Приложение «Судорогам — Стоп»</h3>

          <div className="grid gap-3">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-base font-bold">Экстренная помощь</h4>
              <p className="text-sm text-gray-600">Мгновенный запуск микростимуляции одной кнопкой при судороге</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-base font-bold">Настройка параметров</h4>
              <p className="text-sm text-gray-600">Регулировка температуры нагрева и силы тока под индивидуальные потребности</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-base font-bold">Профилактика</h4>
              <p className="text-sm text-gray-600">Функция «Улучшение микроциркуляции» для подготовки мышц перед тренировкой или пробежкой</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
