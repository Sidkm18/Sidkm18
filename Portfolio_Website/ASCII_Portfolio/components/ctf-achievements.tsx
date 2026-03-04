interface CTFAchievementsProps {
  data: {
    ctfs: Array<{
      title: string
      date: string
      description: string
    }>
  }
}

export default function CTFAchievements({ data }: CTFAchievementsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="ctf-achievements">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ CTF & ACHIEVEMENTS ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="space-y-3">
          {data.ctfs?.map((achievement, index) => (
            <div
              key={index}
              className="border border-border bg-card hover:border-accent transition-colors duration-300 p-4 md:p-6"
            >
              <div className="font-mono text-xs md:text-sm">
                <div className="text-foreground font-semibold">
                  <span className="text-accent">█</span> {achievement.title}
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  {achievement.date}
                </div>
                <div className="text-muted-foreground mt-2 text-xs">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
