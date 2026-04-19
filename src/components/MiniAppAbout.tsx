export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Обо мне</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Привет, я Маша!</h3>
          <p className="text-lg leading-relaxed mb-4">
            Мне 14 лет, я живу в городе Заполярный Мурманской области. Занимаюсь плаванием уже более 5 лет —
            и именно из спорта родилась идея моего изобретения.
          </p>
          <p className="text-lg leading-relaxed">
            Я разработала ортопедическое устройство «Судорогам — Стоп» — умный бандаж, который помогает
            спортсменам и людям с проблемами нижних конечностей справляться с мышечными судорогами
            быстро и эффективно.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Моя целевая аудитория</h3>
          <div className="flex flex-wrap gap-2">
            {["Спортсмены", "Пловцы", "Варикоз", "Реабилитация", "Маломобильные пациенты", "Нарушения ЦНС", "Профилактика"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-3">Почему я создала это устройство?</h3>
          <p className="text-lg leading-relaxed">
            Судороги в мышцах ног — частая проблема у спортсменов во время тренировок. Существующие аналоги
            (например, спрей CrampFix) только облегчают боль, но не предотвращают судорогу и не устраняют её
            причину. Моё устройство — первое комплексное решение, объединяющее три метода воздействия в одном бандаже.
          </p>
        </div>
      </div>
    </div>
  )
}
