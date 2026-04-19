export function MiniAppWritings() {
  const posts = [
    {
      title: "Как работает электростимуляция мышц",
      date: "Апр 2025",
      excerpt:
        "Разбираю принцип электростимуляции: почему слабый импульс способен мгновенно снять мышечный спазм и как это безопасно для организма.",
    },
    {
      title: "Судороги у пловцов: причины и решения",
      date: "Мар 2025",
      excerpt:
        "5 лет плавания научили меня многому. Рассказываю, почему у спортсменов возникают судороги и как моё изобретение помогает с этим бороться.",
    },
    {
      title: "Почему компрессия нельзя применять во время судороги",
      date: "Фев 2025",
      excerpt:
        "Распространённая ошибка: сдавить больное место при спазме. Объясняю, почему это опасно и в каком порядке использовать три режима бандажа.",
    },
    {
      title: "Аналоги и конкуренты: чего не хватает CrampFix",
      date: "Янв 2025",
      excerpt:
        "CrampFix — известный австралийский спрей от судорог. Сравниваю его с моим изобретением и объясняю, чем комплексный бандаж принципиально отличается.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">О проекте</h2>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black pr-4">{post.title}</h3>
              <span className="text-sm font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black whitespace-nowrap">
                {post.date}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
